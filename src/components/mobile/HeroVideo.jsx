import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import serviceBg from '../../assets/desktop/serviceBg.webp';

export default function HeroVideo({ src, poster, animateOnScroll = false }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: 24, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 100%', 'start 42%'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.52, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [210, 0]);

  const openFullscreenFromStart = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      v.currentTime = 0;
      v.muted = false;
      v.volume = 1;

      if (v.requestFullscreen) {
        await v.requestFullscreen();
      } else if (v.webkitEnterFullscreen) {
        v.webkitEnterFullscreen();
      } else if (v.webkitRequestFullscreen) {
        v.webkitRequestFullscreen();
      }

      await v.play();
    } catch (e) {
      try {
        await v.play();
      } catch {}
    }
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || !buttonRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    pointerRef.current = {
      x: e.clientX - rect.left - 55,
      y: e.clientY - rect.top - rect.height + 55,
    };

    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      if (buttonRef.current) {
        buttonRef.current.style.transform = `translate3d(${pointerRef.current.x}px, ${pointerRef.current.y}px, 0)`;
      }
      frameRef.current = null;
    });
  };

  const resetButtonPosition = () => {
    if (!buttonRef.current) return;

    buttonRef.current.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <motion.div
      ref={containerRef}
      className={`flex flex-row w-[90%] max-w-[1200px] justify-between relative bg-[#080B1F] rounded-[30px] overflow-hidden mt-8 ${
        animateOnScroll ? 'md:mt-[40px]' : 'md:mt-24'
      }`}
      style={
        animateOnScroll
          ? {
              scale,
              y,
              transformOrigin: 'top center',
              willChange: 'transform',
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={resetButtonPosition}
    >
      <img
        src={serviceBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        ref={videoRef}
        className="relative z-10 w-full h-[210px] min-[430px]:h-[260px] sm:h-[340px] md:h-[520px] object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Play button that follows cursor */}
      <button
        ref={buttonRef}
        type="button"
        onClick={openFullscreenFromStart}
        className="absolute z-40 w-[62px] h-[62px] rounded-full bg-white/95 flex items-center justify-center
                   shadow-lg hover:scale-[1.03] active:scale-[0.98]"
        style={{
          left: '24px',
          bottom: '24px',
          transform: 'translate3d(0, 0, 0)',
          transition:
            'transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
        }}
        aria-label="Play video"
      >
        <span
          className="ml-[2px] block w-0 h-0"
          style={{
            borderTop: '16px solid transparent',
            borderBottom: '16px solid transparent',
            borderLeft: '25px solid #6B7280',
          }}
        />
      </button>
    </motion.div>
  );
}
