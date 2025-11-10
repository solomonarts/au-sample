import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  Presentation, 
  BarChart3, 
  Factory, 
  Lightbulb, 
  Handshake, 
  ClipboardList 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ResourceCardProps {
  title: string;
  description: string;
  format: string;
  size: string;
  icon: string;
  delay?: number;
}

export const ResourceCard = ({ 
  title, 
  description, 
  format, 
  size, 
  icon,
  delay = 0 
}: ResourceCardProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/downloads/africa-industrialisation-week-poster.png';
    link.download = 'Africa-Industrialisation-Week-2025-Poster.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Starting",
      description: "Your resource download will begin shortly.",
      duration: 3000,
    });
  };

  const getIcon = () => {
    switch (icon) {
      case "presentation":
        return <Presentation className="w-10 h-10" />;
      case "chart":
        return <BarChart3 className="w-10 h-10" />;
      case "factory":
        return <Factory className="w-10 h-10" />;
      case "lightbulb":
        return <Lightbulb className="w-10 h-10" />;
      case "handshake":
        return <Handshake className="w-10 h-10" />;
      case "clipboard":
        return <ClipboardList className="w-10 h-10" />;
      default:
        return <FileText className="w-10 h-10" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-card rounded-lg p-6 border border-border hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-2"
    >
      <div className="text-secondary mb-4">{getIcon()}</div>
      
      <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-muted-foreground">{format} • {size}</span>
        <Button
          onClick={handleDownload}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Download className="w-4 h-4 mr-1" />
          Download
        </Button>
      </div>
    </motion.div>
  );
};
