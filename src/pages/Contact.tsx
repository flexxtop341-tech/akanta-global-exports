import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground mb-2">Contact Us</h1>
        <div className="h-1 w-16 bg-accent rounded mb-10" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <a href="mailto:akantaglobal@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-sm">akantaglobal@gmail.com</span>
              </a>
              <a href="tel:+919673398945" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <span className="text-sm">+91 96733 98945</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <span className="text-sm">
                  Dnyan Sarita Society, Room No. 1, Ground Floor<br />
                  Opp SBI Bank, Near RTO Corner<br />
                  Meri Mhasrul, Nashik – 422003<br />
                  Maharashtra, India
                </span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="Akanta Global Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.7!2d73.78!3d20.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzM2LjAiTiA3M8KwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
