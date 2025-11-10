import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  delay?: number;
}

export const StatCard = ({ icon: Icon, value, suffix = "", label, description, delay = 0 }: StatCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-secondary rounded-lg">
            <Icon className="w-6 h-6 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-foreground mb-1">
              {inView && <CountUp end={value} duration={2.5} />}
              {suffix}
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{label}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
