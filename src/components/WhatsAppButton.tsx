import { useState } from "react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "966551040126";
  const message = "Hello! I'm interested in your products and services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          hovered ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <span className="whitespace-nowrap bg-primary text-primary-foreground text-sm font-semibold px-3 py-2 rounded-full shadow-lg block">
          Chat on WhatsApp
        </span>
      </div>
      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
           style={{ background: "#25D366" }}>
        {/* Official WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.628 4.56 1.724 6.474L2.667 29.333l6.998-1.698A13.28 13.28 0 0 0 16.004 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.004 2.667zm0 2.4c6.038 0 10.933 4.895 10.933 10.933 0 6.038-4.895 10.933-10.933 10.933a10.89 10.89 0 0 1-5.56-1.524l-.4-.24-4.153 1.008 1.04-4.053-.264-.42A10.893 10.893 0 0 1 5.07 16c0-6.038 4.895-10.933 10.933-10.933zm-3.6 5.28c-.2 0-.52.075-.79.37-.27.296-1.032 1.008-1.032 2.46s1.056 2.854 1.204 3.053c.147.2 2.068 3.16 5.012 4.43.7.304 1.247.484 1.673.62.702.224 1.342.192 1.848.117.563-.083 1.733-.708 1.978-1.392.246-.683.246-1.27.172-1.393-.073-.12-.27-.196-.565-.343-.296-.147-1.748-.862-2.02-.96-.27-.1-.466-.147-.663.148-.196.295-.76.96-.93 1.156-.172.196-.344.22-.64.074-.296-.148-1.248-.46-2.376-1.467-.878-.783-1.47-1.75-1.643-2.045-.172-.296-.018-.456.13-.603.132-.133.295-.345.444-.518.147-.172.196-.295.295-.492.1-.196.05-.37-.025-.517-.074-.147-.663-1.6-.908-2.19-.24-.575-.484-.497-.663-.507-.172-.009-.37-.011-.566-.011z"/>
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
