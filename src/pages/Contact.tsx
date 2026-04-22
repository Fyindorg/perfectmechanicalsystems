import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  const contactCards = [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+966 551 040 126",
      href: "tel:+966551040126",
      sub: t("contact.available"),
      isLink: true,
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "info@perfectmechanicalsystem.com",
      href: "mailto:info@perfectmechanicalsystem.com",
      sub: t("contact.respondTime"),
      isLink: true,
    },
    {
      icon: MapPin,
      label: t("contact.physicalAddress"),
      value: t("contact.addressLine1"),
      sub: t("contact.addressLine2"),
      isLink: false,
    },
    {
      icon: Clock,
      label: t("contact.businessHours"),
      value: t("contact.hours1"),
      sub: t("contact.hours2"),
      isLink: false,
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28" aria-label="Contact page header">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
            <span className="w-6 h-px bg-white/60" />
            {t("contact.getInTouch")}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t("contact.title")}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">{t("contact.headerDesc")}</p>
        </div>
      </section>

      {/* Cards strip */}
      <section className="-mt-12 md:-mt-16 mb-12 md:mb-16 relative z-10" aria-label="Contact channels">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {contactCards.map((c) => {
              const Inner = (
                <>
                  <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                    <c.icon size={20} className="text-white" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{c.label}</div>
                  <div className="font-display font-bold text-foreground text-sm md:text-base leading-snug break-words">{c.value}</div>
                  <div className="text-muted-foreground text-xs mt-1.5">{c.sub}</div>
                </>
              );
              return c.isLink ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="group bg-card rounded-2xl p-6 border border-border soft-shadow hover:elevated-shadow hover:-translate-y-1 transition-all duration-300"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label} className="bg-card rounded-2xl p-6 border border-border soft-shadow">
                  {Inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="pb-20 md:pb-28 bg-background" aria-labelledby="send-message-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start">
            {/* Side panel */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 elevated-shadow relative overflow-hidden lg:sticky lg:top-24">
              <div className="absolute inset-0 gradient-mesh opacity-50" />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
                  <span className="w-6 h-px bg-white/60" />
                  {t("contact.info")}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">{t("contact.getInTouch")}</h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">{t("contact.headerDesc")}</p>

                <a
                  href="https://wa.me/966551040126?text=Hello!%20I'm%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-white/10 hover:bg-white/15 border border-white/25 rounded-2xl transition-colors backdrop-blur-sm mb-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-bold text-white text-sm">{t("contact.whatsapp")}</div>
                    <div className="text-white/70 text-xs">{t("contact.quickResponses")}</div>
                  </div>
                </a>
                <a
                  href="tel:+966551040126"
                  className="group flex items-center gap-4 p-5 bg-white/10 hover:bg-white/15 border border-white/25 rounded-2xl transition-colors backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-bold text-white text-sm">+966 551 040 126</div>
                    <div className="text-white/70 text-xs">{t("contact.available")}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="eyebrow mb-3">{t("contact.sendMessage")}</p>
              <h2 id="send-message-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                {t("contact.sendMessage")}
              </h2>
              <form
                className="bg-card rounded-3xl p-8 md:p-10 elevated-shadow border border-border space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  const subject = `Inquiry from ${name} via PMS Website`;
                  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                  window.location.href = `mailto:info@perfectmechanicalsystem.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                aria-label="Contact form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      {t("contact.fullName")} <span className="text-destructive">*</span>
                    </label>
                    <input id="name" name="name" type="text" required placeholder={t("contact.yourName")}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      {t("contact.emailAddress")} <span className="text-destructive">*</span>
                    </label>
                    <input id="email" name="email" type="email" required placeholder="your@email.com"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      {t("contact.phoneNumber")}
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+966 5XX XXX XXX"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      {t("contact.subject")}
                    </label>
                    <input id="subject" name="subject" type="text" placeholder={t("contact.subjectPlaceholder")}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                    {t("contact.message")} <span className="text-destructive">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5} placeholder={t("contact.messagePlaceholder")}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors text-base">
                  {t("contact.send")}
                </button>
                <p className="text-xs text-muted-foreground text-center">{t("contact.emailNote")}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="bg-muted border-t border-border py-16 md:py-20 relative overflow-hidden" aria-label="Location">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container mx-auto px-4 text-center relative">
          <p className="eyebrow justify-center mb-3">{t("contact.physicalAddress")}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{t("contact.findUs")}</h2>
          <p className="text-muted-foreground mb-7">
            {t("contact.addressLine1")}, {t("contact.addressLine2")}
          </p>
          <a
            href="https://maps.google.com/?q=Al+Malaz+Salah+Ad+Din+Al+Ayyubi+Road+Riyadh+Saudi+Arabia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition-colors"
          >
            <MapPin size={18} />
            {t("contact.viewMap")}
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
