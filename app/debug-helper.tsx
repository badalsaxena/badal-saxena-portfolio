'use client';

import { useEffect } from 'react';

export function DebugHelper() {
  useEffect(() => {
    console.log('Debug Helper initialized');
    
    // Log Next.js router events
    if (typeof window !== 'undefined') {
      // Track route changes
      const originalPushState = window.history.pushState;
      window.history.pushState = function() {
        console.log('Route changed:', arguments[2]);
        return originalPushState.apply(this, arguments as any);
      };
      
      // Log all fetch requests
      const originalFetch = window.fetch;
      window.fetch = function() {
        console.log('Fetch request:', arguments[0]);
        return originalFetch.apply(this, arguments as any);
      };
      
      // Add performance monitoring
      if ('performance' in window && 'measure' in performance) {
        console.log('Performance API available');
        performance.mark('app-start');
        
        window.addEventListener('load', () => {
          performance.mark('app-loaded');
          performance.measure('app-load-time', 'app-start', 'app-loaded');
          const loadTime = performance.getEntriesByName('app-load-time')[0];
          console.log('App load time:', loadTime.duration.toFixed(2), 'ms');
        });
      }
    }
    
    return () => {
      console.log('Debug Helper unmounted');
      // Clean up overrides if needed
    };
  }, []);
  
  return null; // This component doesn't render anything
} 