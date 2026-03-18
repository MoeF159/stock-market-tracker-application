import { useState, useEffect } from 'react';

// Debounce hook used to delay updates until the user has paused typing.
// This prevents rapid-fire network requests (e.g., for live search) and improves UX.
export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}