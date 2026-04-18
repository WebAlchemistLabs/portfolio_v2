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
  roles?: string[]
  link?: string
  github?: string
  image?: string
  featured: boolean
  badge?: string
}

export const projects: Project[] = [
  {
    id: 'clientpulse',
    slug: 'clientpulse',
    title: 'ClientPulse',
    tagline: 'Multi-client SaaS reporting platform',
    description:
      'A premium SaaS platform built for agencies and freelancers to manage client reporting, analytics dashboards, and performance tracking in one place.',
    problem:
      'Agencies spend hours manually compiling client reports across disconnected tools. No single product provides a clean, real-time view of all client performance data.',
    solution:
      'Built a multi-tenant SaaS dashboard with Firebase Auth, Firestore real-time listeners, role-based access for admins and clients, custom reporting modules, and data visualization charts.',
    impact:
      'Agencies can deliver live client dashboards instead of static PDFs, reducing reporting time by hours each week and improving client retention through full transparency.',
    tags: ['React', 'Next.js', 'Firebase', 'Firestore', 'Tailwind CSS', 'TypeScript'],
    roles: ['Frontend Dev', 'Software Dev', 'QA'],
    link: 'https://clientpulse-six.vercel.app/login',
    github: 'https://github.com/WebAlchemistLabs/CLIENTPULSE',
    image: '/clientpulse1.png',
    featured: true,
    badge: 'SaaS',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-Commerce Platform',
    tagline: 'Full-stack store with Stripe payments',
    description:
      'A fully functional e-commerce web application with product listings, cart management, user authentication, and live Stripe checkout — production-ready from day one.',
    problem:
      'Most e-commerce demos stop at the UI layer. Building a real store requires auth, a live database, payment processing, webhooks, and order management — all connected.',
    solution:
      'Built end-to-end with Firebase Auth for accounts, Firestore for product and order data, and Stripe for secure checkout with webhook-based order confirmation.',
    impact:
      'Proves ability to integrate payment APIs, handle sensitive data securely, and deliver a complete full-stack application that a real business could use immediately.',
    tags: ['React', 'Firebase', 'Stripe', 'Node.js', 'Tailwind CSS'],
    roles: ['Frontend Dev', 'Software Dev'],
    link: 'https://webalchemistlabs-ecommerce.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce',
    image: '/ecommerce.png',
    featured: true,
    badge: 'Full-Stack',
  },
  {
    id: 'help-desk',
    slug: 'help-desk',
    title: 'Help Desk System',
    tagline: 'IT support ticket management platform',
    description:
      'A web-based IT ticketing system with user submission, agent dashboards, ticket lifecycle management, priority tagging, and status tracking built for real support teams.',
    problem:
      'Small IT teams rely on email threads and spreadsheets to manage support requests, leading to slow resolution times, lost tickets, and zero visibility into agent performance.',
    solution:
      'Built a full ticket management system with submission forms, an agent command dashboard, ticket status workflow from open through to resolved, and priority classification.',
    impact:
      'Directly targets IT support and help desk roles, demonstrating a solid understanding of real enterprise tooling and the ability to build internal productivity systems.',
    tags: ['React', 'MySQL', 'Node.js', 'REST API', 'Tailwind CSS'],
    roles: ['IT Support', 'Software Dev', 'QA'],
    link: 'https://helpdesk-pro-scrr.onrender.com/',
    github: 'https://github.com/WebAlchemistLabs/helpdesk-pro',
    image: '/helpdesk.png',
    featured: true,
    badge: 'IT / Support',
  },
  {
    id: 'booking',
    slug: 'booking',
    title: 'Noir Gym',
    tagline: 'Online gym class and session booking platform',
    description:
      'A production ready booking platform built for a local gym, enabling members to view classes and book training sessions online.',
    problem:
      'The business needed a streamlined online booking flow to reduce manual scheduling and make classes easier to discover and reserve.',
    solution:
      'Designed and developed a mobile first booking experience with class listings, a structured reservation flow, and a clean visual identity aligned with the gym brand.',
    impact:
      'Delivered a client ready product that gives members a clear path to reserve sessions, improves booking conversion, and demonstrates the ability to ship practical business focused web solutions.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Vercel'],
    roles: ['Frontend Dev', 'Software Dev'],
    link: 'https://gym-booking-two.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/Gym_Booking',
    image: '/gym_booking.png',
    featured: true,
    badge: 'Client Work',
  },
]