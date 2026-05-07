import { useRef, useState } from 'react';
import serviceBg from '../../assets/desktop/serviceBg.webp';

export default function HeroVideo({ src, poster }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

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
    const x = e.clientX - rect.left - 31; // 31 is half of button width (62px)
    const y = e.clientY - rect.top - 31;

    buttonRef.current.style.left = `${x}px`;
    buttonRef.current.style.top = `${y}px`;
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-row max-w-[1200px] w-full justify-between relative bg-[#080B1F] rounded-[30px] overflow-hidden mt-24"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={serviceBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        ref={videoRef}
        className="relative z-10 w-full h-[420px] md:h-[520px] object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Hover overlay with fade */}
      <div
        className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 flex items-center justify-center ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={serviceBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <span className="relative z-10 font-ppneue text-[34px] font-book leading-[44px] text-white">
          Watch our demo
        </span>
      </div>

      {/* Play button that follows cursor */}
      <button
        ref={buttonRef}
        type="button"
        onClick={openFullscreenFromStart}
        className="absolute z-40 w-[62px] h-[62px] rounded-full bg-white/95 flex items-center justify-center
                   shadow-lg hover:scale-[1.03] active:scale-[0.98]"
        style={{
          left: '24px',
          top: 'calc(100% - 86px)',
          transition:
            'left 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'left, top',
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
    </div>
  );
}
