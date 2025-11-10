import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

export const ProgressBar = ({ label, percentage, delay = 0 }: ProgressBarProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-foreground">{label}</span>
        <span className="font-bold text-secondary">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-secondary to-[hsl(45,100%,45%)] rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
