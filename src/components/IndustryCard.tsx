import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const IndustryCard = ({ icon: Icon, title, description, delay = 0 }: IndustryCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card group">
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-secondary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h3 className="font-bold text-xl text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};
