export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];
export type PageKey = "home" | "cv" | "news" | "knowledge" | "apps";
export type LocalizedText = Record<Locale, string>;

export interface MetricItem {
  value: LocalizedText;
  label: LocalizedText;
}

export interface FeatureItem {
  title: LocalizedText;
  body: LocalizedText;
}

export interface TimelineItem {
  period: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  detail: LocalizedText;
}

export interface HighlightItem {
  title: LocalizedText;
  body: LocalizedText;
  tag: LocalizedText;
}

export interface SkillGroup {
  title: LocalizedText;
  items: LocalizedText[];
}

export interface LinkItem {
  id: string;
  label: LocalizedText;
  value: LocalizedText;
  href?: string;
}

export interface CollectionItem {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  tag: LocalizedText;
  href: string;
  kind: "external" | "internal";
  status: "published" | "draft";
  featured: boolean;
}

export interface NewsImage {
  src?: string;
  alt: LocalizedText;
  note: LocalizedText;
}

export interface NewsItem {
  id: string;
  date: string;
  title: LocalizedText;
  summary: LocalizedText;
  source: LocalizedText;
  href: string;
  image: NewsImage;
}

export const routes: Record<Locale, Record<PageKey, string>> = {
  zh: {
    home: "/",
    cv: "/cv/",
    news: "/news/",
    knowledge: "/knowledge/",
    apps: "/apps/"
  },
  en: {
    home: "/en/",
    cv: "/en/cv/",
    news: "/en/news/",
    knowledge: "/en/knowledge/",
    apps: "/en/apps/"
  }
};

export const navigation: Record<PageKey, LocalizedText> = {
  home: { zh: "主页", en: "Home" },
  cv: { zh: "履历", en: "CV" },
  news: { zh: "新闻", en: "News" },
  knowledge: { zh: "知识分享", en: "Knowledge" },
  apps: { zh: "应用链接", en: "Apps" }
};

export const siteBrand = {
  title: { zh: "雷逸鸣", en: "Yiming Lei" },
  subtitle: { zh: "Academic Homepage", en: "Academic Homepage" }
};

export const siteMeta = {
  defaultTitle: {
    zh: "雷逸鸣 | 个人学术主页",
    en: "Yiming Lei | Academic Homepage"
  },
  defaultDescription: {
    zh: "北京大学物理学院本科生，聚焦集成光学研究，并将 AI Agent 工具融入科研工作流。",
    en: "Academic homepage of Yiming Lei, an undergraduate at Peking University working on integrated optics and AI-native research workflows."
  }
};

