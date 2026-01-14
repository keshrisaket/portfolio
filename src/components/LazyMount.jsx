import { useEffect, useRef, useState } from "react";

/**
 * Mounts children only after the wrapper enters the viewport.
 * Helps avoid heavy work (3D canvases) during initial page load.
 */
export default function LazyMount({
  children,
  rootMargin = "200px",
  className,
  placeholder = null,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder}
    </div>
  );
}


