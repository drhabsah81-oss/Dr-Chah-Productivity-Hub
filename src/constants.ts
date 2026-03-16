import { Task, Publication, Project, Grant, Conference, LeadershipRole, BestPresenterAward, StudentProject, Award, Reference, Collaboration } from './types';

export const PUBLICATIONS: Publication[] = [
  { id: '1', title: 'Bridging the Gap: Examining AI Awareness and Adoption among Higher Education Students using PLS-SEM', journal: 'TECHON 2025 Proceedings', year: '2025', status: 'published', indexing: 'e-ISSN 3096-8090' },
  { id: '2', title: 'Keberkesanan Pendekatan CDIO dalam Pembangunan Aplikasi Mukah Trip Trekker (MTT) untuk Ekopelancongan Inklusif', journal: 'TECHON 2025 Proceedings', year: '2025', status: 'published', indexing: 'e-ISSN 3096-8090' },
  { id: '3', title: 'Barriers and Facilitators of Digital Adoption among Microentrepreneurs in Mukah, Sarawak', journal: 'TECHON 2025 Proceedings', year: '2025', status: 'published', indexing: 'e-ISSN 3096-8090' },
  { id: '4', title: 'EcoPoly.Go:', journal: 'TECHON 2025 Proceedings', year: '2025', status: 'published', indexing: 'e-ISSN 3096-8090' },
  { id: '5', title: 'Integrasi Pembelajaran Imersif berasaskan Metaverse dalam TVET: Kajian Kes Pelaksanaan MetaSPACE', journal: 'TECHON 2025 Proceedings', year: '2025', status: 'published', indexing: 'e-ISSN 3096-8090' },
  { id: '6', title: 'Evaluation of the Implementation Policy of Menpan RB Regulation No. 3 of 2023 on Bureaucratic Reform Index', journal: 'Asian Journal of Social and Humanities', year: '2025', status: 'published', indexing: 'e-ISSN 2963-04946' },
  { id: '7', title: 'Development of a MukahXplore App for Mukah Cultural and Tourism Experiences', journal: 'APS Proceedings', year: '2025', status: 'published', indexing: 'DOI: 10.5281/zenodo.17678580' },
  { id: '8', title: 'Enhancing Tourism Intent Through Immersive Technologies: An Empirical Study of AR/VR Applications', journal: '7th IRCHST Proceedings', year: '2025', status: 'published', indexing: 'e-ISSN 2821-3084' },
  { id: '9', title: 'The Impact of Halal Tourism Digital Marketing Content on Purchase Intention', journal: 'Springer Handbook of Tourism & Hospitality Marketing', year: '2025', status: 'published', indexing: 'Springer' },
  { id: '10', title: 'Membina Kesedaran Alam Sekitar Melalui Tindakan Hijau: Program Pembersihan Pantai Trombol', journal: 'PolyCC Sustainability Award Proceedings', year: '2025', status: 'published', indexing: 'pp. 414-421' },
  { id: '11', title: 'Edukasi Implementasi Peta Wisata Halal Pada Usaha Penyedia Jasa Pariwisata', journal: 'Bemas: Jurnal Bermasyarakat', year: '2024', status: 'published', indexing: 'P-ISSN 2745-5866' },
  { id: '12', title: 'Gamification via Kahoot!: A Motivated Learning Tool for TVET Students', journal: 'Borneo Engineering & Advanced Multidisciplinary International Journal', year: '2024', status: 'published', indexing: 'Vol 3, Issue 2, pp. 40-48' },
  { id: '13', title: 'Pigeonhole Indicator: Streaming Document Management and Enhancing Security', journal: 'MPCC Sustainable Award Proceedings', year: '2024', status: 'published', indexing: 'eISBN 978-967-2904-82-3' },
  { id: '14', title: 'Kajian Transformasi Pembelajaran Dengan Kecerdasan Buatan AI di IPT', journal: 'ICETSS Proceedings', year: '2024', status: 'published', indexing: 'eISBN 978-629-7710-01-3' },
  { id: '15', title: 'Revitalizing Radiation: The Role of Tradilook Apps in Mukah Cultural Preservation', journal: 'APS Proceedings', year: '2024', status: 'published', indexing: 'International Journal' },
  { id: '17', title: 'Barriers and Facilitators of Digital Adoption among Microentrepreneurs in Mukah, Sarawak', journal: 'IJARBSS', year: '2025', status: 'published', indexing: 'Vol. 14(1), pp. 3168-3176' },
  { id: '19', title: 'The factor affecting academic staff satisfaction at TVET institutions', journal: 'Borneo Engineering & Advanced Multidisciplinary International Journal', year: '2023', status: 'published', indexing: 'Special Issue (TECHON 2023)' },
  { id: '20', title: 'The Adoption of Microsoft Teams Among Lecturers of Polytechnic Kuching Sarawak', journal: 'Borneo Engineering & Advanced Multidisciplinary International Journal', year: '2023', status: 'published', indexing: 'Special Issue (TECHON 2023)' },
  { id: '21', title: 'Digitalization Role of the Front Office in the Banking Business, Impact and Implementation', journal: '6th FIRST T3 2022 International Conference', year: '2023', status: 'published', indexing: 'Atlantis Press' },
  { id: '22', title: 'Employer satisfaction study on graduates', journal: '6th FIRST T3 2022 International Conference', year: '2023', status: 'published', indexing: 'Springer Nature' },
  { id: '23', title: 'The Awareness Review of Muslim Friendly Tourism Map Through Utilization of Promotional Media', journal: '6th FIRST T3 2022 International Conference', year: '2023', status: 'published', indexing: 'Springer Nature' },
  { id: '24', title: 'The effect of the digitalization system on customer service performance in the banking business during post-pandemic', journal: 'Asean International Journal of business', year: '2023', status: 'published', indexing: 'Vol 2, Issue 1 pp76-84' },
];

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    name: 'MukahXplore', 
    lead: 'Dr. Habsah', 
    status: 'active', 
    progress: 85, 
    description: 'AR-Based Experiential Learning Innovation. Transforms tourism education by allowing students to create AR content for cultural narratives.',
    funding: 'T-ARGS Grant (RM 78,995)',
    framework: 'Experiential Learning Theory (Kolb) + Place-Based Learning'
  },
  { 
    id: '2', 
    name: 'MetaSPACE', 
    lead: 'Dr. Habsah', 
    status: 'active', 
    progress: 70, 
    description: 'Metaverse Learning Environment for Immersive TVET Education. Virtual technical workshops for remote practice and equipment simulations.',
    award: 'International Silver Medal, IBIEC 2025'
  },
  { 
    id: '3', 
    name: 'E-UPIK', 
    lead: 'Dr. Habsah', 
    status: 'completed', 
    progress: 100, 
    description: 'Research Management Information System. Transforms abstract research management concepts into hands-on digital portfolio development.',
    ip: 'MYIPO Filing'
  },
  { 
    id: '4', 
    name: 'Educational Gamification', 
    lead: 'Dr. Habsah', 
    status: 'completed', 
    progress: 100, 
    description: 'Implementation of Kahoot! Integration for Investment Management and Business Finance courses.'
  },
  { 
    id: '5', 
    name: 'EcoPoly.Go', 
    lead: 'Dr. Habsah', 
    status: 'active', 
    progress: 60, 
    description: 'Sustainability Education through Innovation. Collaboration with UiTM Mukah for sustainable business models in rural Sarawak.'
  },
];

