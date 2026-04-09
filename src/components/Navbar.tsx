import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import pmsLogo from "@/assets/pms-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <span className="opacity-90">Your Trusted Partner for Electro-Mechanical Products in Saudi Arabia</span>
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

      {/* Main navbar — white background */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Perfect Mechanical System Est. - Home">
            <img src={pmsLogo} alt="PMS Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="font-bold text-primary text-base leading-tight">
                Perfect Mechanical System
              </div>
              <div className="text-primary/60 text-xs font-medium tracking-wider">Est.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
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

          {/* CTA */}
          <a
            href="tel:+966551040126"
            className="hidden md:flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-primary-dark transition-colors shadow-sm"
          >
            <Phone size={14} />
            Call Us
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-2 rounded-md hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
