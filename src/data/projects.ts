import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 'webcare',
    title: 'WEBCARE Governance Framework',
    category: 'Web Reporting & Analytics',
    shortDescription: 'A governance and reporting framework designed to support the long-term health and performance of web portfolios.',
    overview: 'WEBCARE stands for Web Efficiency, Brand, Compliance, Analytics, Reporting, and Evaluation. It is a governance and reporting framework designed to support the long-term health and performance of Co-operative and Experiential Education websites.',
    problem: 'For years, CEE websites <strong>lacked consistent governance and regular review</strong>. This led to outdated front-end content, a backlog of unpublished and legacy content that slowed the system, and created confusion for content owners. Furthermore, without knowing how the websites performed, the team was unable to make strategic decisions.',
    role: 'Owner and Strategy Lead',
    approach: 'I developed the WEBCARE framework, which includes an annual review and reporting process for each website within the portfolio. This includes analytics analysis, digital presence evaluation (SEO, accessibility, QA), and content health audits. I designed simplified annual reports using a red–yellow–green system and created real-time performance dashboards in Google Looker Studio.',
    results: [
      'Achieved data-informed decision making across the web portfolio',
      'Improved stakeholder understanding of website health',
      'Increased transparency through real-time dashboards'
    ],
    skills: ['Web Analytics', 'Dashboard Development', 'KPI Tracking', 'Data Interpretation', 'Optimization'],
    tools: ['WCMS', 'Google Analytics', 'Looker Studio', 'Siteimprove', 'Hotjar', 'Airtable'],
    imageUrl: 'https://lh3.googleusercontent.com/d/1JhXWMPz59RqiVp5mJdQjSHLC0gcjYKo3',
    featured: true,
    assets: [
      { 
        url: 'https://drive.google.com/thumbnail?id=1-JK_pKoJXJDsfs1-BXcXLVPc76xyR623&sz=w1000', 
        title: 'WEBCARE Visual 1',
        previewUrl: 'https://drive.google.com/file/d/1-JK_pKoJXJDsfs1-BXcXLVPc76xyR623/preview',
        caption: 'WEBCARE Report Slide Deck'
      },
      { 
        url: 'https://drive.google.com/thumbnail?id=1xVPms8ODLC8nIRVtmu-sUJCjWLtXl1TT&sz=w1000', 
        title: 'WEBCARE Visual 2',
        previewUrl: 'https://drive.google.com/file/d/1xVPms8ODLC8nIRVtmu-sUJCjWLtXl1TT/preview',
        caption: 'Looker Studio Website Dashboard'
      }
    ]
  },
  {
    id: 'careerhub-rebuild',
    title: 'CareerHub Website Rebuild',
    category: 'Digital Project Management',
    shortDescription: 'A full rebuild of a student resource hub to modernize the platform and improve the student experience.',
    overview: 'CareerHub is a student resource hub that provides guidance on resumes, interviews, career exploration, and the future of work. The website required a full rebuild to modernize the platform and improve the student experience.',
    problem: 'The existing site was approaching end-of-life with over 300 pages of content requiring audit, outdated design, and poor user experience for students.',
    role: 'Product Manager and Developer',
    approach: 'Developed the product roadmap and established a structured workflow. Key practices included bi-weekly team meetings, a batching approach to auditing, and a collaborative "written in pencil" principle to encourage iteration and psychological safety.',
    results: [
      'Successful launch on schedule',
      'Streamlined the site from 300+ pages to fewer than 100 focused pages',
      'Improved navigation and student usability'
    ],
    skills: ['Project Planning', 'Stakeholder Management', 'Agile Coordination', 'Requirements Gathering', 'Risk Management'],
    tools: ['Confluence', 'Jira', 'Airtable', 'Google Analytics', 'Miro', 'Excel'],
    imageUrl: 'https://lh3.googleusercontent.com/d/1oyLVBmqzaKGXC2dSy3MNQAat-uc08_Vz',
    assets: [
      {
        url: 'https://drive.google.com/thumbnail?id=1pvfCtV0D4GwyKTUHviXXkBMeMKIv6V0g&sz=w1000',
        title: 'CareerHub Project Timeline',
        previewUrl: 'https://drive.google.com/file/d/1pvfCtV0D4GwyKTUHviXXkBMeMKIv6V0g/preview',
        caption: 'CareerHub Project Timeline'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1PN1LWeMasvbj7Stl4XiE-DtAQtG3QmLI&sz=w1000',
        title: 'CareerHub Meeting Notes',
        previewUrl: 'https://drive.google.com/file/d/1PN1LWeMasvbj7Stl4XiE-DtAQtG3QmLI/preview',
        caption: 'CareerHub Meeting Notes'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1NOgHlcwPITpHqGHLt57nknTqxdA-gPkR&sz=w1000',
        title: 'CareerHub Before',
        previewUrl: 'https://drive.google.com/file/d/1NOgHlcwPITpHqGHLt57nknTqxdA-gPkR/preview',
        caption: 'CareerHub Before'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1XmyYCNkbqMJnbr7PfT4QBdWIX4sBTmre&sz=w1000',
        title: 'CareerHub After',
        previewUrl: 'https://drive.google.com/file/d/1XmyYCNkbqMJnbr7PfT4QBdWIX4sBTmre/preview',
        caption: 'CareerHub After'
      }
    ],
    featured: true
  },
  {
    id: 'work-abroad-redesign',
    title: 'Work Abroad Website Redesign',
    category: 'UX & Web Design',
    shortDescription: 'Redesigning the international work experience section to improve usability and simplify the student journey.',
    overview: 'Redesigned the Work Abroad section of the Co-op website to improve usability for students interested in international work experiences.',
    problem: 'The existing pages contained too much information and were difficult for students to navigate. The goal was to simplify the experience and make it easier for students to understand opportunities.',
    role: 'UX Designer and Developer',
    approach: 'Conducted student interviews and user research to develop personas. Designed a new information architecture and created low-fidelity wireframes. Prioritized mobile usability, accessibility, and clear content hierarchy.',
    results: [
      'Simplified and more intuitive website experience',
      'Improved navigation',
      'Fully accessible design aligned with WCAG standards'
    ],
    skills: ['UX Design', 'Wireframing', 'Accessibility', 'Responsive Design', 'Content Hierarchy'],
    tools: ['WCMS', 'Miro', 'WCAG Guidelines', 'Canva', 'Adobe Creative Suite'],
    imageUrl: 'https://drive.google.com/thumbnail?id=14Bl1r_CMfZ71kjkMaU7VruHNKpbjQD3F&sz=w1000',
    embedUrl: 'https://miro.com/app/live-embed/uXjVOHgOeVM=/?moveToViewport=-153,-191,2419,1399&embedId=81014168012',
    assets: [
      {
        url: 'https://drive.google.com/thumbnail?id=1yr-fxQ_eURJL2Yx17O3IcJP183vcWEzD&sz=w1000',
        title: 'Work Abroad Before',
        previewUrl: 'https://drive.google.com/file/d/1yr-fxQ_eURJL2Yx17O3IcJP183vcWEzD/preview',
        caption: 'Work Abroad Before'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1ausC3lyj2YxKYWtj2nWDlKpwHuDOIOnK&sz=w1000',
        title: 'Work Abroad After',
        previewUrl: 'https://drive.google.com/file/d/1ausC3lyj2YxKYWtj2nWDlKpwHuDOIOnK/preview',
        caption: 'Work Abroad After'
      }
    ],
    featured: true
  },
  {
    id: 'insights-newsletter',
    title: 'Insights for Impact Newsletter',
    category: 'Email Marketing & Automation',
    shortDescription: 'A consistent and professional newsletter format designed to share research insights and updates with external partners.',
    overview: 'The Insights for Impact Newsletter shares research insights, updates, and thought leadership from the Centre for Work-Integrated Learning with external partners and stakeholders.',
    problem: 'The team needed a consistent and engaging way to communicate research insights and updates to a professional audience while maintaining brand consistency and improving engagement.',
    role: 'Email Marketing Lead',
    approach: 'I developed a newsletter format designed to highlight key insights in a clear and accessible way. This included establishing a consistent structure, developing engaging subject lines, and coordinating content with researchers.',
    results: [
      'Achieved a consistent and professional newsletter format',
      'Improved engagement with external audiences',
      'Stronger visibility for research initiatives'
    ],
    skills: ['Email Strategy', 'Audience Segmentation', 'Automation Workflows', 'A/B Testing', 'Performance Analytics'],
    tools: ['Mailchimp', 'Canva'],
    imageUrl: 'https://lh3.googleusercontent.com/d/1lCCzb-gMtmyxzK46Cpjzv1fvBXOC4_Cs',
    assets: [
      {
        url: 'https://drive.google.com/thumbnail?id=1MhSu2JaOPL9Ma23fOk2bWUBxPLGuUiEb&sz=w1000',
        title: 'Sample Newsletter Issue 1',
        previewUrl: 'https://drive.google.com/file/d/1MhSu2JaOPL9Ma23fOk2bWUBxPLGuUiEb/preview',
        caption: 'Sample Newsletter Issue 1'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1hALlLTx0j-VJgaeHjJRuti-It-MgWOec&sz=w1000',
        title: 'Sample Newsletter Issue 2',
        previewUrl: 'https://drive.google.com/file/d/1hALlLTx0j-VJgaeHjJRuti-It-MgWOec/preview',
        caption: 'Sample Newsletter Issue 2'
      }
    ],
    featured: false
  },
  {
    id: 'teachwil',
    title: 'TeachWIL Web Presence',
    category: 'Web Strategy & Governance',
    shortDescription: 'Creating a dedicated web presence for a new educator-focused initiative within an existing ecosystem.',
    overview: 'The Centre for Work-Integrated Learning (WIL) introduced a new initiative called TeachWIL, aimed at educators who want to integrate work-integrated learning experiences into their courses.',
    problem: 'The team needed guidance on how to structure and present this new initiative within the existing website ecosystem. Additionally, they required a custom webform for client contact and information gathering, as well as a system for hosting downloadable content, all without duplicating existing resources or creating user confusion.',
    role: 'Web Owner and Co-Project Lead',
    approach: 'I reviewed the existing site structure and audited current content to ensure seamless integration. I developed wireframes to organize the new material, focusing heavily on information architecture and keyword alignment. To meet their specific needs, I developed easily accessible and clearly identified documents, and built a custom webform to streamline client contact and information gathering. Finally, I established a comprehensive governance plan for future maintenance.',
    results: [
      'A clearly structured TeachWIL section integrated into the website',
      'Improved discoverability',
      'Sustainable governance approach'
    ],
    skills: ['Digital Strategy', 'Information Architecture', 'Accessibility Strategy', 'Content Governance', 'Analytics'],
    tools: ['WCMS', 'Adobe Creative Suite', 'Miro'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1nnD_7w0U5DNmMuy8oMZjbC_V94TT5lTd&sz=w1000',
    assets: [
      {
        url: 'https://drive.google.com/thumbnail?id=1EdnXy1IS2k4Hi001-G0E_FWAfyC0jaS6&sz=w1000',
        title: 'Teach WIL Webpage',
        previewUrl: 'https://drive.google.com/file/d/1EdnXy1IS2k4Hi001-G0E_FWAfyC0jaS6/preview',
        caption: 'Teach WIL Webpage'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1F0jtticyGXZtQQnQAoFaZHkVUu-i_Azn&sz=w1000',
        title: 'Teach WIL Webform',
        previewUrl: 'https://drive.google.com/file/d/1F0jtticyGXZtQQnQAoFaZHkVUu-i_Azn/preview',
        caption: 'Teach WIL Webform'
      }
    ],
    featured: true
  },
  {
    id: 'mycoopexperience-blog',
    title: '#MyCoopExperience Blog',
    category: 'Social Media & Content Marketing',
    shortDescription: 'A student-driven storytelling campaign that highlights real co-op experiences through peer-to-peer insight.',
    overview: 'The #MyCoopExperience Blog is a student-driven storytelling campaign that highlights real co-op experiences and provides peer-to-peer insight for students exploring co-op opportunities.',
    problem: 'There was no consistent pipeline of student stories to share through social media or the website, leading to limited exposure to real co-op examples.',
    role: 'Social Media Manager',
    approach: 'Developed a user-generated content campaign after identifying high engagement with student stories. Established guiding principles, hired a coordinator, and created a structured editorial workflow using Airtable.',
    results: [
      'The campaign has run for six years',
      'Remains the highest-performing content on the CEE Instagram account',
      'Significantly increased visibility across programs'
    ],
    skills: ['Content Strategy', 'Campaign Planning', 'Copywriting', 'Calendar Management', 'Analytics'],
    tools: ['Instagram', 'TikTok', 'Emplifi', 'Airtable', 'Canva', 'WCMS', 'LinkedIn', 'Facebook'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1jriSCJgIqFxrqPHaaBqoNiwDbXxWNdhU&sz=w1000',
    assets: [
      {
        url: 'https://drive.google.com/thumbnail?id=1cfdBZfBxQp6YybdnHxTJcEkKfVkuutWv&sz=w1000',
        title: 'Campaign Instagram Post',
        previewUrl: 'https://drive.google.com/file/d/1cfdBZfBxQp6YybdnHxTJcEkKfVkuutWv/preview',
        caption: 'Campaign Instagram Post'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1KOc4oOD1YQbNnq4QRsSce7detvEIpApZ&sz=w1000',
        title: 'Campaign LinkedIn Post',
        previewUrl: 'https://drive.google.com/file/d/1KOc4oOD1YQbNnq4QRsSce7detvEIpApZ/preview',
        caption: 'Campaign LinkedIn Post'
      },
      {
        url: 'https://drive.google.com/thumbnail?id=1uhpYRniGtjQzDdr_6KyxP9Ycw7YnLVoE&sz=w1000',
        title: 'Campaign Blog',
        previewUrl: 'https://drive.google.com/file/d/1uhpYRniGtjQzDdr_6KyxP9Ycw7YnLVoE/preview',
        caption: 'Campaign Blog'
      }
    ],
    featured: false
  }
];

export const skills: Skill[] = [
  {
    title: 'Web Strategy & Governance',
    description: 'Developing long-term roadmaps and policies to ensure digital consistency and quality.',
    icon: 'Globe'
  },
  {
    title: 'Web Reporting & Analytics',
    description: 'Turning raw data into actionable insights through custom dashboards and tracking.',
    icon: 'BarChart3'
  },
  {
    title: 'Digital Project Management',
    description: 'Leading cross-functional teams to deliver complex web projects on time and on budget.',
    icon: 'Layout'
  },
  {
    title: 'UX & Web Design',
    description: 'Creating intuitive, accessible, and user-centered interfaces that drive engagement.',
    icon: 'MousePointer2'
  },
  {
    title: 'Email Marketing & Automation',
    description: 'Designing automated customer journeys that nurture leads and build loyalty.',
    icon: 'Mail'
  },
  {
    title: 'Social Media & Content Marketing',
    description: 'Crafting strategic content that resonates with audiences across digital channels.',
    icon: 'Share2'
  }
];
