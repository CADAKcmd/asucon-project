import AssetCard from "../components/AssetCard";
import { farming } from "../data/assets";

export default function Farming() {
  return (
    <>
      <section className="relative bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-14">
          <h1 className="text-3xl md:text-4xl font-semibold">Sow today. Reap tomorrow.</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore farmlands and agricultural opportunities with trusted partners.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {farming.map(item => (
            <AssetCard key={item.id} item={item} topicLabel="Farming" />
          ))}
        </div>

        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-semibold">How Our Farming Works</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Select a farmland and submit an availability request.</li>
            <li>We verify land status, costs, and timelines.</li>
            <li>Partnership or lease agreements are prepared and signed.</li>
            <li>We support setup, monitoring, and harvest planning.</li>
          </ul>
        </div>
      </section>
    </>
  );
}