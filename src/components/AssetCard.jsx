import { Link } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";

export default function AssetCard({ item, topicLabel }) {
  const { isSaved, toggle } = useWishlist();
  const saved = isSaved(item.id);

  const message = `I'm interested in ${item.title} at ${item.location}. Please share availability and details.`;
  const contactLink = `/contact?topic=${encodeURIComponent(topicLabel)}&message=${encodeURIComponent(message)}`;

  return (
    <div className="card flex flex-col">
      <div className="relative">
        <img src={item.image} alt={item.title} className="h-44 w-full object-cover rounded-lg" />
        <button
          onClick={() => toggle(item)}
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs ${saved ? "bg-brand text-white" : "bg-white/90 text-slate-700 border"}`}
          aria-label="Save"
        >
          {saved ? "Saved ♥" : "Save ♡"}
        </button>
      </div>
      <div className="mt-3 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{item.title}</h3>
          {item.price && <span className="pill">{item.price}</span>}
        </div>
        <p className="mt-1 text-sm text-slate-600">{item.location}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <Link to={contactLink} className="btn">Ask for Availability</Link>
        {item.type && <span className="pill">{item.type}</span>}
      </div>
    </div>
  );
}