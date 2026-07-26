import { useEffect, useState } from 'react';

interface CarouselProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

// A small hand-rolled carousel — no external library needed for something
// this simple. Angular equivalent: a component with an `activeIndex` signal
// driving an `*ngFor` of slides with `[class.active]` bindings; here the
// re-render on `setIndex` does the same job.
function Carousel({ images, intervalMs = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + images.length) % images.length);
  };

  // Autoplay: advance on a timer unless the user is hovering. The effect
  // re-runs whenever `isPaused` changes, so hovering cleanly stops/restarts
  // the interval instead of leaving stale timers around (React's cleanup
  // function is the equivalent of an Angular `ngOnDestroy` unsubscribe).
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [isPaused, images.length, intervalMs]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="aspect-[940/788] w-full flex-shrink-0 object-contain"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous image"
        className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next image"
        className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 shadow hover:bg-white"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
