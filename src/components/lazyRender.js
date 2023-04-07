import React, { createRef, useLayoutEffect, useMemo, useState } from "react";

const LazyRender = ({ children, threshold, rootMargin, onVisible }) => {
  const ref = useMemo(() => createRef(), []);

  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    // shouldn't happen but makes TS happy
    if (!ref.current) {
      return;
    }
  
    const options = {
      rootMargin: rootMargin ?? "0px",
      threshold: threshold ?? 1,
    };
  
    const observer = 
      new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
  
            if (onVisible) {
              onVisible();
            }
          }
        });
      }, options);
  
    observer.observe(ref.current);
  
    // clean up when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, ref, onVisible]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};
export default LazyRender;