export const ui = {
  languageSwitch: { zh: "EN", en: "中文" },
  footer: {
    zh: "本网站主要由 AI Agent 制作与更新。",
    en: "This site is primarily built and updated with AI agents."
  },
  home: {
    eyebrow: { zh: "个人学术主页", en: "Academic Homepage" },
    heroTitle: {
      zh: "用光学研究与 AI Agent 工作流搭建自己的学术路径",
      en: "Designing an academic path through optics research and AI-native workflows"
    },
    heroLead: {
      zh: "北京大学物理学院 2023 级本科生，关注集成光学、实验实现与科研效率工具的结合。",
      en: "Undergraduate at Peking University focused on integrated optics, hands-on experiments, and AI-enhanced research productivity."
    },
    primaryCta: { zh: "查看完整履历", en: "View CV" },
    secondaryCta: { zh: "进入知识库", en: "Browse Library" },
    researchEyebrow: { zh: "研究概览", en: "Research Overview" },
    researchTitle: { zh: "当前关注的三条主线", en: "Current lines of focus" },
    researchDescription: {
      zh: "从集成光学研究、实验训练到 AI 辅助科研，记录我目前最投入的几个方向。",
      en: "A snapshot of the themes I am currently most engaged with, from integrated optics and experimental practice to AI-assisted research."
    },
    highlightsEyebrow: { zh: "精选经历", en: "Selected Highlights" },
    highlightsTitle: { zh: "目前最能代表我的几个侧面", en: "A few snapshots that best represent the current profile" },
    highlightsDescription: {
      zh: "从奖项、科研、组织工作到运动经历，展示我在学习与协作中的重心。",
      en: "From awards and research to coordination work and athletics, these moments reflect how I learn and collaborate."
    },
    newsEyebrow: { zh: "最新动态", en: "Latest News" },
    newsTitle: { zh: "新闻", en: "News Section" },
    newsDescription: {
      zh: "近期报道、项目进展与活动记录集中在这里，方便快速了解我的阶段性经历。",
      en: "Recent coverage, project updates, and activity records are collected here as a quick view of recent milestones."
    },
    newsCta: { zh: "查看全部新闻", en: "View All News" },
    libraryEyebrow: { zh: "资料归档", en: "Library" },
    libraryTitle: { zh: "旧站资料已经迁入新的知识库", en: "The original-site materials now live inside the new library" },
    libraryDescription: {
      zh: "课程论文、实验记录、复习提纲和公式单都已按新站风格整理，可直接浏览详情或下载原始文件。",
      en: "Course papers, lab reports, review outlines, and formula sheets have been migrated into the new site with direct detail pages and local downloads."
    },
    sectionsEyebrow: { zh: "站点结构", en: "Site Structure" },
    sectionsTitle: { zh: "从主页进入更具体的栏目", en: "Use the homepage as the entry point to deeper sections" },
    sectionsDescription: {
      zh: "你可以从这里继续查看公开报道、课程资料、项目入口与完整履历。",
      en: "From here, you can continue to public coverage, course materials, project links, and the full CV."
    },
    contactEyebrow: { zh: "联系方式", en: "Contact" },
    contactTitle: { zh: "对外公开信息保持简洁但可扩展", en: "Public contact information stays concise while remaining extensible" },
    contactDescription: {
      zh: "欢迎通过学校邮箱联系，也可以访问课题组页面了解更多研究背景。",
      en: "Feel free to reach me by academic email, or visit the lab page for more context on my research environment."
    }
  },
  cv: {
    eyebrow: { zh: "完整履历", en: "Curriculum Vitae" },
    title: { zh: "教育、研究、荣誉与实践经历", en: "Education, research, honors, and activity record" },
    description: {
      zh: "从教育背景到科研训练、奖励荣誉与社会活动，呈现更完整的个人经历。",
      en: "A fuller view of my background, covering education, research training, honors, and activities."
    },
    education: { zh: "教育经历", en: "Education" },
    research: { zh: "研究经历", en: "Research" },
    honors: { zh: "奖励荣誉", en: "Honors and Awards" },
    activities: { zh: "社会活动", en: "Activities and Service" },
    skills: { zh: "技能", en: "Skills" }
  },
  news: {
    eyebrow: { zh: "新闻", en: "News" },
    title: { zh: "公开报道与阶段性动态", en: "Public mentions and milestone updates" },
    description: {
      zh: "整理与我相关的公开报道、项目进展和活动记录，呈现不同阶段的成长轨迹。",
      en: "Public coverage, project updates, and activity records that trace different stages of my academic path."
    },
    sourceLabel: { zh: "来源", en: "Source" },
    linkLabel: { zh: "查看原文", en: "Open Article" },
    imagePlaceholder: { zh: "图片待补充", en: "Image to be added" }
  },
  knowledge: {
    eyebrow: { zh: "知识分享", en: "Knowledge Sharing" },
    title: { zh: "课程资料、实验记录与学习整理", en: "Course materials, lab archives, and study notes" },
    description: {
      zh: "旧站中的实验记录、课程论文、复习提纲和个人整理资料已集中到这里，方便浏览与下载。",
      en: "Experiment logs, course papers, review outlines, and personal study materials from the original site are collected here for browsing and download."
    },
    emptyTitle: { zh: "知识库正在继续扩展", en: "The library is still expanding" },
    emptyBody: {
      zh: "当前条目已经从旧站完成迁移，后续仍可沿用同一结构继续添加新的公开资料。",
      en: "The initial archive has already been migrated from the original site, and future public materials can follow the same structure."
    }
  },
  apps: {
    eyebrow: { zh: "应用链接", en: "Applications" },
    title: { zh: "项目入口、工具页面与可访问的演示", en: "Project entry points, tools, and accessible demos" },
    description: {
      zh: "这个栏目用于收纳可以直接访问的应用、实验页面或独立项目入口。",
      en: "This section is meant for deployable tools, experiment pages, or standalone project entry points."
    },
    emptyTitle: { zh: "应用目录将随项目逐步扩充", en: "The application directory will grow with future projects" },
    emptyBody: {
      zh: "等到有可公开的项目页面后，只需要补充链接卡片，无需改动站点结构。",
      en: "Once public-facing project pages are ready, only new link cards need to be added without changing the site structure."
    }
  }
};

