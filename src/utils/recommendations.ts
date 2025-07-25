import { QuizAnswer, SkinProfile, Recommendation, Product } from '../types';
import { minimalistProducts } from '../data/products';

export function generateSkinProfile(answers: QuizAnswer[]): SkinProfile {
  const answerMap = answers.reduce((acc, answer) => {
    acc[answer.questionId] = answer.answer;
    return acc;
  }, {} as Record<string, string | string[]>);

  return {
    skinType: answerMap['skin-type'] as SkinProfile['skinType'],
    concerns: Array.isArray(answerMap['concerns']) ? answerMap['concerns'] : [],
    environment: answerMap['environment'] as string,
    routine: answerMap['routine-level'] as SkinProfile['routine'],
    age: answerMap['age'] as string,
    lifestyle: Array.isArray(answerMap['lifestyle']) ? answerMap['lifestyle'] : []
  };
}

export function generateRecommendations(profile: SkinProfile): Recommendation {
  const { skinType, concerns, routine, age, lifestyle } = profile;
  
  // Ensure concerns and lifestyle are arrays
  const userConcerns = Array.isArray(concerns) ? concerns : [];
  const userLifestyle = Array.isArray(lifestyle) ? lifestyle : [];
  
  // Score products based on skin profile
  const scoredProducts = minimalistProducts.map(product => {
    let score = 0;
    
    // Skin type match
    if (product.skinTypes.includes(skinType) || product.skinTypes.includes('all')) {
      score += 10;
    }
    
    // Concern match
    const concernMatches = userConcerns.filter(concern => 
      product.concerns.some(productConcern => 
        productConcern.includes(concern) || concern.includes(productConcern)
      )
    );
    score += concernMatches.length * 5;
    
    // Age-appropriate products
    if (age === 'teens' || age === 'early-20s') {
      if (product.category === 'cleanser' || product.category === 'moisturizer') score += 3;
      if (product.name.toLowerCase().includes('retinol')) score -= 5;
    }
    
    if (age === 'early-30s' || age === 'mid-30s+') {
      if (product.name.toLowerCase().includes('retinol') || product.concerns.includes('aging')) score += 5;
    }
    
    // Routine level adjustments
    if (routine === 'beginner') {
      if (product.category === 'cleanser' || product.category === 'moisturizer' || product.category === 'sunscreen') {
        score += 5;
      }
      if (product.category === 'treatment') score -= 3;
    }
    
    // Lifestyle adjustments
    if (userLifestyle.includes('makeup') && product.category === 'cleanser') score += 3;
    if (userLifestyle.includes('active') && product.category === 'sunscreen') score += 3;
    if (userLifestyle.includes('budget-conscious') && product.price < 500) score += 2;
    
    return { product, score };
  });
  
  // Sort by score and select top products
  const topProducts = scoredProducts
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
  
  // Build routine
  const getProductByCategory = (category: Product['category'], exclude: string[] = []): Product | null => {
    return topProducts.find(p => p.category === category && !exclude.includes(p.id)) || null;
  };
  
  // Essential products for morning routine
  const morningRoutine: Product[] = [];
  const eveningRoutine: Product[] = [];
  const selectedIds: string[] = [];
  
  // Step 1: Cleanser (both routines)
  const cleanser = getProductByCategory('cleanser');
  if (cleanser) {
    morningRoutine.push(cleanser);
    eveningRoutine.push(cleanser);
    selectedIds.push(cleanser.id);
  }
  
  // Step 2: Serums
  if (routine !== 'beginner') {
    // Morning: Vitamin C or Niacinamide
    const morningSerum = topProducts.find(p => 
      p.category === 'serum' && 
      (p.name.includes('Vitamin C') || p.name.includes('Niacinamide')) &&
      !selectedIds.includes(p.id)
    );
    if (morningSerum) {
      morningRoutine.push(morningSerum);
      selectedIds.push(morningSerum.id);
    }
    
    // Evening: Treatment serum
    const eveningSerum = topProducts.find(p => 
      p.category === 'serum' && 
      !selectedIds.includes(p.id)
    );
    if (eveningSerum) {
      eveningRoutine.push(eveningSerum);
      selectedIds.push(eveningSerum.id);
    }
  }
  
  // Step 3: Moisturizer
  const moisturizer = topProducts.find(p => 
    p.category === 'moisturizer' && 
    !selectedIds.includes(p.id)
  );
  if (moisturizer) {
    morningRoutine.push(moisturizer);
    eveningRoutine.push(moisturizer);
    selectedIds.push(moisturizer.id);
  }
  
  // Step 4: Sunscreen (morning only)
  const sunscreen = getProductByCategory('sunscreen', selectedIds);
  if (sunscreen) {
    morningRoutine.push(sunscreen);
    selectedIds.push(sunscreen.id);
  }
  
  // Step 5: Treatment (evening only, if advanced user)
  if (routine === 'advanced') {
    const treatment = getProductByCategory('treatment', selectedIds);
    if (treatment) {
      eveningRoutine.push(treatment);
      selectedIds.push(treatment.id);
    }
  }
  
  // Collect all unique products
  const allProducts = Array.from(
    new Map([...morningRoutine, ...eveningRoutine].map(p => [p.id, p])).values()
  );
  
  // Generate reasoning
  const reasoning = [
    `Based on your ${skinType} skin type, we've selected gentle yet effective products.`,
    userConcerns.length > 0 ? `Your main concerns (${userConcerns.join(', ')}) are addressed with targeted ingredients.` : '',
    `This ${routine} routine is perfect for your experience level.`,
    `Products are chosen considering your ${age.replace('-', '–')} age range.`
  ].filter(Boolean);
  
  return {
    products: allProducts,
    routine: {
      morning: morningRoutine,
      evening: eveningRoutine
    },
    reasoning
  };
}