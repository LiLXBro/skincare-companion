export interface QuizQuestion {
  id: string;
  type: 'single' | 'multiple' | 'scale' | 'image';
  question: string;
  subtitle?: string;
  options: {
    id: string;
    text: string;
    emoji?: string;
    image?: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'skin-type',
    type: 'single',
    question: 'How does your skin usually feel?',
    subtitle: 'Think about your T-zone and cheeks',
    options: [
      { id: 'oily', text: 'Oily all over', emoji: '✨' },
      { id: 'dry', text: 'Tight and dry', emoji: '🏜️' },
      { id: 'combination', text: 'Oily T-zone, dry cheeks', emoji: '🌓' },
      { id: 'sensitive', text: 'Easily irritated', emoji: '🌸' },
      { id: 'normal', text: 'Balanced and comfortable', emoji: '😌' }
    ]
  },
  {
    id: 'concerns',
    type: 'multiple',
    question: 'What are your main skin concerns?',
    subtitle: 'Select all that apply',
    options: [
      { id: 'acne', text: 'Breakouts & acne', emoji: '🔴' },
      { id: 'aging', text: 'Fine lines & aging', emoji: '⏰' },
      { id: 'dark-spots', text: 'Dark spots & pigmentation', emoji: '☀️' },
      { id: 'dullness', text: 'Dullness & uneven texture', emoji: '✨' },
      { id: 'redness', text: 'Redness & irritation', emoji: '🌹' },
      { id: 'pores', text: 'Large pores', emoji: '🕳️' },
      { id: 'dehydration', text: 'Dehydration', emoji: '💧' }
    ]
  },
  {
    id: 'environment',
    type: 'single',
    question: 'What\'s your environment like?',
    subtitle: 'This affects your skin needs',
    options: [
      { id: 'humid', text: 'Humid & tropical', emoji: '🌴' },
      { id: 'dry', text: 'Dry & arid', emoji: '🏜️' },
      { id: 'urban', text: 'Urban & polluted', emoji: '🏢' },
      { id: 'cold', text: 'Cold & windy', emoji: '❄️' },
      { id: 'temperate', text: 'Mild & balanced', emoji: '🌤️' }
    ]
  },
  {
    id: 'routine-level',
    type: 'single',
    question: 'How\'s your current routine?',
    subtitle: 'Be honest - we\'re here to help!',
    options: [
      { id: 'beginner', text: 'What routine? 🤷‍♀️', emoji: '🌱' },
      { id: 'basic', text: 'Cleanser + moisturizer', emoji: '📱' },
      { id: 'intermediate', text: 'I have 3-5 products', emoji: '📚' },
      { id: 'advanced', text: 'Multi-step skincare lover', emoji: '🧪' }
    ]
  },
  {
    id: 'age',
    type: 'single',
    question: 'What\'s your age range?',
    subtitle: 'Different decades, different needs',
    options: [
      { id: 'teens', text: 'Under 18', emoji: '🌸' },
      { id: 'early-20s', text: '18-24', emoji: '🌟' },
      { id: 'mid-20s', text: '25-29', emoji: '💫' },
      { id: 'early-30s', text: '30-34', emoji: '✨' },
      { id: 'mid-30s+', text: '35+', emoji: '👑' }
    ]
  },
  {
    id: 'lifestyle',
    type: 'multiple',
    question: 'What describes your lifestyle?',
    subtitle: 'Select all that apply',
    options: [
      { id: 'makeup', text: 'Daily makeup wearer', emoji: '💄' },
      { id: 'active', text: 'Very active/workout often', emoji: '🏃‍♀️' },
      { id: 'stressed', text: 'High stress levels', emoji: '😤' },
      { id: 'travel', text: 'Travel frequently', emoji: '✈️' },
      { id: 'screen-time', text: 'Lots of screen time', emoji: '📱' },
      { id: 'night-owl', text: 'Night owl', emoji: '🦉' },
      { id: 'budget-conscious', text: 'Budget-conscious', emoji: '💰' }
    ]
  }
];