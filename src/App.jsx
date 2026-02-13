import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Terminal, Database, Code } from 'lucide-react';
import heroPic from './assets/img/hero.png'
import profilePic from './assets/img/profile.JPG';

// --- KOMPONEN ITEM MENU (Untuk Hero Section) ---
const MenuItem = ({ title, href, subtitle }) => (
  <motion.a 
    href={href}
    whileHover={{ x: 15, opacity: 1 }} // Geser sedikit lebih jauh biar kerasa interaksinya
    className="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer py-2" // py-2 supaya ada napas antar menu
  >
    {/* Dot Accent (Ukuran Sedang) */}
    <span className="hidden group-hover:block w-2 h-2 bg-blue-500 rounded-full"></span>
    
    <div>
      {/* UKURAN FONT DIPERBESAR: text-3xl (HP) & md:text-5xl (Laptop) */}
      <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
        {title}
      </h2>
      <span className="text-[10px] md:text-xs font-mono text-neutral-500 group-hover:text-neutral-300 uppercase tracking-widest block mt-1">
        {subtitle}
      </span>
    </div>
  </motion.a>
);

// --- KOMPONEN SECTION (Reusable) ---
const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`min-h-screen w-full snap-center py-20 px-6 md:px-20 border-t border-neutral-900 flex flex-col justify-center ${className}`}>
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-10">
        <span className="h-px w-12 bg-neutral-700"></span>
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">{title}</h3>
      </div>
      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-200 font-sans selection:bg-white selection:text-black h-screen w-full overflow-y-scroll snap-y snap-proximity scroll-smooth no-scrollbar">
      
      {/* === 1. HERO SECTION === */}
      <section className="relative min-h-screen w-full snap-center overflow-hidden flex flex-col justify-center px-6 md:px-20 shrink-0">
        
        {/* VIDEO BACKGROUND */}
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video 
            autoPlay loop muted playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4" type="video/mp4" />
          </video>
        </div> */}

        {/* PHOTO BACKGROUND */}
        {/* <div className="absolute inset-0 z-0">          
          <img 
            src={heroPic}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          /> */}
        {/* </div> */}

        {/* CONTENT HERO */}
        <div className="relative z-20 max-w-6xl w-full mx-auto h-full flex items-center">
          
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-8"> 
            
            {/* Intro Kecil */}
            {/* <div className="mb-2">
              <h1 className="text-sm font-mono text-blue-400 mb-1">Hi, I'm Djali Suandre.</h1>
              <p className="text-xs text-neutral-400 max-w-[250px]">
                Fullstack Web Developer & IS Graduate. Welcome to my portfolio.
              </p>
            </div> */}

            {/* Menu List */}
            <div className="flex flex-col items-start space-y-1 border-l border-white/10 pl-8">
              <MenuItem title="About" href="#about" subtitle="01 — Identity" />
              <MenuItem title="Skills" href="#skills" subtitle="02 — Arsenal" />
              <MenuItem title="Blog" href="#blog" subtitle="03 — Thoughts" />
              <MenuItem title="Experiences" href="#experiences" subtitle="04 - Background" />
              <MenuItem title="Projects" href="#projects" subtitle="05 — Works" />
              <MenuItem title="Contact" href="#contact" subtitle="06 — Connect" />
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-10 z-20 text-neutral-500 flex items-center gap-2 text-xs font-mono"
        >
          <ArrowDown size={14} />
          <span>SCROLL TO EXPLORE</span>
        </motion.div>
      </section>

      {/* === 2. ABOUT SECTION === */}
      <Section id="about" title="01 — About Me">
        {/* UBAH GRID: Kolom gambar lebih kecil (max 40%), Teks lebih luas */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-center h-full">
          
          {/* BAGIAN KIRI: FOTO PROFIL (Dikecilkan) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end" // Posisikan gambar agak ke kanan mendekati teks
          >
            <div className="relative group w-full max-w-[280px]"> {/* KUNCI: max-w-[280px] membatasi lebar gambar */}
              
              {/* Frame Dekorasi */}
              <div className="absolute -inset-3 border-2 border-neutral-800 rounded-xl group-hover:border-white/50 transition-colors duration-500"></div>
              
              {/* Container Foto */}
              <div className="relative aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={profilePic} 
                  alt="Djali Suandre" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
                
                {/* Badge "Open for Work" */}
                <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-mono text-white">Open for Work</span>
                </div>
              </div>
            </div>
          </motion.div>


          {/* BAGIAN KANAN: STORYTELLING */}
          <div className="space-y-6 relative text-left"> {/* Spasi antar elemen diperkecil (space-y-6) */}
            
            {/* Headline Besar */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold leading-tight" // Font size sedikit disesuaikan
            >
              From <span className="text-neutral-500 line-through decoration-red-500/50">Nothing</span> <br/>
              to <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Everything</span>
            </motion.h3>

            {/* Paragraf Cerita (Font size diperkecil sedikit agar muat) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 text-neutral-400 leading-relaxed text-sm font-light"
            >
              <p>
                <strong className="text-white">Halo, I'm Djali Suandre.</strong> A fresh graduate in Information Systems based in Palembang.
              </p>
              <p>
                My journey wasn't linear. I started as a <span className="text-white border-b border-neutral-700 pb-0.5">Graphic Designer</span> (leading the team at MDPTV), obsessing over typography and layout. This background gave me a unique advantage: I don't just write code that <i>works</i>; I write code that <i>feels good</i> to use.
              </p>
              <p>
                Recently, I completed my bachelor’s thesis building a complex <strong>KPI Management System</strong> using Laravel. Now, I spend my nights configuring Arch Linux, optimizing databases, and exploring the depths of Fullstack Development.
              </p>
            </motion.div>

            {/* Data Singkat (Compact Grid) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800"
            >
              <div>
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Education</h4>
                <p className="text-white text-sm font-medium">S.Kom, Information Systems</p>
                <p className="text-neutral-600 text-xs">Universitas Multi Data Palembang</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Tech Obsession</h4>
                <p className="text-white text-sm font-medium">System Architecture</p>
                <p className="text-neutral-600 text-xs">Arch Linux (Hyprland), Docker</p>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* === 3. SKILLS SECTION === */}
      <Section id="skills" title="02 — Technical Arsenal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Backend */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
            <Database className="w-8 h-8 text-neutral-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">Backend & DB</h4>
            <ul className="space-y-2 text-neutral-400 font-mono text-sm">
              <li>Laravel</li>
              <li>PHP 8.x</li>
              <li>MySQL / PostgreSQL</li>
              <li>Go Lang</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
            <Code className="w-8 h-8 text-neutral-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">Frontend & UI</h4>
            <ul className="space-y-2 text-neutral-400 font-mono text-sm">
              <li>Laravel</li>
              <li>React.js (Vite)</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Figma (Design System)</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
            <Terminal className="w-8 h-8 text-neutral-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">System & Tools</h4>
            <ul className="space-y-2 text-neutral-400 font-mono text-sm">
              <li>Linux (Arch)</li>
              <li>Git & GitHub</li>
              <li>VS Code / Neovim</li>
              <li>Postman</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </Section>


      {/* === 4. BLOG SECTION (Placeholder) === */}
      <Section id="blog" title="03 — Recent Thoughts">
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group flex justify-between items-center py-6 border-b border-neutral-800 cursor-pointer hover:bg-neutral-900/30 px-4 transition-colors">
              <div>
                <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                  Optimizing Laravel Queries for High Performance
                </h4>
                <p className="text-sm text-neutral-500 mt-1">Feb 08, 2026 • Backend Engineering</p>
              </div>
              <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />
            </div>
          ))}
          <div className="pt-4">
             <a href="#" className="text-sm font-mono text-neutral-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 inline-block">View all posts &rarr;</a>
          </div>
        </div>
      </Section>

      {/* === 5. EXPERIENCES SECTION === */}
      <Section id="experiences" title="04 — Experience">
        <div className="space-y-0">
          
          <div className="group flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:w-1/4 shrink-0">
              <span className="text-neutral-500 font-mono text-sm block mb-1">2025 - 2026</span>
              <span className="text-xs text-blue-400 uppercase tracking-wider font-bold">Bachelor Thesis</span>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                PT Multi Data Palembang
              </h4>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Developed a comprehensive <strong>Key Performance Indicator (KPI) System</strong> to digitize and optimize the employee evaluation process. The system handles complex scoring logic, role-based access control, and generates performance reports for HR management.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Laravel 10</span>
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">MySQL Complex Query</span>
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">System Analysis</span>
              </div>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:w-1/4 shrink-0">
              <span className="text-neutral-500 font-mono text-sm block mb-1">2024</span>
              <span className="text-xs text-green-400 uppercase tracking-wider font-bold">Internship</span>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                CV Vica Jaya
              </h4>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Built a custom <strong>Inventory & Point of Sale (POS) Application</strong> during practical work. The application streamlined stock tracking and cashier transactions, replacing manual recording methods and reducing data entry errors.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Laravel Fullstack</span>
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Inventory Logic</span>
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">POS System</span>
              </div>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:w-1/4 shrink-0">
              <span className="text-neutral-500 font-mono text-sm block mb-1">2023 - Present</span>
              <span className="text-xs text-neutral-600 uppercase tracking-wider">Freelance</span>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Multimedia Bhakti Luhur Temple
              </h4>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Responsible for managing visual and audio systems for live events. Specialized in OBS Studio configuration for live streaming and recording, ensuring seamless broadcast quality.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">OBS Studio</span>
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Live Streaming</span>
              </div>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:w-1/4 shrink-0">
              <span className="text-neutral-500 font-mono text-sm block mb-1">2022 - 2024</span>
              <span className="text-xs text-neutral-600 uppercase tracking-wider">Student Org</span>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Programming UMDP
              </h4>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Active member focusing on game design and web development. Collaborated with peers to build interactive web projects and prototype game concepts.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Web Dev</span>
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Game Design</span>
              </div>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:w-1/4 shrink-0">
              <span className="text-neutral-500 font-mono text-sm block mb-1">2021 - 2023</span>
              <span className="text-xs text-neutral-600 uppercase tracking-wider">Head of Division</span>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                MDPTV (Graphic Design Div)
              </h4>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Led the Graphic Design division, overseeing the creation of visual assets for university media. Managed team workflows and produced high-quality branding materials.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Adobe Suite</span>
                <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">Leadership</span>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* === 6. PROJECTS SECTION === */}
      <Section id="projects" title="05 — Selected Works">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="group relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700">
              {/* <img src="/kpi-project.png" className="w-full h-full object-cover" /> */}
              <div className="w-full h-full flex items-center justify-center text-neutral-700 font-mono">Image: KPI System</div>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
              <h4 className="text-2xl font-bold text-white">KPI Management System</h4>
              <p className="text-neutral-300 mt-2">Laravel • MySQL • Chart.js</p>
              <a href="#" className="mt-4 px-4 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition-colors">View Case Study</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700">
              <div className="w-full h-full bg-purple-900/20 flex items-center justify-center text-neutral-700 font-mono">Image: MDPTV</div>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
              <h4 className="text-2xl font-bold text-white">MDPTV Branding</h4>
              <p className="text-neutral-300 mt-2">Graphic Design • Adobe Suite</p>
            </div>
          </div>

        </div>
      </Section>


      {/* === 7. CONTACT SECTION === */}
      <Section id="contact" title="06 — Get In Touch" className="pb-0 border-b-0">
        <div className="py-20 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Let's work together.
          </h2>
          <a 
            href="mailto:djalisuandre123654@gmail.com" 
            className="inline-flex items-center gap-3 text-xl md:text-2xl text-neutral-400 hover:text-white transition-colors border-b border-neutral-800 hover:border-white pb-2"
          >
            <Mail /> djalisuandre123654@gmail.com
          </a>
          
          <div className="mt-20 py-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-600">
            <p>© 2026 DJALI SUANDRE. PALEMBANG, ID.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://github.com/suandre35" className="hover:text-white">GITHUB</a>
              <a href="https://www.linkedin.com/in/djali-suandre-441415304/" className="hover:text-white">LINKEDIN</a>
              <a href="https://www.instagram.com/djali_suandre/" className="hover:text-white">INSTAGRAM</a>
            </div>
          </div>
        </div>
      </Section>

    </div>
);
}

export default App;