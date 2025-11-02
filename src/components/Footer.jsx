import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-lg">Asucon Properties & Farms Nig. Ltd</div>
          <p className="mt-2 text-sm text-slate-600">Building Dreams from Soil to Skyline.</p>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Asucon. All rights reserved.</p>
        </div>
        <div>
          <div className="font-semibold">Explore</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/farming" className="hover:text-brand">Farming</Link></li>
            <li><Link to="/assets" className="hover:text-brand">Assets</Link></li>
            <li><Link to="/wishlist" className="hover:text-brand">Wishlist</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Newsletter</div>
          <form className="mt-2 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="w-full rounded-md border border-slate-300 p-2"/>
            <button className="btn" type="button">Join</button>
          </form>
        </div>
      </div>
    </footer>
  );
}