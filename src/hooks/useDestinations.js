import { useEffect, useState } from 'react';
import { API_URL, FALLBACK_DESTINATIONS } from '../utils/constants';
import { extractDestinationList, normaliseDestination } from '../utils/helpers';


function useDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);

  const fetchDestinations = async (signal) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, { signal });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const rawList = extractDestinationList(data);

      if (rawList.length === 0) {
        // API returned empty — use fallback silently
        setDestinations(FALLBACK_DESTINATIONS);
      } else {
        setDestinations(rawList.map(normaliseDestination));
      }
    } catch (err) {
      if (err.name === 'AbortError') return; // component unmounted — ignore

      // Network / CORS / parsing error — fall back gracefully
      console.warn('[useDestinations] Falling back to local data:', err.message);
      setDestinations(FALLBACK_DESTINATIONS);
      setError(null); // don't surface error to user; fallback is sufficient
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchDestinations(controller.signal);
    return () => controller.abort();
  }, []);

  const retry = () => fetchDestinations(new AbortController().signal);

  return { destinations, loading, error, retry };
}

export default useDestinations;
