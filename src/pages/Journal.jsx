import { useState, useEffect } from "react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import { Trash2 } from "lucide-react";

const DT = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f21bd130d_journal-desktop.png";
const MB = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/b95e81659_journal-mobile.png";

const prompts = [
  "What gifts do I sense God highlighting in my life?",
  "Where do I feel most alive when serving others?",
  "What do others often affirm in me?",
  "How can I steward my gifts better?",
  "What is God asking me to activate now?",
];

const KEY = "kingdom-gift-journal";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const save = () => {
    if (!title.trim() || !content.trim()) return;
    const updated = [{ id: Date.now(), title, content, date: new Date().toLocaleDateString() }, ...entries];
    setEntries(updated);
    localStorage.setItem(KEY, JSON.stringify(updated));
    setTitle("");
    setContent("");
  };

  const remove = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(KEY, JSON.stringify(updated));
  };

  return (
    <PageBackground desktopImg={DT} mobileImg={MB}>
      <HeroSection title="Gift Journal" subtitle="Write what God is showing you." />
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <GlassCard className="mb-6">
          <h3 className="font-heading text-yellow-300 text-sm mb-3">Journal Prompts</h3>
          <ul className="space-y-1">
            {prompts.map((p) => (
              <li key={p} className="text-yellow-100/80 text-sm cursor-pointer hover:text-yellow-200" onClick={() => setContent(p)}>• {p}</li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entry title..."
            className="w-full bg-white/10 border border-yellow-600/20 rounded-lg px-4 py-2 text-yellow-100 placeholder-yellow-100/40 mb-3 focus:outline-none focus:border-yellow-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts..."
            rows={5}
            className="w-full bg-white/10 border border-yellow-600/20 rounded-lg px-4 py-2 text-yellow-100 placeholder-yellow-100/40 mb-3 focus:outline-none focus:border-yellow-500 resize-none"
          />
          <button onClick={save} className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-heading text-sm px-6 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all">
            Save Entry
          </button>
        </GlassCard>

        {entries.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-heading text-yellow-300 text-lg">Saved Entries</h3>
            {entries.map((e) => (
              <GlassCard key={e.id} className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-heading text-yellow-300 text-sm truncate">{e.title}</h4>
                    <span className="text-yellow-100/50 text-xs">{e.date}</span>
                  </div>
                  <p className="text-yellow-100/80 text-sm whitespace-pre-wrap">{e.content}</p>
                </div>
                <button onClick={() => remove(e.id)} className="text-red-400 hover:text-red-300 p-1 shrink-0"><Trash2 size={16} /></button>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </PageBackground>
  );
}