import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found (404)"
        description="The page you are looking for does not exist. Return to Akanta Global homepage to explore our ball pen export products and services."
        path={location.pathname}
        noIndex={true}
      />
      <div className="flex min-h-[70vh] items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-7xl md:text-9xl font-extrabold gold-gradient-text mb-4">404</h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">Page Not Found</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gold text-primary px-6 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              <Home size={18} />
              Go to Homepage
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-semibold text-foreground hover:border-gold/50 transition-colors"
            >
              <ArrowLeft size={18} />
              View Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
