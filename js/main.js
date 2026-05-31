// 翻译数据
const i18n = {
    zh: {
        siteTitle: "杨琪勇 - 个人主页",
        langButton: "English",
        name: "杨琪勇",
        school: "城市：上海,中国",
        major: "信息管理与信息系统（2024-2027）",
        period: "2023 - 2027",
        "label.name": "姓名：",
        "label.school": "学校：",
        "label.period": "时间：",
        "label.major": "专业：",
        "label.university": "本科院校：",
        "university": "东华大学（211 上海）",
        "universityEn": "DONGHUA UNIVERSITY (211 project SH)",
        "major1": "行政管理",
        "major2": "信息管理与信息系统（IMIS）",
        "tab.overview": "概览",
        "tab.research": "学术经历",
        "tab.courses": "课程图谱",
        "tab.awards": "获奖荣誉",
        "tab.experience": "实习交换",
        "overview.basicInfo": "基础信息",
        "overview.language": "语言能力",
        "overview.skills": "核心技能",
        "stat.research": "0",
        "stat.researchLabel": "科研经历",
        "stat.awards": "0",
        "stat.awardsLabel": "竞赛奖项",
        "stat.certs": "0",
        "stat.certsLabel": "专业证书",
        "stat.gpa": "0",
        "stat.gpaLabel": "当前 GPA",
        "viewCert": "查看证书",
        "viewTranscript": "成绩单",
        "eticIntermediate": "中级良好证书",
        "eticElementary": "初级优秀证书",
        "eticScores": "初级优秀 / 中级良好",
        "skill.math": "数理基础",
        "skill.mathDesc": "微积分 95/96、线性代数 88、概率统计 90",
        "skill.modeling": "建模分析",
        "skill.modelingDesc": "商业建模 97、大数据 95、机器学习",
        "skill.logistics": "物流供应链",
        "skill.logisticsDesc": "物流管理 97、运作管理 90、ERP 实操",
        "skill.programming": "编程开发",
        "skill.programmingDesc": "Python、SQL、MATLAB、全栈开发",
        "research.title": "学术经历",
        "paper.published": "已发表",
        "paper.underReview": "在审",
        "paper.link": "论文链接",
        "paper.acceptance": "接收函",
        "paper.article": "论文全文",
        "paper.banner": "论文 Banner",
        "paper1.title": "Assessing the Sustainable Development of the Tourism Industry Based on Fuzzy AHP and Grey Relational TOPSIS",
        "paper1.abstract": "针对旅游可持续发展评价中指标模糊性、权重分配主观性问题，构建涵盖经济、社会、环境、文化 4 个一级维度、13 个二级指标的评价体系（含 7 个正向指标、6 个负向指标），区分旅游发展的效益与风险。方法上，创新融合模糊层次分析法（FAHP）与灰色关联 TOPSIS（GR-TOPSIS），通过三角模糊判断矩阵与一致性检验确定指标权重，整合欧氏距离与灰色关联度构建混合贴近度指数，提升模糊数据处理能力。以 7 个典型旅游区域为案例进行验证，得出结论：旅游收入贡献权重最高（<strong>0.189</strong>）、游客文化尊重度权重最低（<strong>0.015</strong>）的关键结论；丽江清水（生态文化型）可持续发展水平最优（混合贴近度 <strong>0.693</strong>）。通过敏感性分析，模型结论与熵权 TOPSIS 验证结果一致性显著，为区域旅游决策提供科学支撑。",
        "paper2.title": "Sustainable Evaluation Framework for Urban Creative Space: Exploring a Better Way for Urban Development",
        "paper2.abstract": "聚焦全球数字化与文化多样性背景下城市创意空间评价缺口，构建包含 AIGC 技术融合、文化遗产保护、数字文化产业经济效益、生态协同与社会包容、治理政策支持的 5 个一级维度、20 个二级指标的跨文化评价框架。采用直觉模糊层次分析法（IFAHP）确定指标权重，结合 TOPSIS 对伦敦、上海等 5 个国际城市进行排名，伦敦综合可持续性居首（贴近度 <strong>0.6623</strong>），上海位列第二（贴近度 <strong>0.5282</strong>）。模型稳健性分析方面，通过±20% 权重扰动验证模型稳健性，<strong>70%</strong> 的场景秩相关系数≥1.0，验证了模型稳定性。",
        "paper3.title": "Supply and demand prediction analysis of urban gas energy in China: A new method using WOA–Grey Markov",
        "paper3.abstract": "运用数学建模方法开展城市不可再生能源供需量预测。基于传统灰色模型 GM(1,1)，加入马尔可夫链进行预测残差修正，并引入鲸群算法（WOA）优化马尔可夫链参数。覆盖天然气、人工煤气、液化石油气 3 类能源，处理 2013-2023 年历史数据并预判 2024-2026 年趋势。设置 10 次取平均值计算，通过留一法（LOOVC）对模型进行检验。结果显示 WOA 的引入，相较于传统灰色马尔可夫预测，六组数据预测误差 RMSE 下降 <strong>3.6%-9.9%</strong>，同时其结果也略优于 PSO，说明 WOA 在这一种情景下的预测准确性更高。",
        "paper4.title": "Research on Accurate Prediction of Small-Sample Nonlinear Sequences in Multiple Scenarios",
        "paper4.status": "初审中（外审）",
        "paper4.abstract": "基于 GM(1,N)+ 马尔可夫链 + 改进万有引力算法，解决小样本非线性冷链物流序列预测难题。模型 MAPE 仅 <strong>10.23%</strong>（越低越好），较传统 GM(1,N)（MAPE <strong>54.65%</strong>）显著降低，预测 2024 年运输量达 <strong>6.29 亿吨</strong>，年增长率稳定在 <strong>22%-23%</strong>。",
        "courses.title": "课程知识图谱",
        "courses.loading": "正在加载课程图谱...",
        "awards.title": "获奖荣誉",
        "award.certificate": "证书",
        "award.paper": "参赛论文",
        "award.teacherCert": "指导教师证书",
        "award.website": "网站链接",
        "award.list": "获奖名单",
        "award.national": "国家级一等奖",
        "award1.title": "2025 年全国大学生数学竞赛（CMC）",
        "award1.prize": "省一等奖",
        "award1.desc": "数学学科基础竞赛，经过东华大学初赛（二等奖）、上海赛区复赛选拔，最终获得省级一等奖。竞赛考察数学分析、高等代数、解析几何等基础数学知识的综合应用能力。",
        "award2.title": "2025 年全国大学生英语竞赛（NECCS）",
        "award2.prize": "全国二等奖",
        "award2.desc": "英语学科基础竞赛，考察英语听力、阅读、写作、翻译等综合语言能力。",
        "award3.title": "2025 年美国大学生数学建模竞赛（MCM/ICM）- B 题",
        "award3.prize": "Honorable Mention",
        "award3.desc": "独立参加。针对“可持续旅游行业”议题，构建多目标决策模型（MCDM），引入模拟退火算法求解资源分配与环境保护的平衡解（MATLAB 求解）。建立了游客满意度、经济收益、生态保护三目标优化模型，通过层次分析法确定权重，运用模拟退火算法进行全局寻优。该竞赛为后续旅游业评价论文提供了初步的研究方向与方法启蒙。",
        "award4.title": "2024 年亚太杯数学建模竞赛（APMCM）- C 题",
        "award4.prize": "二等奖",
        "award4.desc": "独立参加。针对宠物行业规模进行预测，通过数据分析提出相关政策提议。采用时间序列分析（ARIMA 模型）和灰色预测模型（GM(1,1)）对宠物行业市场规模进行预测，构建多元回归模型分析宠物行业对 GDP、就业等经济指标的影响。",
        "award5.title": "MathorCup 高校数学建模挑战赛 - D 题",
        "award5.prize": "省级三等奖",
        "award5.desc": "独立参加。选择声音降噪处理赛题，采用快速傅里叶变换（FFT）对音频信号进行频域分析，设计自适应滤波算法（LMS 算法）实现主动降噪，通过 MATLAB 进行音频处理与仿真。",
        "award6.title": "全国大学生计算机设计大赛",
        "award6.prize": "省级三等奖",
        "award6.desc": "团队协作完成红色精神文旅网站搭建，采用 React+Node.js 技术栈，实现红色文化资源展示、旅游线路推荐、在线预约等功能模块。网站部署于阿里云服务器，支持高并发访问。",
        "award7.title": "2026 年美国大学生数学建模竞赛（MCM/ICM）- F 题",
        "award7.prize": "成功参赛",
        "award7.desc": "独立完成。聚焦 AI 与教育建模，构建不同专业求职竞争力评价模型，完成 2026-2040 年 15 年动力系统演化预测。采用熵权-TOPSIS 方法确定各指标权重，对 10 个典型专业进行竞争力排序。建立系统动力学模型，模拟不同专业在未来 15 年的就业市场演化趋势。",
        "award8.title": "2024 年全国大学生创新创业大赛",
        "award8.prize": "省级立项并结项",
        "award8.desc": "参与/主持两项大学生创新创业大赛乡村振兴赛道项目：1）乡村养老体系评价项目：采用熵权-TOPSIS 方法，构建包含基础设施、医疗服务、精神文化、经济保障等维度的乡村养老评价体系。2）乡村经济发展短期预测项目：基于灰色预测模型 GM(1,1)，对乡村经济收入进行短期预测。个人职责：负责访谈、报告撰写、建模与数据分析可视化。",
        "certificates.title": "专业证书",
        "cert.ibm1.title": "IBM 企业数据分析专业证书",
        "cert.ibm1.desc": "完成 IBM 企业数据分析专业课程，掌握数据科学核心技能",
        "cert.ibm2.title": "IBM 机器学习专业证书",
        "cert.ibm2.desc": "完成 IBM 机器学习专业课程，掌握机器学习算法与应用",
        "cert.tencent.title": "腾讯产品经理训练营",
        "cert.tencent.desc": "完成腾讯产品经理训练营入门课程与进阶版课程",
        "cert.basic": "入门课程证书",
        "cert.advanced": "进阶版课程证书",
        "cert.dj.title": "鼎捷校园全栈开发工程师",
        "cert.dj.desc": "校园全栈开发工程师认证",
        "honors.title": "荣誉称号",
        "honor.scholarship1.title": "2023-2024 学年 东华大学校一等奖学金",
        "honor.scholarship1.prize": "一等奖学金",
        "honor.scholarship2.title": "2024-2025 学年 东华大学天骥一等奖学金",
        "honor.scholarship2.prize": "天骥一等奖学金",
        "experience.title": "实习与国际交流",
        "type.internship": "实习",
        "type.exchange": "国际交流",
        "intern.vw": "上海大众汽车有限公司",
        "intern.vw.date": "2025.07 - 2025.08（2 个月）| 上海",
        "intern.vw.work": "工作内容：",
        "intern.vw.work1": "<strong>ESG 联动宣传项目</strong>：深度参与上汽大众与伊利牛奶 ESG 联动宣传项目，协助完成品牌可持续发展联合推广方案。",
        "intern.vw.work2": "<strong>舆情监测与分析</strong>：利用 Python 爬取微博、微信、抖音、小红书、知乎五大社交平台 <strong>400+</strong> 条评论数据，进行情感分析（基于 SnowNLP 库）与品牌形象差异调研，形成舆情分析报告。",
        "intern.vw.work3": "<strong>数据可视化看板</strong>：利用 Tableau 搭建传播热度可视化看板，实时监测 ESG 相关内容传播效果，包括曝光量、互动率、情感倾向等指标，支撑 ESG 传播决策。",
        "intern.vw.work4": "<strong>部门汇报</strong>：参与部门周会，汇报舆情监测结果与可视化分析结论，获得部门领导认可。",
        "intern.ox": "牛津大学伍斯特学院暑期课程",
        "intern.ox.date": "2024.08 - 2024.09（4 周）| 英国牛津",
        "intern.ox.course": "课程内容：",
        "intern.ox.course1": "<strong>商业管理</strong>：系统学习商业管理理论，包括战略规划、组织行为、运营管理等核心模块。",
        "intern.ox.course2": "<strong>数字营销</strong>：学习数字营销策略、社交媒体营销、SEO/SEM、内容营销等前沿知识。",
        "intern.ox.course3": "<strong>企业商业发展案例</strong>：研究全球知名企业商业发展案例，分析成功要素与失败教训。",
        "intern.ox.report": "实践汇报（4 次）：",
        "intern.ox.report1": "华为国际化战略分析",
        "intern.ox.report2": "小米生态链商业模式创新",
        "intern.ox.report3": "中国企业数字化转型案例",
        "intern.ox.report4": "跨文化管理策略比较"
    },
    en: {
        siteTitle: "Qiyong Yang - Personal Homepage",
        langButton: "中文",
        name: "Kylan YANG",
        school: "City:Shanghai,China",
        major: "Information Management and Information Systems (2024-2027)",
        period: "2023 - 2027",
        "label.name": "Name: ",
        "label.school": "University: ",
        "label.period": "Period: ",
        "label.major": "Major: ",
        "label.university": "University: ",
        "university": "Donghua University (211 Project, Shanghai)",
        "universityEn": "DONGHUA UNIVERSITY (211 project SH)",
        "major1": "Public Administration",
        "major2": "Information Management & Information Systems (IMIS)",
        "tab.overview": "Overview",
        "tab.research": "Research",
        "tab.courses": "Courses",
        "tab.awards": "Awards",
        "tab.experience": "Experience",
        "overview.basicInfo": "Basic Information",
        "overview.language": "Language Proficiency",
        "overview.skills": "Core Skills",
        "stat.research": "0",
        "stat.researchLabel": "Research",
        "stat.awards": "0",
        "stat.awardsLabel": "Awards",
        "stat.certs": "0",
        "stat.certsLabel": "Certificates",
        "stat.gpa": "0",
        "stat.gpaLabel": "Current GPA",
        "viewCert": "View Certificate",
        "viewTranscript": "Transcript",
        "eticIntermediate": "Intermediate Good Certificate",
        "eticElementary": "Elementary Excellent Certificate",
        "eticScores": "Elementary Excellent / Intermediate Good",
        "skill.math": "Mathematics & Statistics",
        "skill.mathDesc": "Calculus 95/96, Linear Algebra 88, Probability 90",
        "skill.modeling": "Modeling & Analysis",
        "skill.modelingDesc": "Business Modeling 97, Big Data 95, Machine Learning",
        "skill.logistics": "Logistics & Supply Chain",
        "skill.logisticsDesc": "Logistics Mgmt 97, Operations Mgmt 90, ERP Practice",
        "skill.programming": "Programming & Development",
        "skill.programmingDesc": "Python, SQL, MATLAB, Full-Stack Development",
        "research.title": "Academic Experience",
        "paper.published": "Published",
        "paper.underReview": "Under Review",
        "paper.link": "Paper Link",
        "paper.acceptance": "Acceptance Letter",
        "paper.article": "Full Article",
        "paper.banner": "Paper Banner",
        "paper1.title": "Assessing the Sustainable Development of the Tourism Industry Based on Fuzzy AHP and Grey Relational TOPSIS",
        "paper1.abstract": "To address the subjectivity in weight allocation and indicator fuzziness in sustainable tourism evaluation, this study constructed an evaluation system covering four primary dimensions (economy, society, environment, culture) and 13 secondary indicators. The approach innovatively integrates Fuzzy AHP and Grey Relational TOPSIS (GR-TOPSIS), using triangular fuzzy judgment matrices and consistency tests to determine weights, and combining Euclidean distance with grey relational degree to build a hybrid closeness index. Validated with seven typical tourism regions, the results show tourism revenue contributes the highest weight (<strong>0.189</strong>) and cultural respect the lowest (<strong>0.015</strong>); Lijiang Qingshui (eco-cultural type) achieved the highest sustainability level (closeness <strong>0.693</strong>).",
        "paper2.title": "Sustainable Evaluation Framework for Urban Creative Space: Exploring a Better Way for Urban Development",
        "paper2.abstract": "Focusing on the evaluation gap of urban creative spaces under the dual context of global digitalization and cultural diversity, this study constructs a cross-cultural evaluation framework with five primary dimensions (AIGC technology integration, cultural heritage protection, digital cultural industry economic benefits, ecological synergy & social inclusion, governance policy support) and 20 secondary indicators. London ranks highest (closeness <strong>0.6623</strong>), Shanghai second (<strong>0.5282</strong>). Robustness tests with ±20% weight perturbations show a rank correlation coefficient ≥1.0 in <strong>70%</strong> of scenarios.",
        "paper3.title": "Supply and demand prediction analysis of urban gas energy in China: A new method using WOA–Grey Markov",
        "paper3.abstract": "This study applies mathematical modeling to predict urban non-renewable energy supply and demand. It enhances the traditional GM(1,1) grey model with a Markov chain for residual correction and Whale Optimization Algorithm (WOA) for parameter optimization. The study covers natural gas, manufactured gas, and LPG, processing 2013-2023 historical data and forecasting 2024-2026 trends. Results show WOA reduces RMSE by <strong>3.6%–9.9%</strong> compared to traditional grey-Markov, and slightly outperforms PSO.",
        "paper4.title": "Research on Accurate Prediction of Small-Sample Nonlinear Sequences in Multiple Scenarios",
        "paper4.status": "Under Review (External Review)",
        "paper4.abstract": "Aiming at small-sample, nonlinear prediction challenges in agricultural cold chain logistics, this study develops a GM(1,N) model combined with Markov chain and Improved Gravitational Search Algorithm (IGSA). The model achieves a MAPE of only <strong>10.23%</strong>, significantly lower than the traditional GM(1,N) (MAPE <strong>54.65%</strong>), and predicts 2024 transport volume of <strong>629 million tons</strong> with a stable annual growth rate of <strong>22–23%</strong>.",
        "courses.title": "Course Knowledge Map",
        "courses.loading": "Loading course map...",
        "awards.title": "Awards & Honors",
        "award.certificate": "Certificate",
        "award.paper": "Competition Paper",
        "award.teacherCert": "Teacher Certificate",
        "award.website": "Website",
        "award.list": "Award List",
        "award.national": "National First Prize",
        "award1.title": "2025 Chinese Mathematics Competitions (CMC)",
        "award1.prize": "Provincial First Prize",
        "award1.desc": "Basic mathematics competition, passed Donghua University preliminary (Second Prize) and Shanghai regional selection, finally won provincial first prize.",
        "award2.title": "2025 National English Competition for College Students (NECCS)",
        "award2.prize": "National Second Prize",
        "award2.desc": "English comprehensive ability competition, testing listening, reading, writing, and translation skills.",
        "award3.title": "2025 MCM/ICM (Problem B)",
        "award3.prize": "Honorable Mention",
        "award3.desc": "Solo participation. Built a multi-criteria decision-making model (MCDM) and introduced simulated annealing algorithm to balance resource allocation and environmental protection for sustainable tourism.",
        "award4.title": "2024 Asia and Pacific Mathematical Contest in Modeling (APMCM) - Problem C",
        "award4.prize": "Second Prize",
        "award4.desc": "Solo participation. Predicted pet industry scale using ARIMA and GM(1,1) models, constructed multiple regression models to analyze economic impacts.",
        "award5.title": "MathorCup College Mathematical Modeling Challenge - Problem D",
        "award5.prize": "Provincial Third Prize",
        "award5.desc": "Solo participation. Designed active noise control algorithm using FFT and adaptive filtering (LMS algorithm) for audio signal processing.",
        "award6.title": "National College Student Computer Design Competition",
        "award6.prize": "Provincial Third Prize",
        "award6.desc": "Team collaboration on Red Spirit cultural tourism website using React+Node.js stack, deployed on Alibaba Cloud server.",
        "award7.title": "2026 MCM/ICM (Problem F)",
        "award7.prize": "Participant",
        "award7.desc": "Solo participation. Built college major competitiveness evaluation model and 15-year dynamic system prediction (2026-2040) using entropy-weight TOPSIS and system dynamics.",
        "award8.title": "2024 National College Student Innovation and Entrepreneurship Competition",
        "award8.prize": "Provincial Project Completed",
        "award8.desc": "Led two rural revitalization projects: 1) Rural elderly care system evaluation using entropy-weight TOPSIS. 2) Short-term rural economic forecasting using GM(1,1) grey model.",
        "certificates.title": "Professional Certificates",
        "cert.ibm1.title": "IBM Enterprise Data Science Professional Certificate",
        "cert.ibm1.desc": "Completed IBM Enterprise Data Science professional courses, mastering core data science skills.",
        "cert.ibm2.title": "IBM Machine Learning Professional Certificate",
        "cert.ibm2.desc": "Completed IBM Machine Learning professional courses, mastering machine learning algorithms and applications.",
        "cert.tencent.title": "Tencent Product Manager Training Program",
        "cert.tencent.desc": "Completed both introductory and advanced courses in Tencent Product Manager Training Program.",
        "cert.basic": "Introductory Course Certificate",
        "cert.advanced": "Advanced Course Certificate",
        "cert.dj.title": "Digiwin Campus Full-Stack Developer",
        "cert.dj.desc": "Campus Full-Stack Developer Certification.",
        "honors.title": "Honors & Scholarships",
        "honor.scholarship1.title": "2023-2024 Academic Year Donghua University First-Class Scholarship",
        "honor.scholarship1.prize": "First-Class Scholarship",
        "honor.scholarship2.title": "2024-2025 Academic Year Donghua University Tianji First-Class Scholarship",
        "honor.scholarship2.prize": "Tianji First-Class Scholarship",
        "experience.title": "Internship & Global Exchange",
        "type.internship": "Internship",
        "type.exchange": "Exchange",
        "intern.vw": "Shanghai Volkswagen Automotive Co., Ltd.",
        "intern.vw.date": "2025.07 - 2025.08 (2 months) | Shanghai",
        "intern.vw.work": "Responsibilities:",
        "intern.vw.work1": "<strong>ESG Joint Promotion Project</strong>: Deeply involved in SAIC Volkswagen & Yili Milk ESG joint promotion project, assisted in brand sustainability joint promotion plan.",
        "intern.vw.work2": "<strong>Public Opinion Monitoring</strong>: Scraped <strong>400+</strong> comments from five social platforms (Weibo, WeChat, Douyin, Xiaohongshu, Zhihu) using Python for sentiment analysis and brand image comparison.",
        "intern.vw.work3": "<strong>Data Visualization Dashboard</strong>: Built communication heatmap dashboard with Tableau to monitor ESG content performance including exposure, engagement rate, and sentiment trends.",
        "intern.vw.work4": "<strong>Department Reporting</strong>: Participated in weekly department meetings, reported public opinion monitoring results and visualization analysis conclusions.",
        "intern.ox": "Worcester College, University of Oxford Summer Program",
        "intern.ox.date": "2024.08 - 2024.09 (4 weeks) | Oxford, UK",
        "intern.ox.course": "Course Content:",
        "intern.ox.course1": "<strong>Business Management</strong>: Systematically studied business management theory including strategic planning, organizational behavior, and operations management.",
        "intern.ox.course2": "<strong>Digital Marketing</strong>: Learned digital marketing strategies, social media marketing, SEO/SEM, and content marketing.",
        "intern.ox.course3": "<strong>Corporate Business Development Cases</strong>: Studied global corporate business development cases, analyzing success factors and lessons learned.",
        "intern.ox.report": "Practice Reports (4):",
        "intern.ox.report1": "Huawei Internationalization Strategy Analysis",
        "intern.ox.report2": "Xiaomi Ecosystem Business Model Innovation",
        "intern.ox.report3": "Chinese Enterprise Digital Transformation Cases",
        "intern.ox.report4": "Cross-Cultural Management Strategy Comparison"
    }
};

