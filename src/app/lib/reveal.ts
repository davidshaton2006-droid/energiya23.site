// Плавное появление блоков при прокрутке. Лёгкая реализация: IntersectionObserver + CSS-анимация (transform/opacity).
// - Элементы, уже видимые на первом экране, не трогаем: без мигания и без влияния на LCP.
// - Классы вешает только JS: если скрипт не загрузился, весь контент остаётся видимым (важно для SEO).
// - При настройке системы «уменьшить движение» анимации не запускаются.

const MAX_STAGGER = 4;

export function initReveal(): () => void {
  if (typeof window === "undefined") return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  if (!("IntersectionObserver" in window)) return () => {};

  const items: { el: HTMLElement; delay: number }[] = [];
  const add = (el: Element, index: number) => items.push({ el: el as HTMLElement, delay: Math.min(index, MAX_STAGGER) * 90 });

  document.querySelectorAll<HTMLElement>("main > section").forEach((section) => {
    if (section.id === "hero") return;
    const wrap = Array.from(section.children).find((c) => c.tagName !== "STYLE" && c.tagName !== "SCRIPT");
    if (!wrap) return;
    Array.from(wrap.children).forEach((child) => {
      const display = getComputedStyle(child).display;
      if (display === "grid" && child.children.length > 1) {
        Array.from(child.children).forEach((card, i) => add(card, i));
      } else {
        add(child, 0);
      }
    });
  });

  let observerAlive = false;
  const observer = new IntersectionObserver(
    (entries) => {
      observerAlive = true;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        el.classList.add("rv-in");
        // После анимации возвращаем элемент в обычное состояние, чтобы не мешать hover-эффектам карточек
        el.addEventListener(
          "animationend",
          () => {
            el.classList.remove("rv", "rv-in");
            el.style.removeProperty("--rv-d");
          },
          { once: true },
        );
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
  );

  const vh = window.innerHeight;
  items.forEach(({ el, delay }) => {
    if (el.getBoundingClientRect().top < vh * 0.9) return; // уже на экране
    el.classList.add("rv");
    el.style.setProperty("--rv-d", `${delay}ms`);
    observer.observe(el);
  });

  // Предохранитель: если наблюдатель не отвечает (редкие встроенные браузеры), показываем всё как есть
  const fallback = window.setTimeout(() => {
    if (observerAlive || document.visibilityState !== "visible") return;
    observer.disconnect();
    document.querySelectorAll<HTMLElement>(".rv").forEach((el) => {
      el.classList.remove("rv", "rv-in");
      el.style.removeProperty("--rv-d");
    });
  }, 3500);

  return () => {
    window.clearTimeout(fallback);
    observer.disconnect();
  };
}
