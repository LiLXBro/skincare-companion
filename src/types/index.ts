export interface QuizAnswer {
  questionId: string;
  answer: string | string[];
}

export interface SkinProfile {
  skinType: 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';
  concerns: string[];
  environment: string;
  routine: 'beginner' | 'intermediate' | 'advanced';
  age: string;
  lifestyle: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'cleanser' | 'moisturizer' | 'serum' | 'sunscreen' | 'treatment';
  description: string;
  keyIngredients: string[];
  price: number;
  image: string;
  skinTypes: string[];
  concerns: string[];
  routineStep: number;
}

export interface Recommendation {
  products: Product[];
  routine: {
    morning: Product[];
    evening: Product[];
  };
  reasoning: string[];
}