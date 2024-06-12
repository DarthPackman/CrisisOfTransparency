document.addEventListener('scroll', () => {
  const layers = document.querySelectorAll('.parallax__layer');
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yOffset = window.scrollY * speed;
    layer.style.transform = `translateY(${yOffset}px)`;
  });
});

