// upBtn
let upBtn = document.querySelector(".upBtn");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  upBtn.style.opacity = window.pageYOffset > 300 ? "1" : "0";
  navbar.style.backgroundColor =
    window.pageYOffset > 300 ? "#000000b0" : "#151853";
});

upBtn.addEventListener("click", () => {
  window.scrollBy({
    top: -window.pageYOffset,
    behavior: "smooth",
  });
});
