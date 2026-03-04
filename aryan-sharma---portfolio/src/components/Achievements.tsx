import { motion } from 'framer-motion';
import { Award, Medal, Star, Trophy } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Achievements() {
  const { awards, certifications } = resumeData;

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 relative z-10 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Honors & Awards
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Recognition for academic excellence and competitive achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-all group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 p-4 bg-yellow-500/10 rounded-full text-yellow-400">
                {idx % 3 === 0 ? <Trophy className="w-8 h-8" /> : idx % 3 === 1 ? <Medal className="w-8 h-8" /> : <Star className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {award.title}
              </h3>
            </motion.div>
          ))}
          
          {certifications.map((cert, idx) => (
            <motion.div
              key={`cert-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (awards.length + idx) * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-all group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 p-4 bg-emerald-500/10 rounded-full text-emerald-400">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {cert.name}
              </h3>
              <p className="text-emerald-400/80 text-sm font-mono uppercase tracking-wider">Certification</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
