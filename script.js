// Scroll horizontal dengan mouse wheel
document.querySelector(".sections").addEventListener("wheel", function (e) {
    e.preventDefault();
    this.scrollLeft += e.deltaY;
  });
  