// 当前状态
let currentLang = 'zh';
let currentTheme = 'light';

// 动画数字计数器
function animateCounter(element, target, duration = 1000) {
    const start = 0;
    const startTime = performance.now();
    const isFloat = target % 1 !== 0;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 使用 easeOutCubic 缓动函数，比 easeOutExpo 更均匀
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * easeProgress;
        
        if (isFloat) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// 创建词云
function createWordCloud() {
    const container = document.getElementById('wordCloud');
    if (!container) return;
    
    const words = [
        { text: 'Python', size: 2.2, color: '#FF6B6B' },
        { text: 'MATLAB', size: 1.8, color: '#4ECDC4' },
        { text: 'Web Coding', size: 1.5, color: '#667eea' },
        { text: 'Information System', size: 1.6, color: '#FF9F43' },
        { text: 'Social Science', size: 1.3, color: '#AA96DA' },
        { text: 'Data Analysis', size: 2.0, color: '#FFE66D' },
        { text: 'Visualization', size: 1.7, color: '#95E1D3' },
        { text: 'Sustainability', size: 1.5, color: '#F38181' },
        { text: 'Environmental Science', size: 1.4, color: '#4ECDC4' },
        { text: 'Machine Learning', size: 1.9, color: '#FF6B6B' },
        { text: 'SQL', size: 1.2, color: '#667eea' },
        { text: 'Tableau', size: 1.4, color: '#FF9F43' },
        { text: 'Operations Research', size: 1.3, color: '#AA96DA' },
        { text: 'Supply Chain', size: 1.5, color: '#FFE66D' },
        { text: 'ERP', size: 1.1, color: '#95E1D3' },
        { text: 'Statistics', size: 1.6, color: '#F38181' },
        { text: 'Mathematical Modeling', size: 1.8, color: '#4ECDC4' },
        { text: 'Big Data', size: 1.7, color: '#FF6B6B' },
        { text: 'GIS', size: 1.2, color: '#667eea' },
        { text: 'Product Management', size: 1.4, color: '#FF9F43' }
    ];
    
    container.innerHTML = '';
    
    // 获取容器尺寸
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    
    // 随机打乱顺序
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    
    // 存储已放置的词语位置，用于碰撞检测
    const placedItems = [];
    
    // 碰撞检测函数
    function checkOverlap(newRect, placedItems) {
        const padding = 10; // 词语之间的最小间距
        for (const item of placedItems) {
            if (
                newRect.left < item.right + padding &&
                newRect.right + padding > item.left &&
                newRect.top < item.bottom + padding &&
                newRect.bottom + padding > item.top
            ) {
                return true; // 发生重叠
            }
        }
        return false;
    }
    
    shuffled.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'word-cloud-item';
        span.textContent = word.text;
        span.style.fontSize = `${word.size}rem`;
        span.style.color = word.color;
        span.style.backgroundColor = word.color + '20';
        span.style.animationDelay = `${index * 0.1}s`;
        span.style.position = 'absolute';
        span.style.visibility = 'hidden'; // 先隐藏，计算位置后再显示
        
        container.appendChild(span);
        
        // 获取元素实际尺寸
        const itemRect = span.getBoundingClientRect();
        const itemWidth = itemRect.width;
        const itemHeight = itemRect.height;
        
        // 尝试放置词语，最多尝试100次
        let placed = false;
        let attempts = 0;
        const maxAttempts = 100;
        
        while (!placed && attempts < maxAttempts) {
            const left = Math.random() * (containerWidth - itemWidth - 20) + 10;
            const top = Math.random() * (containerHeight - itemHeight - 20) + 10;
            
            const newRect = {
                left: left,
                top: top,
                right: left + itemWidth,
                bottom: top + itemHeight
            };
            
            if (!checkOverlap(newRect, placedItems)) {
                span.style.left = `${left}px`;
                span.style.top = `${top}px`;
                span.style.visibility = 'visible';
                placedItems.push(newRect);
                placed = true;
            }
            
            attempts++;
        }
        
        // 如果无法放置，则放在一个默认位置（可能会重叠，但保证显示）
        if (!placed) {
            span.style.left = `${10 + (index % 5) * (containerWidth / 5)}px`;
            span.style.top = `${10 + Math.floor(index / 5) * (containerHeight / 4)}px`;
            span.style.visibility = 'visible';
        }
    });
}

