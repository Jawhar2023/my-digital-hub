import { motion } from "framer-motion";
import { Globe, Phone, Mail, Monitor, Video, Megaphone } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import ServiceBadge from "@/components/ServiceBadge";
import ContactCard from "@/components/ContactCard";
import SocialButton from "@/components/SocialButton";

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

const Index = () => {
  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Header gradient bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-1.5 w-32 rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="h-20 w-20 overflow-hidden rounded-2xl shadow-lg">
            <img src={logo} alt="IT2LAB Logo" className="h-full w-full object-cover" />
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground">
            IT2LAB
          </h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
            Want more customers online? We create beautiful websites, engaging videos, and smart ads that make your business stand out.
          </p>
        </motion.div>

        {/* Service Badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <ServiceBadge icon={Monitor} label="Website Creation" delay={0.4} />
          <ServiceBadge icon={Video} label="Video Editing" delay={0.5} />
          <ServiceBadge icon={Megaphone} label="Meta Ads" delay={0.6} />
        </div>

        {/* Add Contact Button */}
        <motion.a
          href="tel:+21650577392"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-button)" }}
        >
          <Phone className="h-4 w-4" />
          + Add Contact
        </motion.a>

        {/* Quick Actions */}
        <div className="mt-4 flex justify-center gap-3">
          <motion.a
            href="tel:+21650577392"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            aria-label="Call"
          >
            <Phone className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="mailto:it2lab.tn@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-secondary/20"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </motion.a>
        </div>

        {/* Contact Cards */}
        <div className="mt-8 flex flex-col gap-3">
          <ContactCard
            icon={Phone}
            label="Mobile Phone"
            value="+216 50577392 / 53859899"
            href="tel:+21650577392"
            delay={1.0}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value="it2lab.tn@gmail.com"
            href="mailto:it2lab.tn@gmail.com"
            delay={1.1}
          />
          <ContactCard
            icon={Globe}
            label="Website"
            value="https://it2lab.com/"
            href="https://it2lab-tn.vercel.app/"
            delay={1.2}
          />
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4 pb-8">
          <SocialButton
            href="https://www.facebook.com/profile.php?id=61587631085784"
            icon={<FacebookIcon />}
            label="Facebook"
            delay={1.3}
          />
          <SocialButton
            href="https://www.instagram.com/it2lab.tn/?hl=fr"
            icon={<InstagramIcon />}
            label="Instagram"
            delay={1.4}
          />
          <SocialButton
            href="https://it2lab-tn.vercel.app/"
            icon={<Globe className="h-5 w-5" />}
            label="Website"
            delay={1.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
