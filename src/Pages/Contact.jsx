import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [params] = useSearchParams();
  const [topic, setTopic] = useState(params.get("topic") || "General Inquiry");
  const [message, setMessage] = useState(params.get("message") || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const pTopic = params.get("topic");
    const pMsg = params.get("message");
    if (pTopic) setTopic(pTopic);
    if (pMsg) setMessage(pMsg);
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Asucon - ${topic}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
    window.location.href = `mailto:info@asucon.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsapp = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(
    `Hello Asucon. Topic: ${topic}. ${message}`
  )}`;

  return (
    <>
      <section className="container mx-auto px-4 py-14">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
        <p className="mt-2 text-slate-600">We’ll get back within 1–2 business days.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input value={name} onChange={e=>setName(e.target.value)} className="rounded-md border border-slate-300 p-3" placeholder="Name" required />
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="rounded-md border border-slate-300 p-3" placeholder="Email" required />
          </div>
          <input value={phone} onChange={e=>setPhone(e.target.value)} className="rounded-md border border-slate-300 p-3" placeholder="Phone" />
          <select value={topic} onChange={e=>setTopic(e.target.value)} className="rounded-md border border-slate-300 p-3">
            {["Farming","Land","Construction","Renting","Buy a House","General Inquiry"].map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={5} className="rounded-md border border-slate-300 p-3" placeholder="Your message..." />
          <div className="flex gap-3">
            <button className="btn" type="submit">Send Request</button>
            <a className="btn-outline" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
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

      <a href={whatsapp} target="_blank" rel="noreferrer"
         className="fixed bottom-5 right-5 btn rounded-full shadow-lg">
        WhatsApp
      </a>
    </>
  );
}