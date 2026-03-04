import { motion } from 'framer-motion';
import resumeData from '../data/resume.json';

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative z-10 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning languages, frameworks, and developer tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-6 font-mono border-b border-white/10 pb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
