import { useRef, useEffect } from 'react'

type IntervalId = number | undefined

export const useInterval = (callback: () => void, delay: number) => {
  const intervalId = useRef<IntervalId>(undefined);
  const savedCallback = useRef(callback);
  
  useEffect(() => {
    savedCallback.current = callback;
  });
  
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      intervalId.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalId.current);
    }
  }, [delay]);
  
  return intervalId.current;
}
