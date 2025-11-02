import { Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
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
      <Footer />
    </div>
  );
}