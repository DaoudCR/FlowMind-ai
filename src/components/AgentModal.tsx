import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Agent } from '../data/agents';

interface AgentModalProps {
  agent: Agent | null;
  onClose: () => void;
}

export default function AgentModal({ agent, onClose }: AgentModalProps) {
  return (
    <AnimatePresence>
      {agent && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[9999] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-[700px] max-h-[85vh] bg-dark-700 border border-white/10 rounded-2xl overflow-y-auto"
            >
            <div className="sticky top-0 bg-dark-700/95 backdrop-blur-sm border-b border-white/5 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="font-heading font-bold text-xl text-white pr-4">
                {agent.name}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              <div>
                <h4 className="text-neon-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  What It Is
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {agent.whatItIs}
                </p>
              </div>

              <div>
                <h4 className="text-neon-400 font-semibold text-sm uppercase tracking-wider mb-3">
                  How It Works
                </h4>
                <ol className="space-y-2">
                  {agent.howItWorks.map((step, i) => (
                    <li key={i} className="flex gap-3 text-white/70">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-neon-400/10 border border-neon-400/20 flex items-center justify-center text-neon-400 text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="text-neon-400 font-semibold text-sm uppercase tracking-wider mb-3">
                  Results It Delivers
                </h4>
                <ul className="space-y-2">
                  {agent.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70">
                      <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-neon-400" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-neon-400 font-semibold text-sm uppercase tracking-wider mb-3">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {agent.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg bg-neon-400/10 border border-neon-400/20 text-neon-400 text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="https://wa.me/923322522329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-neon-400 text-dark-900 font-bold text-base rounded-xl hover:bg-neon-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
                >
                  <ExternalLink className="w-5 h-5" />
                  Purchase Now
                </a>
              </div>
            </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
