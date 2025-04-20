// upBtn
let upBtn = document.querySelector(".upBtn");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  upBtn.style.opacity = window.pageYOffset > 300 ? "1" : "0";
  navbar.style.backgroundColor =
    window.pageYOffset > 300 ? "#000000b0" : "#000";
  navbar.style.padding = window.pageYOffset > 300 ? "10px 0px" : "20px 0px";
});

upBtn.addEventListener("click", () => {
  window.scrollBy({
    top: -window.pageYOffset,
    behavior: "smooth",
  });
});
