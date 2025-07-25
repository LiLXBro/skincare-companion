import { Product } from '../types';

export const minimalistProducts: Product[] = [
  // Cleansers
  {
    id: 'salicylic-acid-cleanser',
    name: 'Salicylic Acid 2% Face Wash',
    category: 'cleanser',
    description: 'Oil-free face wash with 2% salicylic acid to unclog pores and prevent acne.',
    keyIngredients: ['Salicylic Acid 2%', 'Zinc PCA', 'Aloe Vera'],
    price: 349,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['oily', 'combination', 'acne-prone'],
    concerns: ['acne', 'pores', 'oiliness'],
    routineStep: 1
  },
  {
    id: 'gentle-cleanser',
    name: 'Gentle Cleansing Foam',
    category: 'cleanser',
    description: 'Soap-free gentle cleanser for sensitive and dry skin.',
    keyIngredients: ['Oat Amino Acids', 'Betaine', 'Allantoin'],
    price: 299,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['dry', 'sensitive', 'normal'],
    concerns: ['sensitivity', 'dehydration', 'irritation'],
    routineStep: 1
  },
  
  // Serums
  {
    id: 'niacinamide-serum',
    name: 'Niacinamide 10% Face Serum',
    category: 'serum',
    description: 'High-strength niacinamide serum to minimize pores and control sebum.',
    keyIngredients: ['Niacinamide 10%', 'Zinc 1%', 'Hyaluronic Acid'],
    price: 599,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['oily', 'combination', 'acne-prone'],
    concerns: ['pores', 'oiliness', 'acne'],
    routineStep: 2
  },
  {
    id: 'vitamin-c-serum',
    name: 'Vitamin C 10% Face Serum',
    category: 'serum',
    description: 'L-Ascorbic acid serum for brightening and antioxidant protection.',
    keyIngredients: ['L-Ascorbic Acid 10%', 'Vitamin E', 'Ferulic Acid'],
    price: 695,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['all'],
    concerns: ['dark-spots', 'dullness', 'aging'],
    routineStep: 2
  },
  {
    id: 'hyaluronic-acid-serum',
    name: 'Hyaluronic Acid 2% Face Serum',
    category: 'serum',
    description: 'Multi-molecular weight hyaluronic acid for intense hydration.',
    keyIngredients: ['Hyaluronic Acid 2%', 'Sodium Hyaluronate', 'Panthenol'],
    price: 549,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['dry', 'dehydrated', 'all'],
    concerns: ['dehydration', 'fine-lines', 'plumping'],
    routineStep: 2
  },
  {
    id: 'retinol-serum',
    name: 'Granactive Retinoid 2% Face Serum',
    category: 'serum',
    description: 'Next-generation retinoid for anti-aging without irritation.',
    keyIngredients: ['Granactive Retinoid 2%', 'Squalane', 'Vitamin E'],
    price: 795,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['normal', 'combination', 'mature'],
    concerns: ['aging', 'fine-lines', 'texture'],
    routineStep: 3
  },
  {
    id: 'alpha-arbutin-serum',
    name: 'Alpha Arbutin 2% Face Serum',
    category: 'serum',
    description: 'Potent brightening serum to reduce dark spots and hyperpigmentation.',
    keyIngredients: ['Alpha Arbutin 2%', 'Hyaluronic Acid', 'Vitamin B5'],
    price: 645,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['all'],
    concerns: ['dark-spots', 'pigmentation', 'uneven-tone'],
    routineStep: 2
  },

  // Moisturizers
  {
    id: 'lightweight-moisturizer',
    name: 'Lightweight Gel Moisturizer',
    category: 'moisturizer',
    description: 'Oil-free, non-comedogenic gel moisturizer for oily skin.',
    keyIngredients: ['Hyaluronic Acid', 'Niacinamide', 'Panthenol'],
    price: 449,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['oily', 'combination', 'acne-prone'],
    concerns: ['hydration', 'oil-control'],
    routineStep: 4
  },
  {
    id: 'b12-repair-moisturizer',
    name: 'B12 + Repair Complex 5.5% Moisturizer',
    category: 'moisturizer',
    description: 'Lightweight moisturizer that soothes irritation and strengthens skin barrier.',
    keyIngredients: ['Vitamin B12', 'Ceramides', 'Centella Asiatica'],
    price: 549,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['sensitive', 'dry', 'irritated'],
    concerns: ['sensitivity', 'barrier-repair', 'redness'],
    routineStep: 4
  },
  {
    id: 'sepicalm-moisturizer',
    name: 'Sepicalm 3% + Oat Moisturizer',
    category: 'moisturizer',
    description: 'Calming moisturizer for sensitive and reactive skin.',
    keyIngredients: ['Sepicalm 3%', 'Colloidal Oatmeal', 'Ceramides'],
    price: 499,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['sensitive', 'dry', 'normal'],
    concerns: ['sensitivity', 'irritation', 'comfort'],
    routineStep: 4
  },

  // Sunscreen
  {
    id: 'spf-60-sunscreen',
    name: 'SPF 60 PA++++ Sunscreen',
    category: 'sunscreen',
    description: 'Broad-spectrum sunscreen with no white cast, suitable for daily use.',
    keyIngredients: ['Zinc Oxide', 'Titanium Dioxide', 'Niacinamide'],
    price: 399,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['all'],
    concerns: ['sun-protection', 'aging-prevention'],
    routineStep: 5
  },
  {
    id: 'spf-50-sunscreen',
    name: 'SPF 50 PA+++ Sunscreen',
    category: 'sunscreen',
    description: 'Lightweight, non-greasy sunscreen for everyday protection.',
    keyIngredients: ['Octinoxate', 'Zinc Oxide', 'Vitamin E'],
    price: 349,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['all'],
    concerns: ['sun-protection', 'daily-use'],
    routineStep: 5
  },

  // Treatments
  {
    id: 'aha-bha-peeling-solution',
    name: 'AHA BHA 32% Peeling Solution',
    category: 'treatment',
    description: 'Weekly chemical peel for deep exfoliation and skin renewal.',
    keyIngredients: ['Glycolic Acid', 'Salicylic Acid', 'Lactic Acid'],
    price: 599,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['normal', 'combination', 'oily'],
    concerns: ['dullness', 'texture', 'dark-spots'],
    routineStep: 2
  },
  {
    id: 'lactic-acid-serum',
    name: 'Lactic Acid 10% Face Serum',
    category: 'treatment',
    description: 'Gentle exfoliating serum for smoother, brighter skin.',
    keyIngredients: ['Lactic Acid 10%', 'Hyaluronic Acid', 'Tasmanian Pepperberry'],
    price: 545,
    image: 'https://images.pexels.com/photos/7797849/pexels-photo-7797849.jpeg?auto=compress&cs=tinysrgb&w=300',
    skinTypes: ['sensitive', 'normal', 'dry'],
    concerns: ['dullness', 'texture', 'gentle-exfoliation'],
    routineStep: 2
  }
];