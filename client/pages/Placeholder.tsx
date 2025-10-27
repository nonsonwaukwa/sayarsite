import { Link, useLocation } from "react-router-dom";

export default function Placeholder() {
  const { pathname } = useLocation();
  const label = pathname.replace("/", "").replace(/-/g, " ") || "Home";
  return (
    <section className="py-24">
      <div className="container text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </h1>
        <p className="mt-3 text-muted-foreground">
          This page is a placeholder. Tell me what you want here and I’ll design it to match the brand.
        </p>
        <div className="mt-8">
          <Link to="/" className="text-primary hover:underline">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
