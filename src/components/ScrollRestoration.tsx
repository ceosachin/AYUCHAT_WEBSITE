import { useEffect, useState } from "react";

function ScrollRestoration({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saved = sessionStorage.getItem("scroll-position");

    if (saved) {
      window.scrollTo(0, parseInt(saved));
    }

    const handleScroll = () => {
      sessionStorage.setItem("scroll-position", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    // ⏳ wait one frame before showing UI
    requestAnimationFrame(() => {
      setReady(true);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!ready) return null;

  return <>{children}</>;
}

export default ScrollRestoration;