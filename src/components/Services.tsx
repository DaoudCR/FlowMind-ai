import { motion } from 'framer-motion';
import { Phone, Target, Workflow, Bot, Database, Cpu } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'AI Calling Agents',
    description: 'Automated voice/call agents that handle sales, support, and follow-ups 24/7',
  },
  {
    icon: Target,
    title: 'AI Lead Generation',
    description: 'Intelligent bots that find, qualify, and nurture leads automatically',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'End-to-end workflow automation to eliminate manual tasks',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    description: 'Smart assistants for websites, WhatsApp, and CRMs',
  },
  {
    icon: Database,
    title: 'CRM & Data Automation',
    description: 'Auto-sync, enrich, and manage your CRM with zero human effort',
  },
  {
    icon: Cpu,
    title: 'Custom AI Agent Pipelines',
    description: 'Tailor-made multi-agent systems for complex business operations',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-400 text-sm font-medium uppercase tracking-widest">
            Our Expertise
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mt-4 mb-4">
            What We Build <span className="text-neon-400">For You</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            From lead generation to full-scale automation, we deliver AI solutions that transform how your business operates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-dark-700/50 border border-white/5 hover:border-neon-400/20 transition-all duration-500 box-glow-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-neon-400/10 border border-neon-400/20 flex items-center justify-center mb-6 group-hover:bg-neon-400/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-neon-400" />
                </div>

                <h3 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-neon-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/40 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
