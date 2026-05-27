import { Link } from "react-router-dom";

export default function KingdomButton({ to, href, children, variant = "gold", className = "" }) {
  const base = "inline-block font-heading text-sm md:text-base tracking-wide px-6 py-3 rounded-lg transition-all duration-200 text-center";
  const styles = variant === "gold"
    ? "bg-gradient-to-r from-yellow-600 to-yellow-500 text-white hover:from-yellow-500 hover:to-yellow-400 shadow-lg shadow-yellow-700/30"
    : "bg-gradient-to-r from-red-900 to-red-800 text-yellow-100 hover:from-red-800 hover:to-red-700 shadow-lg shadow-red-900/30";

  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>{children}</a>;
  if (to) return <Link to={to} className={`${base} ${styles} ${className}`}>{children}</Link>;
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}