
document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const layers = section.querySelectorAll('.parallax__layer');
    const top = window.pageYOffset - section.offsetTop;

    layers.forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const yPos = -(top * speed);
      layer.style.transform = `translateY(${yPos}px)`;
    });
  });
});
