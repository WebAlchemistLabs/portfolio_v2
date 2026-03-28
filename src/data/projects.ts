export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  impact: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
  badge?: string
}

export const projects: Project[] = [
  {
    id: 'biztrack',
    title: 'BizTrack',
    tagline: 'SaaS analytics dashboard',
    description:
      'A multi-tenant SaaS analytics platform with real-time data, role-based access control, and a clean dashboard UI built for small business owners.',
    problem:
      'Small business owners lack affordable, simple tools to track key metrics in real time without complex enterprise software.',
    solution:
      'Built a full-stack SaaS dashboard with Firebase Auth, Firestore real-time listeners, role-based access (admin/viewer), and a responsive React UI with live charts.',
    impact:
      'Demonstrates ability to architect a multi-tenant SaaS product with auth, real-time data, and role management — core skills for any frontend or full-stack role.',
    tags: ['React', 'Next.js', 'Firebase', 'Tailwind CSS', 'Firestore', 'Auth'],
    github: 'https://github.com/WebAlchemistLabs',
    featured: true,
    badge: 'SaaS',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    tagline: 'Full-stack store with Stripe payments',
    description:
      'A fully functional e-commerce web application with product listings, cart management, user authentication, and live Stripe checkout integration.',
    problem:
      'Most e-commerce tutorials stop at the UI — they never wire up real payments, auth, or a database. I needed to build the real thing end to end.',
    solution:
      'Built a complete store with Firebase Auth for user accounts, Firestore for product and order data, and Stripe for secure payment processing with webhooks.',
    impact:
      'Proves I can integrate third-party payment APIs, handle sensitive data securely, and build a production-ready full-stack application from scratch.',
    tags: ['React', 'Firebase', 'Stripe', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/WebAlchemistLabs',
    featured: true,
    badge: 'Full-Stack',
  },
  {
    id: 'helpdesk',
    title: 'IT Help Desk System',
    tagline: 'Ticket management for IT support teams',
    description:
      'A web-based IT ticketing system that allows users to submit support requests and agents to manage, assign, and resolve tickets with status tracking.',
    problem:
      'Small IT teams often rely on email chains or spreadsheets to manage support tickets — slow, disorganized, and hard to track.',
    solution:
      'Built a ticket management system with user submission forms, agent dashboard, ticket status workflow (open/in-progress/resolved), and priority tagging.',
    impact:
      'Directly targets help desk and IT support roles — shows I understand the tooling used in real IT environments and can build internal tools.',
    tags: ['React', 'MySQL', 'Node.js', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/WebAlchemistLabs',
    featured: true,
    badge: 'IT / Support',
  },
  {
    id: 'norbec',
    title: 'NorBec Landscaping',
    tagline: 'Client booking website',
    description:
      'A professional business website for a landscaping company featuring service listings, a booking/contact form, and mobile-first responsive design.',
    problem:
      'The client had no web presence and was losing potential customers who searched for landscaping services online.',
    solution:
      'Designed and built a clean, fast, mobile-first website with service pages, a contact/booking form, and SEO basics to help the business get found online.',
    impact:
      'Real client project that shows I can deliver professional work, communicate with non-technical stakeholders, and build sites that serve a business goal.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'SEO'],
    github: 'https://github.com/WebAlchemistLabs',
    featured: false,
    badge: 'Client Work',
  },
]