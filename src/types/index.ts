export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
  contactFormKey?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  theOtherSide: TheOtherSideProps;
}

export interface TheOtherSideProps {
  items: {
    title: string;
    description: string;
    image?: string;
    link?: string;
  }[];
}

export interface HeroProps {
  name: string;
  professionalSpecialty: string;
  professionalSubtitle?: string;
  personalSpecialty: string;
  professionalSummary: string;
  personalSummary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}


export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
