import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <main>
      {/* Header */}
      <section className="gradient-primary py-20 text-primary-foreground" aria-label="Contact page header">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Contact Us</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Reach out to our team for product inquiries, pricing, and technical support.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background" aria-labelledby="contact-details-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 id="contact-details-heading" className="section-title mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a href="tel:+966551040126" className="text-primary hover:text-primary-light text-lg font-bold transition-colors">
                      +966 551 040 126
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a href="mailto:info@perfectmechanicalsystem.com" className="text-primary hover:text-primary-light transition-colors break-all">
                      info@perfectmechanicalsystem.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Physical Address</div>
                    <p className="text-foreground">Al Malaz, Salah Ad Din Al Ayyubi Road</p>
                    <p className="text-muted-foreground text-sm">Riyadh, Kingdom of Saudi Arabia</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Business Hours</div>
                    <p className="text-foreground">Sunday – Thursday: 8:00 AM – 5:00 PM</p>
                    <p className="text-muted-foreground text-sm">Friday & Saturday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/966551040126?text=Hello!%20I'm%20interested%20in%20your%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light transition-colors font-medium"
                    >
                      Chat on WhatsApp →
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">Quick responses via WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Company registration */}
              <div className="mt-8 bg-muted rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4">Company Registration</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Business Name</dt>
                    <dd className="font-medium text-foreground">Perfect Mechanical System Est.</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Commercial Reg. No.</dt>
                    <dd className="font-medium text-foreground">7041863023</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">VAT Reg. No.</dt>
                    <dd className="font-medium text-foreground">311125275500003</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">Send Us a Message</h2>
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
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+966 5XX XXX XXX"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Product inquiry / Quote request"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your requirements, the products you need, quantities, etc."
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition-colors text-base"
                >
                  Send Message
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  This will open your email client. Alternatively, call or WhatsApp us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-muted border-t border-border py-12" aria-label="Location">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-primary mb-4">Find Us in Riyadh, Saudi Arabia</h2>
          <p className="text-muted-foreground mb-6">
            Al Malaz, Salah Ad Din Al Ayyubi Road, Riyadh, Kingdom of Saudi Arabia
          </p>
          <a
            href="https://maps.google.com/?q=Al+Malaz+Salah+Ad+Din+Al+Ayyubi+Road+Riyadh+Saudi+Arabia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            <MapPin size={18} />
            View on Google Maps
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
