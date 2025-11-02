import { Link } from "react-router-dom";

const cards = [
  { slug: "land", title: "Land" },
  { slug: "rentals", title: "House Renting" },
  { slug: "buy", title: "Buy a House" },
  { slug: "construction", title: "Construction" }
];

export default function AssetsHub() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link key={c.slug} to={`/assets/${c.slug}`} className="card hover:-translate-y-0.5">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-slate-600">View listings and request availability.</p>
          </Link>
        ))}
      </div>

      {/* Optional: simple map placeholder */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Explore on a Map (beta)</h2>
        <p className="text-sm text-slate-600">Pin lands and homes to help visitors explore.</p>
        <div className="mt-4 h-64 w-full rounded-xl overflow-hidden border border-slate-200">
          <iframe
            title="Map"
            width="100%"
            height="100%"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.6,4.0,8.8,7.2&layer=mapnik"
          />
        </div>
      </div>
    </section>
  );
}