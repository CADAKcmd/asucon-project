import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const DURATION = 4000; // ms

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const target = sessionStorage.getItem("redirect_to") || "/";
    const t = setTimeout(() => {
      sessionStorage.removeItem("redirect_to");
      navigate(target, { replace: true });
    }, DURATION);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="relative h-screen w-screen bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Soft pulsing rings (decorative) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      >
        <motion.span
          className="absolute h-44 w-44 rounded-full bg-brand/10"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute h-64 w-64 rounded-full bg-accent/10"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Center logo */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.img
          src={logo}
          alt="Asucon logo"
          draggable="false"
          className="h-20 md:h-28 w-auto drop-shadow-xl select-none"
          initial={{ opacity: 0, scale: 0.9, rotate: 0, y: 8 }}
          animate={{ opacity: 1, scale: [0.9, 1.08, 1], rotate: [0, 2, -1, 0], y: 0 }}
          transition={{ duration: 1.2, times: [0, 0.6, 1], ease: "easeOut" }}
        />

        {/* Progress bar (no text) */}
        <div className="mt-8 w-64 h-1.5 rounded-full bg-slate-200 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: DURATION / 1000, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}