const T={"en":{"nav.profile":"Profile","nav.work":"Academic Work","hero.eyebrow":"Undergraduate researcher · Shanghai","hero.lead":"I study information systems and use data-driven methods to understand sustainable development, urban systems, and managerial decision-making.","hero.work":"View academic work","hero.transcript":"Official transcript ↗","hero.caption":"Information Management & Information Systems<br>Donghua University","profile.title":"Profile","profile.subtitle":"Education, focus, and selected experience","education.kicker":"Education","education.degree":"B.Mgmt. candidate, Information Management & Information Systems","education.detail":"Glorious Sun School of Business and Management · 2023–2027 (expected)","education.average":"Weighted average","education.rank":"Current rank","education.gpa":"Official GPA","education.transcript":"Official transcript ↗","education.courses":"Browse 85 courses ↓","about.kicker":"Current focus","about.text":"My work sits between quantitative modelling and information systems, with interests in interpretable forecasting, multi-criteria decision methods, sustainability evaluation, and digital decision support.","focus.one":"Data analytics & predictive modelling","focus.two":"Sustainable development evaluation","focus.three":"Information systems & decision support","focus.four":"Urban and public-opinion research","exp.vw.title":"SAIC Volkswagen · Intern","exp.vw.text":"Supported ESG communications, collected 400+ social-media comments with Python, conducted sentiment analysis, and built a Tableau dashboard.","exp.ox.title":"Worcester College, University of Oxford · Summer Programme","exp.ox.text":"Four-week programme in business management, digital marketing, and international business cases.","common.proof":"Proof ↗","common.certificate":"Certificate ↗","common.report":"Score report ↗","common.acceptance":"Acceptance ↗","work.title":"Academic Work","work.subtitle":"Research, coursework, and selected recognition","research.title":"Research","research.note":"Selected publications and manuscripts","pub.one":"A hybrid MCDM approach separating the benefits and risks of tourism development across seven regions.","pub.two":"An IFAHP–TOPSIS framework evaluating creative-space sustainability across five international cities.","pub.three":"A WOA-optimised Grey Markov model for forecasting three urban gas-energy series.","pub.four":"Grey-model forecasting for nonlinear, small-sample sequences across multiple application settings.","courses.title":"Coursework","courses.count":"courses across six semesters","courses.map":"Explore course map","courses.hide":"Hide course map","courses.loading":"Loading coursework…","courses.source":"Course names, credits, descriptions, and scores are based on Donghua University official records.","recognition.title":"Selected Recognition","recognition.note":"Seven selected competitions; certificates and modeling papers open in a new tab.","credentials.more":"Additional certificates and honours","footer.top":"Back to top ↑"},"zh":{"nav.profile":"个人简介","nav.work":"学术工作","hero.eyebrow":"本科生研究者 · 上海","hero.lead":"我学习信息管理与信息系统，并运用数据驱动方法研究可持续发展、城市系统与管理决策。","hero.work":"查看学术工作","hero.transcript":"官方成绩单 ↗","hero.caption":"信息管理与信息系统<br>东华大学","profile.title":"个人简介","profile.subtitle":"教育背景、研究兴趣与代表性经历","education.kicker":"教育背景","education.degree":"管理学学士在读，信息管理与信息系统","education.detail":"旭日工商管理学院 · 2023–2027（预计）","education.average":"加权平均分","education.rank":"当前排名","education.gpa":"官方绩点","education.transcript":"官方成绩单 ↗","education.courses":"浏览 85 门课程 ↓","about.kicker":"当前关注","about.text":"我的工作位于定量建模与信息系统的交叉地带，关注可解释预测、多准则决策、可持续性评价与数字化决策支持。","focus.one":"数据分析与预测建模","focus.two":"可持续发展评价","focus.three":"信息系统与决策支持","focus.four":"城市与网络舆情研究","exp.vw.title":"上汽大众 · 实习生","exp.vw.text":"参与 ESG 传播项目，使用 Python 收集 400 余条社交媒体评论并进行情感分析，搭建 Tableau 看板。","exp.ox.title":"牛津大学伍斯特学院 · 暑期课程","exp.ox.text":"完成为期四周的商业管理、数字营销与国际企业案例课程。","common.proof":"查看证明 ↗","common.certificate":"查看证书 ↗","common.report":"成绩报告 ↗","common.acceptance":"录用证明 ↗","work.title":"学术工作","work.subtitle":"研究、课程与代表性荣誉","research.title":"研究成果","research.note":"代表性论文与手稿","pub.one":"融合模糊层次分析与灰色关联 TOPSIS，对七个地区的旅游发展效益与风险进行评价。","pub.two":"运用 IFAHP–TOPSIS 评价五座国际城市创意空间的可持续性。","pub.three":"采用鲸群算法优化灰色马尔可夫模型，预测三类城市燃气能源序列。","pub.four":"面向多种应用场景的小样本非线性序列灰色预测研究。","courses.title":"课程学习","courses.count":"门课程，覆盖六个学期","courses.map":"探索课程关系图","courses.hide":"收起课程关系图","courses.loading":"正在加载课程…","courses.source":"课程名称、学分、简介与成绩依据东华大学官方材料整理。","recognition.title":"代表性荣誉","recognition.note":"精选 7 项竞赛，证书与数模论文均可在线打开下载。","credentials.more":"更多专业证书与奖学金","footer.top":"返回顶部 ↑"}};

