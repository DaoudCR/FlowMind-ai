import { motion } from 'framer-motion';

const companies = [
  'TechNova', 'AutoFlow Inc', 'DataPulse', 'NexGen Corp', 'SmartBiz',
  'CloudMate', 'LeadBoost', 'OptiScale', 'AI Ventures', 'ZeroToOne',
];

function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 shrink-0">
      <div className="w-10 h-10 rounded-lg bg-neon-400/10 border border-neon-400/20 flex items-center justify-center">
        <span className="text-neon-400 font-heading font-bold text-sm">
          {name.charAt(0)}
        </span>
      </div>
      <span className="text-white/40 font-medium text-base whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-16 border-y border-white/5 bg-dark-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 mb-8 text-center"
      >
        <p className="text-white/30 text-sm font-medium uppercase tracking-widest">
          Trusted by 10+ Businesses Worldwide
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...companies, ...companies].map((name, i) => (
            <CompanyLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
