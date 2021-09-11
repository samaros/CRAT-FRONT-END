import { useEffect, useState } from 'react';

const useResize = (fn: Function = () => {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    function updateScroll() {
      setScrollY(+window.scrollY);
      setScrollX(+window.scrollX);
      fn(scrollY, scrollX);
    }
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, [fn]);

  return {
    scrollY,
    scrollX,
  };
};

export default useResize;
