import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import KingdomButton from "../components/KingdomButton";

const DT = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/05a48f3d9_home-desktop.png";
const MB = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/9fb66f8b7_home-mobile.png";

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

        <div className="flex flex-wrap justify-center gap-3">
          <KingdomButton href="https://kingdommandateministry.com">Visit Kingdom Mandate Ministry</KingdomButton>
          <KingdomButton href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" variant="burgundy">Partner / Sow</KingdomButton>
        </div>
      </div>
    </PageBackground>
  );
}