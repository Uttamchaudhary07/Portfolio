import { useEffect, useRef } from 'react';
import { useMousePosition, useIsMobile } from '../hooks';

export const CustomCursor = () => {
  const mousePosition = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const scaleRef = useRef(1);

  useEffect(() => {
    if (!cursorRef.current || !cursorDotRef.current || isMobile) return;

    const updateCursor = () => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate3d(-50%, -50%, 0) scale(${scaleRef.current})`;
        cursorDotRef.current.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
    };

    updateCursor();
  }, [mousePosition, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-hover')
      ) {
        scaleRef.current = 1.6;
        if (cursorRef.current) {
          cursorRef.current.style.borderColor = '#ff6b35';
          cursorRef.current.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate3d(-50%, -50%, 0) scale(${scaleRef.current})`;
        }
      }
    };

    const handleMouseLeave = () => {
      scaleRef.current = 1;
      if (cursorRef.current) {
        cursorRef.current.style.borderColor = '#7c3aed';
        cursorRef.current.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate3d(-50%, -50%, 0) scale(${scaleRef.current})`;
      }
    };

    document.addEventListener('mouseover', handleMouseEnter, true);
    document.addEventListener('mouseout', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter, true);
      document.removeEventListener('mouseout', handleMouseLeave, true);
    };
  }, [isMobile, mousePosition]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-accent-purple rounded-full pointer-events-none transition-all duration-150 z-50 mix-blend-screen"
        style={{
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent-orange rounded-full pointer-events-none z-50"
      />
    </>
  );
};
