import { useState, useEffect } from "react";
import { Download, X, FileText } from "lucide-react";
const catalogueAsset = { url: `${import.meta.env.BASE_URL}Akanta-Global-Pen-Catalogue.pdf` };
import CatalogueQR from "@/components/CatalogueQR";

interface Props {
  className?: string;
  label?: string;
}

const CatalogueButton = ({ className = "", label = "Download Catalogue" }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`catalogue-flash-btn relative inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm md:text-base transition-transform duration-300 hover:scale-105 ${className}`}
        aria-label="Preview Akanta Global Pen Catalogue PDF"
      >
        <FileText size={18} className="relative z-10" />
        <span className="relative z-10">{label}</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-card rounded-xl shadow-2xl border border-gold/20 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-primary text-primary-foreground">
              <div className="flex items-center gap-2 min-w-0">
                <FileText size={18} className="text-gold shrink-0" />
                <h3 className="font-semibold text-sm md:text-base truncate">
                  Akanta Global — Pen Catalogue
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <CatalogueQR size="sm" className="hidden md:flex" />
                <a
                  href={catalogueAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Akanta-Global-Pen-Catalogue.pdf"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-md text-white transition-transform hover:scale-105"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold)))" }}
                >
                  <Download size={14} /> Download
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close preview"
                  className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <iframe
              src={`${catalogueAsset.url}#view=FitH`}
              title="Akanta Global Pen Catalogue"
              className="flex-1 w-full bg-muted"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogueButton;
