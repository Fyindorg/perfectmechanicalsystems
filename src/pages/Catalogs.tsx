import { FileText, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Catalog {
  file: string;
  title: string;
}

const catalogs: Catalog[] = [
  { file: "Hitachi", title: "Hitachi" },
  { file: "JTPR", title: "JTPR" },
  { file: "National_Grooved_Fittings", title: "National Grooved Fittings" },
  { file: "Nibco_Grooved_Fittings", title: "Nibco Grooved Fittings" },
  { file: "Pegler", title: "Pegler" },
  { file: "Potter", title: "Potter" },
  { file: "Bothwell", title: "Bothwell" },
  { file: "Hels_Axial_Type_Expansion_Joints", title: "Hels Axial Type Expansion Joints" },
  { file: "Hels_Floating_Flanged_Expansion_Joints", title: "Hels Floating Flanged Expansion Joints" },
  { file: "Shurjoint_File_1", title: "Shurjoint File 1" },
  { file: "Shurjoint_File_2", title: "Shurjoint File 2" },
  { file: "Shurjoint_File_3", title: "Shurjoint File 3" },
  { file: "Shurjoint_File_4", title: "Shurjoint File 4" },
  { file: "Shurjoint_File_5", title: "Shurjoint File 5" },
  { file: "Shurjoint_File_6", title: "Shurjoint File 6" },
  { file: "Shurjoint_File_7", title: "Shurjoint File 7" },
  { file: "Shurjoint_File_8", title: "Shurjoint File 8" },
  { file: "Shurjoint_File_9", title: "Shurjoint File 9" },
  { file: "Shurjoint_File_10", title: "Shurjoint File 10" },
];

const CatalogsPage = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-24">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
            <span className="w-6 h-px bg-white/60" />
            {t("catalogs.eyebrow")}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-5">
            {t("catalogs.title")}
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t("catalogs.desc")}
          </p>
        </div>
      </section>

      {/* Catalog grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {catalogs.map((cat) => {
              const pdfUrl = `/catalogs/${cat.file}.pdf`;
              const thumbUrl = `/catalogs/thumbs/${cat.file}.jpg`;
              return (
                <a
                  key={cat.file}
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card rounded-2xl overflow-hidden border border-border soft-shadow hover:elevated-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  aria-label={`Open ${cat.title} catalog PDF`}
                >
                  {/* Thumbnail */}
                  <div className="relative bg-muted aspect-[3/4] overflow-hidden border-b border-border">
                    <div className="img-hover-zoom w-full h-full bg-white">
                      <img
                        src={thumbUrl}
                        alt={`${cat.title} catalog cover`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      <FileText size={11} /> PDF
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-5 flex items-start justify-between gap-3 flex-1">
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-foreground text-base leading-tight mb-1 group-hover:text-primary transition-colors truncate">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{cat.file}.pdf</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className="w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center transition-colors"
                        title={t("catalogs.view")}
                      >
                        <ExternalLink size={15} />
                      </span>
                      <a
                        href={pdfUrl}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-white text-foreground flex items-center justify-center transition-colors"
                        title={t("catalogs.download")}
                        aria-label={`Download ${cat.title}`}
                      >
                        <Download size={15} />
                      </a>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogsPage;
