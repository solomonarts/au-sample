import { motion } from "framer-motion";
import awipLogo from "@/assets/partners/awip-logo.png";
import tuiLogo from "@/assets/partners/tui-logo.png";
import udcLogo from "@/assets/partners/udc-logo.png";
import ufzepaLogo from "@/assets/partners/ufzepa-logo.png";
import uiriLogo from "@/assets/partners/uiri-logo.png";
import umaLogo from "@/assets/partners/uma-logo.png";
import unaLogo from "@/assets/partners/una-logo.png";
import unbsLogo from "@/assets/partners/unbs-logo.png";

const partners = [
  { name: "African Women in Processing", url: "https://awiparks.com/", logo: awipLogo },
  { name: "The Uhuru Institute", url: "https://www.uhuruinstitute.org/", logo: tuiLogo },
  { name: "Uganda Development Corporation", url: "https://www.udc.go.ug/", logo: udcLogo },
  { name: "UFZEPA", url: "https://ufzepa.go.ug/", logo: ufzepaLogo },
  { name: "Uganda Industrial Research Institute", url: "https://uiri.go.ug/", logo: uiriLogo },
  { name: "Uganda Manufacturers Association", url: "https://uma.or.ug/", logo: umaLogo },
  { name: "United Nations Association of Uganda", url: "https://unauganda.org/", logo: unaLogo },
  { name: "Uganda National Bureau of Standards", url: "https://www.unbs.go.ug/", logo: unbsLogo },
];

export const MicroPartners = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4 text-foreground">In Partnership With</h3>
          <p className="text-muted-foreground">Our valued micro-partners contributing to Uganda's industrial growth</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-muted/30 rounded-lg p-6 h-32 flex items-center justify-center border border-border hover:border-secondary transition-all hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-center text-foreground group-hover:text-secondary transition-colors">
                {partner.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
