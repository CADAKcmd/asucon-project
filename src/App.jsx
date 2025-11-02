import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Farming from "./Pages/Farming";
import AssetsLayout from "./Pages/AssetsLayout";
import AssetsHub from "./Pages/AssetsHub";
import AssetsCategory from "./Pages/AssetsCategory";
import Wishlist from "./Pages/Wishlist";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Splash from "./Pages/Splash";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideChrome = location.pathname === "/splash";

  // Show splash BEFORE any page on every hard refresh (initial mount only).
  // It remembers the original URL and sends you back there after the splash.
  const did = useRef(false);
  useEffect(() => {
    if (did.current) return;
    did.current = true;

    if (location.pathname !== "/splash") {
      const redirectTo = location.pathname + location.search + location.hash;
      sessionStorage.setItem("redirect_to", redirectTo);
      navigate("/splash", { replace: true });
    }
  }, []); // run once on mount

  return (
    <div className="min-h-screen flex flex-col">
      {!hideChrome && <NavBar />}
      <main className="flex-1">
        <Routes>
          <Route path="/splash" element={<Splash />} />

          <Route path="/" element={<Home />} />
          <Route path="/farming" element={<Farming />} />

          <Route path="/assets" element={<AssetsLayout />}>
            <Route index element={<AssetsHub />} />
            <Route path=":category" element={<AssetsCategory />} />
          </Route>

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideChrome && <Footer />}
    </div>
  );
}