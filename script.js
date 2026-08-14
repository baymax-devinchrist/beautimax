(() => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const menuLabel = menuButton?.querySelector(".menu-label");

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
    if (menuLabel) menuLabel.textContent = "Menu";
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    if (mobileMenu) mobileMenu.hidden = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
    if (menuLabel) menuLabel.textContent = isOpen ? "Menu" : "Close";
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 16);
  }, { passive: true });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5%" });
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const viewport = carousel.querySelector(".carousel-viewport");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const dotsContainer = carousel.querySelector("[data-carousel-dots]");
    const count = carousel.querySelector("[data-slide-count]");
    const title = carousel.querySelector("[data-slide-title]");
    const titles = ["NEYRA", "AESTHA", "LUNA", "NEYRA VARIATION"];
    let index = 0;
    let timer;
    let touchStart = null;

    const dots = slides.map((_, dotIndex) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to slide ${dotIndex + 1}`);
      dot.addEventListener("click", () => goTo(dotIndex, true));
      dotsContainer?.appendChild(dot);
      return dot;
    });

    const render = () => {
      if (track) track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
      if (count) count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
      if (title) title.textContent = titles[index] || "BEAUTIMAX";
      slides.forEach((slide, slideIndex) => slide.setAttribute("aria-hidden", String(slideIndex !== index)));
    };

    const resetTimer = () => {
      window.clearInterval(timer);
      if (!reducedMotion) timer = window.setInterval(() => goTo(index + 1), 5000);
    };

    function goTo(nextIndex, interacted = false) {
      index = (nextIndex + slides.length) % slides.length;
      render();
      if (interacted) resetTimer();
    }

    prevButton?.addEventListener("click", () => goTo(index - 1, true));
    nextButton?.addEventListener("click", () => goTo(index + 1, true));
    viewport?.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") goTo(index - 1, true);
      if (event.key === "ArrowRight") goTo(index + 1, true);
    });
    viewport?.addEventListener("touchstart", (event) => { touchStart = event.touches[0]?.clientX ?? null; }, { passive: true });
    viewport?.addEventListener("touchend", (event) => {
      const touchEnd = event.changedTouches[0]?.clientX;
      if (touchStart === null || typeof touchEnd !== "number") return;
      const distance = touchEnd - touchStart;
      if (Math.abs(distance) > 40) goTo(index + (distance < 0 ? 1 : -1), true);
      touchStart = null;
    }, { passive: true });
    carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
    carousel.addEventListener("mouseleave", resetTimer);

    render();
    resetTimer();
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
