import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizStep } from './components/QuizStep';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { RoutineBuilder } from './components/RoutineBuilder';
import { quizQuestions } from './data/questions';
import { generateSkinProfile, generateRecommendations } from './utils/recommendations';
import { QuizAnswer, SkinProfile, Recommendation } from './types';

type AppState = 'welcome' | 'quiz' | 'loading' | 'results' | 'routine-builder';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [skinProfile, setSkinProfile] = useState<SkinProfile | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  // Check URL for routine builder access
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('routine-builder') === 'true' || window.location.pathname.includes('routine-builder')) {
      setCurrentState('routine-builder');
    }
  }, []);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswers = answers.find(a => a.questionId === currentQuestion?.id)?.answer || [];
  const selectedAnswers = Array.isArray(currentAnswers) ? currentAnswers : [currentAnswers].filter(Boolean);

  const handleStart = () => {
    setCurrentState('quiz');
  };

  const handleRoutineBuilder = () => {
    setCurrentState('routine-builder');
  };

  const handleBackFromRoutineBuilder = () => {
    setCurrentState('welcome');
    // Clear URL parameters
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  const handleBackFromQuiz = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setCurrentState('welcome');
      setCurrentQuestionIndex(0);
      setAnswers([]);
    }
  };

  const handleAnswerSelect = (answerId: string) => {
    const existingAnswerIndex = answers.findIndex(a => a.questionId === currentQuestion.id);
    let newAnswer: QuizAnswer;

    if (currentQuestion.type === 'multiple') {
      const currentSelection = selectedAnswers;
      const newSelection = currentSelection.includes(answerId)
        ? currentSelection.filter(id => id !== answerId)
        : [...currentSelection, answerId];
      
      newAnswer = {
        questionId: currentQuestion.id,
        answer: newSelection
      };
    } else {
      newAnswer = {
        questionId: currentQuestion.id,
        answer: answerId
      };
    }

    if (existingAnswerIndex >= 0) {
      const newAnswers = [...answers];
      newAnswers[existingAnswerIndex] = newAnswer;
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, newAnswer]);
    }
  };

  const canProceed = () => {
    if (currentQuestion.type === 'multiple') {
      return selectedAnswers.length > 0;
    }
    return selectedAnswers.length === 1;
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed, process results
      setCurrentState('loading');
      
      // Simulate processing time
      setTimeout(() => {
        const profile = generateSkinProfile(answers);
        const recommendations = generateRecommendations(profile);
        
        setSkinProfile(profile);
        setRecommendation(recommendations);
        setCurrentState('results');
      }, 3000);
    }
  };

  const handleRestart = () => {
    setCurrentState('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSkinProfile(null);
    setRecommendation(null);
  };

  // Update document title based on current state
  useEffect(() => {
    const titles = {
      welcome: 'minimalist - Skincare Analysis',
      quiz: `Question ${currentQuestionIndex + 1} - minimalist`,
      loading: 'Analyzing Your Skin - minimalist',
      results: 'Your Results - minimalist',
      'routine-builder': 'Build Your Routine - minimalist'
    };
    document.title = titles[currentState];
  }, [currentState, currentQuestionIndex]);

  if (currentState === 'welcome') {
    return <WelcomeScreen onStart={handleStart} onRoutineBuilder={handleRoutineBuilder} />;
  }

  if (currentState === 'quiz') {
    return (
      <QuizStep
        question={currentQuestion}
        selectedAnswers={selectedAnswers}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNext}
        onBack={handleBackFromQuiz}
        canProceed={canProceed()}
        currentStep={currentQuestionIndex + 1}
        totalSteps={quizQuestions.length}
      />
    );
  }

  if (currentState === 'loading') {
    return <LoadingScreen onBack={() => setCurrentState('quiz')} />;
  }

  if (currentState === 'results' && skinProfile && recommendation) {
    return (
      <ResultsScreen
        skinProfile={skinProfile}
        recommendation={recommendation}
        onRestart={handleRestart}
        onRoutineBuilder={handleRoutineBuilder}
      />
    );
  }

  if (currentState === 'routine-builder') {
    return <RoutineBuilder onBack={handleBackFromRoutineBuilder} />;
  }

  return null;
}

export default App;