export const GRANTS: Grant[] = [
  { id: '1', title: 'T-ARGS Grant', agency: 'JPPKK', amount: 79000, status: 'awarded', year: '2024' },
  { id: '2', title: 'N57 Grant', agency: 'Sarawak Government', amount: 80000, status: 'awarded', year: '2023' },
];

export const CONFERENCES: Conference[] = [
  { id: '1', name: 'EMAA Morocco', location: 'Morocco', date: '2025', role: 'Keynote Speaker', year: '2025' },
  { id: '2', name: 'ICOMAN 2025', location: 'International', date: '2025', role: 'Keynote Speaker', year: '2025' },
  { id: '3', name: 'VICETI Indonesia', location: 'Indonesia', date: '2024', role: 'Invited Speaker', year: '2024' },
  { id: '4', name: 'MBIC', location: 'Malaysia-Indonesia', date: '2024', role: 'Invited Speaker', year: '2024' },
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  { id: '1', role: 'Deputy Chairman', conference: '8th TECHON International Conference', venue: 'Politeknik Mukah Sarawak', year: '2025', scope: 'International' },
  { id: '2', role: 'Deputy Chairman', conference: '5th IBIEC', venue: 'Politeknik Negeri Jakarta, Indonesia', year: '2025', scope: 'International' },
  { id: '3', role: 'Advisor', conference: 'ICETSS 2024', venue: 'Politeknik Negeri Medan, Indonesia', year: '2024', scope: 'International' },
  { id: '4', role: 'Head of Grant', conference: 'TECHON 2023', venue: 'Business Event Sarawak', year: '2023', scope: 'National/International' },
];

