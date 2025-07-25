import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Minus, ShoppingBag, Share2, QrCode, Check, X, Copy } from 'lucide-react';
import { Product } from '../types';
import { minimalistProducts } from '../data/products';
import QRCodeLib from 'qrcode';

interface RoutineBuilderProps {
  onBack: () => void;
}

interface RoutineStep {
  category: Product['category'];
  product: Product | null;
  required: boolean;
}

export function RoutineBuilder({ onBack }: RoutineBuilderProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<Product['category'] | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);

  const routineSteps: RoutineStep[] = [
    { category: 'cleanser', product: null, required: true },
    { category: 'serum', product: null, required: false },
    { category: 'moisturizer', product: null, required: true },
    { category: 'sunscreen', product: null, required: true },
    { category: 'treatment', product: null, required: false }
  ];

  const categoryNames = {
    cleanser: 'Cleanser',
    serum: 'Serum',
    moisturizer: 'Moisturizer',
    sunscreen: 'Sunscreen',
    treatment: 'Treatment'
  };

  const categoryEmojis = {
    cleanser: '🧼',
    serum: '💧',
    moisturizer: '🧴',
    sunscreen: '☀️',
    treatment: '✨'
  };

  const getProductsByCategory = (category: Product['category']) => {
    return minimalistProducts.filter(product => product.category === category);
  };

  const getSelectedProductForCategory = (category: Product['category']) => {
    return selectedProducts.find(product => product.category === category);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProducts(prev => {
      const filtered = prev.filter(p => p.category !== product.category);
      return [...filtered, product];
    });
    setCurrentCategory(null);
  };

  const handleProductRemove = (category: Product['category']) => {
    setSelectedProducts(prev => prev.filter(p => p.category !== category));
  };

  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  const generateQRCode = () => {
    const routineData = {
      products: selectedProducts.map(p => ({ id: p.id, name: p.name, price: p.price })),
      totalPrice,
      timestamp: new Date().toISOString()
    };
    
    const routineUrl = `${window.location.origin}?routine-builder=true&data=${encodeURIComponent(JSON.stringify(routineData))}`;
    return routineUrl;
  };

  const generateQRCodeImage = async () => {
    try {
      const url = generateQRCode();
      const qrDataUrl = await QRCodeLib.toDataURL(url, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeDataUrl(qrDataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(generateQRCode());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  useEffect(() => {
    if (showQRCode) {
      generateQRCodeImage();
    }
  }, [showQRCode, selectedProducts]);

  if (currentCategory) {
    const categoryProducts = getProductsByCategory(currentCategory);
    
    return (
      <div className="min-h-screen bg-white">
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="max-w-md mx-auto p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentCategory(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <h1 className="text-lg font-semibold text-black">
                Choose {categoryNames[currentCategory]}
              </h1>
              <div className="w-10" />
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4 space-y-3">
          {categoryProducts.map((product) => {
            const isSelected = getSelectedProductForCategory(currentCategory)?.id === product.id;
            
            return (
              <div
                key={product.id}
                className={`bg-white rounded-2xl p-4 border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-black shadow-lg'
                    : 'border-gray-200 hover:border-gray-400 hover:shadow-md'
                }`}
                onClick={() => handleProductSelect(product)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-black">{product.name}</h3>
                      {isSelected && (
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                          <Check size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.keyIngredients.slice(0, 2).map((ingredient) => (
                        <span
                          key={ingredient}
                          className="px-2 py-1 bg-gray-100 text-black text-xs rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-black font-bold text-lg">₹{product.price}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-xs text-gray-600">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-md mx-auto p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-black">Build Your Routine</h1>
            <button
              onClick={() => setShowQRCode(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <QrCode size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Routine Steps */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black">Your Routine Steps</h2>
          
          {routineSteps.map((step, index) => {
            const selectedProduct = getSelectedProductForCategory(step.category);
            
            return (
              <div key={step.category} className="bg-white rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <span className="text-lg">{categoryEmojis[step.category]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">
                        Step {index + 1}: {categoryNames[step.category]}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {step.required ? 'Required' : 'Optional'}
                      </p>
                    </div>
                  </div>
                  
                  {selectedProduct ? (
                    <button
                      onClick={() => handleProductRemove(step.category)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={16} className="text-gray-600" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentCategory(step.category)}
                      className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <Plus size={16} className="text-white" />
                    </button>
                  )}
                </div>

                {selectedProduct ? (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black text-sm">{selectedProduct.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{selectedProduct.description}</p>
                      </div>
                      <span className="font-semibold text-black">₹{selectedProduct.price}</span>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setCurrentCategory(step.category)}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors"
                  >
                    Add {categoryNames[step.category]}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary */}
        {selectedProducts.length > 0 && (
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-black">Routine Summary</h3>
              <span className="text-2xl font-bold text-black">₹{totalPrice}</span>
            </div>
            
            <div className="space-y-2 mb-4">
              {selectedProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{product.name}</span>
                  <span className="text-black font-medium">₹{product.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                <div className="flex items-center justify-center space-x-2">
                  <ShoppingBag size={20} />
                  <span>Add Complete Routine to Cart</span>
                </div>
              </button>
              
              <button
                onClick={() => setShowQRCode(true)}
                className="w-full bg-gray-100 text-black py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:bg-gray-200"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Share2 size={18} />
                  <span>Share Routine</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-black">Share Your Routine</h3>
              <button
                onClick={() => setShowQRCode(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center border border-gray-200">
                {qrCodeDataUrl ? (
                  <img src={qrCodeDataUrl} alt="QR Code" className="w-44 h-44" />
                ) : (
                  <QrCode size={64} className="text-gray-400" />
                )}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Scan this QR code to access the routine builder or share with friends
              </p>
              <div className="bg-gray-50 rounded-xl p-3 mb-4">
                <p className="text-xs text-gray-600 break-all">
                  {generateQRCode()}
                </p>
              </div>
              <button
                onClick={handleCopyLink}
                className="w-full bg-black text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2"
              >
                <Copy size={16} />
                <span>{copySuccess ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}