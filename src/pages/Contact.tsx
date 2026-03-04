import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";

const infoCards = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Dnyan Sarita Society, Room No. 1, Ground Floor", "Opp SBI Bank, Near RTO Corner, Meri Mhasrul", "Nashik, Maharashtra 422003, India"],
  },
  { icon: Phone, title: "Phone", lines: ["+91 96733 98945"], href: "tel:+919673398945" },
  { icon: Mail, title: "Email", lines: ["akantaglobal@gmail.com"], href: "mailto:akantaglobal@gmail.com" },
  { icon: Clock, title: "Business Hours", lines: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const float = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to start a global partnership? Get in touch with our team today."
      />

      {/* Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 16px 32px -8px hsl(var(--gold) / 0.15)", transition: { duration: 0.3 } }}
                className="bg-card rounded-lg border border-border p-6 premium-shadow cursor-default"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={float.animate}
                    className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0"
                  >
                    <card.icon size={18} className="text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gold-dark text-sm mb-1">{card.title}</h3>
                    {card.lines.map((line, j) => (
                      <p key={j} className="text-xs text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-lg border border-border p-8 premium-shadow"
            >
              <h2 className="text-2xl font-bold mb-6">
                <span className="gold-gradient-text">Send Us a Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                    <input
                      type="text" required placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                    <input
                      type="email" required placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                    <input
                      type="tel" placeholder="+1 234 567 8900"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Company Name</label>
                    <input
                      type="text" placeholder="Your Company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea
                    required rows={5} placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none transition-all duration-300"
                  />
                </div>
                <motion.button
                  type="submit" disabled={sending}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gold text-white px-8 py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors disabled:opacity-50 flex items-center gap-2 shadow-md"
                >
                  {sending ? "Sending..." : "Send Message"} <Send size={16} />
                </motion.button>
              </form>
            </motion.div>

            {/* Map + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-lg overflow-hidden border border-border h-80 premium-shadow">
                <iframe
                  title="Akanta Global Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119960.3!2d73.7!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0b4a5f0b1b%3A0x736885e3b123a9c2!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-primary rounded-lg p-8 text-primary-foreground premium-shadow"
              >
                <h3 className="text-xl font-bold mb-2 gold-gradient-text">Let's Start a Global Partnership</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Ready to expand your business globally? Our team is here to help you navigate international trade with confidence.
                </p>
                <div className="flex items-center gap-2 text-gold text-sm mb-4">
                  <CheckCircle2 size={16} />
                  <span>Response within 24 hours</span>
                </div>
                <motion.a
                  href="https://wa.me/919673398945"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
