import { useEffect } from 'react';

export default function useKey(key, cb) {
  function handleEvent(event) {
    if (event.code === key) cb();
  }
  useEffect(() => {
    document.addEventListener('keypress', handleEvent);
    // eslint-disable-next-line no-unused-vars
    return () => document.removeEventListener('keypress', handleEvent);
  }, []);
}
