const headerTop = document.querySelector(".header-top");
const headerNav = document.querySelector(".header-navigation");

window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  const headerHeight = headerTop.offsetHeight + headerNav.offsetHeight;
  if (scrollY >= headerHeight) {
    headerNav && headerNav.classList.add("is-fixed");
  } else {
    headerNav && headerNav.classList.remove("is-fixed");
  }
});
