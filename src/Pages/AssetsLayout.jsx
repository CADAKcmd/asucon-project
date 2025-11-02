import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

const categoriesNav = [
  { slug: "land", label: "Land" },
  { slug: "rentals", label: "House Renting" },
  { slug: "buy", label: "Buy a House" },
  { slug: "construction", label: "Construction" }
];

export default function AssetsLayout() {
  const navigate = useNavigate();
  const { category } = useParams();
  const value = category || "";

  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Assets & Services</h1>
          <p className="mt-2 text-slate-600">Browse land, homes, rentals, and construction services.</p>

          {/* Desktop tabs */}
          <div className="mt-6 hidden md:flex items-center gap-4">
            <NavLink end to="/assets" className={({ isActive }) =>
              `px-3 py-2 rounded-md ${isActive ? "bg-brand text-white" : "text-slate-700 hover:bg-slate-100"}`
            }>
              All
            </NavLink>
            {categoriesNav.map((c) => (
              <NavLink key={c.slug} to={`/assets/${c.slug}`} className={({ isActive }) =>
                `px-3 py-2 rounded-md ${isActive ? "bg-brand text-white" : "text-slate-700 hover:bg-slate-100"}`
              }>
                {c.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile dropdown */}
          <div className="mt-4 md:hidden">
            <select
              value={value}
              onChange={(e) => {
                const v = e.target.value;
                navigate(v ? `/assets/${v}` : "/assets");
              }}
              className="w-full rounded-md border border-slate-300 p-3"
            >
              <option value="">All</option>
              {categoriesNav.map((c) => (
                <option key={c.slug} value={c.slug}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}