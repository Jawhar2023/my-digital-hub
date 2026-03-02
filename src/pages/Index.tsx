import { motion } from "framer-motion";
import { Phone, Mail, Globe, Monitor, Video, Megaphone } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParallaxLogo from "@/components/ParallaxLogo";
import TypingText from "@/components/TypingText";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const spring = { type: "spring" as const, stiffness: 300, damping: 24 };
const stagger = 0.08;

const services = [
  { icon: Monitor, label: "Website Creation", emoji: "🌐" },
  { icon: Video, label: "Video Editing", emoji: "🎬" },
  { icon: Megaphone, label: "Meta Ads", emoji: "📣" },
];

const contacts = [
  { icon: Phone, label: "Mobile Phone", value: "+216 50577392 / 53859899", href: "tel:+21650577392" },
  { icon: Mail, label: "Email", value: "it2lab.tn@gmail.com", href: "mailto:it2lab.tn@gmail.com" },
  { icon: Globe, label: "Website", value: "https://it2lab.com/", href: "https://it2lab-tn.vercel.app/" },
];

const socials = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com/profile.php?id=61587631085784", label: "Facebook" },
  { icon: <InstagramIcon />, href: "https://www.instagram.com/it2lab.tn/?hl=fr", label: "Instagram" },
  { icon: <Globe className="h-5 w-5" />, href: "https://it2lab-tn.vercel.app/", label: "Website" },
];

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-6">
      <BackgroundEffects />

      {/* Phone mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-[380px]"
      >
        {/* Phone frame */}
        <div
          className="relative rounded-[40px] p-[3px]"
          style={{
            background: "linear-gradient(145deg, hsl(210 40% 92% / 0.15), hsl(210 40% 92% / 0.03))",
          }}
        >
          <div className="rounded-[38px] bg-background p-1">
            {/* Dynamic island */}
            <div className="mx-auto mt-2 h-[28px] w-[100px] rounded-full bg-foreground/90" />

            {/* Inner glass card */}
            <div className="glass-card mt-4 mx-2 mb-2 rounded-3xl p-5 overflow-hidden">
              {/* Logo section */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ...spring }}
                className="flex flex-col items-center"
              >
                <ParallaxLogo />

                <h1 className="mt-5 font-display text-2xl font-extrabold tracking-[3px]">
                  <TypingText text="IT2LAB" className="holo-text" />
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-3 text-center text-xs leading-relaxed text-muted-foreground italic"
                >
                  Want more customers online? We create beautiful websites, engaging videos, and smart ads that make your business stand out.
                </motion.p>
              </motion.div>

              {/* Services */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {services.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1.4 + i * stagger, ...spring }}
                    whileHover={{ scale: 1.08, boxShadow: "var(--glow-cyan)" }}
                    className="press-feedback flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground cursor-default backdrop-blur-sm"
                  >
                    <span>{s.emoji}</span>
                    {s.label}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="tel:+21650577392"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, ...spring }}
                className="liquid-btn press-feedback mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/30 py-3.5 text-xs font-bold uppercase tracking-[3px] text-primary transition-colors hover:text-primary-foreground"
                style={{ boxShadow: "var(--glow-cyan)" }}
              >
                <Phone className="h-4 w-4" />
                + Add Contact
              </motion.a>

              {/* Quick actions */}
              <div className="mt-4 flex justify-center gap-3">
                <motion.a
                  href="tel:+21650577392"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0, ...spring }}
                  whileHover={{ scale: 1.15 }}
                  className="press-feedback flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary"
                  aria-label="Call"
                >
                  <Phone className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="mailto:it2lab.tn@gmail.com"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.1, ...spring }}
                  whileHover={{ scale: 1.15 }}
                  className="press-feedback flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 bg-secondary/10 text-secondary"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </div>

              {/* Contact cards */}
              <div className="mt-6 flex flex-col gap-2.5">
                {contacts.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 + i * stagger, ...spring }}
                    className="neon-border-left press-feedback glass-card flex items-center gap-3 rounded-xl p-3 transition-all hover:border-primary/20"
                    style={{ animationDelay: `${2.2 + i * 0.15}s` }}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <c.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="truncate font-mono text-xs font-medium text-foreground">{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social icons */}
              <div className="mt-6 flex justify-center gap-3 pb-2">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6 + i * stagger, ...spring }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "var(--glow-cyan)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="press-feedback flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/50 text-foreground backdrop-blur-sm transition-colors hover:text-primary hover:border-primary/30"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
