const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = 0;

  function up() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.textContent;
    const incr = target / 200;

    if (c < target) {
      counter.textContent = c + incr;
      setTimeout(up, 1);
    }
  }

  up();
});
