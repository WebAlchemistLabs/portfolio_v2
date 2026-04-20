export type Project = {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  overview?: string
  systemType?: string
  problem: string
  solution: string
  impact: string
  role?: string
  timeline?: string
  status?: string
  team?: string
  highlights?: string[]
  features?: string[]
  challenges?: string[]
  architecture?: string[]
  futureScope?: string[]
  metrics?: Array<{ label: string; value: string }>
  techStack?: Array<{ category: string; items: string[] }>
  techStackNote?: string
  tags: string[]
  link?: string
  github?: string
  image?: string
  featured: boolean
  badge?: string
}

export const projects: Project[] = [
  {
    id: 'pristine-pro-cleanops-ai',
    slug: 'pristine-pro-cleanops-ai',
    title: 'Multi Tenant SaaS Platform for Cleaning Operations Management',
    tagline: 'A full stack SaaS application designed to manage bookings customers teams and operations across multiple cleaning businesses in a single system.',
    description:
      'A production ready platform built to manage bookings scheduling and day to day cleaning operations. Designed to give service based businesses full control over customer requests team coordination and performance tracking in one system.',
    overview:
      'A multi-tenant SaaS platform built to help cleaning businesses manage jobs, teams, and client operations through one centralized system.',
    problem:
      'Cleaning businesses rely on disconnected tools for scheduling communication and job tracking leading to inefficiencies missed bookings and poor operational visibility.',
    solution:
      'Built a centralized multi tenant platform that handles real time booking scheduling team assignment and operational tracking through a unified dashboard.',
    impact:
      'Streamlined service operations reduced manual coordination and enabled scalable management of high volume bookings across multiple teams and locations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    techStack: [
      {
        category: 'Frontend',
        items: ['Next.js 14 App Router', 'React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        category: 'Backend and API',
        items: [
          'NextAuth.js with JWT authentication and role based access',
          'REST API architecture with server actions and route handlers',
        ],
      },
      {
        category: 'Data Layer',
        items: ['PostgreSQL with Prisma ORM', 'Optional demo mode with local state fallback'],
      },
      {
        category: 'State Management',
        items: ['Zustand for global client state'],
      },
      {
        category: 'Payments',
        items: ['Stripe integration with checkout sessions webhooks and refunds'],
      },
      {
        category: 'AI Integration',
        items: ['OpenAI GPT for chat assistant and business insights'],
      },
      {
        category: 'Data Visualization',
        items: ['Recharts for analytics dashboards and reporting'],
      },
      {
        category: 'UI System',
        items: ['Radix UI primitives with custom component system'],
      },
      {
        category: 'Utilities',
        items: ['Zod validation', 'Date handling', 'CSV export'],
      },
      {
        category: 'Deployment',
        items: ['Vercel'],
      },
    ],
    role: 'Product + Full-Stack Engineer',
    timeline: '2026',
    status: 'Live',
    team: 'Solo Build',
    highlights: [
      'Designed scalable multi tenant architecture for SaaS environments',
      'Focused on real world operational workflows not just UI interactions',
      'Built system level logic for scheduling coordination and job tracking',
    ],
    features: [
      'Multi tenant architecture supporting multiple business accounts',
      'Real time booking and scheduling system with availability logic',
      'Customer management system with job history and tracking',
      'Team and crew assignment with workflow status updates',
      'Centralized dashboard for operations monitoring and control',
      'Analytics system for tracking performance bookings and revenue',
      'End to end workflow from request to job completion',
    ],
    challenges: [
      'Designing scheduling logic for real time availability and assignments',
      'Managing state across multiple tenants users and workflows',
      'Balancing performance with complex dashboard data updates',
    ],
    metrics: [
      { label: 'Target Users', value: 'Cleaning Service Businesses' },
      { label: 'Architecture', value: 'Multi-Tenant SaaS' },
    ],
    futureScope: [
      'Automated dispatch system for optimal crew assignment',
      'Advanced analytics with predictive insights',
      'AI assisted workflow optimization and recommendations',
    ],
    link: 'https://cleanops-eta.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/cleanops',
    image: '/cleanops.png',
    featured: true,
    badge: 'Business Operations Platform',
  },
  {
    id: 'movemaster-pro',
    slug: 'movemaster-pro',
    title: 'Logistics and Moving Platform with Real Time Quotes and Booking System',
    tagline: 'A full stack logistics platform designed to handle real time quote generation booking workflows pricing logic and service operations from request to job completion',
    description:
      'A production ready platform built to handle moving service quotes bookings and operational workflows. Designed to give businesses a structured system for managing customer requests pricing logic and service execution from start to finish.',
    overview:
      'Built with custom pricing logic scheduling workflows authentication and backend systems for managing real world moving operations',
    systemType: 'Full Stack Logistics Platform',
    problem:
      'Moving companies rely on fragmented tools for quote generation booking and job tracking leading to slow response times pricing inconsistencies and scheduling conflicts.',
    solution:
      'Developed a full stack platform that generates real time quotes based on distance load size and service type while handling booking workflows scheduling and job management through a centralized system.',
    impact:
      'Improved booking efficiency reduced pricing errors and enabled structured management of high volume moving requests with consistent and scalable workflows.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    techStack: [
      {
        category: 'Frontend',
        items: [
          'Next.js 14 App Router',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'React Context API for authentication and multi step form state',
        ],
      },
      {
        category: 'Backend and API',
        items: ['Node.js', 'Express', 'REST API architecture', 'Typed controllers services and middleware'],
      },
      {
        category: 'Authentication and Security',
        items: [
          'JWT authentication with access and refresh tokens',
          'Role based access control and route protection',
          'bcrypt password hashing, rate limiting, secure headers',
        ],
      },
      {
        category: 'Data Layer',
        items: ['Custom JSON based data system with CRUD operations', 'File based storage using Node.js fs module'],
      },
      {
        category: 'Business Logic',
        items: [
          'Custom quote calculation engine based on distance load size and service configuration',
          'Booking workflow logic with scheduling and availability handling',
        ],
      },
      {
        category: 'Payments and Communication',
        items: ['Email system using Nodemailer for booking and communication flows'],
      },
      {
        category: 'State Management',
        items: ['React Context for global auth and quote workflow state'],
      },
      {
        category: 'Utilities',
        items: ['Validation', 'Logging', 'Compression', 'Date handling'],
      },
      {
        category: 'Deployment',
        items: ['Vercel frontend with local backend runtime'],
      },
    ],
    role: 'Full-Stack Engineer',
    timeline: '2026',
    status: 'Live',
    team: 'Solo Build',
    features: [
      'Real time quote engine based on distance load size and service parameters',
      'Dynamic pricing system with customizable service options',
      'Booking workflow from quote request to confirmed job',
      'Scheduling system with availability and time slot handling',
      'Centralized dashboard for managing jobs pricing and service requests',
      'Customer flow tracking from inquiry to service completion',
      'Backend logic for handling quotes bookings and operational workflows',
    ],
    metrics: [
      { label: 'Domain', value: 'Moving + Logistics' },
      { label: 'Build Type', value: 'Full-Stack SaaS' },
    ],
    link: 'https://movemaster-seven.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/movemaster',
    image: '/movemaster1.png',
    featured: true,
    badge: 'Service Platform',
  },
  {
    id: 'propvault',
    slug: 'propvault',
    title: 'Real Estate Marketplace Platform with Advanced Search Filtering and Real Time Data',
    tagline: 'A full stack real estate platform designed for property discovery search filtering comparison and real time data handling across listings users and transactions',
    description:
      'A production ready platform built for discovering and exploring real estate listings. Designed to help users search filter and compare properties through a clean and structured interface that simplifies the decision making process.',
    overview:
      'Built with real time database syncing authentication storage systems and dynamic filtering logic for managing property data and user interactions',
    systemType: 'Full Stack Marketplace Platform',
    problem:
      'Real estate platforms often struggle with fragmented listing data slow search performance and lack of intuitive filtering making it difficult for users to efficiently discover and compare properties.',
    solution:
      'Developed a full stack platform with real time data synchronization advanced filtering logic and structured listing management enabling users to search compare and interact with property data through a seamless interface.',
    impact:
      'Improved property discovery speed reduced search friction and provided a scalable system for managing listings user interactions and real time updates.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    techStack: [
      {
        category: 'Frontend',
        items: [
          'Next.js 14 App Router',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Context API for auth listings saved properties and comparison state',
        ],
      },
      {
        category: 'Backend and Data',
        items: [
          'Firebase Firestore with real time listeners',
          'Firebase Storage for image uploads and asset management',
        ],
      },
      {
        category: 'Authentication',
        items: ['Firebase Auth with role based admin access'],
      },
      {
        category: 'Payments',
        items: ['Stripe deposit payments with demo fallback'],
      },
      {
        category: 'State Management',
        items: ['Context based architecture for global application state'],
      },
      {
        category: 'Real Time Systems',
        items: ['Live updates using Firestore onSnapshot listeners'],
      },
      {
        category: 'UI System',
        items: ['Custom design system with Tailwind and Radix style patterns'],
      },
      {
        category: 'Utilities',
        items: ['Date handling', 'Drag and drop file uploads', 'Sorting', 'Validation'],
      },
      {
        category: 'Deployment',
        items: ['Vercel'],
      },
    ],
    techStackNote:
      'System includes real time data synchronization advanced filtering logic image management authentication and full marketplace workflows',
    role: 'Product + Full-Stack Engineer',
    timeline: '2026',
    status: 'Live',
    team: 'Solo Build',
    features: [
      'Advanced filtering system for price location property type and features',
      'Real time listings powered by live database synchronization',
      'Property comparison system for evaluating multiple listings',
      'Saved properties system with persistent user state',
      'Image upload system with drag and drop and reordering functionality',
      'Admin dashboard for managing listings images and property data',
      'Dynamic property pages with structured data and visual presentation',
    ],
    architecture: [
      'Real time data flow using Firestore onSnapshot listeners',
      'Context based state management for listings auth saved and comparison data',
      'Modular component architecture using App Router patterns',
      'Role based access control for admin and user flows',
      'Demo mode fallback using localStorage for offline testing',
    ],
    link: 'https://prop-vault-sage.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/PropVault',
    image: '/propvault1.png',
    featured: true,
    badge: 'PropTech',
  },
  {
    id: 'web-alchemist-ecommerce',
    slug: 'web-alchemist-ecommerce',
    title: 'Full Stack E Commerce Platform with Cart Checkout and Payment System',
    tagline: 'A production ready e commerce platform designed to handle product listings cart management checkout workflows payment processing and order handling from browsing to purchase completion',
    description:
      'A production ready e-commerce system built to handle product browsing cart management and secure checkout. Designed to simulate a real online store experience with authentication product data and a complete purchase flow.',
    overview:
      'Built with authentication state management secure payment integration and full order lifecycle handling for real world commerce use',
    problem:
      'Many e commerce implementations focus on UI and lack a complete transaction flow making them unsuitable for handling real world checkout payments and order management.',
    solution:
      'Developed a full stack commerce system with structured product management cart functionality secure checkout and payment processing enabling a complete end to end shopping experience.',
    impact:
      'Delivered a scalable commerce platform with reliable checkout workflows structured order handling and support for real transaction processing scenarios.',
    tags: ['React', 'Firebase', 'Stripe', 'Node.js', 'Tailwind CSS'],
    techStack: [
      {
        category: 'Frontend',
        items: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'State management for cart and user session handling',
        ],
      },
      {
        category: 'Backend and API',
        items: ['Node.js with REST API architecture', 'Server side logic for cart checkout and order handling'],
      },
      {
        category: 'Authentication',
        items: ['User authentication system for account based shopping'],
      },
      {
        category: 'Payments',
        items: ['Stripe integration for secure checkout and payment processing'],
      },
      {
        category: 'Data Layer',
        items: ['Database for products users and order persistence'],
      },
      {
        category: 'State Management',
        items: ['Client side state handling for cart and session data'],
      },
      {
        category: 'Commerce Logic',
        items: ['Cart management pricing calculations checkout flow and order lifecycle'],
      },
      {
        category: 'Utilities',
        items: ['Validation', 'Formatting', 'Request handling'],
      },
      {
        category: 'Deployment',
        items: ['Vercel'],
      },
    ],
    techStackNote:
      'System includes cart management checkout workflows payment processing authentication and full order lifecycle handling',
    role: 'Full-Stack Engineer',
    timeline: '2026',
    status: 'Live',
    team: 'Solo Build',
    highlights: [
      'End-to-end shopping journey from listing to checkout.',
      'Payment integration with production-style commerce flow.',
      'Structured for scalable storefront growth.',
    ],
    features: [
      'Product catalog system with listing management and detailed product pages',
      'Cart system for managing items quantities and pricing before checkout',
      'Secure checkout flow with payment processing integration',
      'User authentication for account based shopping experience',
      'Order management system from purchase to completion',
      'End to end commerce workflow from product discovery to payment confirmation',
      'Backend logic for handling transactions cart state and order persistence',
    ],
    metrics: [
      { label: 'Payments', value: 'Stripe' },
      { label: 'Data Layer', value: 'Firebase' },
      { label: 'Runtime', value: 'Node.js' },
    ],
    link: 'https://webalchemistlabs-ecommerce.vercel.app',
    github: 'https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce',
    image: '/ecommerce1.png',
    featured: true,
    badge: 'Full-Stack',
  },
]
