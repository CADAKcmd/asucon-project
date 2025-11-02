import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-600">Let’s get you back on track.</p>
      <Link to="/" className="btn mt-6">Go Home</Link>
    </div>
  );
}