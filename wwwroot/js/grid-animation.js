window.scrollToAnimate = (elementSelector) => {
  const gridElement = document.querySelector(elementSelector);
  const dismissTiles = "dismissTiles";
  const summonTiles = "summonTiles";

  if (gridElement) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains(dismissTiles)) {
                    entry.target.classList.remove(dismissTiles);
                }
                entry.target.classList.add(summonTiles);
                // observer.unobserve(entry.target);
            } else if (!entry.isIntersecting & entry.target.classList.contains(summonTiles)) {
                entry.target.classList.remove(summonTiles);
                entry.target.classList.add(dismissTiles);
            }
        });
      },
      { threshold: 1 }
    );

    observer.observe(gridElement);
  }
};
