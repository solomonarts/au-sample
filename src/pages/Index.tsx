import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Zap, 
  Building2, 
  Factory, 
  Globe, 
  MapPin,
  ArrowRight,
  ExternalLink,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagBar } from "@/components/FlagBar";
import { StatCard } from "@/components/StatCard";
import { IndustryCard } from "@/components/IndustryCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ResourceCard } from "@/components/ResourceCard";
import { MicroPartners } from "@/components/MicroPartners";
import { SocialFeed } from "@/components/SocialFeed";
import heroImage from "@/assets/hero-industrial.jpg";
import africaNetwork from "@/assets/africa-network.jpg";
import mticLogo from "@/assets/partners/mtic-logo.png";
import auLogo from "@/assets/partners/au-logo.png";

const Index = () => {
  const handleRegister = () => {
    window.open("https://aiw.africa/register/", "_blank");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <FlagBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden flag-overlay-uganda">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60 z-10" />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Africa Industrialization Week 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-4xl mx-auto">
              Transforming Africa's Economy through Sustainable Industrialisation, 
              Regional Integration and Innovation
            </p>
            
            <p className="text-lg md:text-xl text-primary-foreground font-semibold mb-8">
              November 17-20, 2025 | Commonwealth Resort Munyonyo, Uganda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleRegister}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 font-bold"
              >
                Register Here
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("showcase")}
                className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Explore Uganda's Industry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              icon={Users}
              value={45.9}
              suffix="M"
              label="Population Driving Growth"
              delay={0.1}
            />
            <StatCard 
              icon={TrendingUp}
              value={10.7}
              suffix="M"
              label="Youth Workforce Ready"
              delay={0.2}
            />
            <StatCard 
              icon={Zap}
              value={2051}
              suffix=" MW"
              label="Energy Surplus for Industry"
              delay={0.3}
            />
            <StatCard 
              icon={Building2}
              value={93.5}
              suffix="%"
              label="MSMEs Driving Manufacturing"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Uganda Industrial Showcase */}
      <section id="showcase" className="py-20 flag-overlay-uganda relative">
        <div 
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url(${africaNetwork})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Uganda's Industrial <span className="text-gradient-yellow">Landscape</span>
          </motion.h2>
          
          <p className="text-center text-xl text-muted-foreground mb-16">
            Driving Regional Trade & Innovation
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-foreground">Manufacturing Composition</h3>
              <ProgressBar label="Food & Beverages" percentage={77} delay={0.2} />
              <ProgressBar label="Textiles" percentage={8} delay={0.4} />
              <ProgressBar label="Chemical Products" percentage={6} delay={0.6} />
              <ProgressBar label="Metal Products" percentage={4} delay={0.8} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <img 
                src={africaNetwork} 
                alt="Uganda's Regional Trade Routes"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial Parks & Infrastructure */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="event-poster-bg" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IndustryCard 
              icon={MapPin}
              title="Industrial Parks"
              description="8 operational government parks with 47% occupancy - significant growth potential"
              delay={0.1}
            />
            <IndustryCard 
              icon={Zap}
              title="Energy Advantage"
              description="2,051 MW generation capacity vs 843 MW demand - abundant power for industry"
              delay={0.2}
            />
            <IndustryCard 
              icon={Globe}
              title="Regional Trade"
              description="Strategic position in East Africa with growing manufactured exports across the region"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Hosted By Section */}
      <section className="py-20 bg-background flag-bg-uganda-left">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-12 text-foreground">Hosted By</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="h-40 w-full flex items-center justify-center mb-6">
                  <img 
                    src={mticLogo} 
                    alt="Ministry of Trade, Industry and Cooperatives"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Ministry of Trade, Industry & Cooperatives</h4>
                <p className="text-sm text-muted-foreground">Republic of Uganda</p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="h-40 w-full flex items-center justify-center mb-6">
                  <img 
                    src={auLogo} 
                    alt="African Union"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">African Union</h4>
                <p className="text-sm text-muted-foreground">Continental Partnership</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Micro Partners */}
      <MicroPartners />

      {/* Social Media Section */}
      <SocialFeed />

      {/* Registration CTA Section */}
      <section id="registration" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-[hsl(45,100%,50%)] to-secondary z-0" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-foreground">
              Join Africa's Industrial Transformation
            </h2>
            
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-3xl mx-auto">
              Be part of the conversation shaping Africa's industrial future
            </p>

            <Button 
              size="lg"
              onClick={handleRegister}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 font-bold shadow-2xl mb-3"
            >
              Register Here
            </Button>

            <p className="text-sm text-secondary-foreground/80">
              You will be redirected to the official African Union registration platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-background flag-bg-au-right">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Event <span className="text-gradient-yellow">Resources</span>
            </h2>
            
            <p className="text-center text-xl text-muted-foreground mb-12">
              Download presentations, speeches, and materials from Africa Industrialization Week 2025
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <ResourceCard 
                title="Opening Ceremony Presentations"
                description="Keynote addresses and welcome presentations from Day 1"
                format="PDF & PPT"
                size="45 MB"
                icon="presentation"
                delay={0.1}
              />
              <ResourceCard 
                title="Industrial Data & Statistics"
                description="Comprehensive data packs on African industrial growth"
                format="XLS & PDF"
                size="32 MB"
                icon="chart"
                delay={0.2}
              />
              <ResourceCard 
                title="Women in Industry Session"
                description="Presentations from the African Women in Processing day"
                format="PDF & PPT"
                size="28 MB"
                icon="factory"
                delay={0.3}
              />
              <ResourceCard 
                title="Youth Innovation Forum"
                description="Startup pitches and innovation presentations"
                format="PDF & Video"
                size="65 MB"
                icon="lightbulb"
                delay={0.4}
              />
              <ResourceCard 
                title="Partnerships & Investment"
                description="Investment guides and partnership frameworks"
                format="PDF"
                size="18 MB"
                icon="handshake"
                delay={0.5}
              />
              <ResourceCard 
                title="Event Proceedings Report"
                description="Complete summary of discussions and outcomes"
                format="PDF"
                size="22 MB"
                icon="clipboard"
                delay={0.6}
              />
            </div>

            <div className="text-center">
              <Button 
                variant="outline"
                size="lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download All Resources (ZIP - 210 MB)
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm mb-2 md:mb-0">
              © 2025 Ministry of Trade, Industry and Cooperatives - Uganda
            </p>
            <p className="text-sm">
              Africa Industrialization Week 2025 | #AIW2025 #UgHostsAIW25
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
