import { useState } from 'react';
import { ProgressState } from '../types';

export function useLocalStorage(key: string, initialValue: ProgressState): [ProgressState, (value: ProgressState) => void] {
  const [storedValue, setStoredValue] = useState<ProgressState>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value: ProgressState) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}
