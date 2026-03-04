import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Academic foundation and rigorous coursework.
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
              
              <div className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12" />
                
                <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-500 border-4 border-[#0a0a0a] z-10 flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-black" />
                </div>

                <div className="w-full md:w-5/12 bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col gap-2 mb-6">
                    <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="text-gray-500 font-mono text-sm">{edu.dates}</div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-200 mb-4">{edu.degree}</h4>
                  
                  <ul className="space-y-3">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