export const profile = {
  name: { zh: "雷逸鸣", en: "Yiming Lei" },
  role: {
    zh: "北京大学物理学院 2023 级本科生",
    en: "Undergraduate Student, School of Physics, Peking University"
  },
  affiliation: {
    zh: "北京大学物理学院",
    en: "School of Physics, Peking University"
  },
  mentor: {
    zh: "导师：胡耀文",
    en: "Advisor: Yaowen Hu"
  },
  location: {
    zh: "北京，中国",
    en: "Beijing, China"
  },
  summary: {
    zh: "北京大学物理学院本科生，高中竞赛成绩优异通过卓越计划提前一年进入北大。当前以集成光学为主要研究方向，并在日常科研中持续探索 AI Agent 工具如何提升实验、整理和迭代效率。",
    en: "Undergraduate in the School of Physics at Peking University, admitted through a talent-track pathway after strong competition performance. Current work centers on integrated optics while exploring how AI Agent tools can support experiment workflows, organization, and iteration."
  },
  researchSummary: {
    zh: "围绕 MMI、grating coupler 等基础器件，积累了从仿真、优化到实验测量迭代的一线经验。",
    en: "Building hands-on experience around devices such as MMIs and grating couplers, covering simulation, optimization, and experimental measurement loops."
  },
  heroMetrics: [
    {
      value: { zh: "3.8 / 4.0", en: "3.8 / 4.0" },
      label: { zh: "本科绩点", en: "GPA" }
    },
    {
      value: { zh: "国家奖学金", en: "National Scholarship" },
      label: { zh: "代表性荣誉", en: "Selected Honor" }
    },
    {
      value: { zh: "AI Agent", en: "AI Agent" },
      label: { zh: "科研工作流", en: "Workflow Layer" }
    }
  ],
  focusAreas: [
    {
      title: { zh: "集成光学研究", en: "Integrated Optics" },
      body: {
        zh: "关注基础集成光学器件的仿真、优化与实验验证，逐步建立从设计到测量的完整理解。",
        en: "Focusing on the simulation, optimization, and experimental validation of integrated-photonics building blocks."
      }
    },
    {
      title: { zh: "实验实现能力", en: "Experimental Practice" },
      body: {
        zh: "积累光栅耦合、端面耦合、引线键合等实验经验，强调把理论和动手能力连接起来。",
        en: "Developing hands-on experience in grating coupling, edge coupling, and wire bonding to connect theory with practice."
      }
    },
    {
      title: { zh: "AI 赋能科研", en: "AI for Research" },
      body: {
        zh: "把深度学习、强化学习和工作流自动化经验融入日常科研，提升整理、分析与协作效率。",
        en: "Applying experience in deep learning, reinforcement learning, and workflow automation to improve research productivity."
      }
    }
  ],
  featuredHighlights: [
    {
      tag: { zh: "荣誉", en: "Honor" },
      title: { zh: "国家奖学金", en: "National Scholarship" },
      body: {
        zh: "本科阶段最具代表性的荣誉之一，体现阶段性的学业与综合表现。",
        en: "One of the most representative honors so far, reflecting academic performance and overall contribution."
      }
    },
    {
      tag: { zh: "竞赛", en: "Competition" },
      title: {
        zh: "数学建模竞赛北京市一等奖、国家二等奖",
        en: "Mathematical Modeling: Beijing First Prize, National Second Prize"
      },
      body: {
        zh: "在全国大学生数学建模竞赛中取得突出成绩，也是全校仅有的两支国家二等奖队伍之一。",
        en: "Earned strong results in the national mathematical modeling competition as one of only two teams on campus to receive a national second prize."
      }
    },
    {
      tag: { zh: "服务", en: "Service" },
      title: { zh: "23 级本科 9 班班长", en: "Class Monitor for Class 9, 2023 Cohort" },
      body: {
        zh: "统筹班级事务并组织主题教育、凝聚力活动与科普实践，持续锻炼组织和表达能力。",
        en: "Coordinating class affairs while organizing themed education, community-building, and science outreach activities."
      }
    },
    {
      tag: { zh: "体育", en: "Athletics" },
      title: { zh: "北大运动会毽球季军", en: "Third Place in Shuttlecock at PKU Sports Meet" },
      body: {
        zh: "获得季军并刷新物院最好成绩，体现出持续投入和团队协作的另一面。",
        en: "Won third place and set a new best result for the School of Physics, highlighting persistence and teamwork."
      }
    }
  ]
};

