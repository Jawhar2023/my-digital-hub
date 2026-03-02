import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceBadgeProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const ServiceBadge = ({ icon: Icon, label, delay = 0 }: ServiceBadgeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4, ease: "easeOut" }}
    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
  >
    <Icon className="h-4 w-4 text-primary" />
    {label}
  </motion.div>
);

export default ServiceBadge;
