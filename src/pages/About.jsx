import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import KingdomButton from "../components/KingdomButton";

const DT = "https://media.base44.com/images/public/6a1730b3b02a589f3b265e5e/33992b91c_resources-desktop.png";
const MB = "https://media.base44.com/images/public/6a1730b3b02a589f3b265e5e/068f22288_resources-mobile.png";

export default function About() {
  return (
    <PageBackground desktopImg={DT} mobileImg={MB}>
      <HeroSection title="About Kingdom Gift Finder" subtitle="Helping believers discover and steward their God-given gifts." />
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <GlassCard className="mb-6">
          <div className="space-y-4 text-yellow-100/90 text-sm leading-relaxed">
            <p>Spiritual gifts are given by God to every believer. They are not earned — they are grace-given abilities for building the Body of Christ and advancing His Kingdom on the earth.</p>
            <p>Every believer has purpose. No gift is too small, and no calling is insignificant. Whether you teach, serve, encourage, lead, or show mercy — your gift matters.</p>
            <p>Gifts are to strengthen the Body of Christ. When believers discover, develop, and deploy their gifts, the church becomes stronger, communities are transformed, and God is glorified.</p>
            <p>This app exists to help you discover what God has placed within you, grow in confidence, and walk in the fullness of your calling.</p>
          </div>
        </GlassCard>

        <GlassCard className="mb-6">
          <h3 className="font-heading text-yellow-300 text-lg mb-3">Kingdom Mandate Ministry</h3>
          <p className="text-yellow-100/90 text-sm leading-relaxed">
            Kingdom Mandate Ministry exists to awaken believers, stir the fire of revival, and equip the Body of Christ to walk in purpose, power, and truth.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <KingdomButton href="https://kingdommandateministry.com">Visit Kingdom Mandate Ministry</KingdomButton>
          <KingdomButton href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" variant="burgundy">Partner / Sow</KingdomButton>
        </div>

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