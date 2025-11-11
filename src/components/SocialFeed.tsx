import { motion } from "framer-motion";
import { Twitter, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const twitterPosts = [
  {
    account: "@AIW2025_Uganda",
    time: "2 hours ago",
    content: "Day 1 of #AIW2025 kicks off with an inspiring opening ceremony! The energy at Commonwealth Resort Munyonyo is electric as we welcome delegates from across Africa. #UgHostsAIW25 #AfricaIndustrialises",
    retweets: 42,
    likes: 128,
  },
  {
    account: "@MTIC_Uganda",
    time: "4 hours ago",
    content: "Hon. Minister highlights Uganda's industrial growth: \"With 93.5% of our manufacturing driven by MSMEs, we're building an inclusive industrial economy.\" #AIW2025 #WomenInIndustry",
    retweets: 28,
    likes: 95,
  },
  {
    account: "@AfricanUnion",
    time: "6 hours ago",
    content: "The future of African industry is bright! Youth entrepreneurs showcasing innovative solutions at #AIW2025. From agri-tech to renewable energy, the next generation is leading the way. #YouthStartupsAfrica",
    retweets: 67,
    likes: 210,
  },
  {
    account: "@InvestInUganda",
    time: "8 hours ago",
    content: "Did you know? Uganda has 2,051 MW of electricity generation capacity with only 843 MW demand. We have abundant, reliable power for your industrial investments! #AIW2025 #EnergySurplus",
    retweets: 35,
    likes: 87,
  },
];

const facebookPosts = [
  {
    account: "Africa Industrialization Week 2025",
    time: "3 hours ago",
    content: "🎥 LIVE from #AIW2025: Watch the opening ceremony and hear from key speakers about Africa's industrial future. Don't miss this historic event!",
    hasMedia: true,
    mediaText: "📹 Live Video Coverage\nJoin thousands watching the opening ceremony",
    likes: 245,
    comments: 42,
    shares: 18,
  },
  {
    account: "Uganda Ministry of Trade",
    time: "5 hours ago",
    content: "🌟 Spotlight on Women Industrialists! Meet the amazing women transforming Africa's value chains at the African Women in Processing session. Their stories inspire the next generation of female industrial leaders. #WomenInIndustry #AIW2025",
    hasPhotos: true,
    likes: 189,
    comments: 31,
    shares: 12,
  },
  {
    account: "Uganda Investment Authority",
    time: "7 hours ago",
    content: "📊 Data Dive: Uganda's industrial parks contribute 7% to national sales with only 0.5% of all firms. Discover the opportunities in our specialized industrial zones at the Investment Forum tomorrow. #IndustrialParks #InvestInUganda",
    likes: 132,
    comments: 24,
    shares: 9,
  },
];

export const SocialFeed = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Join the <span className="text-gradient-yellow">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Follow the latest updates from Africa Industrialization Week 2025
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Twitter Feed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-border">
              <Twitter className="w-6 h-6 text-[#1DA1F2]" />
              <h4 className="text-xl font-bold text-foreground">Latest from X (Twitter)</h4>
            </div>
            
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
              {twitterPosts.map((post, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-0">
                  <div className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">{post.account}</strong> • {post.time}
                  </div>
                  <p className="text-foreground mb-3 whitespace-pre-line">{post.content}</p>
                  <div className="text-sm text-muted-foreground">
                    🔁 {post.retweets} ❤️ {post.likes}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Facebook Feed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-border">
              <Facebook className="w-6 h-6 text-[#1877F2]" />
              <h4 className="text-xl font-bold text-foreground">Facebook Updates</h4>
            </div>
            
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
              {facebookPosts.map((post, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-0">
                  <div className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">{post.account}</strong> • {post.time}
                  </div>
                  <p className="text-foreground mb-3 whitespace-pre-line">{post.content}</p>
                  
                  {post.hasMedia && (
                    <div className="bg-muted/50 p-4 rounded-lg mb-3 text-center">
                      <p className="font-semibold text-foreground mb-1">📹 Live Video Coverage</p>
                      <p className="text-sm text-muted-foreground">Join thousands watching the opening ceremony</p>
                    </div>
                  )}
                  
                  {post.hasPhotos && (
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-muted/50 h-20 rounded flex items-center justify-center text-sm text-muted-foreground">
                        [Photo 1]
                      </div>
                      <div className="bg-muted/50 h-20 rounded flex items-center justify-center text-sm text-muted-foreground">
                        [Photo 2]
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm text-muted-foreground">
                    👍 {post.likes} 💬 {post.comments} 📤 {post.shares}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="mr-4 mb-4 md:mb-0"
            onClick={() => window.open("https://x.com/mtic_uganda", "_blank")}
          >
            <Twitter className="mr-2 w-5 h-5" />
            Follow #AIW2025 on X
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://facebook.com/mticuganda", "_blank")}
          >
            <Facebook className="mr-2 w-5 h-5" />
            Follow on Facebook
          </Button>
        </div>
      </div>
    </section>
  );
};
