import { Link, useSearchParams } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [params] = useSearchParams();
  const preTopic = params.get("topic") || "General Inquiry";
  const preMessage = params.get("message") || "";

  const [state, handleSubmit] = useForm("mpwoklpj");

  // Build WhatsApp deep link using current prefilled values
  const whatsapp = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(
    `Hello Asucon. Topic: ${preTopic}. ${preMessage}`
  )}`;

  // Success UI from Formspree
  if (state.succeeded) {
    return (
      <section className="container mx-auto px-4 py-14">
        <div className="max-w-xl rounded-xl border border-slate-200 p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">Thank you!</h1>
          <p className="mt-2 text-slate-600">
            Your message was sent successfully. We’ll get back to you within 1–2 business days.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/" className="btn">Back to Home</Link>
            <Link to="/assets" className="btn-outline">Browse Assets</Link>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-outline">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container mx-auto px-4 py-14">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
        <p className="mt-2 text-slate-600">We’ll get back within 1–2 business days.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl">
          {/* Optional subject to show up nicely in Formspree emails */}
          <input type="hidden" name="_subject" value={`Asucon - ${preTopic}`} />
          {/* Simple honeypot for spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" className="w-full rounded-md border border-slate-300 p-3" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-slate-300 p-3" placeholder="you@example.com" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" className="w-full rounded-md border border-slate-300 p-3" placeholder="+234 ..." />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="topic">Topic</label>
            <select
              id="topic"
              name="topic"
              defaultValue={preTopic}
              className="w-full rounded-md border border-slate-300 p-3"
            >
              {["Farming", "Land", "Construction", "Renting", "Buy a House", "General Inquiry"].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              defaultValue={preMessage}
              className="w-full rounded-md border border-slate-300 p-3"
              placeholder="Tell us what you need help with..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="flex gap-3">
            <button className="btn" type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Request"}
            </button>
            <a className="btn-outline" href={whatsapp} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Our Location</h2>
          <div className="mt-3 h-64 w-full rounded-xl overflow-hidden border border-slate-200">
            <iframe
              title="Office Map"
              width="100%"
              height="100%"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.25,6.40,3.60,6.65&layer=mapnik&marker=6.52,3.45"
            />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button (replace number) */}
      <a href={whatsapp} target="_blank" rel="noreferrer"
         className="fixed bottom-5 right-5 btn rounded-full shadow-lg">
        WhatsApp
      </a>
    </>
  );
}