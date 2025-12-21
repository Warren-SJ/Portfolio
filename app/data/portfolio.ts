export type Profile = {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  objective: string;
};

export type ProjectCategory = 'ai' | 'hardware' | 'embedded';

export type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  repo: string;
};

export type EducationItem = {
  inst: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  details: string[];
};

export type CertificationIcon = 'terminal' | 'cpu' | 'brain' | 'zap' | 'microscope' | 'code' | 'award';

export type CertificationItem = {
  name: string;
  link?: string;
};

export type CertificationGroup = {
  category: string;
  icon: CertificationIcon;
  items: CertificationItem[];
};

export const profile: Profile = {
  name: 'Warren Samuelson Jayakumar',
  title: 'Electronic & Telecommunication Engineer',
  subtitle: 'Hardware Accelerator Design | Physical AI',
  email: 'warrenjayakumar@outlook.com',
  github: 'https://github.com/Warren-SJ',
  linkedin: 'https://linkedin.com/in/Warren-Jayakumar',
  objective:
    'I leverage my skills in the field of Electronic and Telecommunication engineering to innovate solutions for real-world problems. Passionate about hardware accelerator design for AI and domain-specific hardware accelerators.',
};

export const projects: Project[] = [
  {
    title: 'Agentic AI for RF Systems',
    date: 'July 2025 - Present',
    description:
      'Co-designing an agentic AI system to control RF chains at a hardware level. Bridging the gap between AI advances and the physical layer of telecommunications.',
    tags: ['AI', 'RF', 'Hardware-Software Co-design'],
    category: 'ai',
    repo: 'agentic-rf-ai',
  },
  {
    title: 'SIMD Processor for CNN Acceleration',
    date: 'Oct - Dec 2025',
    description:
      'Designed a SIMD processor for accelerating convolutional neural networks. Developed the ISA, microarchitecture, and individual convolution accelerators.',
    tags: ['Computer Architecture', 'CNN', 'SIMD', 'SystemVerilog'],
    category: 'hardware',
    repo: 'simd-cnn-accelerator',
  },
  {
    title: 'RISC-V Pipelined Processor',
    date: 'July 2024 - Jan 2025',
    description:
      'Designed a full RISC-V pipelined processor using SystemVerilog supporting R,U,I,S,J, and SB type instructions of the RV32I set.',
    tags: ['SystemVerilog', 'RISC-V', 'Digital Design'],
    category: 'hardware',
    repo: 'riscv-pipelined',
  },
  {
    title: 'RISC-V Single Cycle Processor',
    date: 'July 2024 - Jan 2025',
    description:
      'Designed a RISC-V single cycle processor using System Verilog. Capable of performing RV32I base instructions.',
    tags: ['SystemVerilog', 'RISC-V', 'CPU'],
    category: 'hardware',
    repo: 'riscv-single-cycle',
  },
  {
    title: 'Floating Point Unit Design',
    date: 'July 2024 - Jan 2025',
    description:
      'Designed a floating point unit using SystemVerilog. Handles additions, subtractions, multiplications, and divisions.',
    tags: ['Digital Logic', 'FPU', 'SystemVerilog'],
    category: 'hardware',
    repo: 'fpu-design',
  },
  {
    title: 'SuperStart 1.0',
    date: 'March - Aug 2023',
    description:
      'Co-designed a vehicle jump starter using supercapacitors. Features analog charging/discharging circuits and custom PCB.',
    tags: ['Power Electronics', 'Altium', 'SolidWorks'],
    category: 'embedded',
    repo: 'superstart-1.0',
  },
  {
    title: 'Battery Profiler',
    date: 'July - Nov 2023',
    description:
      'Device capable of discharging batteries at constant current/power while measuring voltage and plotting discharge curves.',
    tags: ['Embedded Systems', 'Power Electronics', 'UI Design'],
    category: 'embedded',
    repo: 'battery-profiler',
  },
  {
    title: 'Analog Solar Tracker',
    date: 'July - Nov 2023',
    description:
      'Solar tracker using only analog components, focused on enhancing knowledge in PID control and PCB design.',
    tags: ['PID Control', 'Analog Design', 'PCB'],
    category: 'embedded',
    repo: 'analog-solar-tracker',
  },
  {
    title: 'Robot Competition Design',
    date: 'July - Nov 2023',
    description:
      'Designed and produced an autonomous robot for the EN-3533 competition, integrating complex sensor suites and actuators.',
    tags: ['Robotics', 'Sensors', 'Actuators'],
    category: 'embedded',
    repo: 'robot-design-en3533',
  },
];

