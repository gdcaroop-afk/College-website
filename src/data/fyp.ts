import fypAnomalyDetectionImg from '@/assets/fyp_anomaly_detection.png'
import fypLearnMsImg from '@/assets/fyp_learn_ms.jpg'
import fypSmartAttendImg from '@/assets/fyp_smart_attend.png'
import fypAlSayyedEmporioImg from '@/assets/fyp_al_sayyed_emporio.jpg'
import fypProctorAiImg from '@/assets/fyp_proctor_ai.png'

export type FYPMember = {
  name: string
  role?: string
}

export type FYPProject = {
  id: string
  group: number
  title: string
  subtitle?: string
  image?: string
  members: FYPMember[]
  githubUrl?: string
  docUrl?: string
  techStack: string[]
  description: string
  features: string[]
  benefits: string[]
  industries: string[]
  status: 'completed' | 'ongoing'
}

export const fypProjects: FYPProject[] = [
  {
    id: 'group-1-anomaly-detection',
    group: 1,
    title: '2D Image Anomaly Detection System',
    subtitle: 'AI-Powered Visual Defect Detection',
    image: fypAnomalyDetectionImg,
    members: [
      { name: 'Muhammad Umer' },
      { name: 'Subhan Ahmad' },
      { name: 'Mehak Mehmood' },
    ],
    githubUrl: 'https://github.com/umer250/2d-image-anomaly-detection.git',
    techStack: ['Python', 'PyTorch', 'FastFlow', 'React', 'Node.js', 'OpenCV', 'Docker'],
    description:
      'An advanced 2D Image Anomaly Detection System leveraging unsupervised deep learning to automatically identify defects, irregularities, and anomalies in product images without requiring labeled training data. The system uses state-of-the-art normalizing flow-based architecture (FastFlow) to learn normal data distributions and flag any deviation as an anomaly, outputting detailed anomaly heatmaps and localization results.',
    features: [
      'Unsupervised anomaly detection — no labeled anomaly data needed',
      'Real-time anomaly scoring and heatmap visualization',
      'Defect localization with bounding box overlay',
      'Multi-class product type support',
      'Web-based dashboard for analysis and history review',
      'PDF export of inspection results',
    ],
    benefits: [
      'Dramatically reduces manual quality inspection costs',
      'Increases inspection speed and accuracy over human review',
      'Works with any 2D product category without retraining',
      'Provides visual, explainable AI outputs for audit trails',
    ],
    industries: [
      'Manufacturing & Quality Control',
      'Food & Agriculture Inspection',
      'Pharmaceutical Production',
      'Electronics & PCB Inspection',
    ],
    status: 'completed',
  },
  {
    id: 'group-2-learn-ms',
    group: 2,
    title: 'LearnMS — Learning Management System',
    subtitle: 'Modern Academic & Classroom Management Platform',
    image: fypLearnMsImg,
    members: [
      { name: 'Hafiz Saad' },
      { name: 'Muhammad Sarfaraz' },
      { name: 'Kamran Arshad' },
    ],
    githubUrl: 'https://github.com/hafizsaad5678/LMS',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    description:
      'LearnMS is a comprehensive web-based Learning Management System designed to streamline academic workflows for colleges and schools. Featuring an intuitive teacher dashboard with live analytics, attendance recording, class schedules, assignments creation, grading systems, online quizzes, and student performance metrics tracking.',
    features: [
      'Interactive Teacher Hub and class management dashboard',
      'Real-time student performance analytics & score distribution charts',
      'Assignment submission tracking and completion rates',
      'Integrated class timetable, attendance and online quizzes',
      'Course materials repository and file distribution',
      'Student profile management and academic reporting',
    ],
    benefits: [
      'Centralizes academic administration into a unified digital portal',
      'Empowers instructors with instant analytics on class engagement',
      'Automates assignment grading workflows and progress monitoring',
      'Improves student accountability with clear timelines and submission status',
    ],
    industries: [
      'Higher Education & Colleges',
      'Schools & Academies',
      'Online Tutoring Centers',
      'Corporate Training Institutes',
    ],
    status: 'completed',
  },
  {
    id: 'group-3-al-sayyed-erp',
    group: 3,
    title: 'Al Sayyed Emporio — ERP System',
    subtitle: 'Enterprise Resource Planning & Business Management System',
    image: fypAlSayyedEmporioImg,
    members: [
      { name: 'Nafeel Aqqib (Solo Developer)' },
    ],
    githubUrl: 'https://github.com/Naf-Mughal/al-sayyed-erp',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Tailwind CSS'],
    description:
      'Al-Sayyed ERP is an all-in-one business resource planning software engineered to digitize commerce operations, inventory control, billing, client ledgers, and financial transaction records. Developed independently by Nafeel Aqqib as a complete full-stack enterprise platform.',
    features: [
      'Comprehensive inventory management and stock level tracking',
      'Point of Sale (POS) and invoice generation',
      'Supplier and customer account ledger management',
      'Sales analytics, revenue breakdowns, and expense monitoring',
      'Role-based access control and secure audit trails',
    ],
    benefits: [
      'Streamlines daily business accounting and eliminates paper ledgers',
      'Real-time tracking of inventory stock prevents shortages and losses',
      'Provides accurate financial reports for sound business decisions',
      'Scalable architecture designed for growing retail and wholesale enterprises',
    ],
    industries: [
      'Retail & Wholesale Enterprises',
      'Supply Chain & Distribution',
      'Small & Medium Businesses (SMBs)',
      'Trading & Manufacturing Firms',
    ],
    status: 'completed',
  },
  {
    id: 'group-4-smart-attend',
    group: 4,
    title: 'SmartAttend — AI Facial Recognition Attendance',
    subtitle: 'Effortless & Automated Attendance System',
    image: fypSmartAttendImg,
    members: [
      { name: 'Muhammad Azhar Zia' },
      { name: 'Muhammad Junaid Ali' },
      { name: 'Ammara Awan' },
    ],
    githubUrl: 'https://github.com/AzharZia17/FYP',
    techStack: ['Python', 'OpenCV', 'Face Recognition AI', 'React', 'FastAPI', 'SQLite'],
    description:
      'SmartAttend transforms how educational institutions and corporate organizations track presence through automated, touchless facial recognition technology. Eliminates proxy attendances, manual roll calls, and tedious paperwork with real-time biometric verification.',
    features: [
      'Real-time face detection and instant identity verification',
      'Anti-spoofing and liveness detection algorithms',
      'Automated presence logging and time-stamp recording',
      'Modern web portal for admins, teachers, and organization managers',
      'Comprehensive attendance analytics, absence alerts, and report exports',
    ],
    benefits: [
      'Reduces attendance marking time from minutes to split seconds',
      'Completely prevents proxy attendance and buddy punching',
      '100% touchless and hygienic operation',
      'Generates automated attendance reports for administration',
    ],
    industries: [
      'Universities & Colleges',
      'Schools & Educational Institutions',
      'Corporate Offices & Co-working Spaces',
      'Government & Public Sector Facilities',
    ],
    status: 'completed',
  },
  {
    id: 'group-5-proctor-ai',
    group: 5,
    title: 'ProctorAI — AI Exam Cheating Detection System',
    subtitle: 'Secure Exams with Intelligent Automated Monitoring',
    image: fypProctorAiImg,
    members: [
      { name: 'Abdul Hadi' },
      { name: 'Kainat' },
      { name: 'Eman' },
    ],
    githubUrl: 'https://github.com/AlexaAssistant018/AI-Cheating_Detection-system.git',
    techStack: ['Python', 'OpenCV', 'PyTorch', 'MediaPipe', 'YOLO', 'React', 'FastAPI'],
    description:
      'ProctorAI is an advanced AI-powered automated examination proctoring system engineered to detect cheating attempts in real-time. Leveraging computer vision, face verification, gaze estimation, head pose tracking, multi-person detection, and prohibited object recognition to ensure exam integrity in both remote and computer-lab examinations.',
    features: [
      'Real-time AI detection of cheating attempts with 99% accuracy',
      'Head pose tracking and eye gaze deviation monitoring',
      'Multi-person presence and unauthorized device detection',
      'Instant alert response within <3 seconds to examiners',
      'Comprehensive exam audit video logs and violation timeline',
      'Secure exam browser lock and web portal for institutions',
    ],
    benefits: [
      'Prevents academic dishonesty in online and digital assessments',
      'Reduces proctoring staffing requirements while boosting vigilance',
      'Operates seamlessly 24/7 with low-latency alert triggers',
      'Generates defensible, timestamped audit reports for academic boards',
    ],
    industries: [
      'Universities & Degree Colleges',
      'Standardized Testing Boards',
      'Online Certification Providers',
      'Corporate Hiring & Assessment Platforms',
    ],
    status: 'completed',
  },
]
