const headerTop = document.querySelector(".header-top");
const headerNav = document.querySelector(".header-navigation");

window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  const headerHeight = headerTop.offsetHeight + headerNav.offsetHeight;
  console.log(headerHeight);
});
