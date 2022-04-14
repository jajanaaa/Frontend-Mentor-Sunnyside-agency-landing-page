const menuIcon = document.querySelector(".hamburger-menu");
const whiteBlock = document.querySelector(".white-block");

menuIcon.addEventListener("click", () => {
  whiteBlock.classList.toggle("change");
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
});