// 初始化统计数字动画
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        animateCounter(el, target, 1000);
    });
}

// 课程图谱数据
const courseMapData = {
    zh: {
        centerName: "杨琪勇\n课程体系",
        resetView: "重置视图",
        toggleLabels: "切换标签",
        legendTitle: "课程类别",
        category: "类别",
        score: "成绩",
        noScore: "未显示",
        categories: [
            { name: "数学与统计基础", color: "#FF6B6B" },
            { name: "计算机核心课程", color: "#4ECDC4" },
            { name: "商业与数据分析", color: "#FFE66D" },
            { name: "信息系统与管理", color: "#95E1D3" },
            { name: "财会与经济", color: "#F38181" },
            { name: "物流与供应链", color: "#FF9F43" },
            { name: "人文与社科", color: "#AA96DA" }
        ],
        courses: {
            "数学与统计基础": [
                { name: "微积分 (上)", score: 95, desc: "极限、连续、一元微积分" },
                { name: "微积分 (下)", score: 96, desc: "多元微积分、级数、微分方程" },
                { name: "线性代数", score: 88, desc: "矩阵、向量空间、特征值" },
                { name: "概率论与数理统计", score: 90, desc: "概率分布、统计推断" }
            ],
            "计算机核心课程": [
                { name: "数据结构", score: 82, desc: "链表、树、图、算法" },
                { name: "数据库原理", score: 86, desc: "SQL、范式理论" },
                { name: "计算机网络", score: 99, desc: "TCP/IP、路由算法" },
                { name: "网络原理", score: 96, desc: "Web 开发、云计算" },
                { name: "计算机信息安全", score: null, desc: "网络安全、密码学、CA 证书" }
            ],
            "商业与数据分析": [
                { name: "商业建模与仿真", score: 97, desc: "LINGO、CPLEX、EXCEL" },
                { name: "商务智能软件", score: 95, desc: "Tableau 可视化" },
                { name: "大数据应用与技术", score: 95, desc: "Python、HADOOP" },
                { name: "数据分析与挖掘", score: 92, desc: "Apriori 算法" },
                { name: "机器学习", score: 95, desc: "SVM、梯度下降" },
                { name: "应用统计学", score: 92, desc: "多元变量分析" }
            ],
            "信息系统与管理": [
                { name: "管理信息系统", score: 90, desc: "SASD、BPMN、DFD" },
                { name: "信息系统分析与设计", score: null, desc: "UML、设计模式" },
                { name: "管理学原理", score: 91, desc: "组织行为、决策" },
                { name: "决策支持系统导论", score: 94, desc: "虚拟仿真实验" }
            ],
            "财会与经济": [
                { name: "会计学", score: 94, desc: "财务报表、成本核算" },
                { name: "财务管理", score: 92, desc: "投资决策、融资" },
                { name: "西方经济学", score: 94, desc: "微观、宏观" }
            ],
            "物流与供应链": [
                { name: "物流管理系统", score: 97, desc: "物流量预测、物流体系评价" },
                { name: "运作管理", score: 90, desc: "工厂选址、EOQ 模型" },
                { name: "物流与供应链管理", score: null, desc: "供需判断、长鞭效应" },
                { name: "企业资源计划 ERP", score: null, desc: "用友 U8、SAP 实操" }
            ],
            "人文与社科": [
                { name: "法理学", score: 93, desc: "法律基础理论" },
                { name: "行政案例分析", score: 97, desc: "行政管理实务" },
                { name: "网络舆情管理学", score: 97, desc: "舆情监测、情感分析" },
                { name: "管理统计学", score: 97, desc: "SPSS 实践" },
                { name: "社会学", score: null, desc: "社会调查方法" }
            ]
        }
    },
    en: {
        centerName: "Qiyong Yang\nCourse System",
        resetView: "Reset View",
        toggleLabels: "Toggle Labels",
        legendTitle: "Course Categories",
        category: "Category",
        score: "Score",
        noScore: "N/A",
        categories: [
            { name: "Math & Statistics", color: "#FF6B6B" },
            { name: "Computer Science", color: "#4ECDC4" },
            { name: "Business & Data Analysis", color: "#FFE66D" },
            { name: "Information Systems", color: "#95E1D3" },
            { name: "Finance & Economics", color: "#F38181" },
            { name: "Logistics & Supply Chain", color: "#FF9F43" },
            { name: "Humanities & Social Sciences", color: "#AA96DA" }
        ],
        courses: {
            "Math & Statistics": [
                { name: "Calculus I", score: 95, desc: "Limits, continuity, single-variable calculus" },
                { name: "Calculus II", score: 96, desc: "Multivariable calculus, series, differential equations" },
                { name: "Linear Algebra", score: 88, desc: "Matrices, vector spaces, eigenvalues" },
                { name: "Probability & Statistics", score: 90, desc: "Probability distributions, statistical inference" }
            ],
            "Computer Science": [
                { name: "Data Structures", score: 82, desc: "Linked lists, trees, graphs, algorithms" },
                { name: "Database Systems", score: 86, desc: "SQL, normalization theory" },
                { name: "Computer Networks", score: 99, desc: "TCP/IP, routing algorithms" },
                { name: "Network Fundamentals", score: 96, desc: "Web development, cloud computing" },
                { name: "Computer Security", score: null, desc: "Network security, cryptography, CA certificates" }
            ],
            "Business & Data Analysis": [
                { name: "Business Modeling & Simulation", score: 97, desc: "LINGO, CPLEX, EXCEL" },
                { name: "Business Intelligence", score: 95, desc: "Tableau visualization" },
                { name: "Big Data Applications", score: 95, desc: "Python, HADOOP" },
                { name: "Data Mining", score: 92, desc: "Apriori algorithm" },
                { name: "Machine Learning", score: 95, desc: "SVM, gradient descent" },
                { name: "Applied Statistics", score: 92, desc: "Multivariate analysis" }
            ],
            "Information Systems": [
                { name: "Management Information Systems", score: 90, desc: "SASD, BPMN, DFD" },
                { name: "IS Analysis & Design", score: null, desc: "UML, design patterns" },
                { name: "Management Principles", score: 91, desc: "Organizational behavior, decision making" },
                { name: "Decision Support Systems", score: 94, desc: "Virtual simulation experiments" }
            ],
            "Finance & Economics": [
                { name: "Accounting", score: 94, desc: "Financial statements, cost accounting" },
                { name: "Financial Management", score: 92, desc: "Investment decisions, financing" },
                { name: "Western Economics", score: 94, desc: "Microeconomics, macroeconomics" }
            ],
            "Logistics & Supply Chain": [
                { name: "Logistics Management System", score: 97, desc: "Logistics forecasting, system evaluation" },
                { name: "Operations Management", score: 90, desc: "Facility location, EOQ model" },
                { name: "Supply Chain Management", score: null, desc: "Supply-demand analysis, bullwhip effect" },
                { name: "Enterprise Resource Planning", score: null, desc: "Yonyou U8, SAP practice" }
            ],
            "Humanities & Social Sciences": [
                { name: "Jurisprudence", score: 93, desc: "Legal theory" },
                { name: "Administrative Case Analysis", score: 97, desc: "Administrative management practice" },
                { name: "Network Public Opinion", score: 97, desc: "Public opinion monitoring, sentiment analysis" },
                { name: "Management Statistics", score: 97, desc: "SPSS practice" },
                { name: "Sociology", score: null, desc: "Social survey methods" }
            ]
        }
    }
};