let lang="en",data=[],graphSimulation=null;
const semesterZh={"2023–24 · Fall":"2023–24 · 秋季","2023–24 · Spring":"2023–24 · 春季","2024–25 · Fall":"2024–25 · 秋季","2024–25 · Spring":"2024–25 · 春季","2025–26 · Fall":"2025–26 · 秋季","2025–26 · Spring":"2025–26 · 春季"};
const categoryZh={"Quantitative Methods":"定量方法","Computing & AI":"计算机与人工智能","Information Systems":"信息系统","Business & Economics":"商业与经济","Humanities & Law":"人文与法律","Languages":"语言","General Education":"通识教育"};

function esc(value){return String(value??"").replace(/[&<>"']/g,function(ch){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]})}
function tr(next){
  lang=next;document.documentElement.lang=next;
  document.querySelectorAll("[data-i18n]").forEach(function(el){const value=T[next][el.dataset.i18n];if(value)el.innerHTML=value});
  document.querySelector("#lang-switch").textContent=next==="en"?"中文":"EN";
  renderCourses();
  if(!document.querySelector("#course-map").hidden)drawForceMap();
  localStorage.setItem("language",next);
}
function renderCourses(){
  const root=document.querySelector("#semester-list");if(!root||!data.length)return;
  root.innerHTML=data.map(function(semester,index){
    const label=lang==="zh"?(semesterZh[semester.label]||semester.label):semester.label;
    const rows=semester.courses.map(function(course){
      const title=lang==="zh"&&course.zhName?course.zhName:course.name;
      return '<div class="course-row"><span class="course-name">'+esc(title)+'</span><span class="course-credit">'+course.credits+' cr · '+esc(course.code)+'</span></div>';
    }).join("");
    return '<details class="semester" '+(index===data.length-1?"open":"")+'><summary><span><span class="semester-title">'+esc(label)+'</span><span class="semester-meta">'+semester.courses.length+' '+(lang==="zh"?"门课程":"courses")+'</span></span><span class="semester-meta">'+semester.courses.reduce(function(sum,c){return sum+c.credits},0).toFixed(1)+' '+(lang==="zh"?"学分":"credits")+'</span></summary><div class="course-table">'+rows+'</div></details>';
  }).join("");
  document.querySelector("#course-total").textContent=data.reduce(function(sum,s){return sum+s.courses.length},0);
}
function stopGraph(){if(graphSimulation){graphSimulation.stop();graphSimulation=null}}
function drawForceMap(){
  const root=document.querySelector("#course-map");if(!root||root.hidden||!data.length||!window.d3)return;
  stopGraph();root.innerHTML='<p class="graph-hint">'+(lang==="zh"?"拖拽节点 · 滚轮缩放 · 悬停课程查看详情":"Drag nodes · scroll to zoom · hover a course for details")+'</p><div class="graph-tooltip" hidden></div>';
  const width=Math.max(root.clientWidth,720),height=root.clientHeight||650;
  const flat=data.flatMap(function(s){return s.courses.map(function(c){return Object.assign({},c,{semester:s.label})})});
  const categories=Array.from(new Set(flat.map(function(c){return c.category})));
  const nodes=[{id:"center",type:"center",name:"Qiyong Yang",radius:35}]
    .concat(categories.map(function(name){return{id:"cat:"+name,type:"category",name:name,radius:29}}))
    .concat(flat.map(function(c,i){return Object.assign({},c,{id:"course:"+i,type:"course",radius:Math.max(5,Math.min(9,c.score?5+(c.score-70)/7:5))})}));
  const links=categories.map(function(name){return{source:"center",target:"cat:"+name,type:"category"}})
    .concat(nodes.filter(function(n){return n.type==="course"}).map(function(n){return{source:"cat:"+n.category,target:n.id,type:"course"}}));
  const svg=d3.select(root).append("svg").attr("viewBox",[0,0,width,height]).attr("role","img").attr("aria-label","Interactive course relationship graph");
  const canvas=svg.append("g");
  svg.call(d3.zoom().scaleExtent([.45,2.8]).on("zoom",function(event){canvas.attr("transform",event.transform)}));
  const link=canvas.append("g").selectAll("line").data(links).join("line").attr("class",function(d){return"graph-link "+(d.type==="category"?"category-link":"course-link")});
  const node=canvas.append("g").selectAll("g").data(nodes).join("g").attr("class",function(d){return"graph-node "+d.type}).attr("tabindex",function(d){return d.type==="course"?0:null}).attr("aria-label",function(d){return d.type==="course"?d.name:null});
  node.append("circle").attr("r",function(d){return d.radius});
  node.filter(function(d){return d.type!=="course"}).append("text").each(function(d){
    const text=d3.select(this),label=d.type==="center"?"Qiyong Yang":(lang==="zh"?(categoryZh[d.name]||d.name):d.name);
    const parts=d.type==="center"?["Qiyong","Yang"]:label.split(" & ");
    parts.forEach(function(part,i){text.append("tspan").attr("x",0).attr("dy",i?13:(parts.length>1?-5:3)).text(part)});
    if(d.type==="category")text.append("tspan").attr("class","category-count").attr("x",0).attr("dy",13).text(flat.filter(function(c){return c.category===d.name}).length+" "+(lang==="zh"?"门":"courses"));
  });
  const tooltip=root.querySelector(".graph-tooltip");
  function connected(d,l){return l.source.id===d.id||l.target.id===d.id}
  function show(event,d){
    if(d.type!=="course")return;
    d.fx=d.x;d.fy=d.y;
    const teacher=d.instructor||(lang==="zh"?"材料未列出":"Not listed in supplied records");
    const score=d.score==null?(lang==="zh"?"暂无成绩":"Pending"):d.score;
    tooltip.innerHTML='<h4>'+esc(d.name)+'</h4>'+(d.zhName?'<p class="tooltip-zh">'+esc(d.zhName)+'</p>':'')+'<dl><dt>'+(lang==="zh"?"成绩":"Score")+'</dt><dd>'+esc(score)+'</dd><dt>'+(lang==="zh"?"学分":"Credits")+'</dt><dd>'+esc(d.credits)+'</dd><dt>'+(lang==="zh"?"任课教师":"Instructor")+'</dt><dd>'+esc(teacher)+'</dd><dt>'+(lang==="zh"?"学期":"Semester")+'</dt><dd>'+esc(lang==="zh"?(semesterZh[d.semester]||d.semester):d.semester)+'</dd></dl><p class="tooltip-desc">'+esc(d.descriptionZh||"课程资料未提供详细简介。")+'</p>';
    tooltip.hidden=false;
    const rect=root.getBoundingClientRect(),x=(event.clientX||rect.left+width/2)-rect.left+16,y=(event.clientY||rect.top+height/2)-rect.top+16;
    requestAnimationFrame(function(){tooltip.style.left=Math.max(10,Math.min(x,rect.width-tooltip.offsetWidth-10))+"px";tooltip.style.top=Math.max(10,Math.min(y,rect.height-tooltip.offsetHeight-10))+"px"});
    node.classed("is-muted",function(n){return n.id!==d.id&&n.id!=="cat:"+d.category});
    link.classed("is-muted",function(l){return!connected(d,l)}).classed("is-active",function(l){return connected(d,l)});
  }
  function hide(event,d){if(d&&d.type==="course"){d.fx=null;d.fy=null;graphSimulation.alpha(.12).restart()}tooltip.hidden=true;node.classed("is-muted",false);link.classed("is-muted",false).classed("is-active",false)}
  node.filter(function(d){return d.type==="course"}).on("mouseenter",show).on("mousemove",show).on("mouseleave",hide).on("focus",function(event,d){show(event,d)}).on("blur",hide);
  graphSimulation=d3.forceSimulation(nodes)
    .force("link",d3.forceLink(links).id(function(d){return d.id}).distance(function(d){return d.type==="category"?135:62}).strength(function(d){return d.type==="category"?.55:.8}))
    .force("charge",d3.forceManyBody().strength(function(d){return d.type==="center"?-1100:d.type==="category"?-420:-24}))
    .force("center",d3.forceCenter(width/2,height/2))
    .force("collide",d3.forceCollide().radius(function(d){return d.radius+4}).iterations(2))
    .force("x",d3.forceX(width/2).strength(.025)).force("y",d3.forceY(height/2).strength(.025))
    .on("tick",function(){link.attr("x1",function(d){return d.source.x}).attr("y1",function(d){return d.source.y}).attr("x2",function(d){return d.target.x}).attr("y2",function(d){return d.target.y});node.attr("transform",function(d){return"translate("+d.x+","+d.y+")"})});
  node.call(d3.drag().on("start",function(event,d){if(!event.active)graphSimulation.alphaTarget(.28).restart();d.fx=d.x;d.fy=d.y}).on("drag",function(event,d){d.fx=event.x;d.fy=event.y}).on("end",function(event,d){if(!event.active)graphSimulation.alphaTarget(0);d.fx=null;d.fy=null}));
}
const ready=window.COURSE_DATA?Promise.resolve(window.COURSE_DATA):fetch("data/courses.json").then(function(r){return r.json()});
ready.then(function(value){data=value.semesters;renderCourses()}).catch(function(){document.querySelector("#semester-list").innerHTML='<p class="loading">Course data could not be loaded.</p>'});
document.querySelector("#lang-switch").onclick=function(){tr(lang==="en"?"zh":"en")};
document.querySelector("#theme-switch").onclick=function(){const next=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;localStorage.setItem("theme",next)};
document.querySelector("#map-toggle").onclick=function(event){const map=document.querySelector("#course-map"),show=map.hidden;map.hidden=!show;event.currentTarget.setAttribute("aria-expanded",show);event.currentTarget.textContent=T[lang][show?"courses.hide":"courses.map"];if(show)requestAnimationFrame(drawForceMap);else stopGraph()};
let resizeTimer;window.addEventListener("resize",function(){if(!document.querySelector("#course-map").hidden){clearTimeout(resizeTimer);resizeTimer=setTimeout(drawForceMap,180)}});
const observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting)document.querySelectorAll("[data-nav]").forEach(function(a){a.classList.toggle("active",a.dataset.nav===entry.target.id)})})},{rootMargin:"-30% 0px -60%"});
document.querySelectorAll("#profile,#academic-work").forEach(function(x){observer.observe(x)});
document.documentElement.dataset.theme=localStorage.getItem("theme")||"light";document.querySelector("#year").textContent=new Date().getFullYear();tr(localStorage.getItem("language")||"en");
