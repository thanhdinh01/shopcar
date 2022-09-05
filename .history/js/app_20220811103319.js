const headerTop = document.querySelector(".header-top");
const headerNav = document.querySelector(".header-navigation");
const logoHeader = document.querySelector(".logo-header-img");

window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  const headerHeight = headerTop.offsetHeight + headerNav.offsetHeight;
  if (scrollY >= headerHeight * 1.5) {
    headerNav && headerNav.classList.add("is-fixed");
    logoHeader.style.src = "../images/header/b_logo.png";
    console.log(logoHeader);
  } else {
    headerNav && headerNav.classList.remove("is-fixed");
  }
});
