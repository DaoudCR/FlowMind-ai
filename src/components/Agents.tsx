import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink } from 'lucide-react';
import { agents, type Agent } from '../data/agents';
import AgentModal from './AgentModal';

export default function Agents() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <section id="agents" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-400 text-sm font-medium uppercase tracking-widest">
            AI Agent Library
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mt-4 mb-4">
            50+ Ready-to-Deploy{' '}
            <span className="text-neon-400">AI Agents</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Pick an agent. Deploy it. Watch your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.6) }}
              className="group relative p-5 rounded-xl bg-dark-700/50 border border-white/5 hover:border-neon-400/20 transition-all duration-300 box-glow-hover"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-neon-400/40 text-xs font-mono">
                    #{String(agent.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-base text-white mb-2 group-hover:text-neon-400 transition-colors duration-300 leading-tight">
                  {agent.name}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {agent.overview}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {agent.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-white/40 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                  {agent.tools.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-white/30 border border-white/5">
                      +{agent.tools.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedAgent(agent)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-neon-400/20 text-neon-400 text-sm font-medium hover:bg-neon-400/10 transition-all duration-200"
                  >
                    Details
                  </button>
                  <a
                    href="https://wa.me/923322522329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-neon-400/10 text-neon-400 text-sm font-medium hover:bg-neon-400/20 transition-all duration-200"
                  >
                    Purchase
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
    </section>
  );
}