export const sectionEntries: Array<{
  key: Exclude<PageKey, "home">;
  title: LocalizedText;
  summary: LocalizedText;
}> = [
  {
    key: "cv",
    title: { zh: "完整履历", en: "Curriculum Vitae" },
    summary: {
      zh: "查看教育、研究、荣誉、活动与技能的完整版本。",
      en: "Open the full record of education, research, honors, activities, and skills."
    }
  },
  {
    key: "news",
    title: { zh: "新闻", en: "News" },
    summary: {
      zh: "按时间倒序查看公开报道、交流活动和阶段性动态。",
      en: "Browse public mentions, outreach events, and milestone updates in reverse chronological order."
    }
  },
  {
    key: "knowledge",
    title: { zh: "知识分享", en: "Knowledge Sharing" },
    summary: {
      zh: "查看已经迁入新站的实验记录、课程资料、复习提纲和学习整理。",
      en: "Browse the migrated experiment logs, course materials, review outlines, and study notes."
    }
  },
  {
    key: "apps",
    title: { zh: "应用链接", en: "Apps and Projects" },
    summary: {
      zh: "集中展示可访问的应用页面、演示或项目入口。",
      en: "A dedicated directory for deployable tools, demos, and project landing pages."
    }
  }
];

export const education: TimelineItem[] = [
  {
    period: { zh: "2023.09 - 至今", en: "Sep 2023 - Present" },
    title: { zh: "学士在读", en: "B.Sc. Candidate" },
    subtitle: {
      zh: "北京大学 · 物理学院 · 绩点 3.8 / 4.0",
      en: "Peking University · School of Physics · GPA 3.8 / 4.0"
    },
    detail: {
      zh: "现为北京大学物理学院 2023 级本科生，持续参与科研训练与学术实践。",
      en: "Currently an undergraduate in the School of Physics at Peking University, engaged in research training and academic practice."
    }
  }
];

export const research: TimelineItem[] = [
  {
    period: { zh: "本科科研", en: "Undergraduate Research" },
    title: { zh: "集成光学方向", en: "Integrated Optics" },
    subtitle: {
      zh: "导师：胡耀文",
      en: "Advisor: Yaowen Hu"
    },
    detail: {
      zh: "参与集成光学研究，围绕 MMI、grating coupler 等基础器件积累仿真、优化、实验测量与迭代经验，并将 AI 工具融入日常科研流程。",
      en: "Participating in integrated optics research focused on devices such as MMIs and grating couplers, with experience spanning simulation, optimization, experimental measurement, and AI-supported iteration."
    }
  }
];

export const honors: HighlightItem[] = [
  {
    tag: { zh: "奖学金", en: "Scholarship" },
    title: { zh: "国家奖学金", en: "National Scholarship" },
    body: {
      zh: "本科阶段代表性荣誉之一。",
      en: "A signature honor earned during undergraduate study."
    }
  },
  {
    tag: { zh: "科研资助", en: "Funding" },
    title: { zh: "北京市自然科学基金资助", en: "Supported by the Beijing Natural Science Foundation" },
    body: {
      zh: "体现了科研工作的认可与支持。",
      en: "Reflecting recognition and support for ongoing research work."
    }
  },
  {
    tag: { zh: "竞赛", en: "Competition" },
    title: {
      zh: "全国大学生数学建模竞赛北京市一等奖、国家二等奖",
      en: "Mathematical Modeling Competition: Beijing First Prize and National Second Prize"
    },
    body: {
      zh: "所在队伍为全校仅有的两支国家二等奖队伍之一。",
      en: "The team was one of only two campus teams to receive a national second prize."
    }
  },
  {
    tag: { zh: "实验竞赛", en: "Experimental Physics" },
    title: {
      zh: "北京大学 CUPT 实验物理竞赛校赛一等奖",
      en: "First Prize in the PKU CUPT Experimental Physics Competition"
    },
    body: {
      zh: "体现实验设计与分析能力。",
      en: "Highlighting experimental design and analytical ability."
    }
  },
  {
    tag: { zh: "实践", en: "Practice" },
    title: { zh: "思政实践优秀个人", en: "Outstanding Individual in Social Practice" },
    body: {
      zh: "来自组织、联络与科普实践中的综合表现。",
      en: "Awarded for coordinated outreach, organization, and science communication."
    }
  }
];