// 课程图谱变量
let courseMapSvg, courseMapG, courseMapSimulation, courseMapLink, courseMapNode, courseMapLabelsVisible = true;

// 初始化课程图谱
function initCourseMap() {
    const container = document.getElementById('knowledge-map');
    if (!container || container.querySelector('svg')) return; // 已初始化
    
    const t = courseMapData[currentLang] || courseMapData.zh;
    const width = container.clientWidth;
    const height = container.clientHeight || 600;
    
    // 创建 SVG
    courseMapSvg = d3.select("#knowledge-map")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .call(d3.zoom().on("zoom", (event) => {
            courseMapG.attr("transform", event.transform);
        }));
    
    courseMapG = courseMapSvg.append("g");
    
    // 创建图数据
    const nodes = [];
    const links = [];
    
    // 添加中心节点
    nodes.push({
        id: "center",
        name: t.centerName,
        radius: 60,
        color: "#fff",
        type: "center"
    });
    
    // 添加分类节点和课程节点
    t.categories.forEach((category, catIndex) => {
        const angle = (catIndex / t.categories.length) * 2 * Math.PI;
        const categoryRadius = Math.min(width, height) * 0.3;
        const cx = width / 2 + categoryRadius * Math.cos(angle);
        const cy = height / 2 + categoryRadius * Math.sin(angle);
        
        nodes.push({
            id: category.name,
            name: category.name,
            radius: 40,
            color: category.color,
            type: "category",
            x: cx,
            y: cy
        });
        
        links.push({
            source: "center",
            target: category.name,
            value: 3
        });
        
        const courseList = t.courses[category.name] || [];
        const courseCount = courseList.length;
        courseList.forEach((course, courseIndex) => {
            const courseAngle = (courseIndex / courseCount) * 2 * Math.PI;
            const courseRadius = 80;
            const courseX = cx + courseRadius * Math.cos(courseAngle);
            const courseY = cy + courseRadius * Math.sin(courseAngle);
            
            nodes.push({
                id: course.name,
                name: course.name,
                score: course.score,
                desc: course.desc,
                radius: course.score ? 25 : 20,
                color: category.color,
                type: "course",
                category: category.name,
                x: courseX,
                y: courseY
            });
            
            links.push({
                source: category.name,
                target: course.name,
                value: 2
            });
        });
    });
    
    // 创建力导向模拟
    courseMapSimulation = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(d => d.radius + 10))
        .force("link", d3.forceLink(links).id(d => d.id).distance(100));
    
    // 绘制连线
    courseMapLink = courseMapG.append("g")
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link");
    
    // 绘制节点
    courseMapNode = courseMapG.append("g")
        .selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
    
    // 添加圆形
    courseMapNode.append("circle")
        .attr("r", d => d.radius)
        .attr("fill", d => d.color)
        .attr("opacity", d => d.type === "center" ? 1 : 0.85);
    
    // 添加文字标签
    courseMapNode.append("text")
        .text(d => {
            if (d.type === "center") return d.name.split("\n")[0];
            if (d.type === "category") return d.name.length > 8 ? d.name.substring(0, 6) + "..." : d.name;
            return d.name.length > 8 ? d.name.substring(0, 6) + "..." : d.name;
        })
        .attr("text-anchor", "middle")
        .attr("dy", d => d.type === "center" ? 5 : (d.type === "category" ? 5 : 35));
    
    // 中心节点添加副标题
    courseMapNode.filter(d => d.type === "center")
        .append("text")
        .text(d => d.name.split("\n")[1])
        .attr("text-anchor", "middle")
        .attr("dy", -10)
        .attr("font-size", "14px");
    
    // 鼠标悬停事件
    courseMapNode.on("mouseover", function(event, d) {
        const tooltip = document.getElementById('tooltip');
        if (d.type === "course") {
            let content = `<h4>${d.name}</h4>`;
            content += `<p><strong>${t.category}:</strong> ${d.category}</p>`;
            content += `<p>${d.desc}</p>`;
            if (d.score) {
                content += `<div class="score">${t.score}：${d.score}${currentLang === 'zh' ? '分' : ''}</div>`;
            } else {
                content += `<div class="score" style="background: #999;">${t.noScore}</div>`;
            }
            tooltip.innerHTML = content;
            tooltip.style.opacity = 1;
            tooltip.style.pointerEvents = 'none';
        }
    })
    .on("mousemove", function(event, d) {
        const tooltip = document.getElementById('tooltip');
        const container = document.getElementById('knowledge-map');
        const rect = container.getBoundingClientRect();
        
        // 计算相对于容器的位置
        let x = event.clientX - rect.left + 15;
        let y = event.clientY - rect.top - 10;
        
        // 防止 tooltip 超出容器边界
        const tooltipRect = tooltip.getBoundingClientRect();
        if (x + tooltipRect.width > rect.width) {
            x = event.clientX - rect.left - tooltipRect.width - 15;
        }
        if (y + tooltipRect.height > rect.height) {
            y = rect.height - tooltipRect.height - 10;
        }
        if (y < 10) {
            y = 10;
        }
        
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    })
    .on("mouseout", function() {
        document.getElementById('tooltip').style.opacity = 0;
    });
    
    // 更新节点位置
    courseMapSimulation.on("tick", () => {
        courseMapLink
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        
        courseMapNode.attr("transform", d => `translate(${d.x},${d.y})`);
    });
    
    // 拖拽功能
    function dragstarted(event, d) {
        if (!event.active) courseMapSimulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) courseMapSimulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
    
    // 图例
    const legend = document.getElementById('legend');
    legend.innerHTML = `<h4>${t.legendTitle}</h4>`;
    t.categories.forEach(cat => {
        legend.innerHTML += `
            <div class="legend-item">
                <div class="legend-color" style="background: ${cat.color}"></div>
                <span>${cat.name}</span>
            </div>
        `;
    });
    
    // 隐藏加载指示器
    document.getElementById('courses-loading').style.display = 'none';
    
    // 初始化缩放以适应屏幕
    setTimeout(() => {
        const bounds = courseMapG.node().getBBox();
        const fullWidth = width;
        const fullHeight = height;
        const boundsWidth = bounds.width;
        const boundsHeight = bounds.height;
        
        const scale = Math.min(
            fullWidth / boundsWidth * 0.9,
            fullHeight / boundsHeight * 0.9,
            1
        );
        
        const translateX = fullWidth / 2 - (bounds.x + boundsWidth / 2) * scale;
        const translateY = fullHeight / 2 - (bounds.y + boundsHeight / 2) * scale;
        
        courseMapSvg.transition().duration(750).call(
            d3.zoom().transform,
            d3.zoomIdentity.translate(translateX, translateY).scale(scale)
        );
    }, 1000);
}