export const BEST_PRESENTER_AWARDS: BestPresenterAward[] = [
  { id: '1', conference: 'TECHON 2025', year: '2025', paperTitle: 'Bridging the Gap: Examining AI Awareness and Adoption among Higher Education Students using PLS-SEM' },
  { id: '2', conference: 'APS 2025', year: '2025', paperTitle: 'Development of a MukahXplore App for Mukah Cultural and Tourism Experiences' },
  { id: '3', conference: 'IBIEC 2025', year: '2025', paperTitle: 'Integrasi Pembelajaran Imersif berasaskan Metaverse dalam TVET: Kajian Kes Pelaksanaan MetaSPACE' },
];

export const TASKS: Task[] = [
  { id: '1', title: 'TECHON 2025 Final Report', deadline: '2025-04-15', priority: 'high', status: 'todo' },
  { id: '2', title: 'T-ARGS Grant Milestone 2', deadline: '2025-05-01', priority: 'medium', status: 'todo' },
  { id: '3', title: 'MYIPO Filing for MetaSPACE', deadline: '2025-03-30', priority: 'high', status: 'in-progress' },
];

export const ANALYTICS_DATA = [
  { name: '2020', citations: 120, hindex: 8 },
  { name: '2021', citations: 280, hindex: 12 },
  { name: '2022', citations: 450, hindex: 15 },
  { name: '2023', citations: 780, hindex: 19 },
  { name: '2024', citations: 1100, hindex: 22 },
  { name: '2025', citations: 1284, hindex: 24 },
];

export const EDUCATION = [
  { degree: 'PhD in Entrepreneurship', institution: 'University Malaysia Sarawak (UNIMAS)', year: '2021' },
  { degree: 'Master of Corporate Business Administration', institution: 'UNIMAS', year: '2015' },
  { degree: 'Bachelor of Business Administration (Finance)', institution: 'UiTM', year: '2008' },
  { degree: 'Diploma in Technical Education', institution: 'MPTI', year: '2004' },
];

export const AWARDS: Award[] = [
  { id: '1', title: 'TVET Appreciation Award (Lecturer Category)', year: '2024', body: 'Ministry of Higher Education / JPPKK', significance: 'National recognition for outstanding contributions to TVET pedagogy and innovation.' },
  { id: '2', title: 'Top 3 Finalist, Director General\'s Special Award', year: '2024', body: 'JPPKK', significance: 'Recognition among top three educators nationwide for research and innovation.' },
  { id: '3', title: 'PMU Academia Award (Research & Innovation)', year: '2023', body: 'Politeknik Mukah Sarawak' },
  { id: '4', title: 'Excellent Service Award (APC)', year: '2022', body: 'Malaysian Public Service Commission' },
];

