const HeaderLayout = ({ children, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header */}
      <section className="fixed top-0 left-0 z-50 h-[70px] w-full bg-[#7b3400] shadow-lg">
        <div className="relative mx-auto h-full max-w-full px-4 md:max-w-[1000px] md:px-0">
          {children}
        </div>
      </section>
    </>
  );
};

export default HeaderLayout;
