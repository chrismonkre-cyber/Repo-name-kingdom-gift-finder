import { useState } from "react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DT = "https://media.base44.com/images/public/6a1730b3b02a589f3b265e5e/ee67f1d9d_daily-desktop.png";
const MB = "https://media.base44.com/images/public/6a1730b3b02a589f3b265e5e/23491ed0c_daily-mobile.png";

const dailies = [
  { theme: "Serving", scripture: "1 Peter 4:10 — Each of you should use whatever gift you have received to serve others.", encouragement: "Your willingness to serve opens doors that talent alone cannot.", prayer: "Lord, give me a heart to serve. Let my hands carry Your love to those around me.", declaration: "I am anointed to serve with joy, excellence, and Kingdom power.", action: "Find one practical way to serve someone today without expecting anything in return.", reflection: "Where did I see God's hand in my service today?" },
  { theme: "Encouragement", scripture: "Romans 12:8 — If it is to encourage, then give encouragement.", encouragement: "Your words carry the power to lift the weary and strengthen the faint.", prayer: "Father, let my words bring life. Fill my mouth with encouragement and truth.", declaration: "I speak life, hope, and courage into every situation I encounter.", action: "Send an encouraging message to someone who needs it today.", reflection: "How did encouragement flow through me today?" },
  { theme: "Teaching", scripture: "Romans 12:7 — If it is teaching, then teach.", encouragement: "God has given you insight to open eyes and illuminate hearts.", prayer: "Holy Spirit, give me clarity and wisdom as I share Your Word with others.", declaration: "I am called to teach with accuracy, anointing, and love.", action: "Share one truth from Scripture with someone today.", reflection: "What did I learn while teaching or sharing today?" },
  { theme: "Faith", scripture: "1 Corinthians 12:9 — To another faith by the same Spirit.", encouragement: "Your faith moves mountains and inspires others to believe.", prayer: "Lord, increase my faith. Help me trust You beyond what I can see.", declaration: "My faith is alive, active, and producing breakthrough in every area.", action: "Step out in faith today — pray boldly for something specific.", reflection: "Where did faith carry me beyond my comfort zone?" },
  { theme: "Mercy", scripture: "Romans 12:8 — If it is to show mercy, do it cheerfully.", encouragement: "Your compassion reflects the heart of the Father to a hurting world.", prayer: "Father, let mercy flow through me. Help me see others the way You see them.", declaration: "I walk in mercy and compassion, reflecting Christ in all I do.", action: "Show mercy to someone today — forgive, help, or comfort.", reflection: "How did showing mercy change my perspective today?" },
  { theme: "Leadership", scripture: "Romans 12:8 — If it is to lead, do it diligently.", encouragement: "You are called to lead with integrity, vision, and the heart of a servant.", prayer: "God, shape me into a leader after Your own heart. Give me wisdom and courage.", declaration: "I lead with purpose, humility, and Holy Spirit boldness.", action: "Take initiative on something you've been putting off.", reflection: "How did I lead or influence others for good today?" },
  { theme: "Discernment", scripture: "1 Corinthians 12:10 — To another distinguishing between spirits.", encouragement: "God has sharpened your spiritual senses to perceive what others miss.", prayer: "Holy Spirit, sharpen my discernment. Help me see clearly in every situation.", declaration: "I walk in spiritual discernment, led by the Holy Spirit in all things.", action: "Take time to pray and listen before making a decision today.", reflection: "What did the Holy Spirit reveal to my heart today?" },
];

export default function Daily() {
  const dayIndex = new Date().getDay();
  const [idx, setIdx] = useState(dayIndex);
  const d = dailies[idx];

  return (
    <PageBackground desktopImg={DT} mobileImg={MB}>
      <HeroSection title="Today's Gift Activation" subtitle="One day at a time. Grow in grace. Walk in your assignment." />
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={() => setIdx((idx - 1 + 7) % 7)} className="text-yellow-300 hover:text-yellow-100 p-2"><ChevronLeft size={28} /></button>
          <span className="font-heading text-xl text-yellow-300">{d.theme}</span>
          <button onClick={() => setIdx((idx + 1) % 7)} className="text-yellow-300 hover:text-yellow-100 p-2"><ChevronRight size={28} /></button>
        </div>
        <GlassCard>
          <div className="space-y-5 text-yellow-100/90">
            <div><h3 className="font-heading text-yellow-300 text-sm mb-1">Scripture</h3><p className="italic text-sm">{d.scripture}</p></div>
            <div><h3 className="font-heading text-yellow-300 text-sm mb-1">Encouragement</h3><p className="text-sm">{d.encouragement}</p></div>
            <div><h3 className="font-heading text-yellow-300 text-sm mb-1">Prayer</h3><p className="text-sm">{d.prayer}</p></div>
            <div><h3 className="font-heading text-yellow-300 text-sm mb-1">Declaration</h3><p className="text-sm font-semibold">{d.declaration}</p></div>
            <div><h3 className="font-heading text-yellow-300 text-sm mb-1">Action Step</h3><p className="text-sm">{d.action}</p></div>
            <div><h3 className="font-heading text-yellow-300 text-sm mb-1">Reflection</h3><p className="text-sm italic">{d.reflection}</p></div>
          </div>
        </GlassCard>
      </div>
    </PageBackground>
  );
}