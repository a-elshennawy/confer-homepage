// upBtn
let upBtn = document.querySelector(".upBtn");

window.addEventListener("scroll", () => {
  upBtn.style.opacity = window.pageYOffset > 300 ? "1" : "0";
});

upBtn.addEventListener("click", () => {
  window.scrollBy({
    top: -window.pageYOffset,
    behavior: "smooth",
  });
});