// 切换语言
function switchLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // 跳过统计数字元素，避免重置为0
        if (el.classList.contains('stat-number')) return;
        if (i18n[lang] && i18n[lang][key]) {
            // 使用 innerHTML 以支持包含 HTML 标签的内容（如 <strong>）
            el.innerHTML = i18n[lang][key];
        }
    });
    
    // 更新语言按钮
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.textContent = i18n[lang].langButton;
    }
    
    // 语言切换后重新执行统计数字动画
    setTimeout(() => {
        initStatsAnimation();
    }, 100);
    
    // 语言切换后更新课程图谱
    updateCourseMapLanguage();
}

// 更新课程图谱语言
function updateCourseMapLanguage() {
    const container = document.getElementById('knowledge-map');
    if (!container || !container.querySelector('svg')) return; // 图谱未初始化
    
    // 清除现有图谱
    container.innerHTML = '';
    
    // 重新初始化
    setTimeout(() => {
        initCourseMap();
    }, 50);
}

// 切换主题
function switchTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    
    // 更新主题图标
    const lightIcon = document.querySelector('.theme-icon-light');
    const darkIcon = document.querySelector('.theme-icon-dark');
    
    if (theme === 'dark') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }
    
    // 保存到 localStorage
    localStorage.setItem('theme', theme);
}

// 标签切换
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // 移除所有 active 类
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // 添加 active 类到当前标签
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // 如果切换到课程图谱标签，初始化图谱
            if (tabId === 'courses') {
                setTimeout(() => {
                    initCourseMap();
                }, 100);
            }
        });
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 设置标签切换
    setupTabs();
    
    // 恢复主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    switchTheme(savedTheme);
    
    // 设置语言
    switchLang('zh');
    
    // 初始化统计数字动画和词云
    setTimeout(() => {
        initStatsAnimation();
        createWordCloud();
    }, 100);
    
    // 主题切换按钮
    const themeBtn = document.getElementById('theme-switch');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            switchTheme(newTheme);
        });
    }
    
    // 语言切换按钮
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            switchLang(newLang);
        });
    }
});
