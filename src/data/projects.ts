export type Project = {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  impact: string
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
    title: 'Pristine Pro (CleanOps AI)',
    tagline: 'AI-assisted cleaning operations platform',
    description:
      'An operations-focused platform designed to streamline cleaning workflows, team coordination, and day-to-day service execution with AI-powered support.',
    problem:
      'Service teams often rely on scattered tools and manual updates, making job tracking, communication, and quality control harder than necessary.',
    solution:
      'Built a centralized platform experience that brings scheduling, workflow visibility, and operational updates into one dashboard-style interface.',
    impact:
      'Improves clarity across operations, reduces manual handoffs, and gives teams a cleaner system for managing service delivery at scale.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    link: 'https://cleanops-eta.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/cleanops',
    featured: true,
    badge: 'Operations',
  },
  {
    id: 'movemaster-pro',
    slug: 'movemaster-pro',
    title: 'MoveMaster Pro',
    tagline: 'Moving services workflow and booking platform',
    description:
      'A business-oriented platform for organizing moving services, managing requests, and creating a more structured client journey from inquiry to execution.',
    problem:
      'Moving businesses often manage customer requests through fragmented channels, which slows response time and increases scheduling errors.',
    solution:
      'Built a streamlined service platform with clear flows for client intake, service details, and operational follow-through in a single web experience.',
    impact:
      'Helps teams respond faster, stay organized, and provide a smoother client experience during high-pressure service operations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    link: 'https://movemaster-seven.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/movemaster',
    featured: true,
    badge: 'Service Platform',
  },
  {
    id: 'propvault',
    slug: 'propvault',
    title: 'PropVault',
    tagline: 'Property operations and listing management app',
    description:
      'A property-focused web application built to support listing organization, workflow visibility, and cleaner management of property-related operations.',
    problem:
      'Property workflows are frequently scattered across spreadsheets and messages, making it difficult to maintain consistency and operational transparency.',
    solution:
      'Built a centralized product experience that organizes property data and process flow into one intuitive interface for easier day-to-day management.',
    impact:
      'Improves operational control, reduces information gaps, and gives teams a stronger foundation for scaling property workflows.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    link: 'https://prop-vault-sage.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/PropVault',
    featured: true,
    badge: 'PropTech',
  },
  {
    id: 'web-alchemist-ecommerce',
    slug: 'web-alchemist-ecommerce',
    title: 'Web Alchemist E-Commerce',
    tagline: 'Full-stack store with Stripe payments',
    description:
      'A full e-commerce web application with product catalog, cart flow, authentication, and live checkout for a complete online purchasing experience.',
    problem:
      'Many e-commerce demos stop at visuals and lack real transaction flow, making them unusable for real operational needs.',
    solution:
      'Implemented an end-to-end commerce workflow with account handling, product and order persistence, and secure payment integration.',
    impact:
      'Demonstrates production-ready full-stack execution for commerce use cases, including checkout reliability and data-backed order flow.',
    tags: ['React', 'Firebase', 'Stripe', 'Node.js', 'Tailwind CSS'],
    link: 'https://webalchemistlabs-ecommerce.vercel.app',
    github: 'https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce',
    image: '/ecommerce.png',
    featured: true,
    badge: 'Full-Stack',
  },
]
