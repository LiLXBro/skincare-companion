import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
  onRoutineBuilder: () => void;
}

export function WelcomeScreen({ onStart, onRoutineBuilder }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Sparkles size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">minimalist</h1>
          <p className="text-gray-600">science-backed skincare</p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-10">
          <h2 className="text-2xl font-bold text-black leading-tight">
            Discover your perfect
            <span className="text-gray-600">
              {' '}skincare routine
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Get personalized product recommendations based on your unique skin profile in just 2 minutes.
          </p>

          <div className="flex items-center justify-center space-x-8 py-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🧪</span>
              </div>
              <p className="text-sm text-gray-600">Science-backed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-sm text-gray-600">Personalized</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🌱</span>
              </div>
              <p className="text-sm text-gray-600">Clean beauty</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-3">
          <button
            onClick={onStart}
            className="w-full bg-black text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl hover:bg-gray-800"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>Start Your Skin Analysis</span>
              <ArrowRight size={20} />
            </div>
          </button>
          
          <button
            onClick={onRoutineBuilder}
            className="w-full bg-white text-black py-4 px-6 rounded-2xl font-semibold text-lg border-2 border-black transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] hover:bg-gray-50"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>Build Custom Routine</span>
              <Sparkles size={20} />
            </div>
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Analysis takes 2 minutes • Free • No signup required
        </p>
      </div>
    </div>
  );
}