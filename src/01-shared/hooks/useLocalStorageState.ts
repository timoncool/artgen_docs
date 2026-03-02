import type React from 'react';
import { useEffect, useState } from 'react';

type UseLocalStorageStateReturn<T> = readonly [T, React.Dispatch<React.SetStateAction<T>>, boolean];

export const useLocalStorageState = <T>(key: string, initialValue: T): UseLocalStorageStateReturn<T> => {
  const [state, setState] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        setState(JSON.parse(stored));
      }
    } catch {}

    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state, hydrated]);

  return [state, setState, hydrated] as const;
};