export const education: EducationItem[] = [
  {
    inst: 'University of Moratuwa',
    degree: 'B.Sc. Engineering (Hons.)',
    field: 'Electronic and Telecommunication Engineering',
    period: '2022 - 2026 (Ongoing)',
    grade: 'GPA: 3.92 / 4.00',
  },
  {
    inst: 'Wesley College, Colombo',
    degree: 'G.C.E. Advanced Level',
    field: "Physical Science Stream",
    period: '2020',
    grade: "3A's with Z-Score 2.7040",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'London Stock Exchange Group',
    role: 'Engineering Intern',
    period: 'December 2024 - May 2025',
    details: [
      'Finetuned language models for estimating effort using story points.',
      'Developed a comprehensive suite for testing various databases.',
    ],
  },
  {
    company: 'PE Plus (Pvt.) Ltd.',
    role: 'Engineering Trainee',
    period: 'March 2021 - Feb 2022',
    details: [
      'Prepared maintenance schedules for factory machinery.',
      'Co-ordinated maintenance activities and monitored factory efficiency.',
    ],
  },
];

export const volunteerText =
  'Also involved in: Book Donation Campaigns | Voice Donation | EXMO Facilitator | SLRC Organizing';

export const certifications: CertificationGroup[] = [
  {
    category: 'Foundations & CS',
    icon: 'terminal',
    items: [
      { name: 'Harvard CS50: Introduction to Computer Science', link: 'https://certificates.cs50.io/3d4e8766-654e-4d9c-999e-66e029d5e165.pdf?size=letter&' },
      { name: "CS50's Intro to AI with Python", link: 'https://certificates.cs50.io/f1925e8c-e439-4264-88bd-694ec0dc3493.pdf?size=letter' },
    ],
  },
  {
    category: 'FPGA & Embedded',
    icon: 'cpu',
    items: [
      { name: 'Introduction to FPGA Design for Embedded Systems', link: 'https://coursera.org/share/ddf51a2986acbb2ec8be7b73c8baabd4' },
      { name: 'Hardware Description Languages for FPGA Design', link: 'https://coursera.org/share/295c658d329ab37c4cf234516ca457ae' },
    ],
  },
  {
    category: 'Machine Learning',
    icon: 'brain',
    items: [
      { name: 'Machine Learning Specialization', link: 'https://coursera.org/share/39570f1ccf6cb731cf6a8d4cacf3b1f5' },
      { name: 'Supervised ML: Regression and Classification', link: 'https://coursera.org/share/f995aac64c48a483fa6ff1e43e8af3cf' },
      { name: 'Advanced Learning Algorithms', link: 'https://coursera.org/share/3a2d091871a9ca460688e8c844eaf056' },
      { name: 'Unsupervised Learning & Recommenders', link: 'https://coursera.org/share/011004b7a5dd074bd7e52f27adec37a9' },
    ],
  },
  {
    category: 'Deep Learning',
    icon: 'zap',
    items: [
      { name: 'Deep Learning Specialization', link: 'https://coursera.org/share/a3f0fca22d2251d79e5e213a44bd547c' },
      { name: 'Neural Networks and Deep Learning', link: 'https://coursera.org/share/73e20d135c259e75927b9ec940e5fb37' },
      { name: 'Improving Deep Neural Networks', link: 'https://coursera.org/share/ce88a3a3baa9ee0160038325bb96d77e' },
      { name: 'Structuring Machine Learning Projects', link: 'https://coursera.org/share/1dcafc7ebd69de2ca4c46dac16610448' },
      { name: 'Convolutional Neural Networks', link: 'https://coursera.org/share/03cdcabe3bc4a5653ac0feea9ac122b9' },
      { name: 'Sequence Models', link: 'https://coursera.org/share/ce1a3abea24d1b79a27f630db50ae4ee' },
    ],
  },
  {
    category: 'Computer Vision & Generative AI',
    icon: 'microscope',
    items: [
      { name: 'OpenCV Bootcamp', link: 'https://courses.opencv.org/certificates/86a33fa1e804434aada2b717a33157f3' },
      { name: 'Exploring Adversarial Machine Learning', link: 'https://learn.nvidia.com/certificates?id=_zcg8KvKTKq1gkad_LmmMg' },
      { name: 'Generative AI with Diffusion Models', link: 'https://learn.nvidia.com/certificates?id=wMDdpr7sSUG92lZm2h_g-Q' },
    ],
  },
  {
    category: 'Web Development',
    icon: 'code',
    items: [
      { name: 'JS Algorithms and Data Structures', link: 'https://www.freecodecamp.org/certification/Warren_SJ/javascript-algorithms-and-data-structures' },
      { name: 'Responsive Web Design', link: 'https://www.freecodecamp.org/certification/Warren_SJ/responsive-web-design' }
    ],
  },
  {
    category: 'MATLAB & Simulink',
    icon: 'code',
    items: [
      {
        name: 'MATLAB Onramp',
        link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1326ff96-5180-4cfd-a189-2c877576407c&',
      },
      {
        name: 'Simscape Onramp',
        link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=cbd3c4c4-fc9a-418c-bbbd-eae1edd84f9b&',
      },
    ],
  },
  {
    category: 'Professional & Arts',
    icon: 'award',
    items: [
      { name: 'CIMA Dip. MA (AICPA & CIMA)', link: '#' },
      { name: 'CIMA Cert. BA (AICPA & CIMA)', link: '#' },
      { name: 'Associate of the London College of Music', link: '#' },
      { name: 'Dip.LCM (London College of Music)', link: '#' },
    ],
  },
];
