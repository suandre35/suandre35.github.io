import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Terminal, Database, Code } from 'lucide-react';

// --- KOMPONEN ITEM MENU (Untuk Hero Section) ---
const MenuItem = ({ title, href, subtitle }) => (
  <motion.a 
    href={href}
    whileHover={{ x: 20, opacity: 1 }}
    className="group flex items-baseline gap-4 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer py-1"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400">
      {title}
    </h2>
    <span className="hidden md:block text-xs font-mono text-neutral-400 group-hover:text-white uppercase tracking-widest">
      {subtitle}
    </span>
  </motion.a>
);

// --- KOMPONEN SECTION (Reusable) ---
const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`min-h-screen w-full snap-center py-20 px-6 md:px-20 border-t border-neutral-900 flex flex-col justify-center ${className}`}>
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
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
      
      {/* === 1. HERO SECTION (VIDEO BACKGROUND + MENU LIST) === */}
      <section className="relative min-h-screen w-full snap-center overflow-hidden flex flex-col justify-center px-6 md:px-20 shrink-0">
        
        {/* VIDEO BACKGROUND CONTAINER */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay Gelap supaya teks terbaca */}
          
          {/* GANTI 'src' DENGAN FILE VIDEOMU NANTI */}
          {/* Contoh: src="/videos/coding-timelapse.mp4" */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CONTENT HERO */}
        <div className="relative z-20 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-end">
          
          {/* Kolom Kiri: Judul Besar */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-xl md:text-2xl font-mono text-neutral-400 mb-4">
              Hello, I'm <span className="text-white font-bold">Djali Suandre</span>.
            </h1>
            <p className="max-w-md text-neutral-300 leading-relaxed">
              Fullstack Web Developer & Information Systems Graduate. 
              Crafting digital experiences with robust backends and clean frontends.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/suandre35" target="_blank" className="p-3 bg-neutral-800/50 backdrop-blur rounded-full hover:bg-white hover:text-black transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-neutral-800/50 backdrop-blur rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: MENU LIST (Gaya A24) */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            <MenuItem title="About" href="#about" subtitle="Who I Am" />
            <MenuItem title="Skills" href="#skills" subtitle="Tech Stack" />
            <MenuItem title="Blog" href="#blog" subtitle="Thoughts" />
            <MenuItem title="Projects" href="#projects" subtitle="Selected Work" />
            <MenuItem title="Contact" href="#contact" subtitle="Get in Touch" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-neutral-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>


      {/* === 2. ABOUT SECTION === */}
      <Section id="about" title="01 — About Me" >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-2xl md:text-4xl font-light leading-tight">
            <span className="text-neutral-500">I bridge the gap between</span> <br/>
            <span className="text-white">complex data systems</span> <span className="text-neutral-500">and</span> <br/>
            <span className="text-white">intuitive user interfaces.</span>
          </div>
          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <p>
              Based in Palembang, Indonesia. I recently graduated with a degree in Information Systems. 
              My journey started with graphic design (MDPTV), which gave me an eye for detail, before deep-diving into the world of software engineering.
            </p>
            <p>
              I don't just write code; I build systems. From optimizing Laravel databases to configuring Arch Linux environments, I love understanding how things work under the hood.
            </p>
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
              <li>Laravel (Expert)</li>
              <li>PHP 8.x</li>
              <li>MySQL / PostgreSQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
            <Code className="w-8 h-8 text-neutral-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">Frontend & UI</h4>
            <ul className="space-y-2 text-neutral-400 font-mono text-sm">
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
              <li>Linux (Arch/Debian)</li>
              <li>Git & GitHub</li>
              <li>VS Code / Neovim</li>
              <li>Postman</li>
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


      {/* === 5. PROJECTS SECTION === */}
      <Section id="projects" title="04 — Selected Works">
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


      {/* === 6. CONTACT SECTION === */}
      <Section id="contact" title="05 — Get In Touch" className="pb-0 border-b-0">
        <div className="py-20 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Let's work together.
          </h2>
          <a 
            href="mailto:emailmu@gmail.com" 
            className="inline-flex items-center gap-3 text-xl md:text-2xl text-neutral-400 hover:text-white transition-colors border-b border-neutral-800 hover:border-white pb-2"
          >
            <Mail /> djalisuandre123654@gmail.com
          </a>
          
          <div className="mt-20 py-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-600">
            <p>© 2026 DJALI SUANDRE. PALEMBANG, ID.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">GITHUB</a>
              <a href="#" className="hover:text-white">LINKEDIN</a>
              <a href="#" className="hover:text-white">INSTAGRAM</a>
            </div>
          </div>
        </div>
      </Section>

    </div>
);
}

export default App;