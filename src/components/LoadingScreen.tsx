import React from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface LoadingScreenProps {
  onBack?: () => void;
}

export function LoadingScreen({ onBack }: LoadingScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      {onBack && (
        <div className="absolute top-4 left-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
        </div>
      )}
      <div className="text-center max-w-md mx-auto">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <Sparkles size={36} className="text-white animate-pulse" />
          </div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-gray-200 rounded-3xl mx-auto animate-ping" />
        </div>

        {/* Loading Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Analyzing your skin...
          </h2>
          
          <div className="space-y-2">
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-black h-2 rounded-full animate-pulse" style={{ width: '75%' }} />
            </div>
          </div>

          <div className="space-y-3 text-gray-600">
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-black rounded-full animate-bounce" />
              <span>Processing your skin type...</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <span>Matching with our product database...</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span>Creating your personalized routine...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}