import type { CollectionItem, Locale, LocalizedText } from "./site";

export interface ResourceLink {
  label: LocalizedText;
  href: string;
  note?: LocalizedText;
}

export interface ArticleItem {
  title: LocalizedText;
  description?: LocalizedText;
  links?: ResourceLink[];
}

export interface ArticleSection {
  title: LocalizedText;
  description?: LocalizedText;
  body?: LocalizedText[];
  items?: ArticleItem[];
}

export interface ArticleCover {
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
}

export interface KnowledgeArticle {
  slug: string;
  date: string;
  title: LocalizedText;
  summary: LocalizedText;
  tag: LocalizedText;
  featured: boolean;
  intro: LocalizedText[];
  note?: LocalizedText;
  cover?: ArticleCover;
  resources?: ResourceLink[];
  sections?: ArticleSection[];
}

const pdfRoot = "/resources/pdf";
const imageRoot = "/resources/images";

const experimentReport = { zh: "实验报告", en: "Experiment Report" };
const previewReport = { zh: "预习报告", en: "Preview Report" };
const inClassReport = { zh: "课堂报告", en: "In-class Report" };
const independentReport = { zh: "自主学习实验报告", en: "Independent Study Report" };
const finalPaper = { zh: "期末论文", en: "Final Paper" };
const outline = { zh: "提纲", en: "Outline" };
const formulaSheet = { zh: "公式单 PDF", en: "Formula Sheet PDF" };
const conceptMap = { zh: "结构图", en: "Concept Map" };
const fullPaper = { zh: "论文 PDF", en: "Paper PDF" };

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "general-physics-experiment-i",
    date: "2024-06-01",
    title: { zh: "普通物理实验 I", en: "General Physics Experiment I" },
    summary: {
      zh: "整理大一上学期普通物理实验 I 的课堂实验、自主实验与配套预习资料。",
      en: "A curated record of General Physics Experiment I, including lab reports, preview reports, and an independent final project."
    },
    tag: { zh: "课程实验", en: "Laboratory" },
    featured: true,
    intro: [
      {
        zh: "在大一第一个学期，我选修了《普通物理实验 I》课程。这里保留了旧站中的实验记录，并将实验报告与预习材料整合为更清晰的资料页。",
        en: "During the first semester of my freshman year, I took General Physics Experiment I. This page preserves the original archive and reorganizes the reports and preview notes into a clearer library entry."
      },
      {
        zh: "课程共包含九个课堂实验和一个课后独立实验，其中五个实验报告课后完成，四个实验在课堂内完成。",
        en: "The course included nine core experiments and one independent project. Five reports were completed after class, while four were finished during the lab sessions."
      }
    ],
    sections: [
      {
        title: { zh: "课后完成的实验", en: "Reports Completed After Class" },
        items: [
          {
            title: {
              zh: "测定金属的杨氏模量",
              en: "Measurement of the Young's Modulus of Metal"
            },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_1/Measurement_of_the_Young's_Modulus_of_Metal.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/05.pdf` }
            ]
          },
          {
            title: {
              zh: "测定介质中的声速",
              en: "Determination of the Speed of Sound in a Medium"
            },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_1/Determination_of_the_Speed_of_Sound_in_a_Medium.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/06.pdf` }
            ]
          },
          {
            title: {
              zh: "RLC 电路谐振现象",
              en: "Resonance Phenomenon in an RLC Circuit"
            },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_1/Resonance_Phenomenon_in_an_RLC_Circuit.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/03.pdf` }
            ]
          },
          {
            title: {
              zh: "光衍射的定量研究",
              en: "Quantitative Study of Light Diffraction"
            },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_1/Quantitative_Study_of_Light_Diffraction.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/02.pdf` }
            ]
          },
          {
            title: {
              zh: "用示波器观察动态磁滞回线",
              en: "Observation of Dynamic Hysteresis Loop with an Oscilloscope"
            },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_1/Observation_of_Dynamic_Hysteresis_Loop_with_an_Oscilloscope.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/04.pdf` }
            ]
          }
        ]
      },
      {
        title: { zh: "课堂上完成的实验", en: "Reports Completed During Class" },
        items: [
          {
            title: {
              zh: "分光计的调节和掠入射法测量折射率",
              en: "Adjustment of the Spectrometer and Measurement of Refractive Index by Grazing Incidence Method"
            },
            links: [
              {
                label: inClassReport,
                href: `${pdfRoot}/pre_class/Adjustment_of_the_Spectrometer_and_Measurement_of_Refractive_Index_by_Grazing_Incidence_Method.pdf`
              }
            ]
          },
          {
            title: { zh: "真空镀膜", en: "Vacuum Coating" },
            links: [{ label: inClassReport, href: `${pdfRoot}/pre_class/Vacuum_Coating.pdf` }]
          },
          {
            title: { zh: "直流电桥测量电阻", en: "Measurement of Resistance Using a DC Bridge" },
            links: [
              {
                label: inClassReport,
                href: `${pdfRoot}/pre_class/Measurement_of_Resistance_Using_a_DC_Bridge.pdf`
              }
            ]
          },
          {
            title: { zh: "迈克尔孙干涉仪", en: "Michelson Interferometer Experiment" },
            links: [
              {
                label: inClassReport,
                href: `${pdfRoot}/pre_class/Michelson_Interferometer_Experiment.pdf`
              }
            ]
          }
        ]
      },
      {
        title: { zh: "独立实验", en: "Independent Experiment" },
        body: [
          {
            zh: "透过液滴观察物体时，可以看到随液滴形态变化而变化的放大倍率与成像分辨率。我分析了液滴形态、成像规律，并用 Python 计算了光线轨迹，验证放大倍率与液滴体积的正相关关系。",
            en: "The independent project studied how a single droplet acts as an imaging system. By analyzing droplet shape and tracing light rays with Python, the work confirmed the positive correlation between magnification and droplet volume."
          }
        ],
        items: [
          {
            title: {
              zh: "液滴成像独立实验期末论文",
              en: "Final paper on droplet-lens imaging"
            },
            links: [{ label: finalPaper, href: `${pdfRoot}/general_exp_1/the_final_paper.pdf` }]
          }
        ]
      }
    ]
  },
  {
    slug: "general-physics-experiment-ii",
    date: "2024-06-02",
    title: { zh: "普通物理实验 II", en: "General Physics Experiment II" },
    summary: {
      zh: "整理大一下学期普通物理实验 II 的六个课堂实验与四个自主学习实验。",
      en: "An organized archive of six in-class experiments and four independent experiments from General Physics Experiment II."
    },
    tag: { zh: "课程实验", en: "Laboratory" },
    featured: true,
    intro: [
      {
        zh: "《普通物理实验 II》延续了实验训练与报告写作的节奏，这一页将旧站中的实验材料按新站风格重新归档。",
        en: "General Physics Experiment II continued the rhythm of hands-on lab practice and technical reporting. This page reorganizes the original materials in the new site's visual language."
      },
      {
        zh: "课程包括六个课堂实验和四个独立实验，保留了实验报告及对应的预习资料入口。",
        en: "The course included six in-class experiments and four independent projects, with both reports and supporting preview materials preserved here."
      }
    ],
    sections: [
      {
        title: { zh: "课堂实验", en: "In-class Experiments" },
        items: [
          {
            title: {
              zh: "动态法测定良导体的热导率",
              en: "Measurement of Thermal Conductivity of a Good Conductor Using Dynamic Method"
            },
            links: [
              {
                label: experimentReport,
                href: `${pdfRoot}/general_exp_2/Measurement_of_Thermal_Conductivity_of_a_Good_Conductor_Using_Dynamic_Method.pdf`
              },
              { label: previewReport, href: `${pdfRoot}/pre_class/16.pdf` }
            ]
          },
          {
            title: { zh: "弗兰克-赫兹实验", en: "Franck-Hertz Experiment" },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_2/Franck-Hertz_Experiment.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/13.pdf` }
            ]
          },
          {
            title: { zh: "光源的时间相干性", en: "Temporal Coherence of Light Source" },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_2/Temporal_Coherence_of_Light_Source.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/14.pdf` }
            ]
          },
          {
            title: { zh: "光信息处理", en: "Optical Information Processing" },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_2/Optical_Information_Processing.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/11.pdf` }
            ]
          },
          {
            title: { zh: "基于虚拟仪器的电路实验", en: "Circuit Experiment Based on Virtual Instruments" },
            links: [
              {
                label: experimentReport,
                href: `${pdfRoot}/general_exp_2/Circuit_Experiment_Based_on_Virtual_Instruments.pdf`
              },
              { label: previewReport, href: `${pdfRoot}/pre_class/12.pdf` }
            ]
          },
          {
            title: { zh: "弦上驻波实验", en: "Standing Wave Experiment on a String" },
            links: [
              { label: experimentReport, href: `${pdfRoot}/general_exp_2/Standing_Wave_Experiment_on_a_String.pdf` },
              { label: previewReport, href: `${pdfRoot}/pre_class/15.pdf` }
            ]
          }
        ]
      },
      {
        title: { zh: "独立实验", en: "Independent Experiments" },
        items: [
          {
            title: { zh: "RLC 串联电路的暂态过程", en: "Transient Process of Series RLC Circuit" },
            links: [{ label: independentReport, href: `${pdfRoot}/general_exp_2/Transient_Process_of_Series_RLC_Circuit.pdf` }]
          },
          {
            title: { zh: "复摆实验", en: "Compound Pendulum Experiment" },
            links: [{ label: independentReport, href: `${pdfRoot}/general_exp_2/Compound_Pendulum_Experiment.pdf` }]
          },
          {
            title: { zh: "光栅特性及测定光波波长", en: "Grating Characteristics and Measurement of Wavelength" },
            links: [
              {
                label: independentReport,
                href: `${pdfRoot}/general_exp_2/Grating_Characteristics_and_Measurement_of_Wavelength.pdf`
              }
            ]
          },
          {
            title: { zh: "三线摆实验", en: "Three-wire Pendulum Experiment" },
            links: [{ label: independentReport, href: `${pdfRoot}/general_exp_2/Three-wire_Pendulum_Experiment.pdf` }]
          }
        ]
      }
    ]
  },
  {
    slug: "microelectronics-introduction",
    date: "2024-06-03",
    title: { zh: "微电子学概论", en: "Introduction to MicroElectronics" },
    summary: {
      zh: "保留《微电子学概论》课程论文《摩尔定律》的下载入口。",
      en: "An archive entry for the course paper 'Moore's Law' from Introduction to MicroElectronics."
    },
    tag: { zh: "课程论文", en: "Course Paper" },
    featured: false,
    intro: [
      {
        zh: "这篇资料页收录了《微电子学概论》课程中的期末论文，保留原始 PDF，方便在新站中统一管理。",
        en: "This entry preserves the final paper from Introduction to MicroElectronics and keeps the original PDF accessible from the new site."
      }
    ],
    resources: [
      {
        label: { zh: "摩尔定律", en: "Moore's Law" },
        href: `${pdfRoot}/final_paper/Moore's_Law.pdf`,
        note: fullPaper
      }
    ]
  },
  {
    slug: "xi-thoughts-course",
    date: "2024-06-04",
    title: {
      zh: "习近平新时代中国特色社会主义思想概论",
      en: "An Introduction to Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era"
    },
    summary: {
      zh: "收录课程期末论文与复习提纲，保留旧站中的两项核心资料。",
      en: "A consolidated entry for the course final paper and review outline preserved from the original site."
    },
    tag: { zh: "课程论文", en: "Course Paper" },
    featured: false,
    intro: [
      {
        zh: "旧站中这一部分主要包含课程期末论文，以及为闭卷期末整理的一份复习提纲。",
        en: "The original page centered on two resources: a final course paper and a review outline compiled for the closed-book final examination."
      },
      {
        zh: "在新站里，这两项资料被保留下来，并作为相关课程材料的统一入口。",
        en: "Both resources are preserved here as a single, cleaner entry within the new knowledge library."
      }
    ],
    resources: [
      {
        label: {
          zh: "科教兴国、人才强国之我观——AI 大爆发环境下的科技发展现状与挑战",
          en: "My Perspectives of Strategies for Revitalizing the Nation through Science and Education, and Strengthening the Country through Talent"
        },
        href: `${pdfRoot}/final_paper/An_Introduction_to_Xi_Jinping_Thought_on_Socialism_with_Chinese_Characteristics_for_a_New_Era.pdf`,
        note: fullPaper
      },
      {
        label: outline,
        href: `${pdfRoot}/outline/Xi_thoughts_outline.pdf`,
        note: { zh: "配套复习提纲", en: "Companion review outline" }
      }
    ]
  },
  {
    slug: "xi-outline",
    date: "2024-06-05",
    title: { zh: "LG 习概提纲", en: "LG Outline for the Xi Thought Course" },
    summary: {
      zh: "整理《习概》复习提纲中的核心框架，并保留原 PDF 与结构图。",
      en: "A structured view of the Xi Thought review outline, accompanied by the original PDF and concept map."
    },
    tag: { zh: "考试提纲", en: "Exam Outline" },
    featured: true,
    intro: [
      {
        zh: "这份提纲最初使用 Markdown 编写，目标是在尽可能少背诵的前提下把握整本课程的高频框架与核心考点。",
        en: "This outline was originally written in Markdown to reduce rote memorization while preserving the key structures and recurring exam topics of the course."
      },
      {
        zh: "在新站中保留了 PDF、结构图和主要目录，方便快速浏览与下载。",
        en: "The new site keeps the PDF, the structure map, and a concise view of the major sections so the material remains easy to skim and download."
      }
    ],
    note: {
      zh: "完整条目与更细的知识点仍以原始 PDF 为准。",
      en: "The complete working outline remains available in the original Chinese PDF."
    },
    cover: {
      src: `${imageRoot}/习概体系.png`,
      alt: {
        zh: "习概提纲的结构图",
        en: "Concept map from the Xi Thought outline"
      },
      caption: {
        zh: "旧站中的配套结构图已一并迁移到新站资源目录。",
        en: "The accompanying concept map from the original site has been copied into the new site's resource library."
      }
    },
    resources: [
      { label: outline, href: `${pdfRoot}/outline/Xi_thoughts_outline.pdf`, note: { zh: "完整提纲 PDF", en: "Full outline PDF" } },
      { label: conceptMap, href: `${imageRoot}/习概体系.png`, note: { zh: "提纲结构图", en: "Outline concept map" } }
    ],
    sections: [
      {
        title: { zh: "时代背景与理论框架", en: "Context and Theoretical Framework" },
        items: [
          {
            title: { zh: "六个必须坚持", en: "Six principles that must be upheld" },
            description: {
              zh: "人民至上、自信自立、守正创新、问题导向、系统观念、胸怀天下。",
              en: "People first, self-confidence and self-reliance, integrity and innovation, problem orientation, systems thinking, and a global vision."
            }
          },
          {
            title: { zh: "中国特色社会主义的新发展", en: "The contemporary development of socialism with Chinese characteristics" },
            description: {
              zh: "提纲归纳了“四个自信”“五位一体”“四个全面”等高频框架。",
              en: "The outline highlights recurring frameworks such as the 'four confidences,' the 'five-sphere integrated plan,' and the 'four-pronged comprehensive strategy.'"
            }
          },
          {
            title: { zh: "主要矛盾与两个结合", en: "Primary contradiction and the 'two integrations'" },
            description: {
              zh: "梳理了成立初期、改革开放后与新时代的主要矛盾演变，以及马克思主义基本原理的两个结合。",
              en: "It traces the evolution of the principal social contradiction across historical stages and summarizes the two integrations of Marxist principles."
            }
          }
        ]
      },
      {
        title: { zh: "现代化、改革与发展", en: "Modernization, Reform, and Development" },
        items: [
          {
            title: { zh: "中国式现代化", en: "Chinese modernization" },
            description: {
              zh: "包含中国特色、本质要求、重大原则，以及推进现代化需要处理的重大关系。",
              en: "Includes Chinese characteristics, essential requirements, major principles, and the key relationships involved in modernization."
            }
          },
          {
            title: { zh: "全面深化改革与高质量发展", en: "Comprehensive reform and high-quality development" },
            description: {
              zh: "提纲覆盖改革总目标、方法论、新发展理念、新发展格局及现代化产业体系。",
              en: "The notes cover the overall reform goal, methodology, new development concepts, the new development pattern, and the modern industrial system."
            }
          },
          {
            title: { zh: "共同富裕与社会治理", en: "Common prosperity and social governance" },
            description: {
              zh: "涉及共同富裕原则与思路，以及社会治理和生态文明相关考点。",
              en: "Also covered are the principles of common prosperity together with social governance and ecological civilization topics."
            }
          }
        ]
      },
      {
        title: { zh: "民主法治与文化建设", en: "Democracy, Rule of Law, and Culture" },
        items: [
          {
            title: { zh: "全过程人民民主与依法治国", en: "Whole-process people's democracy and rule of law" },
            description: {
              zh: "整合了政治发展道路、全过程人民民主的四个统一，以及依法治国的重大关系和十六字方针。",
              en: "This part consolidates the political development path, the four unities of whole-process people's democracy, and key rule-of-law frameworks."
            }
          },
          {
            title: { zh: "精神谱系与优秀传统文化", en: "Spiritual lineage and traditional culture" },
            description: {
              zh: "包含伟大建党精神、革命精神谱系、优秀传统文化五大特征和文化自信相关补充。",
              en: "It includes the spirit of Party founding, the lineage of revolutionary精神, the five features of excellent traditional culture, and related supplements."
            }
          }
        ]
      },
      {
        title: { zh: "安全、国防与外交", en: "Security, National Defense, and Diplomacy" },
        items: [
          {
            title: { zh: "总体国家安全观与强军目标", en: "The holistic national security approach and military goals" },
            description: {
              zh: "整理了总体国家安全观的重点、强军目标与国防建设相关知识点。",
              en: "Summarizes the national security framework, the military's core objectives, and defense-related topics."
            }
          },
          {
            title: { zh: "人类命运共同体与全球倡议", en: "A community with a shared future for mankind and global initiatives" },
            description: {
              zh: "涵盖新型国际关系、人类命运共同体、三大全球倡议和全人类共同价值。",
              en: "Covers new international relations, the idea of a shared future for humanity, the three global initiatives, and shared human values."
            }
          }
        ]
      },
      {
        title: { zh: "全面从严治党与中国梦", en: "Party Self-Governance and the Chinese Dream" },
        items: [
          {
            title: { zh: "党的自我革命与大党独有难题", en: "Self-reform of the Party and major-party challenges" },
            description: {
              zh: "包含跳出历史周期率的两个答案、大党独有难题、两个维护、两个确立等高频表述。",
              en: "Includes the two answers to escaping historical cycles, the unique challenges of a large governing party, and other frequently tested formulations."
            }
          },
          {
            title: { zh: "中国梦与常见扩展点", en: "The Chinese Dream and extended memorization points" },
            description: {
              zh: "最后一部分聚焦中国梦及提纲中的 LG 扩展补充内容。",
              en: "The final part focuses on the Chinese Dream together with the extended memory aids added in the original notes."
            }
          }
        ]
      }
    ]
  },
  {
    slug: "lg-formula-sheet",
    date: "2024-06-26",
    title: { zh: "LG 公式单", en: "LG Formula Sheet" },
    summary: {
      zh: "收录个人整理的公式单目录，并保留原始 PDF 下载。",
      en: "An index of the personal formula sheet collection, with the original PDF preserved for download."
    },
    tag: { zh: "学习资料", en: "Study Notes" },
    featured: false,
    intro: [
      {
        zh: "这份公式单汇集了学习与竞赛过程中长期整理的高频公式、技巧与总结，覆盖数学、物理与实验统计等多个模块。",
        en: "This formula sheet condenses long-running notes from coursework and competitions across mathematics, physics, and experimental statistics."
      },
      {
        zh: "新站保留了原始 PDF，并将内容范围整理成可快速浏览的目录。",
        en: "The new site keeps the original PDF and turns the coverage into a quick-scan index."
      }
    ],
    note: {
      zh: "原始资料以中文为主，完整版本请查看 PDF。",
      en: "The original material is primarily in Chinese; consult the PDF for the complete version."
    },
    resources: [
      { label: { zh: "LG 公式单", en: "LG Formula Sheet" }, href: `${pdfRoot}/outline/LG公式单.pdf`, note: formulaSheet }
    ],
    sections: [
      {
        title: { zh: "收录内容", en: "Included Topics" },
        items: [
          {
            title: { zh: "高等数学的定理及答题技巧梳理", en: "Theorems and problem-solving techniques in advanced mathematics" }
          },
          {
            title: { zh: "积分与数学推导专题", en: "Integrals and mathematical derivations" },
            description: {
              zh: "包括 sin(x)/x 积分的多种计算方法与其他有趣推导。",
              en: "Includes multiple derivations for the classic sin(x)/x integral and other worked derivations."
            }
          },
          {
            title: { zh: "竞赛答题策略与易错点总结", en: "Competition strategies and common pitfalls" }
          },
          {
            title: { zh: "力学、电磁学、热学、几何光学公式单", en: "Formula sheets for mechanics, electromagnetism, thermodynamics, and geometric optics" }
          },
          {
            title: { zh: "实验物理中的统计方法整理", en: "Statistical methods for experimental physics" }
          },
          {
            title: { zh: "学习四大力学时记录的计算方法", en: "Computational methods recorded while studying theoretical mechanics topics" }
          },
          {
            title: { zh: "高中物理竞赛与晶体干涉相关笔记", en: "Notes from high-school physics competition study and crystal-interference derivations" }
          }
        ]
      }
    ]
  }
];

function sortByDate<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((left, right) => right.date.localeCompare(left.date));
}

export function getKnowledgePath(locale: Locale, slug: string): string {
  return locale === "zh" ? `/knowledge/${slug}/` : `/en/knowledge/${slug}/`;
}

export function getKnowledgeArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((article) => article.slug === slug);
}

export function getKnowledgeCollectionItems(locale: Locale): CollectionItem[] {
  return sortByDate(knowledgeArticles).map((article) => ({
    id: article.slug,
    title: article.title,
    summary: article.summary,
    tag: article.tag,
    href: getKnowledgePath(locale, article.slug),
    kind: "internal",
    status: "published",
    featured: article.featured
  }));
}

export function getFeaturedKnowledgeItems(locale: Locale, limit = 3): CollectionItem[] {
  return getKnowledgeCollectionItems(locale)
    .filter((item) => item.featured)
    .slice(0, limit);
}
