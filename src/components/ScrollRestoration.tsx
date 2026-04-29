import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollRestoration({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // small delay ensures DOM is rendered (important for mobile)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant", // or "smooth"
      });
    }, 0);
  }, [pathname]);

  return <>{children}</>;
}

export default ScrollRestoration;