export const COLLABORATIONS: Collaboration[] = [
  { 
    id: '1', 
    partner: 'Politeknik Negeri Sriwijaya, Indonesia', 
    projects: ['Creative Economy Product Packaging Innovation (2025)', 'Sustainable Tourism A3 Thematic Program (2024)', 'Web-Based Learning in TVET Institutions (2023)'] 
  },
  { 
    id: '2', 
    partner: 'Politeknik Negeri Pontianak (POLNEP)', 
    projects: ['Guest Lecturer Program (2024)', 'International Entrepreneurship Program', 'Solar Lighting CSR Project'] 
  },
];

export const REFERENCES: Reference[] = [
  { id: '1', name: 'Suhaili bin Aleh, P.B.K', position: 'Director', institution: 'Politeknik Mukah Sarawak', email: 'pengarah@pmu.edu.my', relationship: 'Immediate academic supervisor' },
  { id: '2', name: 'Profesor Dr. Mohamad bin Jais', position: 'Dean / Professor', institution: 'UNIMAS', email: 'jmohamad@unimas.my', relationship: 'Doctoral supervisor and collaborator' },
  { id: '3', name: 'DR. Sari Lestari Z. Ridho', position: 'Head of Research Grant', institution: 'Politeknik Negeri Sriwijaya', email: 'sarilestari@polsri.ac.id', relationship: 'International research partner' },
];

export const STUDENT_PROJECTS: StudentProject[] = [
  { id: '1', name: 'Mukah Trip Trekker (MTT) App', award: 'Gold Medal, TECHON 2024', year: '2024' },
  { id: '2', name: 'Tradilook App', award: 'Silver Medal, APS 2024', year: '2024' },
  { id: '3', name: 'Pigeonhole Indicator', award: 'Bronze Medal, MPCC 2024', year: '2024' },
];

export const COURSES_TAUGHT = [
  'Investment Management',
  'Business Finance',
  'Entrepreneurship',
  'Research Methodology'
];

export const PERSONAL_GOALS = [
  { id: '1', title: 'Family Weekend Getaway', deadline: '2025-06-15', status: 'planned' },
  { id: '2', title: 'Daily Meditation (20 mins)', deadline: 'Daily', status: 'ongoing' },
  { id: '3', title: 'Read 2 Non-Academic Books', deadline: '2025-04-30', status: 'in-progress' },
];

export const PROFESSIONAL_PROFILE = {
  summary: 'Principal Lecturer (DH13) and Head of Research, Innovation & Commercialization Unit (UPIK) at Politeknik Mukah Sarawak. Academic researcher and innovation leader with a PhD in Entrepreneurship, specializing in TVET pedagogy and immersive learning technologies.',
  competencies: [
    'TVET Pedagogy & Curriculum Development',
    'Immersive Learning (AR/VR/Metaverse)',
    'Quantitative Research (PLS-SEM)',
    'Innovation Management & IP Commercialization',
    'International Academic Diplomacy'
  ],
  philosophy: 'Learning Through Innovation: TVET must transcend traditional didactic instruction to embrace experiential, technology-mediated learning.',
  links: {
    googleScholar: 'https://scholar.google.com/citations?user=YOUR_ID',
    researchGate: 'https://www.researchgate.net/profile/Habsah-Aleh',
    linkedIn: 'https://www.linkedin.com/in/habsah-aleh',
    googleSite: 'https://sites.google.com/pmu.edu.my/upik-pmu/utama',
    instagram: 'https://instagram.com/achenhabsah'
  },
  teachingPrinciples: [
    'Authentic Assessment and Real-World Application',
    'Digital Fluency as Core Competency',
    'Culturally Responsive Pedagogy',
    'Entrepreneurial Mindset Development'
  ]
};
