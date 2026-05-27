export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`backdrop-blur-md bg-black/30 border border-yellow-600/20 rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}