export const activities: TimelineItem[] = [
  {
    period: { zh: "班级组织", en: "Class Service" },
    title: { zh: "23 级本科 9 班班长", en: "Class Monitor for Class 9, 2023 Cohort" },
    subtitle: {
      zh: "统筹班级事务与活动策划",
      en: "Coordinating class affairs and student activities"
    },
    detail: {
      zh: "组织策划红色主题教育、班级凝聚力活动和科普实践活动，持续锻炼组织、表达与协作能力。",
      en: "Organized themed education, community-building programs, and science outreach activities while developing coordination, communication, and collaboration skills."
    }
  },
  {
    period: { zh: "广州实践", en: "Guangzhou Outreach" },
    title: { zh: "思政实践联络工作", en: "Liaison Work in Social Practice" },
    subtitle: {
      zh: "面向 3 所中学开展科普实验活动",
      en: "Science outreach in three secondary schools"
    },
    detail: {
      zh: "在实践期间承担联络与组织工作，介绍物院历史并开展实验展示，获得实践基地的高度评价。",
      en: "Handled coordination during outreach activities, introduced the history of the School of Physics, and ran experiment demonstrations that received strong feedback."
    }
  },
  {
    period: { zh: "体育经历", en: "Athletics" },
    title: { zh: "北京大学运动会毽球季军", en: "Third Place in Shuttlecock at the PKU Sports Meet" },
    subtitle: {
      zh: "刷新物院最佳成绩",
      en: "Set a new best result for the School of Physics"
    },
    detail: {
      zh: "延伸了科研之外的投入方式，也体现了稳定训练和团队协作能力。",
      en: "Extends the profile beyond research and reflects sustained training and collaborative effort."
    }
  }
];

export const skills: SkillGroup[] = [
  {
    title: { zh: "实验与器件", en: "Experiment and Devices" },
    items: [
      {
        zh: "掌握光栅耦合、端面耦合、引线键合等实验经验。",
        en: "Hands-on experience with grating coupling, edge coupling, and wire bonding."
      },
      {
        zh: "具备 MMI、grating coupler 等基础集成光学器件的仿真、优化与实验测量迭代经历。",
        en: "Experience in simulation, optimization, and measurement loops for MMIs, grating couplers, and related integrated-photonics devices."
      }
    ]
  },
  {
    title: { zh: "软件与 AI", en: "Software and AI" },
    items: [
      {
        zh: "熟悉 Python，具备独立实现前后端闭环应用的能力。",
        en: "Comfortable with Python and capable of building end-to-end software loops across frontend and backend."
      },
      {
        zh: "掌握深度学习、强化学习和工作流自动化相关经验。",
        en: "Experienced with deep learning, reinforcement learning, and workflow automation."
      },
      {
        zh: "日常科研工作中积极探索 AI Agent 工具的深度结合方式。",
        en: "Actively integrating AI Agent tools into day-to-day research workflows."
      }
    ]
  }
];

export const links: LinkItem[] = [
  {
    id: "email",
    label: { zh: "学校邮箱", en: "Academic Email" },
    value: { zh: "leiyiming@stu.pku.edu.cn", en: "leiyiming@stu.pku.edu.cn" },
    href: "mailto:leiyiming@stu.pku.edu.cn"
  },
  {
    id: "lab",
    label: { zh: "课题组公开页面", en: "Lab Profile" },
    value: {
      zh: "北京大学课题组页面中的公开介绍",
      en: "Public profile on the Peking University lab page"
    },
    href: "https://ywhulab.pku.edu.cn/info/1075/1254.htm"
  },
  {
    id: "github",
    label: { zh: "GitHub", en: "GitHub" },
    value: {
      zh: "后续可在此加入 GitHub 链接",
      en: "Add a GitHub profile link here later"
    }
  },
  {
    id: "scholar",
    label: { zh: "Google Scholar", en: "Google Scholar" },
    value: {
      zh: "后续可在此加入 Scholar 链接",
      en: "Add a Google Scholar link here later"
    }
  }
];

export const knowledgeItems: CollectionItem[] = [
  {
    id: "knowledge-draft-placeholder",
    title: {
      zh: "知识分享占位条目",
      en: "Knowledge Placeholder Entry"
    },
    summary: {
      zh: "用于未来添加课程笔记、科研札记或方法总结。",
      en: "Reserved for future notes, research memos, or method summaries."
    },
    tag: { zh: "草稿", en: "Draft" },
    href: "/knowledge/",
    kind: "internal",
    status: "draft",
    featured: false
  }
];

export const appItems: CollectionItem[] = [
  {
    id: "apps-draft-placeholder",
    title: {
      zh: "应用展示占位条目",
      en: "Application Placeholder Entry"
    },
    summary: {
      zh: "用于未来加入可公开访问的工具页面或项目入口。",
      en: "Reserved for future public tools, demos, or project entry points."
    },
    tag: { zh: "草稿", en: "Draft" },
    href: "/apps/",
    kind: "internal",
    status: "draft",
    featured: false
  }
];

