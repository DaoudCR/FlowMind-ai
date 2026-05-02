import { Zap, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'AI Agents', href: '#agents' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-neon-400" />
              <span className="font-heading font-bold text-xl text-white">
                Flow<span className="text-neon-400">Mind</span>{' '}
                <span className="text-white/60">AI</span>
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Automating the future, one workflow at a time.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-neon-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/30 hover:text-neon-400 hover:border-neon-400/20 hover:bg-neon-400/5 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
           
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">
            &copy; 2026 FlowMind AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
