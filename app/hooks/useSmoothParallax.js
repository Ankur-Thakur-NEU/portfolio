import { useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 1,
};

export function useSmoothParallax(multiplier = 1, options = {}) {
  const { stiffness = springConfig.stiffness, damping = springConfig.damping } = options;
  const reduceMotion = useReducedMotion();
  const springValue = useSpring(0, { stiffness, damping });
  const prevScrollY = useRef(0);

  useEffect(() => {
    let rafId = null;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        rafId = requestAnimationFrame(updateParallax);
      }
      isScrolling = true;
    };

    const updateParallax = () => {
      if (reduceMotion) {
        springValue.set(0);
        return;
      }

      const scrollDelta = window.scrollY - prevScrollY.current;
      const normalizedScroll = Math.max(-1, Math.min(1, scrollDelta / 100)) * multiplier;
      
      springValue.set(normalizedScroll);
      prevScrollY.current = window.scrollY;
      
      isScrolling = false;
      rafId = null;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [multiplier, reduceMotion, springValue]);

  return springValue;
} 