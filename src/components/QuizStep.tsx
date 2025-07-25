import React from 'react';
import { QuizQuestion } from '../data/questions';
import { Check, ChevronRight, ArrowLeft } from 'lucide-react';

interface QuizStepProps {
  question: QuizQuestion;
  selectedAnswers: string[];
  onAnswerSelect: (answerId: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
  currentStep: number;
  totalSteps: number;
}

export function QuizStep({
  question,
  selectedAnswers,
  onAnswerSelect,
  onNext,
  onBack,
  canProceed,
  currentStep,
  totalSteps
}: QuizStepProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress Bar */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <span className="text-sm font-medium text-gray-600">Skin Analysis</span>
          <div className="w-10" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-black">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-black h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex flex-col justify-center p-6 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">
            {question.question}
          </h2>
          {question.subtitle && (
            <p className="text-gray-600 text-sm">
              {question.subtitle}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option) => {
            const isSelected = selectedAnswers.includes(option.id);
            const isMultiple = question.type === 'multiple';

            return (
              <button
                key={option.id}
                onClick={() => onAnswerSelect(option.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  isSelected
                    ? 'border-black bg-gray-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-left font-medium text-black">
                      {option.text}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  )}
                  {!isSelected && isMultiple && (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-200 transform ${
            canProceed
              ? 'bg-black text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl hover:bg-gray-800'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <span>Continue</span>
            <ChevronRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
}