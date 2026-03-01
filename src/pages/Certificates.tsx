import { FileText, Upload } from "lucide-react";

const certs = [
  { title: "Export License", desc: "Valid export license issued by the Government of India." },
  { title: "MSME Registration", desc: "Registered under the Micro, Small and Medium Enterprises Development Act." },
  { title: "Trade Compliance Certificates", desc: "Compliance certifications for international trade standards." },
];

const Certificates = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground mb-2">Certificates</h1>
        <div className="h-1 w-16 bg-accent rounded mb-10" />
        <p className="text-muted-foreground max-w-2xl mb-12">
          Akanta Global maintains all necessary certifications and compliance documents for international trade.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <div key={i} className="bg-background rounded-lg border border-border p-8 card-hover text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={28} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.desc}</p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Upload size={14} />
                <span>Document available upon request</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