export const newsItems: NewsItem[] = [
  {
    id: "news-2025-12-beijing-science-center",
    date: "2025-12-03",
    title: {
      zh: "23级9班走进北京科学中心开展物理科普",
      en: "Class 9 of the 2023 cohort brought physics outreach to the Beijing Science Center"
    },
    summary: {
      zh: "23级9班科普志愿者面向北京市多所小学开展物理实验演示，通过超导磁悬浮、鱼洗盆、辉光放电球等互动环节激发青少年对科学的兴趣，也体现了班级持续推进科普服务的实践成果。",
      en: "Volunteers from Class 9 of the 2023 cohort presented physics demonstrations for primary-school students in Beijing, using experiments such as superconducting levitation, the fish basin, and plasma discharge to spark scientific curiosity and continue the class's outreach work."
    },
    source: {
      zh: "PKU言之有物",
      en: "PKU言之有物"
    },
    href: "https://mp.weixin.qq.com/s/j4-NGAQqAky1zelx4Vv5SA",
    image: {
      src: "/resources/news/20251203_share.jpg",
      alt: {
        zh: "北京科学中心物理科普活动图片占位",
        en: "Placeholder for an image from the Beijing Science Center outreach event"
      },
      note: {
        zh: "后续可替换为本次科普活动现场照片",
        en: "Replace later with a photo from this outreach event"
      }
    }
  },
  {
    id: "news-2025-09-zhuoyue-exchange",
    date: "2025-09-21",
    title: {
      zh: "卓越新老生交流会上分享选课与科研探索经验",
      en: "Shared course-planning and research-exploration advice at a Zhuoyue student exchange session"
    },
    summary: {
      zh: "在卓越班新老生交流会上，围绕选课安排、科研起步和大学生活节奏分享个人经验，重点强调主动探索、勇于试错，以及在不断尝试中逐步找到适合自己的研究方向。",
      en: "At a new-student and senior-student exchange for the Zhuoyue program, the sharing focused on course planning, getting started in research, and adapting to university life, with an emphasis on exploring actively, learning through trial and error, and gradually finding the right research direction."
    },
    source: {
      zh: "PKU三生卓记",
      en: "PKU三生卓记"
    },
    href: "https://mp.weixin.qq.com/s/PKkxef7XF391sBnvKzE2Ug",
    image: {
      src: "/resources/news/20250921_share.jpg",
      alt: {
        zh: "卓越新老生交流会图片占位",
        en: "Placeholder for an image from the Zhuoyue exchange session"
      },
      note: {
        zh: "后续可替换为交流会现场照片",
        en: "Replace later with a photo from the exchange session"
      }
    }
  },
  {
    id: "news-2025-06-bnsf-undergraduate-project",
    date: "2025-06-19",
    title: {
      zh: "获批 2025 年度北京市自然科学基金本科生“启研”项目",
      en: "Received a 2025 Beijing Natural Science Foundation Undergraduate Qiyan Project"
    },
    summary: {
      zh: "课题组官网发布消息，祝贺本科生雷逸鸣获批 2025 年度北京市自然科学基金本科生“启研”项目，体现了本科阶段科研训练与项目能力获得进一步认可。",
      en: "Lab website announced that Yiming Lei was selected for a 2025 Beijing Natural Science Foundation undergraduate Qiyan project, marking further recognition of his undergraduate research training and project potential."
    },
    source: {
      zh: "胡耀文课题组",
      en: "Nanoscale Electro-Optics Lab"
    },
    href: "https://ywhulab.pku.edu.cn/info/1069/1293.htm",
    image: {
      src: "/resources/news/null.jpg",
      alt: {
        zh: "北京市自然科学基金本科生启研项目新闻图片占位",
        en: "Placeholder for the undergraduate Qiyan project news image"
      },
      note: {
        zh: "后续可替换为课题组新闻配图或项目相关照片",
        en: "Replace later with a lab news image or a project-related photo"
      }
    }
  },
  {
    id: "news-2024-09-national-scholarship",
    date: "2024-09-27",
    title: {
      zh: "获得国家奖学金",
      en: "Winning the National Scholarship"
    },
    summary: {
      zh: "课题组官网发布新闻，祝贺本科生薛砚云、雷逸鸣获得国家奖学金，体现了课题组本科生在学业与科研表现上的阶段性成果与认可。",
      en: "Lab website published a news item congratulating undergraduates Yanyun Xue and Yiming Lei on receiving the National Scholarship, recognizing their strong academic and research performance."
    },
    source: {
      zh: "胡耀文课题组",
      en: "Nanoscale Electro-Optics Lab"
    },
    href: "https://ywhulab.pku.edu.cn/info/1069/1394.htm",
    image: {
      src: "/resources/news/null.jpg",
      alt: {
        zh: "国家奖学金祝贺新闻图片占位",
        en: "Placeholder for the national scholarship news image"
      },
      note: {
        zh: "后续可替换为课题组新闻配图或获奖相关照片",
        en: "Replace later with a lab news image or a scholarship-related photo"
      }
    }
  },
  {
    id: "news-2024-06-gwsyzx-outreach",
    date: "2024-06-27",
    title: {
      zh: "北京大学物理学院思政实践团赴广外实验中学开展宣讲",
      en: "The PKU School of Physics outreach team visited the GDUFS Experimental School"
    },
    summary: {
      zh: "北京大学物理学院思政实践团赴广外实验中学开展“走进物理科技前沿，学习创新发展成果”主题活动。活动中进行了思政宣讲、学习经验分享和物理实验演示，其中雷逸鸣作《星星之火、群星璀璨》主题宣讲。",
      en: "The School of Physics outreach team from Peking University visited the GDUFS Experimental School for a themed program on frontier physics and innovation. The visit included an ideological-education talk, study advice, and live physics demonstrations, with Yiming Lei delivering a presentation titled 'A Spark of Fire, a Sky Full of Stars.'"
    },
    source: {
      zh: "广东外语外贸大学实验中学",
      en: "GDUFS Experimental School"
    },
    href: "https://mp.weixin.qq.com/s/B2KFZZ5q9kuZossqk5nu3A",
    image: {
      src: "/resources/news/20240427_share.jpg",
      alt: {
        zh: "广外实验中学宣讲活动图片占位",
        en: "Placeholder for an image from the GDUFS Experimental School visit"
      },
      note: {
        zh: "后续可替换为宣讲或实验展示现场照片",
        en: "Replace later with a photo from the talk or experiment demo"
      }
    }
  },
  {
    id: "news-2024-06-peiying-outreach",
    date: "2024-06-24",
    title: {
      zh: "北京大学物理学院思政实践团到广州市培英中学开展交流",
      en: "The PKU School of Physics outreach team visited Guangzhou Peiying Middle School"
    },
    summary: {
      zh: "在广州市培英中学开展的思政实践活动中，北京大学物理学院师生进行了前沿物理介绍、备考经验分享和实验演示。雷逸鸣参与思政宣讲，与同学们围绕学习路径和科学兴趣展开交流。",
      en: "During an outreach visit to Guangzhou Peiying Middle School, the PKU School of Physics team introduced frontier physics topics, shared study advice, and presented live experiments. Yiming Lei took part in the ideological-education talk and joined discussions on learning paths and scientific curiosity."
    },
    source: {
      zh: "广州市培英中学",
      en: "Guangzhou Peiying Middle School"
    },
    href: "https://mp.weixin.qq.com/s/wR3M0k4FYSRjmNdMrQ290A",
    image: {
      src: "/resources/news/20240624_share.jpg",
      alt: {
        zh: "广州市培英中学交流活动图片占位",
        en: "Placeholder for an image from the Guangzhou Peiying Middle School visit"
      },
      note: {
        zh: "后续可替换为活动合影或科普实验照片",
        en: "Replace later with a group photo or experiment snapshot"
      }
    }
  },
  {
    id: "news-2023-06-yucai-sharing",
    date: "2023-06-29",
    title: {
      zh: "作为育才优秀学子向援助对接学校分享学习经验",
      en: "Shared learning experience with a partner school as a Yucai student representative"
    },
    summary: {
      zh: "在东北育才学校与河北安国中学联合举办的线上交流活动中，作为优秀学生代表参与专题分享，面向对接学校同学介绍学习经验与成长体会，服务教育帮扶与校际交流。",
      en: "In an online exchange jointly organized by Northeastern Yucai School and Anguo Middle School in Hebei, Yiming Lei joined as a student representative to share study experience and personal growth insights in support of inter-school collaboration."
    },
    source: {
      zh: "东北育才学科特长发展中心",
      en: "NEYC Special Talent Development Center"
    },
    href: "https://mp.weixin.qq.com/s/TzdvHoH85dIDbZ-8jCuVew",
    image: {
      src: "/resources/news/20230629_share.png",
      alt: {
        zh: "线上学习经验分享活动图片占位",
        en: "Placeholder for an image from the online experience-sharing event"
      },
      note: {
        zh: "后续可替换为线上交流截图或活动海报",
        en: "Replace later with a screenshot or poster from the event"
      }
    }
  },
  {
    id: "news-2023-05-early-admission",
    date: "2023-05-25",
    title: {
      zh: "入选北京大学卓越计划",
      en: "Selected for the Peking University Zhuoyue Program"
    },
    summary: {
      zh: "东北育才学校发布竞赛与拔尖创新人才培养阶段成果，文中介绍雷逸鸣入选北京大学卓越计划。这一阶段性成果也成为后续进入北京大学物理学院的重要节点。",
      en: "Northeastern Yucai School reported a new round of talent-program achievements, including Yiming Lei's selection for the Peking University Zhuoyue Program, marking an important step toward later study in the School of Physics at PKU."
    },
    source: {
      zh: "东北育才学科特长发展中心",
      en: "NEYC Special Talent Development Center"
    },
    href: "https://mp.weixin.qq.com/s/q18nd4KDExraUdkuWpxeyQ",
    image: {
      src: "/resources/news/20230525_excellence_initiative.png",
      alt: {
        zh: "北京大学卓越计划入选报道图片占位",
        en: "Placeholder for an image related to the PKU Zhuoyue Program announcement"
      },
      note: {
        zh: "后续可替换为入选通知或报道配图",
        en: "Replace later with an announcement image or article visual"
      }
    }
  },
  {
    id: "news-2022-11-physics-finals",
    date: "2022-11-07",
    title: {
      zh: "全国中学生物理决赛获得银牌",
      en: "Won a silver medal at the National High School Physics Finals"
    },
    summary: {
      zh: "东北育才学校报道第39届全国中学生物理竞赛决赛成绩，雷逸鸣与队友共同取得“一金二银二铜”的整体战绩，其中个人获得银牌。这也是高中阶段较具代表性的竞赛成果之一。",
      en: "A report from Northeastern Yucai School covered the results of the 39th National High School Physics Competition finals, where the team earned one gold, two silvers, and two bronzes, with Yiming Lei among the silver-medal winners."
    },
    source: {
      zh: "东北育才学科特长发展中心",
      en: "NEYC Special Talent Development Center"
    },
    href: "https://mp.weixin.qq.com/s/yJF_qoNcm-8uwYE_RJNgHg",
    image: {
      src: "/resources/news/20221107_silver_medal.png",
      alt: {
        zh: "全国中学生物理决赛成绩报道图片占位",
        en: "Placeholder for an image related to the national physics finals report"
      },
      note: {
        zh: "后续可替换为竞赛现场或奖牌相关图片",
        en: "Replace later with a competition or award-related photo"
      }
    }
  },
  {
    id: "news-2021-04-math-festival",
    date: "2021-04-24",
    title: {
      zh: "参加第十九届数学文化节“数学脱口秀”决赛",
      en: "Reached the final round of the 19th Mathematics Culture Festival's 'Math Talk Show'"
    },
    summary: {
      zh: "在东北育才学校初中部第十九届数学文化节中，雷逸鸣进入“数学脱口秀”决赛，与其他选手一起完成兼具知识性与表达张力的舞台展示，体现了较早阶段的数学兴趣与表达能力。",
      en: "During the 19th Mathematics Culture Festival at Northeastern Yucai School, Yiming Lei advanced to the final round of the 'Math Talk Show,' demonstrating both mathematical interest and stage expression at an early stage."
    },
    source: {
      zh: "偶然数学",
      en: "Occasional Mathematics"
    },
    href: "https://mp.weixin.qq.com/s/3VcqFqs0nPwqbTcoUPBfIw",
    image: {
      src: "/resources/news/20210424_math_festival.png",
      alt: {
        zh: "数学文化节活动图片占位",
        en: "Placeholder for an image from the mathematics culture festival"
      },
      note: {
        zh: "后续可替换为活动现场照片或海报",
        en: "Replace later with an event photo or poster"
      }
    }
  }
];

export function pick(locale: Locale, value: LocalizedText): string {
  return value[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export function getPageTitle(locale: Locale, page: PageKey): string {
  if (page === "home") {
    return pick(locale, siteMeta.defaultTitle);
  }

  return `${pick(locale, navigation[page])} | ${pick(locale, siteBrand.title)}`;
}

export function getPageDescription(locale: Locale, page: PageKey): string {
  if (page === "home") {
    return pick(locale, siteMeta.defaultDescription);
  }

  return pick(locale, ui[page].description);
}

export function getPublishedItems(items: CollectionItem[]): CollectionItem[] {
  return items.filter((item) => item.status === "published");
}

export function getVisibleLinks(items: LinkItem[]): LinkItem[] {
  return items.filter((item) => Boolean(item.href));
}

export function getSortedNewsItems(items: NewsItem[]): NewsItem[] {
  return [...items].sort((left, right) => right.date.localeCompare(left.date));
}
