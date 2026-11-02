import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = {
  id: string;
  caption: string;
  alt: string;
  w: number;
  h: number;
  wSm: number;
  kind?: "image" | "beforeAfter";
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

const css = `
.hs { position: absolute; inset: 0; overflow: hidden; background: #E9ECEF; touch-action: pan-y; user-select: none; }
.hs:focus-visible { outline: 3px solid #6DBE45; outline-offset: -3px; }
.hs-slide { position: absolute; inset: 0; opacity: 0; transition: opacity .8s ease; pointer-events: none; }
.hs-slide.on { opacity: 1; z-index: 1; }
.hs-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hs-comparison { display: grid; grid-template-columns: 1fr 1fr; width: 100%; height: 100%; gap: 3px; background: #fff; }
.hs-comparison-part { position: relative; min-width: 0; overflow: hidden; background: #E9ECEF; }
.hs-comparison-part img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hs-ba-label { position: absolute; top: 14px; left: 50%; z-index: 2; transform: translateX(-50%); padding: 7px 14px; border-radius: 10px;
  color: #fff; font: 800 14px/1.3 Montserrat, sans-serif; letter-spacing: .06em; text-transform: uppercase; box-shadow: 0 2px 10px rgba(0,0,0,.22); }
.hs-ba-label.before { background: #E87722; }
.hs-ba-label.after { background: #6DBE45; }
.hs-comparison-part:last-child .hs-ba-label { left: 18px; transform: none; }
.hs-status { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.hs-cap { position: absolute; top: 14px; left: 14px; z-index: 3; max-width: calc(100% - 150px); padding: 7px 14px; border-radius: 10px;
  background: rgba(20,20,20,.62); color: #fff; font: 700 14px/1.3 Montserrat, sans-serif; backdrop-filter: blur(4px); }
.hs-btn { position: absolute; top: 50%; z-index: 3; width: 44px; height: 44px; margin-top: -22px; border: 0; border-radius: 50%; cursor: pointer;
  background: rgba(255,255,255,.88); color: #222; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,.25); transition: background .2s, transform .2s; }
.hs-btn:hover { background: #fff; transform: scale(1.06); }
.hs-btn:active { transform: scale(.95); }
.hs-btn.prev { left: 12px; } .hs-btn.next { right: 12px; }
.hs-btn svg { width: 22px; height: 22px; }
.hs-foot { position: absolute; left: 0; right: 0; bottom: 0; z-index: 3; display: flex; justify-content: flex-end; align-items: center; gap: 8px; padding: 0 12px 12px; }
.hs-play { width: 30px; height: 30px; border: 0; border-radius: 50%; cursor: pointer; background: rgba(20,20,20,.62); color: #fff; display: flex; align-items: center; justify-content: center; }
.hs-play svg { width: 14px; height: 14px; }
@media (max-width: 768px) {
  .hs-btn { width: 36px; height: 36px; margin-top: -18px; } .hs-btn svg { width: 18px; height: 18px; }
  .hs-btn.prev { left: 8px; } .hs-btn.next { right: 8px; }
  .hs-cap { top: 10px; left: 10px; font-size: 12px; padding: 5px 10px; max-width: calc(100% - 20px); }
  .hs-ba-label { top: 10px; font-size: 11px; padding: 5px 10px; }
  .hs-comparison-part:last-child .hs-ba-label { left: 10px; }
  .hs-comparison { gap: 2px; }
  .hs-foot { padding: 0 8px 10px; }
}
@media (prefers-reduced-motion: reduce) { .hs-slide { transition: none; } }
`;

const Arrow = ({ dir }: { dir: "prev" | "next" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === "prev" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
  </svg>
);

/**
 * Горизонтальная галерея первого экрана: автопереключение, стрелки, свайп, клавиатура.
 * Для скорости в DOM держим только текущий, предыдущий и следующий кадры; остальные подгружаются по мере показа.
 */
export function HeroSlider({ slides, interval = 5000 }: { slides: Slide[]; interval?: number }) {
  const n = slides.length;
  const [active, setActive] = useState(0);
  const [hoverPause, setHoverPause] = useState(false);
  const [userPause, setUserPause] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  const startX = useRef<number | null>(null);

  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);
  const paused = hoverPause || userPause || hidden || reduced;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Автопереключение: новый таймер на каждый кадр, при паузе таймера нет
  useEffect(() => {
    if (paused || n < 2) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % n), interval);
    return () => window.clearTimeout(t);
  }, [active, paused, n, interval]);

  const near = (i: number) => i === active || i === (active + 1) % n || i === (active - 1 + n) % n;

  return (
    <div
      className="hs"
      role="region"
      aria-roledescription="карусель"
      aria-label="Фотографии производства и объектов"
      tabIndex={0}
      onMouseEnter={() => setHoverPause(true)}
      onMouseLeave={() => setHoverPause(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        if (e.key === "ArrowRight") go(active + 1);
      }}
      onPointerDown={(e) => { startX.current = e.clientX; }}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
      }}
      onPointerCancel={() => { startX.current = null; }}
    >
      <style>{css}</style>
      {slides.map((s, i) =>
        near(i) ? (
          <div key={s.id} className={i === active ? "hs-slide on" : "hs-slide"} aria-hidden={i !== active}>
            {s.kind === "beforeAfter" ? (
              <div className="hs-comparison">
                <div className="hs-comparison-part">
                  <img
                    src={s.beforeSrc}
                    width={s.w}
                    height={s.h}
                    alt={s.beforeAlt}
                    decoding="async"
                    {...(i === 0 ? { fetchpriority: "high" } : {})}
                  />
                  <span className="hs-ba-label before">До</span>
                </div>
                <div className="hs-comparison-part">
                  <img
                    src={s.afterSrc}
                    width={s.w}
                    height={s.h}
                    alt={s.afterAlt}
                    decoding="async"
                    {...(i === 0 ? { fetchpriority: "high" } : {})}
                  />
                  <span className="hs-ba-label after">После</span>
                </div>
              </div>
            ) : (
              <img
                src={`/img/slides/${s.id}.webp`}
                srcSet={`/img/slides/${s.id}-sm.webp ${s.wSm}w, /img/slides/${s.id}.webp ${s.w}w`}
                sizes="(max-width: 700px) 100vw, 640px"
                width={s.w}
                height={s.h}
                alt={s.alt}
                decoding="async"
                {...(i === 0 ? { fetchpriority: "high" } : {})}
              />
            )}
          </div>
        ) : null,
      )}

      {slides[active].kind === "beforeAfter" ? (
        <div className="hs-status" aria-live="polite">{slides[active].caption}</div>
      ) : (
        <div className="hs-cap" aria-live="polite">{slides[active].caption}</div>
      )}

      {n > 1 && (
        <>
          <button type="button" className="hs-btn prev" aria-label="Предыдущее фото" onClick={() => go(active - 1)}><Arrow dir="prev" /></button>
          <button type="button" className="hs-btn next" aria-label="Следующее фото" onClick={() => go(active + 1)}><Arrow dir="next" /></button>
          <div className="hs-foot">
            <button type="button" className="hs-play" aria-label={userPause ? "Включить автопереключение" : "Остановить автопереключение"} onClick={() => setUserPause((p) => !p)}>
              {userPause ? (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6,4 20,12 6,20" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="4.5" height="16" rx="1" /><rect x="14.5" y="4" width="4.5" height="16" rx="1" /></svg>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
