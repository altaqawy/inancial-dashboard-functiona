# 🌸 Flowers&Saints Financial Dashboard

A modern, responsive financial dashboard built with Next.js 15, TypeScript, and Tailwind CSS. Features a comprehensive financial management system with dark/light theme support, analytics, and user management.

## ✨ Features

- 📊 **Comprehensive Dashboard** - Real-time financial overview with interactive charts
- 💰 **Account Management** - Multi-account support with transaction tracking
- 📈 **Advanced Analytics** - Detailed financial analytics and reporting
- 🌙 **Dark/Light Theme** - Seamless theme switching with system preference detection
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🔒 **Security Features** - Account security and privacy settings
- 💳 **Payment Processing** - Bill payments and money transfers
- 📋 **Transaction History** - Detailed transaction tracking and categorization
- 🎯 **Savings Goals** - Track and manage financial goals
- 📊 **Budget Tracking** - Monitor spending across categories
- 🔔 **Smart Notifications** - Customizable alerts and updates

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd financial-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Edit `.env.local` and add your configuration:
   \`\`\`env
   # Add your environment variables here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
financial-dashboard/
├── app/                    # Next.js App Router pages
│   ├── analytics/         # Analytics dashboard
│   ├── settings/          # User settings
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── analytics/        # Analytics-specific components
│   ├── modals/           # Modal components
│   └── ...               # Other components
├── contexts/             # React contexts
│   └── settings-context.tsx
├── lib/                  # Utility functions
│   └── utils.ts
├── public/              # Static assets
└── styles/              # Additional styles
\`\`\`

## 🎨 Theme System

The dashboard supports three theme modes:

- **Light Mode** - Clean, professional appearance
- **Dark Mode** - Eye-friendly dark interface
- **System Mode** - Automatically follows OS preference

### Switching Themes

Click the theme toggle button (🌙/☀️) in the top navigation bar to switch between themes.

## 📊 Dashboard Features

### Main Dashboard
- Account overview with real-time balances
- Recent transactions display
- Quick action buttons (Add Money, Send Money, Pay Bills)
- Financial metrics and KPIs

### Analytics
- Revenue and growth charts
- Customer segmentation analysis
- Performance metrics
- Exportable reports

### Settings
- User profile management
- Security settings
- Notification preferences
- Privacy controls
- Theme customization

## 🛠️ Built With

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Theme**: next-themes

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npm run type-check
\`\`\`

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security

- Environment variables for sensitive data
- Input validation and sanitization
- Secure authentication patterns
- HTTPS enforcement in production

## 📈 Performance

- Server-side rendering (SSR)
- Static site generation (SSG) where applicable
- Image optimization
- Code splitting
- Lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Recharts](https://recharts.org/) - Composable charting library

---

Made with ❤️ by the Flowers&Saints team
