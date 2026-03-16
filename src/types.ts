export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'completed';
  deadline: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: string;
  status: 'draft' | 'submitted' | 'under-review' | 'revision' | 'published';
  indexing?: string;
}

export interface Project {
  id: string;
  name: string;
  lead: string;
  status: 'active' | 'completed' | 'on-hold';
  progress: number;
  description: string;
  funding?: string;
  award?: string;
  ip?: string;
  framework?: string;
}

export interface Grant {
  id: string;
  title: string;
  agency: string;
  amount: number;
  status: 'prospect' | 'applied' | 'awarded' | 'rejected';
  year: string;
}

export interface Conference {
  id: string;
  name: string;
  location: string;
  date: string;
  role: string;
  year: string;
}

export interface LeadershipRole {
  id: string;
  role: string;
  conference: string;
  venue: string;
  year: string;
  scope: string;
}

export interface BestPresenterAward {
  id: string;
  conference: string;
  year: string;
  paperTitle: string;
}

export interface StudentProject {
  id: string;
  name: string;
  award: string;
  year: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  body: string;
  significance?: string;
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  institution: string;
  email: string;
  relationship: string;
}

export interface Collaboration {
  id: string;
  partner: string;
  projects: string[];
}
