(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{136:(e,t,a)=>{Promise.resolve().then(a.bind(a,8787))},8787:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var s=a(8081),i=a(3585),l=a(8024),r=a(8305),n=a(7326),o=a(9708),d=a(4666),c=a(7950),m=a.n(c),p=a(2149),x=a(1957),h=a(4126),u=a(4247);function g(){let e=(0,p.useRef)(null);return(0,p.useEffect)(()=>{if(!e.current)return;let t=new x.Z58,a=new x.ubm(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=5;let s=new h.JeP({alpha:!0});s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(0,0),e.current.appendChild(s.domElement);let i=new u.N(a,s.domElement);i.enableDamping=!0,i.dampingFactor=.05,i.enableZoom=!1,i.autoRotate=!0,i.autoRotateSpeed=.5;let l=new x.LoY,r=new Float32Array(9e3);for(let e=0;e<9e3;e++)r[e]=(Math.random()-.5)*10;l.setAttribute("position",new x.THS(r,3));let n=new x.BH$({size:.02,color:9055202,transparent:!0,opacity:.5}),o=new x.ONl(l,n);t.add(o);let d=new x.Gu$(.05,24,24),c=new x.V9B({color:4415982}),m=[],p=[];for(let e=0;e<50;e++){let e=new x.eaF(d,c),a=(Math.random()-.5)*8,s=(Math.random()-.5)*8,i=(Math.random()-.5)*8;e.position.set(a,s,i),p.push(new x.Pq0(a,s,i)),m.push(e),t.add(e)}let g=new x.mrM({color:4415982,transparent:!0,opacity:.3}),b=[];for(let e=0;e<50;e++)for(let a=e+1;a<50;a++)if(2>p[e].distanceTo(p[a])){let s=new x.LoY().setFromPoints([p[e],p[a]]),i=new x.N1A(s,g);b.push(i),t.add(i)}let f=()=>{requestAnimationFrame(f);let e=l.attributes.position.array;for(let t=0;t<e.length;t+=3)e[t]+=.001*Math.sin(.001*Date.now()+t),e[t+1]+=.001*Math.cos(.001*Date.now()+t);l.attributes.position.needsUpdate=!0,o.rotation.x+=5e-4,o.rotation.y+=5e-4,i.update(),s.render(t,a)};f();let v=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),e.current&&e.current.removeChild(s.domElement),l.dispose(),n.dispose(),d.dispose(),c.dispose(),g.dispose(),b.forEach(e=>{e.geometry.dispose(),t.remove(e)}),m.forEach(e=>{t.remove(e)}),t.remove(o),s.dispose()}},[]),(0,s.jsx)("div",{ref:e,className:"absolute inset-0"})}var b=a(8493),f=a(6522),v=a(4483);function j(){var e;let[t,a]=(0,p.useState)("Languages"),i=[{name:"Languages",skills:["Python","Java","JavaScript","TypeScript","SQL","C/C++"]},{name:"Web Development",skills:["React.js","Next.js","Express.js","Node.js","Angular","Flask","Django","FastAPI","REST APIs","Bootstrap","Three.js"]},{name:"Machine Learning",skills:["TensorFlow","Keras","PyTorch","OpenCV","Scikit-learn","Pandas","NumPy","Matplotlib","SciPy","Seaborn","TorchIO","Nibabel","FAISS"]},{name:"Cloud & Tools",skills:["AWS","GCP","Firebase","Docker","Git","GitHub","Postman","LangChain","Linux"]},{name:"Databases",skills:["MySQL","Firebase","MongoDB","Pinecone","PostgreSQL"]}],l=(null===(e=i.find(e=>e.name===t))||void 0===e?void 0:e.skills)||[];return(0,s.jsxs)("div",{className:"bg-white rounded-xl p-6 md:p-8 shadow-xl relative",children:[(0,s.jsx)("div",{className:"absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50 blur-2xl"}),(0,s.jsx)("div",{className:"absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"}),(0,s.jsxs)("div",{className:"relative z-10",children:[(0,s.jsx)("div",{className:"flex flex-wrap gap-2 mb-8",children:i.map(e=>(0,s.jsx)("button",{onClick:()=>a(e.name),className:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,v.QP)((0,f.$)(t))}("px-4 py-2 rounded-full text-sm font-medium transition-all",t===e.name?"bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"),children:e.name},e.name))}),(0,s.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",children:l.map((e,t)=>(0,s.jsx)(b.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},whileHover:{scale:1.05,boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.1)"},className:"bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 text-center border border-gray-100 shadow-sm transition-all",children:e},e))})]})]})}var y=a(5516);function w(){return(0,s.jsx)("div",{className:"space-y-8",children:[{title:"Research Developer",company:"University of North Carolina at Charlotte",period:"Jan 2025 – Present",points:["Developed an interactive system using BAMM (Bidirectional Autoregressive Motion Model) to generate human motion from text descriptions and visualize it in real time within a Next.js and Three.js platform.","Added a feature to generate customized avatars based on user-provided descriptions, leveraging SMPL-X mesh to create realistic characters that perform the described motion.","Currently building a multi-modal AI that takes audio, video, and images as input to generate a 3D avatar performing the same movements, expanding human-motion synthesis capabilities."]},{title:"Software Developer Intern",company:"Rethink Ledgers",period:"Jan 2025 – Present",points:["Developing an AI assistant for hotels, events, and businesses, automating customer interactions via WhatsApp and phone calls using ElizaOS, with a no-code setup for easy configuration.","Using Docker on GCP VMs for easy deployment and consistent library setup."]},{title:"Research and Development Intern",company:"Anytime Anywhere Healthtech",period:"Dec 2022 – May 2023",points:["Trained a ResNet-50 3D CNN model on chest CT scan dataset of 18,000 patients, achieving a classification accuracy of 92%.","Implemented advanced preprocessing with TorchIO and Skimage for bone tissue segmentation, reducing data size by 75% and boosting model performance.","Developed a pipeline to detect lung regions, assess infection location, and route relevant CT scans to disease-specific models, reducing time complexity by 30%."]},{title:"Graduate Teaching Assistant",company:"University of North Carolina at Charlotte",period:"Jan 2024 – Dec 2024",points:["Created instructional content for 100+ students, increasing participation by 15%."]}].map((e,t)=>(0,s.jsxs)(b.P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},whileHover:{y:-5},className:"bg-white rounded-xl p-6 shadow-xl border-l-4 border-purple-500 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full opacity-30 -mr-10 -mt-10"}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800",children:e.title}),(0,s.jsx)("p",{className:"text-purple-400",children:e.company})]}),(0,s.jsxs)("div",{className:"flex items-center mt-2 md:mt-0 text-gray-400",children:[(0,s.jsx)(y.A,{size:16,className:"mr-2"}),(0,s.jsx)("span",{children:e.period})]})]}),(0,s.jsx)("ul",{className:"space-y-2 text-gray-600",children:e.points.map((e,t)=>(0,s.jsxs)("li",{className:"flex",children:[(0,s.jsx)("span",{className:"mr-2 text-purple-600",children:"•"}),(0,s.jsx)("span",{children:e})]},t))})]},t))})}var N=a(2146),A=a(4404);function P(e){let{title:t,date:a,description:i,technologies:l,achievement:n,githubUrl:o,liveUrl:d}=e;return(0,s.jsxs)(b.P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},whileHover:{scale:1.02,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},className:"bg-white rounded-xl p-6 shadow-xl h-full flex flex-col relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 -mr-16 -mt-16"}),(0,s.jsxs)("div",{className:"relative z-10",children:[(0,s.jsxs)("div",{className:"flex justify-between items-start mb-4",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800",children:t}),(0,s.jsxs)("div",{className:"flex items-center text-gray-400 text-sm",children:[(0,s.jsx)(y.A,{size:14,className:"mr-1"}),(0,s.jsx)("span",{children:a})]})]}),(0,s.jsx)("p",{className:"text-gray-600 mb-4 flex-grow",children:i}),n&&(0,s.jsx)("div",{className:"mb-4 bg-purple-100 border border-purple-200 rounded-lg p-3",children:(0,s.jsxs)("p",{className:"text-purple-700 font-medium",children:["\uD83C\uDFC6 ",n]})}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center mb-2 text-gray-400",children:[(0,s.jsx)(N.A,{size:14,className:"mr-2"}),(0,s.jsx)("span",{className:"text-sm",children:"Technologies"})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:l.map((e,t)=>(0,s.jsx)("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200",children:e},t))})]}),(o||d)&&(0,s.jsxs)("div",{className:"flex gap-3 mt-2",children:[o&&(0,s.jsxs)(m(),{href:o,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition-colors",children:[(0,s.jsx)(r.A,{size:14}),(0,s.jsx)("span",{children:"GitHub"})]}),d&&(0,s.jsxs)(m(),{href:d,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition-colors",children:[(0,s.jsx)(A.A,{size:14}),(0,s.jsx)("span",{children:"Live Demo"})]})]})]})]})}var C=a(7543);function M(e){let{institution:t,degree:a,period:i,gpa:l}=e;return(0,s.jsxs)(b.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},whileHover:{y:-5},className:"bg-white rounded-xl p-6 shadow-xl relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-50"}),(0,s.jsxs)("div",{className:"relative z-10",children:[(0,s.jsxs)("div",{className:"flex items-center mb-4",children:[(0,s.jsx)("div",{className:"bg-purple-100 p-3 rounded-full mr-4",children:(0,s.jsx)(C.A,{className:"text-purple-600",size:24})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800",children:t}),(0,s.jsx)("p",{className:"text-gray-600",children:a})]})]}),(0,s.jsxs)("div",{className:"flex justify-between text-gray-400 mt-4",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(y.A,{size:16,className:"mr-2"}),(0,s.jsx)("span",{children:i})]}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"font-medium text-purple-400",children:l})})]})]})]})}var z=a(4159);function k(e){let{title:t,description:a,link:i}=e;return(0,s.jsxs)(b.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},whileHover:{scale:1.03,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},className:"bg-white rounded-xl p-6 shadow-xl h-full flex flex-col relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50"}),(0,s.jsxs)("div",{className:"relative z-10",children:[(0,s.jsxs)("div",{className:"flex items-center mb-4",children:[(0,s.jsx)("div",{className:"bg-purple-100 p-3 rounded-full mr-4",children:(0,s.jsx)(z.A,{className:"text-purple-600",size:24})}),(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800",children:t})]}),(0,s.jsx)("p",{className:"text-gray-600 flex-grow",children:a}),i&&(0,s.jsxs)(m(),{href:i,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-purple-400 hover:text-purple-300 mt-4 transition-colors",children:[(0,s.jsx)("span",{className:"mr-1",children:"View Publication"}),(0,s.jsx)(A.A,{size:14})]})]})]})}var E=a(6774),T=a(6826);function S(){let{scrollYProgress:e}=(0,E.L)(),t=(0,T.z)(e,{stiffness:100,damping:30,restDelta:.001}),[a,i]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{let e=()=>{window.scrollY>200?i(!0):i(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsx)(b.P.div,{className:"fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 z-50 origin-left",style:{scaleX:t,opacity:+!!a,transition:"opacity 0.3s ease"}})}function D(e){let{title:t,id:a}=e;return(0,s.jsx)(b.P.h2,{id:a,className:"text-3xl md:text-4xl font-bold mb-8 text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5},children:(0,s.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-text",children:t})})}function I(){let e=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let t=e.current;if(!t)return;let a=t.getContext("2d");if(!a)return;let s=()=>{t.width=window.innerWidth,t.height=window.innerHeight};s(),window.addEventListener("resize",s);let i=[];class l{update(){this.x+=this.speedX,this.y+=this.speedY,this.x>t.width?this.x=0:this.x<0&&(this.x=t.width),this.y>t.height?this.y=0:this.y<0&&(this.y=t.height)}draw(){a.fillStyle=this.color,a.beginPath(),a.arc(this.x,this.y,this.size,0,2*Math.PI),a.fill()}constructor(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=5*Math.random()+1,this.speedX=+Math.random()-.5,this.speedY=+Math.random()-.5,this.color="rgba(".concat(Math.floor(100*Math.random())+100,", ").concat(Math.floor(100*Math.random())+100,", ").concat(Math.floor(255*Math.random()),", 0.3)")}}(()=>{for(let e=0;e<50;e++)i.push(new l)})();let r=()=>{let e=1;for(let t=0;t<i.length;t++)for(let s=t;s<i.length;s++){let l=i[t].x-i[s].x,r=i[t].y-i[s].y,n=Math.sqrt(l*l+r*r);n<100&&(e=1-n/100,a.strokeStyle="rgba(150, 150, 255, ".concat(.2*e,")"),a.lineWidth=1,a.beginPath(),a.moveTo(i[t].x,i[t].y),a.lineTo(i[s].x,i[s].y),a.stroke())}},n=()=>{requestAnimationFrame(n),a.clearRect(0,0,t.width,t.height);for(let e=0;e<i.length;e++)i[e].update(),i[e].draw();r()};return n(),()=>{window.removeEventListener("resize",s)}},[]),(0,s.jsx)("canvas",{ref:e,className:"fixed top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0"})}function L(){let e={initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5}};return(0,s.jsxs)("main",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800",children:[(0,s.jsx)(S,{}),(0,s.jsx)(I,{}),(0,s.jsxs)("section",{className:"relative h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16",children:[(0,s.jsx)("div",{className:"absolute inset-0 z-0",children:(0,s.jsx)(g,{})}),(0,s.jsxs)(b.P.div,{className:"z-10 text-center max-w-4xl",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:[(0,s.jsx)("h1",{className:"text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-teal-500 to-blue-600 animate-gradient-text",children:"Tanmay Pajgade"}),(0,s.jsxs)("h2",{className:"text-xl md:text-2xl mb-6 text-gray-700 relative inline-block",children:[(0,s.jsx)("span",{className:"relative z-10",children:"AI Engineer & Full Stack Developer"}),(0,s.jsx)("span",{className:"absolute -bottom-1 left-0 w-full h-2 bg-purple-200 opacity-50 rounded"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mb-8",children:[(0,s.jsxs)(m(),{href:"mailto:tanmaypajgade@gmail.com",className:"flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all",children:[(0,s.jsx)(i.A,{size:16,className:"text-purple-600"}),(0,s.jsx)("span",{children:"Email"})]}),(0,s.jsxs)(m(),{href:"https://linkedin.com/in/tanmaypajgade",target:"_blank",className:"flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all",children:[(0,s.jsx)(l.A,{size:16,className:"text-purple-600"}),(0,s.jsx)("span",{children:"LinkedIn"})]}),(0,s.jsxs)(m(),{href:"https://github.com/tanmay143",target:"_blank",className:"flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all",children:[(0,s.jsx)(r.A,{size:16,className:"text-purple-600"}),(0,s.jsx)("span",{children:"GitHub"})]}),(0,s.jsxs)(m(),{href:"tel:+17043635587",className:"flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all",children:[(0,s.jsx)(n.A,{size:16,className:"text-purple-600"}),(0,s.jsx)("span",{children:"+1 704-363-5587"})]})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)(m(),{href:"#about",className:"flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-medium transition-all text-white shadow-lg hover:shadow-xl",children:[(0,s.jsx)("span",{children:"Explore My Work"}),(0,s.jsx)(o.A,{size:16})]})})]})]}),(0,s.jsxs)("section",{id:"about",className:"py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)(D,{title:"About Me",id:"about"}),(0,s.jsxs)(b.P.div,{className:"bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl",...e,children:[(0,s.jsx)("p",{className:"text-lg text-gray-300 leading-relaxed",children:"I'm a Computer Science graduate student at the University of North Carolina at Charlotte with a passion for AI, machine learning, and web development. With experience in research and development, I specialize in creating intelligent applications that solve real-world problems. My expertise spans from training complex neural networks to building interactive web applications with modern frameworks."}),(0,s.jsxs)("div",{className:"mt-6 flex items-center text-gray-400",children:[(0,s.jsx)(d.A,{size:18,className:"mr-2"}),(0,s.jsx)("span",{children:"Charlotte, North Carolina"})]})]})]})]}),(0,s.jsxs)("section",{className:"py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)(D,{title:"Education"}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,s.jsx)(M,{institution:"University of North Carolina at Charlotte",degree:"M.S. in Computer Science",period:"Aug 2023 – May 2025",gpa:"GPA: 3.88/4.0"}),(0,s.jsx)(M,{institution:"MIT ADT University, Pune, India",degree:"B.Tech. in Computer Science",period:"Aug 2019 – May 2023",gpa:"CGPA: 8.19/10.0"})]})]})]}),(0,s.jsxs)("section",{className:"py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)(D,{title:"Technical Skills"}),(0,s.jsx)(j,{})]})]}),(0,s.jsxs)("section",{className:"py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)(D,{title:"Experience"}),(0,s.jsx)(w,{})]})]}),(0,s.jsxs)("section",{className:"py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)(D,{title:"Projects"}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,s.jsx)(P,{title:"Med-Memory",date:"Sept 2024",description:"A real-time healthcare dashboard for patient data using Next.js, Tailwind, Express.js, and Firebase. Integrated Qwen 2.5 LLM via Ollama for natural language queries and built an interactive analytics dashboard.",achievement:"Best First-Time Hackers award at ShellHacks",technologies:["Next.js","Tailwind","Express.js","Firebase","Ollama","Qwen 2.5 LLM"],githubUrl:"https://github.com/tanmay143/med-memory"}),(0,s.jsx)(P,{title:"FlowGenie",date:"Oct 2024",description:"A tool that takes audio and text inputs to generate diagrams, streamlining flowchart creation with automated, real-time updates using Next.js, Excalidraw, and ChatGPT-4 mini API.",technologies:["Next.js","Excalidraw","OpenAI API","ChatGPT-4 mini","Mermaid"],githubUrl:"https://github.com/tanmay143/flowgenie",liveUrl:"https://flowgenie.vercel.app"}),(0,s.jsx)(P,{title:"DocHelp",date:"Jan 2023 - May 2023",description:"A MERN stack project that processes and categorizes medical images (lung abnormality and chest X-ray scans) to help doctors prioritize patients. The system preprocesses data and classifies images as normal, abnormal, or severely abnormal using VGG19 pretrained model with TensorFlow, NumPy, and image processing libraries.",technologies:["MERN Stack","TensorFlow","VGG19","NumPy","Image Processing","Kaggle Dataset"],githubUrl:"https://github.com/tanmay143/dochelp"}),(0,s.jsx)(P,{title:"Tuberculosis Detection Analysis",date:"Sep 2022 - Jan 2023",description:"Conducted a comprehensive Tuberculosis detection study using the Tbx11k dataset from 11,000 patients, resulting in a publication in IEEE. Trained and tested approximately 20 models, including DenseNet201, VGG19, and ResNet50, on both raw and preprocessed data.",achievement:"IEEE Paper Publication",technologies:["DenseNet201","VGG19","ResNet50","TensorFlow","PyTorch","Data Preprocessing"],githubUrl:"https://github.com/tanmay143/tb-detection",liveUrl:"https://ieeexplore.ieee.org/document/10112352"}),(0,s.jsx)(P,{title:"Social Distancing Monitor",date:"Aug 2021 - Dec 2022",description:"Implemented real-time person detection using YOLOv4 and COCO dataset, extracting spatial coordinates to monitor social distancing compliance in public spaces. Utilized OpenCV to calculate Euclidean distances between detected individuals, ensuring adherence to social distancing protocols.",technologies:["YOLOv4","OpenCV","COCO Dataset","Python","Computer Vision"],githubUrl:"https://github.com/tanmay143/Monitoring-social-distancing-using-yolov4"})]})]})]}),(0,s.jsxs)("section",{className:"py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)(D,{title:"Achievements"}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-6",children:[(0,s.jsx)(k,{title:"ShellHacks Winner",description:"Best First-Time Hackers award"}),(0,s.jsx)(k,{title:"Lucid Programming Competition",description:"2nd place"}),(0,s.jsx)(k,{title:"IEEE Paper Publication",description:"Comparative Analysis of Tuberculosis Detection",link:"https://ieeexplore.ieee.org/document/10112352"})]})]})]}),(0,s.jsxs)("section",{className:"py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"}),(0,s.jsx)("div",{className:"absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-70 float"}),(0,s.jsx)("div",{className:"absolute bottom-40 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-70 float-delay-1"}),(0,s.jsx)("div",{className:"absolute top-40 right-40 w-8 h-8 bg-teal-200 rounded-full opacity-70 float-delay-2"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)(D,{title:"Get In Touch"}),(0,s.jsxs)(b.P.div,{className:"bg-white rounded-xl p-6 md:p-8 shadow-xl relative overflow-hidden",...e,children:[(0,s.jsx)("div",{className:"absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-40"}),(0,s.jsx)("div",{className:"relative z-10",children:(0,s.jsx)("div",{className:"grid md:grid-cols-2 gap-8",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Contact Information"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(i.A,{className:"mr-3 text-purple-600",size:20}),(0,s.jsx)("a",{href:"mailto:tanmaypajgade@gmail.com",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"tanmaypajgade@gmail.com"})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(n.A,{className:"mr-3 text-purple-600",size:20}),(0,s.jsx)("a",{href:"tel:+17043635587",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"+1 704-363-5587"})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(l.A,{className:"mr-3 text-purple-600",size:20}),(0,s.jsx)("a",{href:"https://linkedin.com/in/tanmaypajgade",target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"linkedin.com/in/tanmaypajgade"})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(r.A,{className:"mr-3 text-purple-600",size:20}),(0,s.jsx)("a",{href:"https://github.com/tanmay143",target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"github.com/tanmay143"})]})]})]})})})]})]})]}),(0,s.jsx)("footer",{className:"py-8 px-4 md:px-8 lg:px-16 bg-white border-t border-gray-200",children:(0,s.jsx)("div",{className:"max-w-6xl mx-auto text-center text-gray-600",children:(0,s.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Tanmay Pajgade. All rights reserved."]})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[863,882,692,497,954,358],()=>t(136)),_N_E=e.O()}]);