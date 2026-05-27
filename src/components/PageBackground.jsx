export default function PageBackground({ desktopImg, mobileImg, children }) {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${desktopImg})` }}
      />
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${mobileImg})` }}
      />
      <div className="fixed inset-0 bg-black/20" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}