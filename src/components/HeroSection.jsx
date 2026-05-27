const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/9137d57f4_newlogo.png";

export default function HeroSection({ title, subtitle }) {
  return (
    <div className="pt-24 pb-8 px-4 text-center">
      <img src={LOGO} alt="Logo" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full drop-shadow-lg" />
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-200 drop-shadow-lg mb-3"
        style={{ textShadow: "0 0 30px rgba(200,160,50,0.5)" }}>
        {title}
      </h1>
      <p className="text-yellow-100/90 text-base md:text-lg max-w-2xl mx-auto font-body">{subtitle}</p>
    </div>
  );
}