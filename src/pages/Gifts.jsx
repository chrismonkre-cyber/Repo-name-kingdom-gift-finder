import { useState } from "react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import { ChevronDown } from "lucide-react";

const DT = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/44014e00a_gifts-desktop.png";
const MB = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/c4b83d2e6_gifts-mobile.png";

const gifts = [
  { name: "Teaching", desc: "The ability to explain and apply God's Word with clarity.", scripture: "Romans 12:7", looks: "You break down complex truths so others understand. People seek you for insight.", encouragement: "Your gift opens minds and transforms lives through the Word.", prayer: "Lord, anoint my teaching. Let every word carry weight and truth.", declaration: "I teach with the power of the Holy Spirit and the accuracy of His Word.", step: "Prepare and share a short Bible study or devotional with someone this week." },
  { name: "Encouragement", desc: "The ability to uplift and motivate others toward Christ.", scripture: "Romans 12:8", looks: "People feel stronger after being around you. You see potential in others.", encouragement: "Your words carry the power to revive weary souls.", prayer: "Father, fill my mouth with words of life and hope.", declaration: "I speak courage, strength, and hope into every life I touch.", step: "Write an encouraging note or message to three people today." },
  { name: "Mercy", desc: "A deep compassion that moves you to act on behalf of those who suffer.", scripture: "Romans 12:8", looks: "You feel deeply for those in pain and are moved to comfort and help.", encouragement: "Your compassion is a reflection of Christ's heart for the broken.", prayer: "Lord, let Your mercy flow through me to heal the hurting.", declaration: "I walk in divine mercy, bringing comfort and healing wherever I go.", step: "Visit or reach out to someone who is going through a difficult time." },
  { name: "Giving", desc: "A joyful generosity that supports the work of God's Kingdom.", scripture: "2 Corinthians 9:7", looks: "You give freely and cheerfully, often beyond what's expected.", encouragement: "Your generosity fuels Kingdom advancement and blesses many.", prayer: "God, give me a generous heart. Let me sow where You direct.", declaration: "I am a Kingdom giver. My resources are tools in God's hands.", step: "Give generously to someone or a ministry this week." },
  { name: "Leadership", desc: "The ability to guide, organize, and inspire others toward a God-given vision.", scripture: "Romans 12:8", looks: "People naturally follow you. You see the bigger picture and rally others.", encouragement: "God has placed authority and vision in you for His purposes.", prayer: "Lord, make me a servant-leader who leads with Your heart.", declaration: "I lead with integrity, boldness, and the wisdom of God.", step: "Take initiative on a project or ministry task that needs direction." },
  { name: "Service", desc: "A heart to meet practical needs and support others behind the scenes.", scripture: "1 Peter 4:10", looks: "You notice what needs to be done and do it without being asked.", encouragement: "Your service is worship. God honors every act of faithful service.", prayer: "Father, show me where to serve. Let my hands do Your work.", declaration: "I serve with joy, diligence, and the heart of Christ.", step: "Volunteer for a task at church or help someone with a practical need." },
  { name: "Faith", desc: "An extraordinary trust in God that believes beyond circumstances.", scripture: "1 Corinthians 12:9", looks: "You trust God in impossible situations and inspire others to believe.", encouragement: "Your faith is a catalyst for miracles and breakthroughs.", prayer: "Lord, increase my faith. Help me believe for the impossible.", declaration: "My faith is bold, unwavering, and rooted in God's promises.", step: "Pray for something specific and boldly trust God for the answer." },
  { name: "Hospitality", desc: "A warm openness that makes others feel welcome and valued.", scripture: "1 Peter 4:9", looks: "Your home and heart are open. People feel safe and loved around you.", encouragement: "You create spaces where people encounter the love of God.", prayer: "Lord, let my life be a refuge and a place of warmth for others.", declaration: "I carry God's welcome. Every space I enter becomes a place of love.", step: "Invite someone over or warmly welcome a newcomer this week." },
  { name: "Discernment", desc: "The ability to distinguish between truth and deception in the spiritual realm.", scripture: "1 Corinthians 12:10", looks: "You sense when something is off. You perceive motives and spiritual atmospheres.", encouragement: "God has given you sharp spiritual sight for protection and direction.", prayer: "Holy Spirit, keep my discernment sharp. Let me see as You see.", declaration: "I walk in divine discernment, led by the Spirit in all things.", step: "Spend time in prayer listening to the Holy Spirit before making a decision." },
  { name: "Evangelism", desc: "A passion and ability to share the gospel and lead others to Christ.", scripture: "Ephesians 4:11", looks: "You naturally share your faith. People are drawn to the gospel through you.", encouragement: "You carry the fire of the Great Commission in your heart.", prayer: "Lord, give me boldness and compassion to share Your gospel.", declaration: "I am an ambassador of Christ, leading people to salvation.", step: "Share the gospel or your testimony with someone today." },
  { name: "Prophecy", desc: "The ability to receive and declare God's messages for edification and direction.", scripture: "1 Corinthians 14:3", looks: "You receive words from God that strengthen, encourage, and comfort others.", encouragement: "Your prophetic voice carries heaven's perspective to earthly situations.", prayer: "Father, speak through me. Let Your prophetic word flow with love and power.", declaration: "I hear God's voice clearly and speak His words with boldness.", step: "Ask God for a word for someone and share it with love and humility." },
  { name: "Helps", desc: "A calling to assist and support others in their ministry and daily needs.", scripture: "1 Corinthians 12:28", looks: "You are the reliable support that makes things happen behind the scenes.", encouragement: "Your faithfulness in helping is the backbone of effective ministry.", prayer: "Lord, show me who needs help today. Let me be Your hands and feet.", declaration: "I am anointed to help, support, and strengthen the Body of Christ.", step: "Offer practical help to a friend, leader, or ministry this week." },
];

export default function Gifts() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <PageBackground desktopImg={DT} mobileImg={MB}>
      <HeroSection title="Gift Categories" subtitle="Discover the grace God has placed within you." />
      <div className="max-w-2xl mx-auto px-4 pb-16 space-y-3">
        {gifts.map((g, i) => (
          <div key={g.name} className="backdrop-blur-md bg-black/30 border border-yellow-600/20 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-heading text-lg text-yellow-300">{g.name}</span>
              <ChevronDown size={20} className={`text-yellow-400 transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`} />
            </button>
            {openIdx === i && (
              <div className="px-5 pb-5 space-y-3 text-yellow-100/90 text-sm border-t border-yellow-600/10 pt-4">
                <p>{g.desc}</p>
                <div><span className="font-heading text-yellow-300 text-xs">Scripture:</span> <span className="italic">{g.scripture}</span></div>
                <div><span className="font-heading text-yellow-300 text-xs">What it looks like:</span> <span>{g.looks}</span></div>
                <div><span className="font-heading text-yellow-300 text-xs">Encouragement:</span> <span>{g.encouragement}</span></div>
                <div><span className="font-heading text-yellow-300 text-xs">Prayer:</span> <span>{g.prayer}</span></div>
                <div><span className="font-heading text-yellow-300 text-xs">Declaration:</span> <span className="font-semibold">{g.declaration}</span></div>
                <div><span className="font-heading text-yellow-300 text-xs">Activation Step:</span> <span>{g.step}</span></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </PageBackground>
  );
}