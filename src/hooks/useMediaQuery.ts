// src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

/**
 * Custom hook to determine if a media query matches the current viewport.
 *
 * @param query - The media query string.
 * @returns A boolean indicating if the media query matches.
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      // If rendering on the server, default to false
      setMatches(false);
      return;
    }

    const media = window.matchMedia(query);
    // Set the initial value
    setMatches(media.matches);

    // Define a listener callback
    const listener = () => setMatches(media.matches);

    // Add the event listener
    media.addEventListener('change', listener);

    // Cleanup the event listener on unmount
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
