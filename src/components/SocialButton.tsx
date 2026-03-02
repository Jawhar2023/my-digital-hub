import { motion } from "framer-motion";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

const SocialButton = ({ href, icon, label, delay = 0 }: SocialButtonProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
    className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background transition-transform hover:scale-110"
  >
    {icon}
  </motion.a>
);

export default SocialButton;
