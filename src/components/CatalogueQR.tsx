import qrAsset from "@/assets/catalogue-qr.png.asset.json";

interface Props {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const sizes = {
  sm: { qr: "w-16 h-16", text: "text-[10px]", label: "Scan catalogue" },
  md: { qr: "w-24 h-24", text: "text-xs", label: "Scan to view catalogue" },
  lg: { qr: "w-36 h-36", text: "text-sm", label: "Scan to view catalogue" },
};

const CatalogueQR = ({
  label,
  size = "md",
  className = "",
  labelClassName = "",
  showLabel = true,
}: Props) => {
  const s = sizes[size];
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className={`${s.qr} p-2 bg-white rounded-lg shadow-md border border-gold/20`}>
        <img
          src={qrAsset.url}
          alt="QR code to open Akanta Global pen catalogue"
          className="w-full h-full object-contain"
        />
      </div>
      {showLabel && (
        <span className={`${s.text} font-medium text-center max-w-[160px] leading-tight ${labelClassName || "text-muted-foreground"}`}>
          {label || s.label}
        </span>
      )}
    </div>
  );
};

export default CatalogueQR;
