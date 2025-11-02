import { Link } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";
import AssetCard from "../components/AssetCard";

const topicMap = { Rent: "Renting", Buy: "Buy a House" };

export default function Wishlist() {
  const { items, clear } = useWishlist();

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Wishlist</h1>
          <p className="mt-2 text-slate-600">Your saved lands, rentals, homes, and services.</p>
        </div>
        {items.length > 0 && (
          <button
            onClick={() => { if (confirm("Clear all saved items?")) clear(); }}
            className="btn-outline"
          >
            Clear all
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="mt-10 rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-700">No saved items yet.</p>
          <Link to="/assets" className="btn mt-4">Browse Assets</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <AssetCard
              key={item.id}
              item={item}
              topicLabel={topicMap[item.type] || item.type || "General Inquiry"}
            />
          ))}
        </div>
      )}
    </section>
  );
}