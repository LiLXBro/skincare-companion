# Minimalist Skincare Analysis App

A React TypeScript application that provides personalized skincare recommendations through an intelligent quiz system and custom routine builder.

## 🌟 Features

### Core Functionality
- **Skin Analysis Quiz** - 6-step questionnaire analyzing skin type, concerns, environment, and lifestyle
- **Personalized Recommendations** - Smart algorithm matching users with suitable products
- **Custom Routine Builder** - Step-by-step routine creation with morning/evening schedules
- **QR Code Sharing** - Generate shareable links for custom routines
- **Product Database** - Real minimalist India products with INR pricing

### User Experience
- **Mobile-First Design** - Responsive interface optimized for all devices
- **Progress Tracking** - Visual progress indicators throughout the quiz
- **Interactive UI** - Smooth animations and hover effects
- **Clean Aesthetics** - Minimalist black/white design language

## 🛠️ Tech Stack

### Core Framework
- **React** (18.3.1) - UI library
- **TypeScript** (5.5.3) - Type-safe JavaScript
- **Vite** (5.4.2) - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS** (3.4.1) - Utility-first CSS framework
- **Lucide React** (0.344.0) - Modern icon library
- **PostCSS** + **Autoprefixer** - CSS processing

### Features & Utilities
- **QRCode** (1.5.4) - QR code generation for sharing
- **React Router** - Client-side routing (URL-based navigation)

### Development Tools
- **ESLint** - Code linting with React/TypeScript rules
- **TypeScript ESLint** - Advanced TypeScript linting
- **React Hooks ESLint** - React Hooks best practices

## 🚀 Getting Started

### Prerequisites
- Node.js (16.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd minimalist-skincare-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 Usage

### Skin Analysis Flow
1. **Welcome Screen** - Choose between skin analysis or custom routine builder
2. **Quiz Questions** - Answer 6 personalized questions about your skin
3. **Analysis Processing** - Algorithm processes your responses
4. **Results Display** - View personalized product recommendations
5. **Routine View** - See morning and evening routines

### Routine Builder
1. **Step Selection** - Choose products for each routine step
2. **Product Comparison** - Compare ingredients and prices
3. **Routine Summary** - Review complete routine with total cost
4. **QR Code Sharing** - Generate shareable links

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── WelcomeScreen.tsx    # Landing page
│   ├── QuizStep.tsx         # Quiz interface
│   ├── LoadingScreen.tsx    # Analysis processing
│   ├── ResultsScreen.tsx    # Recommendations display
│   └── RoutineBuilder.tsx   # Custom routine creation
├── data/                # Static data
│   ├── questions.ts         # Quiz questions
│   └── products.ts          # Product database
├── utils/               # Utility functions
│   └── recommendations.ts   # Recommendation algorithm
├── types/               # TypeScript definitions
│   └── index.ts            # Type definitions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🧠 Recommendation Algorithm

The app uses a **rule-based scoring system** that evaluates products based on:

### Scoring Factors
- **Skin Type Match** (+10 points) - Products suitable for user's skin type
- **Concern Alignment** (+5 points each) - Products addressing specific concerns
- **Age Appropriateness** (+3-5 points) - Age-suitable ingredients and formulations
- **Routine Level** (+5 points) - Complexity matching user experience
- **Lifestyle Factors** (+2-3 points) - Daily habits and preferences

### Product Selection Logic
1. Score all products against user profile
2. Sort by relevance score
3. Select top products per category
4. Build morning/evening routines
5. Generate personalized explanations

## 📊 Product Database

### Categories
- **Cleansers** - Face washes and cleansing foams
- **Serums** - Treatment serums with active ingredients
- **Moisturizers** - Hydrating and barrier-repair products
- **Sunscreens** - Broad-spectrum UV protection
- **Treatments** - Specialized treatments and peels

### Product Information
- Real minimalist India products
- INR pricing
- Key ingredients
- Skin type compatibility
- Concern targeting

## 🔧 Configuration

### Environment Setup
- **Vite Config** - Build optimization and plugin configuration
- **Tailwind Config** - Custom design system settings
- **TypeScript Config** - Strict type checking enabled
- **ESLint Config** - React and TypeScript best practices

### Customization
- **Colors** - Modify `tailwind.config.js` for brand colors
- **Products** - Update `src/data/products.ts` for product catalog
- **Questions** - Modify `src/data/questions.ts` for quiz customization

## 🚀 Deployment

### Build Commands
```bash
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Deployment Platforms
- **Vercel** - Recommended for React apps
- **Netlify** - Static site hosting
- **GitHub Pages** - Free hosting option

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Add proper type definitions
- Test on mobile devices

## 🙏 Acknowledgments

- **Minimalist India** - Product inspiration and data
- **Lucide** - Beautiful icon library
- **Tailwind CSS** - Utility-first CSS framework
- **React Community** - Amazing ecosystem and tools