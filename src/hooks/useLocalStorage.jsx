import {useState, useEffect} from 'react';

export const useLocalStorage = (key, defaulte) => {
    const [state, setState] = useState(() => {
      return JSON.parse(localStorage.getItem(key)) ?? defaulte;
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState]
  }
