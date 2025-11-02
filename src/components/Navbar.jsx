// src/components/NavBar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";
import logo from "../assets/logo.png"; // <-- your logo file

const navLink = ({ isActive }) =>
  `inline-flex items-center h-10 transition-colors hover:text-brand ${
    isActive ? "text-brand font-semibold" : "text-slate-700"
  }`;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { count } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Asucon logo" className="h-8 w-auto" />
          <span className="hidden sm:block font-display text-lg">Asucon Properties & Farms</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLink} end>Home</NavLink>
          <NavLink to="/farming" className={navLink}>Farming</NavLink>
          <NavLink to="/assets" className={navLink}>Assets</NavLink>
          <NavLink to="/wishlist" className={navLink}>
            Wishlist
            {count > 0 && (
              <span className="ml-2 inline-flex min-w-[1.25rem] h-5 items-center justify-center rounded-full bg-brand text-white text-xs px-1">
                {count}
              </span>
            )}
          </NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-label="Menu" aria-expanded={open}
                  className="p-2 rounded-md border border-slate-200">☰</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/" end onClick={() => setOpen(false)} className="block">Home</NavLink>
            <NavLink to="/farming" onClick={() => setOpen(false)} className="block">Farming</NavLink>
            <NavLink to="/assets" onClick={() => setOpen(false)} className="block">Assets</NavLink>
            <NavLink to="/wishlist" onClick={() => setOpen(false)} className="block">
              Wishlist {count > 0 ? `(${count})` : ""}
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="block">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}