import aboutBg from "@/assets/about-bg.jpg";
import { CheckCircle, Award, Target, Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const brands = [
  "CRANE", "WIKA", "WATTS", "Mueller Co.", "PEGLER", "BENKAN",
  "POTTER", "INTERPIPE", "SHURJOINT", "HITACHI METALS, LTD",
  "TL EUROPEAN CASTING INDUSTRY", "MetroPast", "NEUMERIA",
  "MR-FLEX", "NATIONAL", "BOTH-WELL", "UNID",
];

const values = [
  {
    icon: Target,
    title: "Vision",
    description:
      "Our goal is to become the biggest suppliers of Electro and Mechanical products in Saudi Arabia. We cultivate the resources needed to supply traders and contractors from across the country with utmost efficiency.",
  },
  {
    icon: Award,
    title: "Mission",
    description:
      "To provide certified brands at competitive prices, improving the Kingdom's infrastructure by supplying the market with prominent brands along with their approved certifications in their distinct fields of construction.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Customer satisfaction is our number one priority. Each product is systematically tested to ensure that they are produced with the highest standard of quality and reliability.",
  },
];

const AboutPage = () => {
  return (
    <main>
      {/* Page Header */}
      <section
        className="relative py-24 flex items-center justify-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="About Perfect Mechanical System Est."
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto text-center px-4">
          <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Perfect Mechanical System Est.
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Your trusted partner for certified electro-mechanical products in the Kingdom of Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background" aria-labelledby="intro-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Introduction</p>
            <h2 id="intro-heading" className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-10" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center">
              Perfect Mechanical System Est. would like to introduce ourselves as one of the leading traders that work
              with Mechanical and Electrical products in Saudi Arabia. We are specialized in the field of Oil, Water, Gas,
              Steam, Fire Fighting, and many other sectors. Perfect headquarters is located in Riyadh, Saudi Arabia.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">CR</span>
                  Company Details
                </div>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Business Name</dt>
                    <dd className="font-medium text-foreground text-right">Perfect Mechanical System Est.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Business Type</dt>
                    <dd className="font-medium text-foreground text-right">Electro-Mechanical Equipment Suppliers</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Commercial Reg. No.</dt>
                    <dd className="font-medium text-foreground">7041863023</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">VAT Reg. No.</dt>
                    <dd className="font-medium text-foreground">311125275500003</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium text-foreground text-right">Riyadh, Saudi Arabia</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">SC</span>
                  Sectors We Serve
                </div>
                <ul className="space-y-3">
                  {[
                    "Oil & Gas Exploration and Transportation",
                    "Water & Plumbing Systems",
                    "Fire Fighting & Safety",
                    "Steam & Heating Systems",
                    "Power Generation",
                    "Mechanical & Structural Applications",
                    "Residential & Commercial Buildings",
                    "Industrial & Petrochemical Facilities",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle size={15} className="text-accent flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-muted" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Foundation</p>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Vision, Mission & Values
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-8 card-shadow border border-border hover:elevated-shadow transition-all duration-200">
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Distributor */}
      <section className="py-16 gradient-primary text-primary-foreground" aria-label="Authorized distributor">
        <div className="container mx-auto px-4 text-center">
          <Award size={48} className="text-accent mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Authorized Distributor — Pegler Valves KSA</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base">
            We are officially authorized by Pegler Yorkshire ME FZE (an Aalberts Piping Systems company) as the authorized
            distributor for Pegler Valves in the Kingdom of Saudi Arabia, ensuring customers receive genuine products
            with full manufacturer backing.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-background" aria-labelledby="brands-heading-about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Partners</p>
            <h2 id="brands-heading-about" className="text-3xl md:text-4xl font-bold text-primary mb-4">
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
                key={brand}
                className="bg-card rounded-xl px-4 py-5 text-center card-shadow hover:elevated-shadow hover:-translate-y-0.5 transition-all duration-200 border border-border"
              >
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs">{brand.substring(0, 2)}</span>
                </div>
                <span className="text-sm font-semibold text-foreground leading-tight block">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted border-t border-border" aria-label="Contact us">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="tel:+966551040126" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
              <Phone size={18} className="text-primary" /> +966 551 040 126
            </a>
            <a href="mailto:info@perfectmechanicalsystem.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
              <Mail size={18} className="text-primary" /> info@perfectmechanicalsystem.com
            </a>
            <span className="flex items-center gap-2 text-foreground font-medium">
              <MapPin size={18} className="text-primary" /> Al Malaz, Salah Ad Din Al Ayyubi Rd, Riyadh
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
