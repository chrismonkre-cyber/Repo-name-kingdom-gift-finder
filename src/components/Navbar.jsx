import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/9137d57f4_newlogo.png";
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/gifts", label: "Gifts" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-10 w-10 rounded-full" />
          <span className="font-heading text-sm text-yellow-200 hidden sm:block">Kingdom Gift Finder</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-heading text-sm tracking-wide transition-colors hover:text-yellow-300 ${
                location.pathname === l.to ? "text-yellow-300" : "text-yellow-100/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-yellow-200 p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl bg-black/60 border-t border-yellow-600/20">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-heading text-sm tracking-wide border-b border-yellow-600/10 ${
                location.pathname === l.to ? "text-yellow-300 bg-yellow-900/20" : "text-yellow-100/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}