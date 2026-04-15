import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Header */}
      <section className="gradient-primary py-20 text-primary-foreground" aria-label="Contact page header">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">{t("contact.getInTouch")}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{t("contact.title")}</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">{t("contact.headerDesc")}</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background" aria-labelledby="contact-details-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 id="contact-details-heading" className="section-title mb-8">{t("contact.info")}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{t("contact.phone")}</div>
                    <a href="tel:+966551040126" className="text-primary hover:text-primary-light text-lg font-bold transition-colors">
                      +966 551 040 126
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">{t("contact.available")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{t("contact.email")}</div>
                    <a href="mailto:info@perfectmechanicalsystem.com" className="text-primary hover:text-primary-light transition-colors break-all">
                      info@perfectmechanicalsystem.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">{t("contact.respondTime")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{t("contact.physicalAddress")}</div>
                    <p className="text-foreground">{t("contact.addressLine1")}</p>
                    <p className="text-muted-foreground text-sm">{t("contact.addressLine2")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{t("contact.businessHours")}</div>
                    <p className="text-foreground">{t("contact.hours1")}</p>
                    <p className="text-muted-foreground text-sm">{t("contact.hours2")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{t("contact.whatsapp")}</div>
                    <a
                      href="https://wa.me/966551040126?text=Hello!%20I'm%20interested%20in%20your%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light transition-colors font-medium"
                    >
                      {t("contact.chatWhatsApp")}
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">{t("contact.quickResponses")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">{t("contact.sendMessage")}</h2>
              <form
                className="bg-card rounded-2xl p-8 card-shadow border border-border space-y-5"
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
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    {t("contact.fullName")} <span className="text-destructive">*</span>
                  </label>
                  <input id="name" name="name" type="text" required placeholder={t("contact.yourName")}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    {t("contact.emailAddress")} <span className="text-destructive">*</span>
                  </label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    {t("contact.phoneNumber")}
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="+966 5XX XXX XXX"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    {t("contact.subject")}
                  </label>
                  <input id="subject" name="subject" type="text" placeholder={t("contact.subjectPlaceholder")}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    {t("contact.message")} <span className="text-destructive">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5} placeholder={t("contact.messagePlaceholder")}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition-colors text-base">
                  {t("contact.send")}
                </button>
                <p className="text-xs text-muted-foreground text-center">{t("contact.emailNote")}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted border-t border-border py-12" aria-label="Location">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-primary mb-4">{t("contact.findUs")}</h2>
          <p className="text-muted-foreground mb-6">
            {t("contact.addressLine1")}, {t("contact.addressLine2")}
          </p>
          <a
            href="https://maps.google.com/?q=Al+Malaz+Salah+Ad+Din+Al+Ayyubi+Road+Riyadh+Saudi+Arabia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
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
