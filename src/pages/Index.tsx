import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import brandCrane from "@/assets/brand-crane.jpg";
import brandWika from "@/assets/brand-wika.png";
import brandWatts from "@/assets/brand-watts.jpg";
import brandMueller from "@/assets/brand-mueller.png";
import brandPegler from "@/assets/brand-pegler.jpg";
import brandBenkan from "@/assets/brand-benkan.png";
import brandPotter from "@/assets/brand-potter.png";
import brandInterpipe from "@/assets/brand-interpipe.png";
import brandShurjoint from "@/assets/brand-shurjoint.png";
import brandHitachi from "@/assets/brand-hitachi.jpg";
import brandNeumira from "@/assets/brand-neumira.jpg";
import brandEci from "@/assets/brand-eci.png";
import brandMrflex from "@/assets/brand-mrflex.jpg";
import brandNational from "@/assets/brand-national.jpg";
import brandBothwell from "@/assets/brand-bothwell.png";
import brandUnid from "@/assets/brand-unid.png";
import brandNibco from "@/assets/brand-nibco.png";
import brandJtpr from "@/assets/brand-jtpr.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const brands = [
  { name: "CRANE", logo: brandCrane },
  { name: "WIKA", logo: brandWika },
  { name: "WATTS", logo: brandWatts },
  { name: "Mueller Co.", logo: brandMueller },
  { name: "PEGLER", logo: brandPegler },
  { name: "BENKAN", logo: brandBenkan },
  { name: "POTTER", logo: brandPotter },
  { name: "INTERPIPE", logo: brandInterpipe },
  { name: "SHURJOINT", logo: brandShurjoint },
  { name: "HITACHI METALS, LTD", logo: brandHitachi },
  { name: "EUROPEAN CASTING INDUSTRY", logo: brandEci },
  { name: "NEUMIRA", logo: brandNeumira },
  { name: "MR-FLEX", logo: brandMrflex },
  { name: "NATIONAL", logo: brandNational },
  { name: "BOTH-WELL", logo: brandBothwell },
  { name: "UNID", logo: brandUnid },
  { name: "NIBCO", logo: brandNibco },
  { name: "SHANDONG JINTONG PIPELINE CO.,LTD", logo: brandJtpr },
];

const sectors = [
  "Oil & Gas",
  "Water Systems",
  "Fire Fighting",
  "Steam Systems",
  "Plumbing & Heating",
  "Industrial Facilities",
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Perfect Mechanical System Est. - Hero"
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto text-center px-4 py-24">
          <div className="inline-block bg-white/15 border border-white/40 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Authorized Distributor — Saudi Arabia
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Perfect Mechanical
            <br />
            <span className="text-white">System Est.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Specialized suppliers of certified electro-mechanical products for Oil, Water, Gas, Steam,
            Fire Fighting and other industrial sectors in Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg text-base hover:bg-white/90 transition-colors shadow-xl"
            >
              View Products <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { num: "17+", label: "Global Brands" },
              { num: "80+", label: "Countries Served" },
              { num: "30+", label: "Years Experience" },
              { num: "100%", label: "Certified Products" },
            ].map((s) => (
              <div key={s.label} className="py-5 text-center">
                <div className="text-2xl font-extrabold text-white">{s.num}</div>
                <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-background" aria-labelledby="about-heading-home">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 id="about-heading-home" className="section-title mb-6">
              Trusted Mechanical & Electrical Suppliers in Saudi Arabia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Perfect Mechanical System Est. is one of the leading traders of Mechanical and Electrical products in Saudi Arabia,
              headquartered in Riyadh. We are specialized in the field of Oil, Water, Gas, Steam, Fire Fighting, and many other sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is simple — to provide certified international brands at competitive prices, improving the Kingdom's
              infrastructure by supplying the market with prominent products along with their approved certifications.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {sectors.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] img-hover-zoom">
            <img
              src={aboutBg}
              alt="Mechanical pipe systems and industrial fittings"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-primary opacity-30" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <div className="text-white font-bold text-sm mb-1">Commercial Registration</div>
              <div className="text-white/80 text-xs">No: 7041863023 | VAT: 311125275500003</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-muted" aria-labelledby="brands-heading-home">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Partners</p>
            <h2 id="brands-heading-home" className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Brands We Deal In
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              We are authorized distributors and proud partners of the world's most trusted mechanical and industrial brands.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-card rounded-xl px-4 py-5 text-center card-shadow hover:elevated-shadow hover:-translate-y-0.5 transition-all duration-200 border border-border flex flex-col items-center justify-center gap-3 min-h-[110px]"
              >
                {brand.logo ? (
                  <div className="img-hover-zoom rounded">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="h-10 w-auto max-w-[100px] object-contain mix-blend-multiply"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{brand.name.substring(0, 2)}</span>
                  </div>
                )}
                <span className="text-sm font-semibold text-foreground leading-tight block">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="py-20 gradient-primary text-primary-foreground" aria-labelledby="products-cta-heading">
        <div className="container mx-auto text-center px-4">
          <h2 id="products-cta-heading" className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Explore Our Complete Product Range
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            From valves and fittings to expansion joints, flow switches, and seamless pipes — we stock a comprehensive
            range of certified products for all your industrial needs.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-lg text-lg hover:bg-white/90 transition-colors shadow-xl"
          >
            Browse Products <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-16 bg-background border-t border-border" aria-label="Contact information">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a href="tel:+966551040126" className="group flex flex-col items-center gap-3 hover:text-primary transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Phone</div>
                <div className="text-muted-foreground text-sm">+966 551 040 126</div>
              </div>
            </a>
            <a href="mailto:info@perfectmechanicalsystem.com" className="group flex flex-col items-center gap-3 hover:text-primary transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Email</div>
                <div className="text-muted-foreground text-sm">info@perfectmechanicalsystem.com</div>
              </div>
            </a>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Address</div>
                <div className="text-muted-foreground text-sm">Al Malaz, Salah Ad Din Al Ayyubi Rd, Riyadh, KSA</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
