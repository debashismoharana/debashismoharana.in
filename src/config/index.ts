import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Debashis Moharana — Software Developer",
  author: "Debashis Moharana",
  description:
    "Software Developer based in Pune, India. I specialize in building scalable web and hybrid mobile applications.",
  lang: "en",
  siteLogo: "/avatar.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/debashismoharana/" },
    { text: "Github", href: "https://github.com/debashismoharana" },
    { text: "Email", href: "mailto:moharana.debashis@gmail.com" },
  ],
  socialImage: "/avatar.jpg",
  canonicalURL: "https://debashismoharana.in",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Debashis Moharana",
    specialty: "Senior Frontend Engineer",
    summary:
      "Senior Frontend Engineer with 10+ years of experience architecting and delivering enterprise-grade web and hybrid mobile applications. Deep specialist in Angular, Ionic, TypeScript, React.js, and Micro-frontend architecture.",
    email: "moharana.debashis@gmail.com",
  },
  experience: [
    {
      company: "Cybage Software",
      position: "Senior Frontend Engineer / System Analyst",
      startDate: "Oct 2019",
      endDate: "Present",
      summary: [
        "Led end-to-end frontend delivery across 3 major enterprise SaaS products, owning requirement gathering, architectural design, effort estimation, UX refinement, and production support for a team of up to 8 engineers.",
        "Architected scalable Micro-frontend modules using Angular and Module Federation, reducing inter-team dependency and enabling parallel feature development across squads.",
        "Drove a 30%+ improvement in sprint predictability by introducing structured sprint ceremonies and UI defect triage processes.",
        "Reduced critical production defects by ~40% by enforcing peer code reviews, mandatory unit testing, and introducing automated regression gates in the CI/CD pipeline.",
        "Implemented JWT-based SSO across web and mobile apps, improving authentication reliability for ~5,000 enterprise users.",
        "Integrated AI-assisted development workflows using GitHub Copilot and Cursor, reducing boilerplate authoring time by an estimated 25%.",
      ],
    },
    {
      company: "Infosys Limited",
      position: "Senior Systems Engineer",
      startDate: "May 2015",
      endDate: "Oct 2019",
      summary: [
        "Built hybrid mobile and web applications from scratch using Angular and Ionic Framework for Big-4 audit firms (PwC) and telecom clients, serving 10,000+ internal enterprise users.",
        "Developed and maintained RESTful API integrations across 6+ internal enterprise services, reducing latency by ~20%.",
        "Architected cross-platform responsive layouts with iframe embedding techniques, achieving consistent rendering across iOS, Android, and desktop environments.",
        "Resolved 50+ complex production defects across sprint cycles, collaborating directly with global client stakeholders.",
        "Contributed to component library standardisation that was reused across 3 internal projects, reducing new feature build time by approximately 30%.",
      ],
    },
  ],
  projects: [
    {
      name: "Eptura / iOffice Workplace",
      summary: "Owned the full frontend development lifecycle for a large-scale Integrated Workplace Management SaaS platform comprising 1 web application and 5 connected mobile applications. Led Angular & Ionic tech stack modernisation (v8 → v17), reducing bundle size by ~35%.",
      image: "/avatar.jpg",
    },
    {
      name: "ElementFleet",
      summary: "Established frontend development standards adopted across a 10-person engineering team. Built and enforced unit testing processes using Jest and Karma, achieving 75%+ code coverage. Engineered key portal features including custom vehicle booking workflows.",
      image: "/avatar.jpg",
    },
    {
      name: "Me@PwC & Audit Client Suite",
      summary: "Architected and built hybrid mobile applications for PwC's internal employee platform, delivering personal data management, out-of-office workflows, and payroll features to 10,000+ users. Executed iOS 12 Upgrade Initiative for iPhone X/XS notch design standards.",
      image: "/avatar.jpg",
    },
    {
      name: "Workspace Booking & GS SRIMS",
      summary: "Developed workspace reservation components using Angular and PrimeNG, enabling date/time selection and booking validation. Built a centralized hardware configuration control UI from scratch for GS SRIMS (British Telecom) seamlessly integrating via iframe.",
      image: "/avatar.jpg",
    }
  ],
  about: {
    description: `
      I’m Debashis, a Senior Frontend Engineer based in Pune, India, with over a decade of experience designing and developing enterprise-grade web and hybrid mobile applications.

      Throughout my career, I've worked on large-scale applications, leading frontend teams and driving architectural modernization using Angular, Ionic, TypeScript, React, and Micro-frontends. I enjoy solving complex performance problems, streamlining CI/CD workflows, and collaborating across teams to deliver premium user experiences.
      
      Outside of tech, I am passionate about yoga, Kalaripayattu, and the precise art of specialty coffee—activities that help me maintain balance and a focus on craftsmanship in everything I do.
    `,
    image: "/avatar.jpg",
  },
};
