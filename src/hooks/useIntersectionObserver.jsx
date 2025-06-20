import { useEffect } from "react";

export const useIntersectionObserver = (ref, callback, options = {}) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(element); // Run once only
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, callback, options]);
};
