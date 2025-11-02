import { useEffect, useState } from "react";

const KEY = "asucon_wishlist";

const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
};

export default function useWishlist() {
  const [items, setItems] = useState(load);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("asucon:wishlist"));
  }, [items]);

  useEffect(() => {
    const sync = () => setItems(load());
    const onStorage = (e) => { if (e.key === KEY) sync(); };

    window.addEventListener("asucon:wishlist", sync);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("asucon:wishlist", sync);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const isSaved = (id) => items.some(x => x.id === id);
  const toggle = (item) => {
    setItems(prev => {
      const exists = prev.some(x => x.id === item.id);
      return exists ? prev.filter(x => x.id !== item.id) : [...prev, item];
    });
  };
  const clear = () => setItems([]);

  return { items, isSaved, toggle, clear, count: items.length };
}