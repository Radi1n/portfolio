import type { Project } from '@/types'

// Screenshots: add a file under public/images/ and set image to
// { src: '/images/name.png', alt: 'Describe the screenshot' }.
// A GitHub / Live demo button only renders when its URL is set.
export const projects: Project[] = [
  {
    id: 'docupilot',
    title: 'DocuPilot',
    description:
      'Arabic/English RAG document assistant. Upload PDFs and chat with them, with page-level source citations and streamed answers.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL (pgvector)', 'vLLM'],
    featured: true,
    image: { src: '/images/docupilot.webp', alt: 'DocuPilot chat with cited answers' },
    github: null,
    demo: null,
  },
  {
    id: 'device-management-system',
    title: 'Device Management System (KAMC)',
    description:
      "Device, inventory, and maintenance tracking with role-based access and CSV/Excel reports, used by the hospital's IT department.",
    tech: ['PHP', 'MySQL', 'JavaScript'],
    image: { src: '/images/kamc.webp', alt: 'KAMC device management system dashboard' },
    github: null,
    // Internal hospital system: there may never be a public demo.
    demo: null,
  },
  {
    id: 'yusr',
    title: 'Yusr',
    description:
      'E-learning platform (graduation project, team of 5) with course management, one-to-one booking, and Webex live sessions.',
    tech: ['Next.js', 'Laravel', 'MySQL', 'Webex API'],
    image: { src: '/images/yusr.webp', alt: 'Yusr dashboard screenshot' },
    github: null,
    demo: null,
  },
    {
    id: 'onboard',
    title: 'Onboard',
    description:
      'Role-based employee onboarding system. HR, IT, managers and new hires follow one approval workflow, with document review, notifications and an audit log.',
    tech: ['Next.js', 'TypeScript', 'Laravel', 'MySQL', 'Tailwind CSS'],
    image: { src: '/images/onboard.webp', alt: 'Onboard dashboard screenshot' },
    github: null,
    demo: null,
  },
  {
    id: 'bookbloom',
    title: 'BookBloom',
    description:
      'Mobile app for reading and writing stories, with comments and personal book lists.',
    tech: ['Flutter', 'Firebase'],
    image: { src: '/images/bookbloom.webp', alt: 'BookBloom app screenshot' },
    github: null,
    demo: null,
  },
   {
    id: 'mammogram-analysis',
    title: 'Mammogram Analysis Prototype',
    description: 'Python pipeline for extracting tumor regions of interest from medical images.',
    tech: ['Python', 'OpenCV'],
    prototype: true,
    image: { src: '/images/mammogram.webp', alt: 'Mammogram analysis pipeline: input, preprocess, segment, extract ROI' },
    github: null,
    demo: null,
  },
  {
    id: 'alzheimers-risk-prediction',
    title: "Alzheimer's Risk Prediction",
    description:
      "Machine learning model that predicts Alzheimer's risk from clinical and MRI-derived features (OASIS dataset), with an interactive Streamlit dashboard. Reaches 88.6% accuracy and 0.95 AUC-ROC.",
    tech: ['Python', 'Streamlit', 'Logistic Regression', 'SVM'],
    image: {
      src: '/images/alzheimers.webp',
      alt: "Alzheimer's Risk Prediction dashboard screenshot",
    },
    // TODO: add the GitHub repository URL
    github: null,
    // TODO: add the live demo URL
    demo: null,
  },
 
]
