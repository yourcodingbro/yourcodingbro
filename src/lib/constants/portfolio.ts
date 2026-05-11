export type {
  ProjectType,
  ProjectStatus,
  PortfolioItem,
} from "@/types/portfolio";
import type { PortfolioItem } from "@/types/portfolio";

export const portfolio: PortfolioItem[] = [
  {
    id: "reelu",
    title: "Swipe-Based Job Searching Platform",
    hasImage: false,
    thumbnail: "from-violet to-brand",
    type: ["App Development"],
    status: "Live",
    shortDescription:
      "Fullstack role on a greenfield job platform — built registration, onboarding, a digital CV builder, swipe-based matching, and chat using Next.js and Supabase.",
    description:
      'Reelu is a greenfield job-searching platform built around a digital CV ("storyboard"), swipe-based job matching, and integrated chat. As one of three developers, I owned the entire user-facing layer: registration and onboarding, the interactive CV builder, swipe matching interactions, match-triggered chat, and the Supabase backend integration. The result is a scalable foundation with clear flows for both candidates and companies.',
    tags: [
      "Next.js",
      "Supabase",
      "ShadCN",
      "Tailwind CSS",
      "Swiper",
      "Framer Motion",
    ],
    link: "https://reelu.io",
  },
  {
    id: "barkdate",
    title: "System Rebuild of a Dog Adoption & Event Platform",
    hasImage: false,
    thumbnail: "from-emerald-500 to-accent",
    type: ["App Development", "Web Design"],
    status: "Live",
    shortDescription:
      "Full system rebuild of a dog adoption event platform — redesigned the UI and rebuilt the stack with Next.js and Hasura as system architect and full-stack developer.",
    description:
      "A dog adoption event platform for animal shelters was in need of a complete technical overhaul. Taking on the role of system architect and full-stack developer, I defined the overall architecture and data flow, rebuilt the frontend in Next.js, and implemented the backend layer with Hasura. The redesigned interface makes it easy for shelters to list dogs and manage events, and for visitors to browse and engage — resulting in a modern, scalable platform ready for future growth. The admin interface was later built on top of this architecture by another developer using Retool.",
    tags: ["Next.js", "GraphQL", "Hasura", "Resend", "ShadCN", "Tailwind CSS"],
    link: "https://barkdate.com",
  },
  {
    id: "pdu-sbc",
    title: "Embedded Software for Smart Power Distribution Unit",
    hasImage: false,
    thumbnail: "from-slate-500 to-brand",
    type: ["App Development", "Automation"],
    status: "In Progress",
    shortDescription:
      "Built the software layer for a smart PDU — backend telemetry service, PostgreSQL data layer, gRPC client, and a real-time monitoring frontend.",
    description:
      "A smart Power Distribution Unit (PDU-SBC) required a dedicated software layer for monitoring electrical parameters and device telemetry. Working alongside a hardware engineer who handled CAN bus communication and the gRPC server, I built the backend telemetry service, the PostgreSQL data layer, the gRPC client for inter-service communication, and the frontend monitoring interface. The result is a modular, maintainable system providing near real-time monitoring with reliable inter-service communication and scheduled data updates.",
    tags: [
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "gRPC",
      "Modbus",
      "SNMP",
      "Recharts",
      "ShadCN",
      "Tailwind CSS",
    ],
  },
  {
    id: "sugarmozi",
    title: "System Rebuild of a Legacy Cinema Platform",
    hasImage: false,
    thumbnail: "from-orange-500 to-violet",
    type: ["App Development", "Web Design"],
    status: "Live",
    shortDescription:
      "Lead frontend rebuild of a legacy cinema platform from scratch — defined the architecture, component system, and implemented auth and ordering flows for Sugár Mozi.",
    description:
      "Sugár Mozi was a legacy cinema platform running on outdated technology that needed a full frontend rebuild to support loyalty cards, barcode scanning, and modern user flows. As lead frontend developer in a team of three, I rebuilt the entire frontend from scratch following Figma designs, defined the project structure, linting rules, and component conventions, and implemented the authentication and ordering flows. The rewrite made the codebase significantly easier to maintain, enabled the new business features, and handled the increased traffic after launch.",
    tags: ["Next.js", "Tailwind CSS", "Material UI", "Google Maps"],
    link: "https://sugarmozi.hu",
  },

  {
    id: "mentortools",
    title: "E-Learning Platform UI Modernisation",
    hasImage: false,
    thumbnail: "from-brand to-orange-500",
    type: ["App Development", "SaaS"],
    status: "Live",
    shortDescription:
      "Ongoing UI overhaul of an active SaaS e-learning platform — rolling out a modern, user-friendly interface with zero downtime alongside a live backend team.",
    description:
      "Mentortools is an active SaaS e-learning platform that needed a comprehensive UI overhaul without disrupting live operations. Working as the frontend team, I am modernising the entire interface — making it fresher, cleaner, and more user-friendly — while staying in lockstep with the backend team and their custom API framework to ensure synchronised deployments with zero downtime. Updates roll out continuously as the product remains in active use by its existing user base.",
    tags: ["Next.js", "Material UI", "Vuexy Template", "Tailwind CSS"],
    link: "https://mentortools.com",
  },

  {
    id: "chocoflow",
    title: "WooCommerce Webshop Speed Optimisation",
    hasImage: false,
    thumbnail: "from-amber-500 to-violet",
    type: ["Optimisation"],
    status: "Live",
    shortDescription:
      "Cut a WooCommerce store's load time from 15–20 seconds down to ~3 seconds — analysed bottlenecks, implemented caching, and eliminated render-blocking resources.",
    description:
      "A WooCommerce webshop was taking 15–20 seconds to load, making it nearly unusable for browsing or completing purchases. I analysed the performance bottlenecks, implemented proper caching, optimised front-end asset delivery, and eliminated render-blocking resources. The result: load time dropped to around 3 seconds and the Lighthouse performance score reached 90+, significantly improving usability and overall responsiveness.",
    tags: ["WordPress", "WooCommerce", "WP Rocket"],
    link: "https://chocoflow.com",
  },
];
