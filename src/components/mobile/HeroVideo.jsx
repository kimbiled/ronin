import { useRef } from 'react';

export default function HeroVideo({ src, poster }) {
  const videoRef = useRef(null);

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

  return (
    <div className="flex flex-row max-w-[1200px] w-full justify-between relative bg-black rounded-[30px] overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-[420px] md:h-[520px] object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <button
        type="button"
        onClick={openFullscreenFromStart}
        className="absolute left-6 bottom-6 w-[62px] h-[62px] rounded-full bg-white/95 flex items-center justify-center
                   shadow-lg hover:scale-[1.03] active:scale-[0.98] transition"
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
