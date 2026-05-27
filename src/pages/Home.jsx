import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import KingdomButton from "../components/KingdomButton";

const DT = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/05a48f3d9_home-desktop.png";
const MB = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/9fb66f8b7_home-mobile.png";

const features = [
  { title: "Every Believer is Gifted", text: "God has placed grace and purpose within you. Your gifts matter." },
  { title: "Discover Your Calling", text: "Learn how your spiritual gifts reveal your Kingdom assignment." },
  { title: "Build the Body", text: "Your gifts are not just for you — they are for serving others and glorifying Christ." },
];

export default function Home() {
  return (
    <PageBackground desktopImg={DT} mobileImg={MB}>
      <HeroSection title="Kingdom Gift Finder" subtitle="Discover your spiritual gifts. Walk in your calling. Build the Body of Christ." />
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <GlassCard className="mb-8 text-center">
          <p className="text-yellow-100/90 leading-relaxed">
            This Spirit-filled companion helps you recognize the gifts God has placed within you, grow in confidence, and use those gifts for His Kingdom. Every believer has a calling, and every calling carries grace.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <KingdomButton to="/daily">Start Today</KingdomButton>
          <KingdomButton to="/gifts">Explore Gifts</KingdomButton>
          <KingdomButton to="/journal" variant="burgundy">Journal</KingdomButton>
          <KingdomButton href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" variant="burgundy">Partner / Sow</KingdomButton>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f) => (
            <GlassCard key={f.title} className="text-center">
              <h3 className="font-heading text-lg text-yellow-300 mb-2">{f.title}</h3>
              <p className="text-yellow-100/80 text-sm">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageBackground>
  );
}