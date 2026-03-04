import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Hero() {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumeData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "resume.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl"
      >
        <h2 className="text-emerald-400 font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
          {basics.title}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6 leading-tight">
          {basics.name}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-10">
          {basics.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToExperience}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            View Experience
            <ChevronDown className="w-5 h-5" />
          </button>
          <button
            onClick={handleDownloadJson}
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}
