const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");

menuOpenBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-left");
});

menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());
