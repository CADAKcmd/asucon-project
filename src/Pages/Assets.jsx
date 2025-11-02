import { Link, useParams } from "react-router-dom";
import AssetCard from "../components/AssetCard";
import { categories } from "../data/assets";

const meta = {
  land: { title: "Land", topic: "Land" },
  rentals: { title: "House Renting", topic: "Renting" },
  buy: { title: "Buy a House", topic: "Buy a House" },
  construction: { title: "Construction", topic: "Construction" }
};

export default function Assets() {
  const { category } = useParams();

  if (!category) {
    // Hub page
    return (
      <>
        <section className="container mx-auto px-4 py-14">
          <h1 className="text-3xl md:text-4xl font-semibold">Assets & Services</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Browse land, homes, rentals, and construction services.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.keys(meta).map((key) => (
              <Link key={key} to={`/assets/${key}`} className="card hover:-translate-y-0.5">
                <h3 className="font-semibold">{meta[key].title}</h3>
                <p className="mt-1 text-sm text-slate-600">View listings and request availability.</p>
              </Link>
            ))}
          </div>

          {/* Optional: Interactive Map placeholder */}
          <div className="mt-14">
            <h2 className="text-2xl font-semibold">Explore on a Map (beta)</h2>
            <p className="text-sm text-slate-600">Pin lands and homes to help visitors explore.</p>
            <div className="mt-4 h-64 w-full rounded-xl overflow-hidden border border-slate-200">
              {/* Replace with react-leaflet later */}
              <iframe
                title="Map"
                width="100%"
                height="100%"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.6,4.0,8.8,7.2&layer=mapnik"
              />
            </div>
          </div>
        </section>
      </>
    );
  }

  const cfg = meta[category];
  const list = categories[category] || [];

  return (
    <>
      <section className="relative bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-14">
          <h1 className="text-3xl md:text-4xl font-semibold">{cfg?.title || "Assets"}</h1>
          <p className="mt-2 text-slate-600">Browse available items and request info.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        {list.length === 0 ? (
          <p className="text-slate-600">No items yet. Please check back soon or <Link className="text-brand underline" to="/contact">contact us</Link>.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map(item => (
              <AssetCard key={item.id} item={item} topicLabel={cfg.topic} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}