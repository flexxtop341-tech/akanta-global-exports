import { Download } from "lucide-react";
import catalogueAsset from "@/assets/pen-catalogue.pdf.asset.json";

interface Props {
  className?: string;
  label?: string;
}

const CatalogueButton = ({ className = "", label = "Download Catalogue" }: Props) => {
  return (
    <a
      href={catalogueAsset.url}
      target="_blank"
      rel="noopener noreferrer"
      download="Akanta-Global-Pen-Catalogue.pdf"
      className={`catalogue-flash-btn relative inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm md:text-base transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="Download Akanta Global Pen Catalogue PDF"
    >
      <Download size={18} className="relative z-10" />
      <span className="relative z-10">{label}</span>
    </a>
  );
};

export default CatalogueButton;
