import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const DT = "https://media.base44.com/images/public/6a1730b3b02a589f3b265e5e/33992b91c_resources-desktop.png";
const MB = "https://media.base44.com/images/public/6a1730b3b02a589f3b265e5e/068f22288_resources-mobile.png";

const resources = [
  { name: "Kingdom Mandate Ministry", desc: "The home of Kingdom Mandate Ministry.", url: "https://kingdommandateministry.com" },
  { name: "The Bible Companion", desc: "A Spirit-led Bible reading companion from Kingdom Mandate Ministry.", url: "https://thebiblecompanion.online" },
  { name: "Kingdom Prayer Wall", desc: "A place to post, pray, and believe together.", url: "https://prayer.kingdommandateministry.com" },
  { name: "Kingdom Fire Companion", desc: "Stay ignited with daily fire and passion for God.", url: "https://fire.kingdommandateministry.com" },
  { name: "Kingdom Pathway", desc: "Walk your spiritual growth journey step by step.", url: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", desc: "Speak life and truth daily with powerful declarations.", url: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", desc: "Experience God's healing power through prayer and faith.", url: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", desc: "Discover your God-given purpose and walk in it.", url: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", desc: "Know who you are in Christ and live from that place.", url: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", desc: "Discover your spiritual gifts and walk in your calling.", url: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", desc: "Stand firm and fight victoriously with Kingdom strategy.", url: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", desc: "Unlock the riches of God's grace for everyday life.", url: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", desc: "Carry the flame of revival wherever God sends you.", url: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Family Altar", desc: "Build a strong spiritual foundation in your home.", url: "https://family.kingdommandateministry.com" },
  { name: "Kingdom Marketplace Mandate", desc: "Bring Kingdom influence into business and culture.", url: "https://marketplace.kingdommandateministry.com" },
  { name: "Kingdom Freedom", desc: "Walk in the freedom Christ purchased for you.", url: "https://freedom.kingdommandateministry.com" },
  { name: "YouTube Channel", desc: "Watch teachings, worship, and Kingdom content.", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Contact Us", desc: "Reach out to the Kingdom Mandate Ministry team.", url: "mailto:kingdommm.chris@gmail.com" },
  { name: "Partner / Sow", desc: "Support the ministry and sow into Kingdom work.", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Resources() {
  return (
    <PageBackground desktopImg={DT} mobileImg={MB}>
      <HeroSection title="Continue the Journey" subtitle="Grow deeper with the Kingdom Mandate Ministry ecosystem." />
      <div className="max-w-3xl mx-auto px-4 pb-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="max-w-3xl mx-auto px-4 pb-16">
        <GlassCard id="install-section">
          <h3 className="font-heading text-yellow-300 text-lg mb-3">Install This Free Kingdom App</h3>
          <p className="text-yellow-100/80 text-sm leading-relaxed mb-4">You can install Kingdom Gift Finder on your phone, tablet, or computer without using an app store.</p>
          <ol className="space-y-2 text-yellow-100/80 text-sm mb-5">
            <li>1. Open this app in your browser.</li>
            <li>2. Tap your browser menu.</li>
            <li>3. Choose &quot;Add to Home Screen&quot; or &quot;Install App.&quot;</li>
            <li>4. Open it anytime like a normal app.</li>
          </ol>
          <button
            onClick={() => document.getElementById('install-section').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-heading text-sm px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all w-full md:w-auto"
          >
            Install / Add to Home Screen
          </button>
        </GlassCard>
      </div>
    </PageBackground>
  );
}