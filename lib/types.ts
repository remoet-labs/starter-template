export interface DataField {
  value: string | null;
  isPublic: boolean;
}

export interface UserProfile {
  updatedAt: string;
  isPublic: boolean;
  slug: string | null;
  name: DataField;
  avatarUrl: DataField;
  phone: DataField;
  url: DataField;
  summary: DataField;
  location: DataField;
  githubUrl: DataField;
  facebookUrl: DataField;
  twitterUrl: DataField;
  linkedinUrl: DataField;
  youtubeUrl: DataField;
}

export interface UserJob {
  createdAt: string;
  updatedAt: string;
  title: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  isPublic: boolean;
  companyName: string;
  technologies: string[];
  description: string | null;
  isRemote: boolean;
  companyUrl: string;
}

export interface UserProject {
  title: string;
  shortDescription: string;
  technologies: string[];
  isCurrent: boolean;
  isRemote: boolean;
  isOpenSource: boolean;
  description: string | null;
  role: string | null;
  startDate: string | null;
  endDate: string | null;
  repoUrl: string | null;
  demoUrl: string | null;
}

export interface UserEducation {
  institution: string;
  institutionUrl: string | null;
  studyLevel: string | null;
  fieldOfStudy: string | null;
  startDate: string | null;
  endDate: string | null;
  isCurrent: boolean;
  description: string | null;
}

export interface LinkTreeLink {
  id: string;
  label: string;
  url: string;
}

export interface LinkTree {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  links: LinkTreeLink[];
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioData {
  createdAt: string;
  updatedAt: string;
  ghId: number;
  email: string;
  profile: UserProfile;
  jobs: UserJob[];
  projects: UserProject[];
  linkTrees: LinkTree[];
  education: UserEducation[];
}
