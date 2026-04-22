import aboutBg from "@/assets/about-bg.jpg";
import { CheckCircle, Award, Target, Heart, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

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

const AboutPage = () => {
  const { t } = useLanguage();

  const sectors = [
    t("about.sector1"), t("about.sector2"), t("about.sector3"), t("about.sector4"),
    t("about.sector5"), t("about.sector6"), t("about.sector7"), t("about.sector8"),
  ];

  const values = [
    { icon: Target, title: t("about.vision"), description: t("about.visionDesc") },
    { icon: Award, title: t("about.mission"), description: t("about.missionDesc") },
    { icon: Heart, title: t("about.values"), description: t("about.valuesDesc") },
  ];

  return (
    <main>
      {/* Header — split layout */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground" aria-label="About Perfect Mechanical System Est.">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/60 to-primary-dark/90" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              {t("about.header")}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
              {t("about.companyName")}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">{t("about.headerDesc")}</p>
          </div>
        </div>
      </section>

      {/* Intro + Sectors — modern asymmetric layout */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden" aria-labelledby="intro-heading">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">{t("about.intro")}</p>
              <h2 id="intro-heading" className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t("about.whoWeAre")}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{t("about.introText")}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-card rounded-3xl p-8 md:p-10 elevated-shadow border border-border">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center">
                    <CheckCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t("about.intro")}</div>
                    <div className="font-display text-xl font-bold text-foreground">{t("about.sectorsWeServe")}</div>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {sectors.map((s, i) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/60 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-colors"
                    >
                      <span className="font-display text-xs font-bold text-primary/40 w-5 mt-0.5">0{i + 1}</span>
                      <span className="text-sm font-medium text-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VMV */}
      <section className="py-20 md:py-28 bg-muted relative overflow-hidden" aria-labelledby="values-heading">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow justify-center mb-4">{t("about.foundation")}</p>
            <h2 id="values-heading" className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              {t("about.vmv")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group bg-card rounded-3xl p-8 soft-shadow hover:elevated-shadow hover:-translate-y-1 transition-all duration-300 border border-border relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                    <v.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized distributor */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-primary text-primary-foreground" aria-label="Authorized distributor">
        <div className="absolute inset-0 gradient-mesh opacity-70" />
        <div className="container mx-auto px-4 text-center relative max-w-3xl">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-white/15 border border-white/30 items-center justify-center mb-6 backdrop-blur-sm">
            <Award size={28} className="text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">{t("about.authDistributor")}</h2>
          <p className="text-white/85 text-base md:text-lg leading-relaxed">{t("about.authDesc")}</p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 md:py-28 bg-background" aria-labelledby="brands-heading-about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow justify-center mb-4">{t("brands.ourPartners")}</p>
            <h2 id="brands-heading-about" className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
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

      {/* Get in touch */}
      <section className="py-16 md:py-20 bg-muted border-t border-border" aria-label="Contact us">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 md:p-12 elevated-shadow border border-border max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="eyebrow mb-3">{t("about.getInTouch")}</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">{t("about.getInTouch")}</h2>
                <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3 text-sm">
                  <a href="tel:+966551040126" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
                    <Phone size={16} className="text-primary" /> +966 551 040 126
                  </a>
                  <a href="mailto:info@perfectmechanicalsystem.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
                    <Mail size={16} className="text-primary" /> info@perfectmechanicalsystem.com
                  </a>
                  <span className="flex items-center gap-2 text-foreground font-medium">
                    <MapPin size={16} className="text-primary" /> Al Malaz, Riyadh
                  </span>
                </div>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                {t("nav.contact")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
