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
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, ShieldCheck, Globe2, Wrench, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

const Index = () => {
  const { t } = useLanguage();

  const sectors = [
    t("sector.oilGas"), t("sector.water"), t("sector.fire"),
    t("sector.steam"), t("sector.plumbing"), t("sector.industrial"),
  ];

  const featurePills = [
    { icon: ShieldCheck, label: t("hero.certifiedProducts") },
    { icon: Globe2, label: t("hero.countriesServed") },
    { icon: Wrench, label: t("hero.globalBrands") },
    { icon: Award, label: t("hero.yearsExperience") },
  ];

  return (
    <main>
      {/* Hero — split modern layout */}
      <section
        className="relative overflow-hidden bg-primary"
        aria-label="Perfect Mechanical System Est. - Hero"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/70 to-primary-dark/90" />

        <div className="relative container mx-auto px-4 pt-20 pb-32 md:pt-28 md:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-7 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {t("hero.badge")}
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              {t("hero.title1")}
              <br />
              <span className="text-white/70">{t("hero.title2")}</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              {t("hero.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-base hover:bg-white/95 hover:gap-3 transition-all shadow-2xl"
              >
                {t("hero.viewProducts")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                {t("hero.contactUs")}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats card */}
        <div className="relative container mx-auto px-4 -mb-20 z-10">
          <div className="glass border border-white/40 rounded-2xl elevated-shadow p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: "17+", label: t("hero.globalBrands"), Icon: Wrench },
              { num: "80+", label: t("hero.countriesServed"), Icon: Globe2 },
              { num: "30+", label: t("hero.yearsExperience"), Icon: Award },
              { num: "100%", label: t("hero.certifiedProducts"), Icon: ShieldCheck },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.Icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary leading-none">{s.num}</div>
                  <div className="text-muted-foreground text-xs mt-1 leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background relative overflow-hidden" aria-labelledby="about-heading-home">
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto grid md:grid-cols-2 gap-14 items-center px-4 relative">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-4">{t("home.whoWeAre")}</p>
            <h2 id="about-heading-home" className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">{t("home.aboutP1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{t("home.aboutP2")}</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10">
              {sectors.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-primary" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition-colors"
            >
              {t("home.learnMore")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image collage */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden elevated-shadow aspect-[4/5] img-hover-zoom">
              <img src={aboutBg} alt="Mechanical pipe systems and industrial fittings" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 bg-card rounded-2xl elevated-shadow p-5 max-w-[240px] border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Award size={18} className="text-white" />
                </div>
                <div className="font-display font-bold text-foreground">{t("home.commercialReg")}</div>
              </div>
              <div className="text-muted-foreground text-xs leading-relaxed">CR No: 7041863023<br />VAT: 311125275500003</div>
            </div>
            <div className="hidden md:block absolute -top-6 -right-6 w-28 h-28 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </div>
      </section>

      {/* Brands marquee-style grid */}
      <section className="py-20 md:py-28 bg-muted relative overflow-hidden" aria-labelledby="brands-heading-home">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow justify-center mb-4">{t("brands.ourPartners")}</p>
            <h2 id="brands-heading-home" className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
              {t("brands.title")}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">{t("brands.desc")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group bg-card rounded-2xl p-5 text-center soft-shadow hover:elevated-shadow hover:-translate-y-1 transition-all duration-300 border border-border flex flex-col items-center justify-center gap-3 min-h-[140px]"
              >
                <div className="img-hover-zoom rounded-lg flex-1 flex items-center justify-center w-full bg-white">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-12 w-auto max-w-[110px] object-contain mix-blend-multiply"
                  />
                </div>
                <span className="text-xs font-semibold text-foreground leading-tight block group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-primary" aria-labelledby="products-cta-heading">
        <div className="absolute inset-0 gradient-mesh opacity-70" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h2 id="products-cta-heading" className="font-display text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-white/80 mb-10 text-base md:text-lg leading-relaxed">{t("cta.desc")}</p>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-xl text-base hover:bg-white/95 hover:gap-3 transition-all shadow-2xl"
          >
            {t("cta.browse")}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 md:py-20 bg-background border-t border-border" aria-label="Contact information">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+966551040126"
              className="group flex items-center gap-4 p-6 bg-card border border-border rounded-2xl soft-shadow hover:elevated-shadow hover:-translate-y-0.5 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                <Phone size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{t("contact.phone")}</div>
                <div className="font-display font-bold text-foreground">+966 551 040 126</div>
              </div>
            </a>
            <a
              href="mailto:info@perfectmechanicalsystem.com"
              className="group flex items-center gap-4 p-6 bg-card border border-border rounded-2xl soft-shadow hover:elevated-shadow hover:-translate-y-0.5 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors flex-shrink-0">
                <Mail size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{t("contact.email")}</div>
                <div className="font-display font-bold text-foreground text-sm truncate">info@perfectmechanicalsystem.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl soft-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{t("contact.address")}</div>
                <div className="font-display font-bold text-foreground text-sm">Al Malaz, Riyadh, KSA</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
