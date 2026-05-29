const LOGO = "https://media.base44.com/images/public/6a1730b3b02a589f3b265e5e/41e1e8948_newlogo.png";

export default function HeroSection({ title, subtitle }) {
  return (
    <div className="pt-24 pb-8 px-4 text-center">
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-200 drop-shadow-lg mb-3"
        style={{ textShadow: "0 0 30px rgba(200,160,50,0.5)" }}>
        {title}
      </h1>
      <p className="text-yellow-100/90 text-base md:text-lg max-w-2xl mx-auto font-body">{subtitle}</p>
    </div>
  );
}