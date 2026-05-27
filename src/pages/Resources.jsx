import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const DT = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/2a2b75ec7_resources-desktop.png";
const MB = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/069bc9422_resources-mobile.png";

const resources = [
  { name: "The Bible Companion", desc: "A Spirit-led Bible reading companion from Kingdom Mandate Ministry.", url: "https://thebiblecompanion.online" },
  { name: "Kingdom Pathway", desc: "Walk your spiritual growth journey step by step.", url: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", desc: "Speak life and truth daily with powerful declarations.", url: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", desc: "Experience God's healing power through prayer and faith.", url: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", desc: "Discover your God-given purpose and walk in it.", url: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", desc: "Know who you are in Christ and live from that place.", url: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", desc: "The home of Kingdom Mandate Ministry.", url: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", desc: "Watch teachings, worship, and Kingdom content.", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Partner / Sow", desc: "Support the ministry and sow into Kingdom work.", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Resources() {
  return (
    <PageBackground desktopImg={DT} mobileImg={MB}>
      <HeroSection title="Continue the Journey" subtitle="Grow deeper with the Kingdom Mandate Ministry ecosystem." />
      <div className="max-w-3xl mx-auto px-4 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="block group">
            <GlassCard className="h-full hover:bg-black/40 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-heading text-yellow-300 text-sm group-hover:text-yellow-200">{r.name}</h3>
                <ExternalLink size={14} className="text-yellow-400/60 shrink-0 mt-1" />
              </div>
              <p className="text-yellow-100/70 text-xs">{r.desc}</p>
            </GlassCard>
          </a>
        ))}
      </div>
    </PageBackground>
  );
}