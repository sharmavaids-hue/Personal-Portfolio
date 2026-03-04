import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Experience() {
  const { experience, achievements } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-2/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight"
            >
              Experience
            </motion.h2>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  <button 
                    onClick={() => toggleExpand(idx)}
                    className="w-full text-left p-6 md:p-8 flex items-start justify-between hover:bg-white/[0.02] transition-colors"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-400 font-mono">
                        <span className="text-emerald-400">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.dates}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-gray-400 mt-2">
                      {expandedIndex === idx ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-8 pt-0 border-t border-white/10">
                          <ul className="space-y-4 mt-6">
                            {exp.bullets.map((bullet, bIdx) => {
                              // Highlight numbers and percentages
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32 bg-gradient-to-br from-emerald-900/20 to-transparent border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-emerald-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Impact Highlights</h3>
              </div>
              
              <div className="space-y-6">
                {achievements.slice(0, 4).map((achievement, idx) => (
                  <div key={idx} className="border-l-2 border-emerald-500/30 pl-4">
                    <div className="text-emerald-400 font-mono font-bold text-lg mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      {achievement.context}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
