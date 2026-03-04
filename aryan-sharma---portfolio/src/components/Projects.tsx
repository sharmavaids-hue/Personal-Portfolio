import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Showcasing full-stack engineering and system design capabilities.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="flex flex-col lg:flex-row gap-8 lg:items-start justify-between relative z-10">
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-3 py-1 bg-white/10 text-emerald-400 text-sm font-mono rounded-full border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="space-y-4">
                    {project.bullets.map((bullet, bIdx) => {
                      const highlightedBullet = bullet.replace(
                        /(\d+(?:,\d+)*(?:\.\d+)?%?|\b\d+\+?)/g,
                        '<span class="text-emerald-400 font-mono bg-emerald-400/10 px-1 py-0.5 rounded">$1</span>'
                      );

                      return (
                        <li key={bIdx} className="text-gray-300 leading-relaxed flex items-start gap-3">
                          <span className="text-emerald-400 mt-1.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="lg:w-1/3 flex flex-col items-start lg:items-end gap-4">
                  <span className="text-gray-500 font-mono text-sm">{project.dates}</span>
                  <div className="flex gap-4">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {link.name === 'GitHub' ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
