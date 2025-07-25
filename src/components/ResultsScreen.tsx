import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Share2, RotateCcw, Star, Sparkles } from 'lucide-react';
import { SkinProfile, Recommendation } from '../types';

interface ResultsScreenProps {
  skinProfile: SkinProfile;
  recommendation: Recommendation;
  onRestart: () => void;
  onRoutineBuilder: () => void;
}

export function ResultsScreen({ skinProfile, recommendation, onRestart, onRoutineBuilder }: ResultsScreenProps) {
  const [activeTab, setActiveTab] = useState<'routine' | 'products'>('routine');
  const [showMorning, setShowMorning] = useState(true);

  const getSkinTypeEmoji = (skinType: string) => {
    const emojiMap: Record<string, string> = {
      oily: '✨',
      dry: '🏜️',
      combination: '🌓',
      sensitive: '🌸',
      normal: '😌'
    };
    return emojiMap[skinType] || '😌';
  };

  const getSkinTypeDescription = (skinType: string) => {
    const descriptions: Record<string, string> = {
      oily: 'Your skin produces excess oil, especially in the T-zone',
      dry: 'Your skin lacks moisture and may feel tight or flaky',
      combination: 'You have an oily T-zone with drier cheeks',
      sensitive: 'Your skin is easily irritated and needs gentle care',
      normal: 'Your skin is well-balanced with minimal concerns'
    };
    return descriptions[skinType] || 'Balanced skin with minimal concerns';
  };

  const totalPrice = recommendation.products?.reduce((sum, product) => sum + product.price, 0) || 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-md mx-auto p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onRestart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-black">Your Skin Analysis</h1>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Skin Profile Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">{getSkinTypeEmoji(skinProfile.skinType)}</div>
            <h2 className="text-2xl font-bold text-black capitalize mb-2">
              {skinProfile.skinType} Skin
            </h2>
            <p className="text-gray-600 text-sm">
              {getSkinTypeDescription(skinProfile.skinType)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-xs font-medium text-gray-600">Main Concerns</div>
              <div className="text-sm font-semibold text-black">
                {skinProfile.concerns?.length || 0} identified
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">📅</div>
              <div className="text-xs font-medium text-gray-600">Age Range</div>
              <div className="text-sm font-semibold text-black capitalize">
                {skinProfile.age?.replace('-', '–') || 'Not specified'}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-200">
          <div className="grid grid-cols-2">
            <button
              onClick={() => setActiveTab('routine')}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'routine'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Your Routine
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'products'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Products
            </button>
          </div>
        </div>

        {activeTab === 'routine' && (
          <div className="space-y-4">
            {/* Morning/Evening Toggle */}
            <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-200">
              <div className="grid grid-cols-2">
                <button
                  onClick={() => setShowMorning(true)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                    showMorning
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>☀️</span>
                  <span>Morning</span>
                </button>
                <button
                  onClick={() => setShowMorning(false)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                    !showMorning
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>🌙</span>
                  <span>Evening</span>
                </button>
              </div>
            </div>

            {/* Routine Steps */}
            <div className="space-y-3">
              {(showMorning ? recommendation.routine?.morning : recommendation.routine?.evening)?.map((product, index) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-lg font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-black text-sm">{product.name}</h3>
                      <p className="text-gray-600 text-xs mt-1">{product.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-black font-semibold text-sm">₹{product.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )) || (
                <div className="text-center py-8">
                  <p className="text-gray-600">No products found for this routine.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-3">
            {recommendation.products?.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-black">{product.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.keyIngredients?.slice(0, 2).map((ingredient) => (
                            <span
                              key={ingredient}
                              className="px-2 py-1 bg-gray-100 text-black text-xs rounded-full"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-black font-semibold">₹{product.price}</div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star size={12} className="text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) || (
              <div className="text-center py-8">
                <p className="text-gray-600">No products available.</p>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-black">Complete Routine</span>
              <span className="text-2xl font-bold text-black">₹{totalPrice}</span>
            </div>
            <button className="w-full bg-black text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:bg-gray-800">
              <div className="flex items-center justify-center space-x-2">
                <ShoppingBag size={20} />
                <span>Add to Cart</span>
              </div>
            </button>
          </div>

          <button
            onClick={onRestart}
            className="w-full bg-gray-100 text-black py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:bg-gray-200"
          >
            <div className="flex items-center justify-center space-x-2">
              <RotateCcw size={18} />
              <span>Retake Quiz</span>
            </div>
          </button>
          
          <button
            onClick={onRoutineBuilder}
            className="w-full bg-white border-2 border-black text-black py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:bg-gray-50"
          >
            <div className="flex items-center justify-center space-x-2">
              <Sparkles size={18} />
              <span>Build Custom Routine</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}