import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,136,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-400 text-sm font-medium uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mt-4 mb-4">
            Let's Build Something{' '}
            <span className="text-neon-400">Powerful</span> Together
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
            Response within 24 hours. Let's automate your growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://forms.gle/AbJUpkhQREMS9SEGA"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-neon-400 text-dark-900 font-bold text-base rounded-xl hover:bg-neon-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
          >
            <ExternalLink className="w-5 h-5" />
            Contact Form
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/923322522329"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 border border-neon-400/30 text-neon-400 font-bold text-base rounded-xl hover:bg-neon-400/10 transition-all duration-300 hover:border-neon-400/60 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]"
          >
            <MessageCircle className="w-5 h-5" />
            Chat With Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl bg-dark-700/50 border border-white/5"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-neon-400 animate-pulse" />
            <span className="text-white/60 font-medium">Available Now</span>
          </div>
          <p className="text-white/30 text-sm">
            Average response time: under 24 hours. For urgent requests, reach out on WhatsApp for instant support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
