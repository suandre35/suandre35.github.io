import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Terminal } from 'lucide-react';
import Section from './Section';

const Projects = () => {
  // State management for repository data and loading status
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effect: Fetch repositories on component mount
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        
        // Fetch public repositories from GitHub API
        // Sorted by 'updated' to show the most active projects first
        const response = await fetch('https://api.github.com/users/suandre35/repos?sort=updated&direction=desc');
        
        if (!response.ok) throw new Error('GitHub API Error');

        const data = await response.json();
        
        // Data Transformation:
        // 1. Filter out forked repositories
        // 2. Slice the first 6 items
        const filtered = data.filter(repo => !repo.fork).slice(0, 6);
        
        setRepos(filtered);
      
      } catch (err) {
        // Error Handling: Log error and reset state to empty array
        console.error("Fetch error:", err);
        setRepos([]); 
      } finally {
        // Ensure loading state is disabled regardless of outcome
        setLoading(false); 
      }
    };

    fetchRepos();
  }, []);

  // Event Handler: Open repository URL in a new tab
  const handleCardClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section id="projects" title="05 — Open Source">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {loading ? (
            // Conditional Rendering: Loading State
            // Render Skeleton Loaders while fetching
            [1, 2, 3].map((i) => (
              <div key={i} className="h-48 rounded-xl bg-neutral-900/50 border border-neutral-800 animate-pulse p-6 flex flex-col justify-between">
                 <div className="flex justify-between">
                    <div className="w-10 h-10 bg-neutral-800 rounded"></div>
                    <div className="w-16 h-6 bg-neutral-800 rounded"></div>
                 </div>
                 <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-neutral-800 rounded"></div>
                    <div className="h-3 w-full bg-neutral-800 rounded"></div>
                    <div className="h-3 w-2/3 bg-neutral-800 rounded"></div>
                 </div>
              </div>
            ))
          ) : repos.length > 0 ? (
            // Render Project Cards if data exists
            repos.map((repo, index) => (
              <motion.div 
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                
                // Interaction: Make entire card clickable
                onClick={() => handleCardClick(repo.html_url)}
                
                // Styling: Added 'cursor-pointer' and hover effects
                className="group flex flex-col justify-between p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 hover:bg-neutral-900 transition-all duration-300 h-full cursor-pointer relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-neutral-800 text-blue-400 rounded-lg group-hover:text-white transition-colors">
                      <Terminal size={20} />
                    </div>
                    
                    {/* Action Buttons (Top Right) */}
                    <div className="flex gap-3 z-10">
                      
                      {/* Live Demo Link (if homepage exists) */}
                      {repo.homepage && (
                        <a 
                          href={repo.homepage} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          // Event Propagation Control: Prevent triggering parent card click
                          onClick={(e) => e.stopPropagation()} 
                          className="text-neutral-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                          title="View Live Demo"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                      
                        <Github size={18} />
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1 capitalize">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                    {repo.description ? repo.description : "No description provided."}
                  </p>
                </div>

                {/* Card Footer: Tech Stack & Date */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800/50">
                  {repo.language && (
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="text-xs font-mono text-neutral-600 ml-auto">
                    {new Date(repo.updated_at).getFullYear()}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            // Empty State Handling
            <div className="col-span-full text-center py-10 text-neutral-500">
              <p>No public repositories found.</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/suandre35?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all"
          >
            View all repositories on GitHub &rarr;
          </a>
        </div>
    </Section>
  );
};

export default Projects;