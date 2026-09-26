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
    { text: "Instagram", href: "https://www.instagram.com/debashis_moharana/" },
    { text: "Email", href: "mailto:moharana.debashis@gmail.com" },
  ],
  socialImage: "/avatar.jpg",
  canonicalURL: "https://debashismoharana.in",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Debashis Moharana",
    specialty: "Software Developer",
    summary:
      "Software Developer with 10+ years of experience specializing in building scalable web and hybrid mobile applications.",
    email: "moharana.debashis@gmail.com",
  },
  experience: [
    {
      company: "CYBAGE SOFTWARE",
      position: "System Analyst",
      startDate: "2019",
      endDate: "Present",
      summary: [
        "Managed the full front-end development lifecycle, including requirement gathering, gap analysis, UX refinement, effort estimation, and production issue resolution, while collaborating with cross-functional stakeholders for efficient decision-making.",
        "Led a team of 8 front-end developers in the successful delivery of over 20 Agile sprints, focusing on sprint predictability, UI defect reduction, and code quality enforcement.",
      ],
    },
    {
      company: "INFOSYS LIMITED",
      position: "Senior Systems Engineer",
      startDate: "2015",
      endDate: "2019",
      summary: [
        "Contributed to the design, development, and maintenance of hybrid mobile applications (Angular/Ionic) and web solutions for client projects.",
        "Ensured successful project delivery by resolving complex technical defects, participating in sprint demos, and collaborating with cross-functional teams.",
      ],
    },
  ],
  projects: [],
  about: {
    description: `
      I’m Debashis, a Software Developer based in Pune, India, with over a decade of experience designing and developing enterprise-grade web and hybrid mobile applications.

      Throughout my career, I've worked on large-scale applications, leading frontend teams and driving architectural modernization using Angular, Ionic, TypeScript, React, and Micro-frontends. I enjoy solving complex performance problems, streamlining CI/CD workflows, and collaborating across teams to deliver premium user experiences.
      
      Outside of tech, I am passionate about yoga, Kalaripayattu, and the precise art of specialty coffee—activities that help me maintain balance and a focus on craftsmanship in everything I do.
    `,
    image: "/avatar.jpg",
  },
};
