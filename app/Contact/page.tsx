"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Contact",
    lines: ["+91-9599177616", "+91-8696580932"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["sales@phytogenic.co.in", "ridhima@phytogenic.co.in"],
  },
  {
    icon: MapPin,
    title: "Corporate Office",
    lines: ["Landmark Cyber Park, 3rd floor, Sector 67, Gurugram, Haryana 122002"],
  },
  {
    icon: MapPin,
    title: "Manufacturing Unit",
    lines: ["Plot No. C-21, Khasara No. 85, Mauja-Dehtora, Nandanpuram, Agra 282007"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "sending", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully! We'll be in touch soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data?.error || "Failed to send message." });
      }
    } catch {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-forest-900 to-forest-950 py-20 text-center text-white">
        <div className="container-custom">
          <h1 className="font-display text-3xl font-semibold sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-sage-200">
            Reach out for product enquiries, samples or partnership
            opportunities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="card-surface p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-50">
                <Icon className="h-5 w-5 text-forest-600" />
              </div>
              <p className="mt-4 font-semibold text-forest-900">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-sage-600">
                {lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom max-w-2xl">
          <div className="card-surface p-8">
            <h2 className="section-heading">Write To Us</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-sage-200 px-4 py-3 text-sm outline-none ring-forest-400 transition focus:ring-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-sage-200 px-4 py-3 text-sm outline-none ring-forest-400 transition focus:ring-2"
              />
              <input
                type="tel"
                placeholder="Your Mobile No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-sage-200 px-4 py-3 text-sm outline-none ring-forest-400 transition focus:ring-2"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl border border-sage-200 px-4 py-3 text-sm outline-none ring-forest-400 transition focus:ring-2"
              />
              <button
                type="submit"
                disabled={status.type === "sending"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status.type === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
            {status.message && (
              <p
                className={`mt-4 text-sm font-medium ${
                  status.type === "success"
                    ? "text-forest-600"
                    : status.type === "error"
                    ? "text-red-600"
                    : "text-sage-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
