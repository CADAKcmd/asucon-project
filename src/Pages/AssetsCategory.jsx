import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AssetCard from "../components/AssetCard";
import { categories } from "../data/assets";

const titles = {
  land: "Land",
  rentals: "House Renting",
  buy: "Buy a House",
  construction: "Construction"
};

export default function AssetsCategory() {
  const { category } = useParams();
  const list = categories[category] || [];
  const title = titles[category] || "Assets";

  const [search, setSearch] = useState("");
  const [loc, setLoc] = useState("All");
  const [sort, setSort] = useState("recommended");

  const locations = ["All", ...Array.from(new Set(list.map((i) => i.location)))];

  const filtered = useMemo(() => {
    const priceToNumber = (price) => {
      if (!price) return Number.POSITIVE_INFINITY;
      const s = String(price).toLowerCase();
      if (s.includes("request")) return Number.POSITIVE_INFINITY;
      const m = s.match(/([\d.,]+)\s*([mk])?/);
      if (!m) return Number.POSITIVE_INFINITY;
      let num = parseFloat(m[1].replace(/,/g, ""));
      const unit = m[2];
      if (unit === "m") num *= 1_000_000;
      if (unit === "k") num *= 1_000;
      return num;
    };

    let r = list.filter((i) =>
      (i.title + " " + i.location).toLowerCase().includes(search.toLowerCase())
    );
    if (loc !== "All") r = r.filter((i) => i.location === loc);

    if (sort === "price-asc") r = [...r].sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
    if (sort === "price-desc") r = [...r].sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));

    return r;
  }, [list, search, loc, sort]);

  return (
    <>
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
            <p className="mt-1 text-slate-600">Browse available items and request info.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:w-auto">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title or location"
              className="rounded-md border border-slate-300 p-2"
            />
            <select value={loc} onChange={(e) => setLoc(e.target.value)} className="rounded-md border border-slate-300 p-2">
              {locations.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-md border border-slate-300 p-2">
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <p className="text-slate-600">No items match. Try different filters or <Link to="/contact" className="text-brand underline">contact us</Link>.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <AssetCard key={item.id} item={item} topicLabel={title} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}