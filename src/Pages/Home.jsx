import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.3)), url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-36 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold max-w-3xl"
          >
            From the farm to the future — building homes, dreams, and opportunities.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}
            className="mt-4 text-lg max-w-2xl text-white/90"
          >
            Building Dreams from Soil to Skyline.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }} className="mt-8 flex gap-3">
            <a href="#what-we-do" className="btn">Explore Our Assets</a>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold">The Journey of One Man’s Vision</h2>
            <p className="mt-4 text-slate-700">
              Asucon Properties & Farms Nig. Ltd. is a private company limited by shares. It is a family‑oriented company founded by Alhaji (Chief) Sawaliu Adetunji Asubiaro in the mid‑1960s.
            </p>
            <p className="mt-3 text-slate-700">
              He began his career as a building materials merchant and later became a civil contractor with the Lagos State Government and the Lagos State Development and Property Corporation (LSDPC).
            </p>
            <p className="mt-3 text-slate-700">
              In his later years, he expanded into farming, uniting the interests of his 21 children. The family company was his vision—meant to build a lasting legacy.
            </p>
            <p className="mt-3 font-medium text-brand">
              We pray to uphold this legacy in our generation, the next and beyond. Ameen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="rounded-lg h-40 md:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="Building materials" />
            <img className="rounded-lg h-40 md:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=1200&auto=format&fit=crop" alt="Farming" />
            <img className="rounded-lg h-40 md:h-56 w-full object-cover col-span-2" src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1600&auto=format&fit=crop" alt="Modern homes" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="border-t border-slate-200 bg-slate-50/40">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">What We Do</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard to="/farming" emoji="🌾" title="Farming" desc="Invest in productive farmlands."/>
            <ServiceCard to="/assets/construction" emoji="🏗️" title="Construction" desc="We build modern, durable homes."/>
            <ServiceCard to="/assets/land" emoji="🌍" title="Land" desc="Buy or lease verified plots."/>
            <ServiceCard to="/assets/rentals" emoji="🏡" title="Rentals" desc="Find your dream home."/>
          </div>
        </div>
      </section>

      {/* Testimonials / Motivation */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold">Voices of Progress</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "Every foundation begins with a single brick.",
            "From seeds to skylines—growth is our language.",
            "Legacy is built through work, faith, and family."
          ].map((q, i) => (
            <blockquote key={i} className="card text-slate-700">“{q}”</blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="container mx-auto px-4 py-14 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold">Start your journey today.</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/farming" className="btn bg-white text-brand hover:bg-slate-100">Explore Farming</Link>
            <Link to="/assets" className="btn-outline bg-transparent border-white text-white hover:bg-white/10">View Assets</Link>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ to, emoji, title, desc }) {
  return (
    <Link to={to} className="card hover:-translate-y-0.5">
      <div className="text-2xl">{emoji}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </Link>
  );
}