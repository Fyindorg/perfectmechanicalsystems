import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import pmsLogo from "@/assets/pms-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-deeper text-primary-foreground" aria-label="Site footer">
      <div className="container mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={pmsLogo} alt="PMS Logo" className="h-14 w-auto" />
            <div>
              <div className="font-bold text-white text-base">Perfect Mechanical System Est.</div>
              <div className="text-accent text-xs">Riyadh, Saudi Arabia</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Specialized suppliers of certified electro-mechanical products for Oil, Water, Gas, Steam, Fire Fighting and industrial sectors in Saudi Arabia.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href="tel:+966551040126" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors">
              <Phone size={14} /> +966 551 040 126
            </a>
            <a href="mailto:info@perfectmechanicalsystem.com" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors">
              <Mail size={14} /> info@perfectmechanicalsystem.com
            </a>
            <span className="flex items-center gap-2 text-white/70">
              <MapPin size={14} /> Al Malaz, Salah Ad Din Al Ayyubi Rd, Riyadh, KSA
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/products", label: "Products" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-white/60 hover:text-accent transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Key Brands</h3>
          <ul className="space-y-1.5">
            {["CRANE", "WIKA", "PEGLER", "Mueller Co.", "POTTER", "Hitachi Metals", "NATIONAL", "BOTH-WELL"].map((b) => (
              <li key={b} className="text-white/60 text-sm">{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Perfect Mechanical System Est. All rights reserved.</span>
          <span>CR No: 7041863023 | VAT: 311125275500003</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
