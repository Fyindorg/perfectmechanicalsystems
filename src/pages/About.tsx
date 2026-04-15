import aboutBg from "@/assets/about-bg.jpg";
import { CheckCircle, Award, Target, Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Import brand logos (same as homepage)
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
      {/* Page Header */}
      <section
        className="relative py-24 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-label="About Perfect Mechanical System Est."
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto text-center px-4">
          <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-3">{t("about.header")}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{t("about.companyName")}</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">{t("about.headerDesc")}</p>
        </div>
      </section>

      {/* Company Introduction — full width sectors */}
      <section className="py-20 bg-background" aria-labelledby="intro-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">{t("about.intro")}</p>
            <h2 id="intro-heading" className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">{t("about.whoWeAre")}</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-10" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center">{t("about.introText")}</p>

            {/* Sectors We Serve — full width */}
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border mt-12">
              <div className="font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">SC</span>
                {t("about.sectorsWeServe")}
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {sectors.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle size={15} className="text-accent flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-muted" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">{t("about.foundation")}</p>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-primary mb-3">{t("about.vmv")}</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("about.authDistributor")}</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base">{t("about.authDesc")}</p>
        </div>
      </section>

      {/* Brands Section — same as homepage */}
      <section className="py-20 bg-background" aria-labelledby="brands-heading-about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">{t("brands.ourPartners")}</p>
            <h2 id="brands-heading-about" className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("brands.title")}</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">{t("brands.desc")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-card rounded-xl px-4 py-5 text-center card-shadow hover:elevated-shadow hover:-translate-y-0.5 transition-all duration-200 border border-border flex flex-col items-center justify-center gap-3 min-h-[110px]"
              >
                <div className="img-hover-zoom rounded">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 w-auto max-w-[100px] object-contain mix-blend-multiply"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground leading-tight block">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted border-t border-border" aria-label="Contact us">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">{t("about.getInTouch")}</h2>
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
            {t("nav.contact")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
