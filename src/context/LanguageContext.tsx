import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.products": { en: "Products", ar: "المنتجات" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.catalogs": { en: "Catalogs", ar: "الكتالوجات" },
  "nav.callUs": { en: "Call Us", ar: "اتصل بنا" },
  "catalogs.title": { en: "Product Catalogs", ar: "كتالوجات المنتجات" },
  "catalogs.eyebrow": { en: "Resources", ar: "الموارد" },
  "catalogs.desc": { en: "Browse and download official product catalogs from our partner brands. Click any catalog to open the full PDF.", ar: "تصفح وقم بتنزيل كتالوجات المنتجات الرسمية من علاماتنا التجارية الشريكة. انقر على أي كتالوج لفتح ملف PDF الكامل." },
  "catalogs.view": { en: "View PDF", ar: "عرض PDF" },
  "catalogs.download": { en: "Download", ar: "تنزيل" },
  "nav.topBar": { en: "Your Trusted Partner for Electro-Mechanical Products in Saudi Arabia", ar: "شريككم الموثوق لمنتجات الكهروميكانيكية في المملكة العربية السعودية" },

  // Hero
  "hero.badge": { en: "Authorized Distributor — Saudi Arabia", ar: "موزع معتمد — المملكة العربية السعودية" },
  "hero.title1": { en: "Perfect Mechanical", ar: "بيرفكت ميكانيكال" },
  "hero.title2": { en: "System Est.", ar: "سيستم المحدودة" },
  "hero.desc": { en: "Specialized suppliers of certified electro-mechanical products for Oil, Water, Gas, Steam, Fire Fighting and other industrial sectors in Saudi Arabia.", ar: "موردون متخصصون لمنتجات كهروميكانيكية معتمدة لقطاعات النفط والمياه والغاز والبخار ومكافحة الحرائق والقطاعات الصناعية الأخرى في المملكة العربية السعودية." },
  "hero.viewProducts": { en: "View Products", ar: "عرض المنتجات" },
  "hero.contactUs": { en: "Contact Us", ar: "اتصل بنا" },
  "hero.globalBrands": { en: "Global Brands", ar: "علامات تجارية عالمية" },
  "hero.countriesServed": { en: "Countries Served", ar: "دولة يتم خدمتها" },
  "hero.yearsExperience": { en: "Years Experience", ar: "سنوات خبرة" },
  "hero.certifiedProducts": { en: "Certified Products", ar: "منتجات معتمدة" },

  // About section (home)
  "home.whoWeAre": { en: "Who We Are", ar: "من نحن" },
  "home.aboutTitle": { en: "Trusted Mechanical & Electrical Suppliers in Saudi Arabia", ar: "موردون موثوقون للمنتجات الميكانيكية والكهربائية في المملكة العربية السعودية" },
  "home.aboutP1": { en: "Perfect Mechanical System Est. is one of the leading traders of Mechanical and Electrical products in Saudi Arabia, headquartered in Riyadh. We are specialized in the field of Oil, Water, Gas, Steam, Fire Fighting, and many other sectors.", ar: "مؤسسة بيرفكت ميكانيكال سيستم هي واحدة من أبرز تجار المنتجات الميكانيكية والكهربائية في المملكة العربية السعودية، ومقرها الرياض. نحن متخصصون في مجالات النفط والمياه والغاز والبخار ومكافحة الحرائق والعديد من القطاعات الأخرى." },
  "home.aboutP2": { en: "Our mission is simple — to provide certified international brands at competitive prices, improving the Kingdom's infrastructure by supplying the market with prominent products along with their approved certifications.", ar: "مهمتنا بسيطة — تقديم علامات تجارية دولية معتمدة بأسعار تنافسية، وتحسين البنية التحتية للمملكة من خلال تزويد السوق بمنتجات بارزة مع شهاداتها المعتمدة." },
  "home.learnMore": { en: "Learn More About Us", ar: "اعرف المزيد عنا" },

  // Sectors
  "sector.oilGas": { en: "Oil & Gas", ar: "النفط والغاز" },
  "sector.water": { en: "Water Systems", ar: "أنظمة المياه" },
  "sector.fire": { en: "Fire Fighting", ar: "مكافحة الحرائق" },
  "sector.steam": { en: "Steam Systems", ar: "أنظمة البخار" },
  "sector.plumbing": { en: "Plumbing & Heating", ar: "السباكة والتدفئة" },
  "sector.industrial": { en: "Industrial Facilities", ar: "المنشآت الصناعية" },

  // Brands section
  "brands.ourPartners": { en: "Our Partners", ar: "شركاؤنا" },
  "brands.title": { en: "Brands We Deal In", ar: "العلامات التجارية التي نتعامل معها" },
  "brands.desc": { en: "We are authorized distributors and proud partners of the world's most trusted mechanical and industrial brands.", ar: "نحن موزعون معتمدون وشركاء فخورون لأكثر العلامات التجارية الميكانيكية والصناعية موثوقية في العالم." },

  // Products CTA
  "cta.title": { en: "Explore Our Complete Product Range", ar: "استكشف مجموعة منتجاتنا الكاملة" },
  "cta.desc": { en: "From valves and fittings to expansion joints, flow switches, and seamless pipes — we stock a comprehensive range of certified products for all your industrial needs.", ar: "من الصمامات والوصلات إلى وصلات التمدد ومفاتيح التدفق والأنابيب السلسة — نوفر مجموعة شاملة من المنتجات المعتمدة لجميع احتياجاتكم الصناعية." },
  "cta.browse": { en: "Browse Products", ar: "تصفح المنتجات" },

  // Contact strip
  "contact.phone": { en: "Phone", ar: "الهاتف" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.address": { en: "Address", ar: "العنوان" },

  // About page
  "about.header": { en: "About Us", ar: "من نحن" },
  "about.companyName": { en: "Perfect Mechanical System Est.", ar: "مؤسسة بيرفكت ميكانيكال سيستم" },
  "about.headerDesc": { en: "Your trusted partner for certified electro-mechanical products in the Kingdom of Saudi Arabia.", ar: "شريككم الموثوق لمنتجات كهروميكانيكية معتمدة في المملكة العربية السعودية." },
  "about.intro": { en: "Introduction", ar: "مقدمة" },
  "about.whoWeAre": { en: "Who We Are", ar: "من نحن" },
  "about.introText": { en: "Perfect Mechanical System Est. would like to introduce ourselves as one of the leading traders that work with Mechanical and Electrical products in Saudi Arabia. We are specialized in the field of Oil, Water, Gas, Steam, Fire Fighting, and many other sectors. Perfect headquarters is located in Riyadh, Saudi Arabia.", ar: "تود مؤسسة بيرفكت ميكانيكال سيستم أن تقدم نفسها كواحدة من أبرز التجار الذين يعملون في مجال المنتجات الميكانيكية والكهربائية في المملكة العربية السعودية. نحن متخصصون في مجالات النفط والمياه والغاز والبخار ومكافحة الحرائق والعديد من القطاعات الأخرى. يقع مقر الشركة الرئيسي في الرياض، المملكة العربية السعودية." },
  "about.sectorsWeServe": { en: "Sectors We Serve", ar: "القطاعات التي نخدمها" },
  "about.sector1": { en: "Oil & Gas Exploration and Transportation", ar: "استكشاف ونقل النفط والغاز" },
  "about.sector2": { en: "Water & Plumbing Systems", ar: "أنظمة المياه والسباكة" },
  "about.sector3": { en: "Fire Fighting & Safety", ar: "مكافحة الحرائق والسلامة" },
  "about.sector4": { en: "Steam & Heating Systems", ar: "أنظمة البخار والتدفئة" },
  "about.sector5": { en: "Power Generation", ar: "توليد الطاقة" },
  "about.sector6": { en: "Mechanical & Structural Applications", ar: "التطبيقات الميكانيكية والهيكلية" },
  "about.sector7": { en: "Residential & Commercial Buildings", ar: "المباني السكنية والتجارية" },
  "about.sector8": { en: "Industrial & Petrochemical Facilities", ar: "المنشآت الصناعية والبتروكيماوية" },
  "about.foundation": { en: "Our Foundation", ar: "أساسنا" },
  "about.vmv": { en: "Vision, Mission & Values", ar: "الرؤية والرسالة والقيم" },
  "about.vision": { en: "Vision", ar: "الرؤية" },
  "about.visionDesc": { en: "Our goal is to become the biggest suppliers of Electro and Mechanical products in Saudi Arabia. We cultivate the resources needed to supply traders and contractors from across the country with utmost efficiency.", ar: "هدفنا هو أن نصبح أكبر موردين لمنتجات الكهروميكانيكية في المملكة العربية السعودية. نحن نوفر الموارد اللازمة لتزويد التجار والمقاولين من جميع أنحاء المملكة بأعلى كفاءة." },
  "about.mission": { en: "Mission", ar: "الرسالة" },
  "about.missionDesc": { en: "To provide certified brands at competitive prices, improving the Kingdom's infrastructure by supplying the market with prominent brands along with their approved certifications in their distinct fields of construction.", ar: "تقديم علامات تجارية معتمدة بأسعار تنافسية، وتحسين البنية التحتية للمملكة من خلال تزويد السوق بعلامات تجارية بارزة مع شهاداتها المعتمدة في مجالات البناء المختلفة." },
  "about.values": { en: "Values", ar: "القيم" },
  "about.valuesDesc": { en: "Customer satisfaction is our number one priority. Each product is systematically tested to ensure that they are produced with the highest standard of quality and reliability.", ar: "رضا العملاء هو أولويتنا الأولى. يتم اختبار كل منتج بشكل منهجي للتأكد من إنتاجه بأعلى معايير الجودة والموثوقية." },
  "about.authDistributor": { en: "Authorized Distributor — Pegler Valves KSA", ar: "موزع معتمد — صمامات بيغلر في المملكة العربية السعودية" },
  "about.authDesc": { en: "We are officially authorized by Pegler Yorkshire ME FZE (an Aalberts Piping Systems company) as the authorized distributor for Pegler Valves in the Kingdom of Saudi Arabia, ensuring customers receive genuine products with full manufacturer backing.", ar: "نحن مخولون رسمياً من قبل بيغلر يوركشاير الشرق الأوسط (شركة آلبرتس لأنظمة الأنابيب) كموزع معتمد لصمامات بيغلر في المملكة العربية السعودية، مما يضمن حصول العملاء على منتجات أصلية مع دعم كامل من الشركة المصنعة." },
  "about.getInTouch": { en: "Get In Touch", ar: "تواصل معنا" },

  // Contact page
  "contact.title": { en: "Contact Us", ar: "اتصل بنا" },
  "contact.headerDesc": { en: "Reach out to our team for product inquiries, pricing, and technical support.", ar: "تواصل مع فريقنا للاستفسار عن المنتجات والأسعار والدعم الفني." },
  "contact.getInTouch": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.info": { en: "Contact Information", ar: "معلومات الاتصال" },
  "contact.available": { en: "Available during business hours", ar: "متاح خلال ساعات العمل" },
  "contact.respondTime": { en: "We respond within 24 hours", ar: "نرد خلال 24 ساعة" },
  "contact.physicalAddress": { en: "Physical Address", ar: "العنوان الفعلي" },
  "contact.addressLine1": { en: "Al Malaz, Salah Ad Din Al Ayyubi Road", ar: "الملز، طريق صلاح الدين الأيوبي" },
  "contact.addressLine2": { en: "Riyadh, Kingdom of Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
  "contact.businessHours": { en: "Business Hours", ar: "ساعات العمل" },
  "contact.hours1": { en: "Sunday – Thursday: 8:00 AM – 5:00 PM", ar: "الأحد – الخميس: 8:00 صباحاً – 5:00 مساءً" },
  "contact.hours2": { en: "Friday & Saturday: Closed", ar: "الجمعة والسبت: مغلق" },
  "contact.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "contact.chatWhatsApp": { en: "Chat on WhatsApp →", ar: "الدردشة على واتساب ←" },
  "contact.quickResponses": { en: "Quick responses via WhatsApp", ar: "ردود سريعة عبر واتساب" },
  "contact.sendMessage": { en: "Send Us a Message", ar: "أرسل لنا رسالة" },
  "contact.fullName": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.yourName": { en: "Your full name", ar: "اسمك الكامل" },
  "contact.emailAddress": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.phoneNumber": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.subject": { en: "Subject", ar: "الموضوع" },
  "contact.subjectPlaceholder": { en: "Product inquiry / Quote request", ar: "استفسار عن منتج / طلب عرض سعر" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.messagePlaceholder": { en: "Tell us about your requirements, the products you need, quantities, etc.", ar: "أخبرنا عن متطلباتكم، والمنتجات التي تحتاجونها، والكميات، إلخ." },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.emailNote": { en: "This will open your email client. Alternatively, call or WhatsApp us directly.", ar: "سيفتح هذا برنامج البريد الإلكتروني الخاص بك. بدلاً من ذلك، اتصل بنا أو تواصل عبر واتساب مباشرة." },
  "contact.findUs": { en: "Find Us in Riyadh, Saudi Arabia", ar: "جدنا في الرياض، المملكة العربية السعودية" },
  "contact.viewMap": { en: "View on Google Maps", ar: "عرض على خرائط جوجل" },

  // Products page
  "products.title": { en: "Products & Brands", ar: "المنتجات والعلامات التجارية" },
  "products.filterByDivision": { en: "Filter by Division", ar: "تصفية حسب القسم" },
  "products.filterByBrand": { en: "Filter by Brand", ar: "تصفية حسب العلامة التجارية" },
  "products.viewMore": { en: "View More", ar: "عرض المزيد" },
  "products.viewLess": { en: "View Less", ar: "عرض أقل" },
  "products.allDivisions": { en: "All Divisions", ar: "جميع الأقسام" },
  "products.allBrands": { en: "All Brands", ar: "جميع العلامات التجارية" },
  "products.certStatement": { en: "Comprehensive range of certified mechanical and industrial products from the world's leading manufacturers. All products come with full manufacturer certifications and approvals.", ar: "مجموعة شاملة من المنتجات الميكانيكية والصناعية المعتمدة من أبرز الشركات المصنعة في العالم. جميع المنتجات تأتي مع شهادات وموافقات كاملة من الشركة المصنعة." },
  "products.needQuote": { en: "Need a Quote or Product Information?", ar: "هل تحتاج إلى عرض سعر أو معلومات عن المنتج؟" },
  "products.quoteDesc": { en: "Our team is ready to assist you with product specifications, pricing, and availability.", ar: "فريقنا مستعد لمساعدتك في مواصفات المنتجات والأسعار والتوافر." },
  "products.requestQuote": { en: "Request a Quote", ar: "طلب عرض سعر" },
  "products.callDirectly": { en: "Call Directly", ar: "اتصل مباشرة" },

  // Footer
  "footer.desc": { en: "Specialized suppliers of certified electro-mechanical products for Oil, Water, Gas, Steam, Fire Fighting and industrial sectors in Saudi Arabia.", ar: "موردون متخصصون لمنتجات كهروميكانيكية معتمدة لقطاعات النفط والمياه والغاز والبخار ومكافحة الحرائق والقطاعات الصناعية في المملكة العربية السعودية." },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.keyBrands": { en: "Key Brands", ar: "العلامات التجارية الرئيسية" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("pms-lang");
    return (saved === "ar" ? "ar" : "en") as Language;
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("pms-lang", language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
