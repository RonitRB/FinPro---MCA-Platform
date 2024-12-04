# MCA (Merchant Cash Advance) Platform

A modern, secure, and user-friendly Merchant Cash Advance platform built specifically for the Indian market. This platform connects businesses seeking funding with potential investors while ensuring compliance with Indian financial regulations.

## Features

### Core Financial Features
- 💰 Instant advance approval system
- 📊 Flexible repayment structure (daily/weekly/monthly)
- 💳 Integration with UPI and card payments
- 📈 Real-time merchant cash flow analysis

### Risk Assessment
- 🤖 AI-powered credit scoring
- 📑 Bank statement analysis
- 📊 Business performance metrics
- 🎯 Industry-specific risk models

### Compliance & Security
- 🔐 KYC/e-KYC integration
- ✅ GST compliance verification
- 🏦 Account Aggregator framework
- 🛡️ End-to-end encryption

### Platform Features
- 📱 Mobile-first responsive design
- 🌐 Multi-language support
- 📄 Digital document management
- ⚡ Real-time application tracking
- 💹 Advanced financial calculators

## Tech Stack

### Frontend
- React 18.3.1 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- React Router for navigation
- React Query for data fetching
- Zustand for state management
- i18next for internationalization

### Development Tools
- Vite for development and building
- ESLint for code linting
- TypeScript for type safety
- PostCSS for CSS processing

## Project Structure

\`\`\`
src/
├── components/
│   ├── Analysis/       # Bank statement and business analysis
│   ├── Auth/           # Authentication components
│   ├── Calculator/     # MCA and financial calculators
│   ├── Dashboard/      # Dashboard components
│   ├── Documents/      # Document upload and management
│   ├── Investors/      # Investor profiles and management
│   ├── KYC/           # KYC verification components
│   ├── Layout/        # Layout components
│   ├── Settings/      # Platform settings
│   └── ui/            # Reusable UI components
├── store/             # State management
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── i18n/              # Internationalization
└── styles/            # Global styles
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/mca-platform.git
cd mca-platform
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Build for production:
\`\`\`bash
npm run build
\`\`\`

## Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`env
VITE_API_URL=your_api_url
VITE_ENVIRONMENT=development
\`\`\`

## Available Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run preview\`: Preview production build
- \`npm run lint\`: Lint code

## Design System

### Colors
- Primary Background: #121212
- Secondary Background: #1E1E1E
- Accent Primary: #BB86FC
- Accent Secondary: #9B66DC
- Error: #CF6679
- Text Primary: #FFFFFF
- Text Secondary: #B3B3B3

### Typography
- Sans-serif font stack
- Responsive text sizes
- Clear hierarchy with consistent spacing

### Components
- Modern, neumorphic design
- Consistent border radius (8px)
- Subtle animations and transitions
- Glass-morphism effects

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors who have helped shape this project