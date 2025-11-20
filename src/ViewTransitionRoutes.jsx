import React from 'react';
import { Routes, useLocation } from 'react-router-dom';

export default function ViewTransitionRoutes({ children }) {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = React.useState(location);
  const rootRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (location.key === currentLocation.key) return;

    const doUpdate = () => setCurrentLocation(location);

    if (document.startViewTransition) {
      // Use native View Transition API when available
      document.startViewTransition(doUpdate);
      return;
    }

    // Fallback: animate opacity via CSS classes
    const el = rootRef.current;
    if (!el) {
      doUpdate();
      return;
    }

    // Prepare fade-out
    el.classList.remove('fade-in');
    el.classList.add('fade-out');

    const onTransitionEnd = () => {
      el.removeEventListener('transitionend', onTransitionEnd);
      // swap content
      doUpdate();
      // after DOM updated, fade in
      requestAnimationFrame(() => {
        el.classList.remove('fade-out');
        el.classList.add('fade-in');
      });
    };

    el.addEventListener('transitionend', onTransitionEnd);
  }, [location, currentLocation]);

  return (
    <div ref={rootRef} className="view-transition-root fade-in" style={{width: '100%'}}>
      <Routes location={currentLocation}>{children}</Routes>
    </div>
  );
}
