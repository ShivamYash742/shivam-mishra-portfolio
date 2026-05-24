import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#0a0a0f] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
            {profile.initials}
          </div>
          <span className="text-slate-400 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="text-white font-medium">Shivam Mishra</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: profile.github, label: 'GitHub' },
            { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-slate-500 hover:text-violet-400 transition-colors duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-xs">Built with Next.js 16 & Three.js</p>
      </div>
    </footer>
  );
}
