import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import pmsLogo from "@/assets/pms-logo.png";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinksEn = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/catalogs", label: t("nav.catalogs") },
    { href: "/contact", label: t("nav.contact") },
  ];

  // Reverse order for Arabic: Contact, Products, About Us, Home
  const navLinks = isRTL ? [...navLinksEn].reverse() : navLinksEn;

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <span className="opacity-90">{t("nav.topBar")}</span>
          <div className="flex items-center gap-6">
            <a href="tel:+966551040126" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity">
              <Phone size={12} />
              +966 551 040 126
            </a>
            <a href="mailto:info@perfectmechanicalsystem.com" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity">
              <Mail size={12} />
              info@perfectmechanicalsystem.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white border-b border-gray-100"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between gap-2 py-3 flex-nowrap">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="Perfect Mechanical System Est. - Home">
            <img src={pmsLogo} alt="PMS Logo" className="h-9 lg:h-12 w-auto" />
            <div className="hidden xl:block">
              <div className="font-display font-bold text-primary text-base leading-tight tracking-tight">
                Perfect Mechanical System
              </div>
              <div className="text-primary/60 text-[10px] font-semibold tracking-[0.2em] uppercase">Est.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-0.5 lg:gap-1 flex-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-2.5 lg:px-5 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-primary border border-primary/30 px-2 lg:px-3 py-2 rounded-md hover:bg-primary/10 transition-colors whitespace-nowrap"
              aria-label="Switch language"
            >
              <Globe size={14} />
              <span className="hidden lg:inline">{language === "en" ? "العربية" : "English"}</span>
            </button>
            {/* CTA */}
            <a
              href="tel:+966551040126"
              className="flex items-center gap-2 bg-primary text-white font-semibold text-xs lg:text-sm px-3 lg:px-5 py-2.5 rounded-md hover:bg-primary-dark transition-colors shadow-sm whitespace-nowrap"
            >
              <Phone size={14} />
              {t("nav.callUs")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-primary p-2 rounded-md hover:bg-primary/10 transition-colors text-xs font-bold"
              aria-label="Switch language"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 rounded-md hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <ul className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                      isActive(link.href)
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="tel:+966551040126"
                  className="block text-center bg-primary text-white font-semibold text-sm px-4 py-2.5 rounded-md hover:bg-primary-dark transition-colors"
                >
                  📞 Call: +966 551 040 126
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
