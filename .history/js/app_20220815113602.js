// variable header navigation fixed
const headerTop = document.querySelector(".header-top");
const headerNav = document.querySelector(".header-navigation");
const logoHeader = document.querySelector(".logo-header-img");

// ===== header navigation fixed
window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  const headerHeight = headerTop.offsetHeight + headerNav.offsetHeight;
  if (scrollY >= headerHeight * 1.5) {
    if (headerNav) {
      headerNav.classList.add("is-fixed");
      logoHeader.src = `./images/header/b_logo.png`;
      searchActive.classList.add("search-scrolled");
    }
  } else {
    headerNav.classList.remove("is-fixed");
    logoHeader.src = `./images/header/logo.png`;
    searchActive.classList.remove("search-scrolled");
  }
});

//==== modal login register
const templateModal = `
<div class="modal-header">
      <div class="modal-content">
        <ul class="choose-form">
          <li class="choose-login choose active">
            <h3>LOGIN</h3>
          </li>
          <li class="choose-register choose">
            <h3>REGISTER</h3>
          </li>
        </ul>
        <div class="button-close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="form-login form active">
          <div class="form-item">
            <label for="email-login" class="form-label">Email</label>
            <input
              type="text"
              name=""
              id="email-login"
              placeholder="abc@gmail.com"
              class="input-form"
            />
            <span>Please fill in this field</span>
          </div>
          <div class="form-item">
            <label for="pw-login" class="form-label">Your Password</label>
            <input
              type="text"
              name=""
              id="pw-login"
              placeholder="********"
              class="input-form"
            />
            <span>Please fill in this field</span>
          </div>
          <button class="button button-login form-btn">LOGIN</button>
        </div>
        <div class="form-register form">
          <div class="form-item">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              name=""
              id="username"
              placeholder="Dinh Duy Thanh"
              class="input-form"
            />
            <span>Please fill in this field</span>
          </div>
          <div class="form-item">
            <label for="email-register" class="form-label">Email</label>
            <input
              type="text"
              name=""
              id="email-register"
              placeholder="abc@gmail.com"
              class="input-form"
            />
            <span>Please fill in this field</span>
          </div>
          <div class="form-item">
            <label for="pw-register" class="form-label">Your Password</label>
            <input
              type="text"
              name=""
              id="pw-register"
              placeholder="********"
              class="input-form"
            />
            <span>Please fill in this field</span>
          </div>
          <div class="form-item">
            <label for="re-pw-register" class="form-label"
              >Re-enter The Password</label
            >
            <input
              type="text"
              name=""
              id="re-pw-register"
              placeholder="********"
              class="input-form"
            />
            <span>Please fill in this field</span>
          </div>
          <button class="button button-register form-btn">REGISTER</button>
        </div>
      </div>
    </div>
`;
const btnLogin = document.querySelector(".login");
const btnRegister = document.querySelector(".logup");

btnLogin.addEventListener("click", function (e) {
  chooseContentModal(1);
});
btnRegister.addEventListener("click", function (e) {
  chooseContentModal(-1);
});
function chooseContentModal(direction) {
  if (direction == 1) {
    document.body.insertAdjacentHTML("beforeend", templateModal);
    document.querySelector(".choose-register").classList.remove("active");
    document.querySelector(".form-register").classList.remove("active");
    document.querySelector(".choose-login").classList.add("active");
    document.querySelector(".form-login").classList.add("active");
  } else if (direction == -1) {
    document.body.insertAdjacentHTML("beforeend", templateModal);
    document.querySelector(".choose-login").classList.remove("active");
    document.querySelector(".form-login").classList.remove("active");
    document.querySelector(".choose-register").classList.add("active");
    document.querySelector(".form-register").classList.add("active");
  }
}

document.body.addEventListener("click", function (e) {
  if (e.target.matches(".button-close")) {
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
  } else if (e.target.matches(".modal-header")) {
    e.target.parentNode.removeChild(e.target);
  }
});

document.body.addEventListener("click", function (e) {
  const formLogin = document.querySelector(".form-login");
  const formRegister = document.querySelector(".form-register");
  const chooseLogin = document.querySelector(".choose-login");
  const chooseRegister = document.querySelector(".choose-register");
  if (e.target.matches(".choose-login")) {
    chooseRegister.classList.remove("active");
    formRegister.classList.remove("active");
    e.target.classList.add("active");
    formLogin.classList.add("active");
  } else if (e.target.matches(".choose-register")) {
    chooseLogin.classList.remove("active");
    formLogin.classList.remove("active");
    e.target.classList.add("active");
    formRegister.classList.add("active");
  }
});

// === Search Header

const searchToggle = document.querySelector(".search-toggle");
const searchActive = document.querySelector(".search-active");
const searchScrolled = document.querySelector(".search-scrolled");

searchToggle.addEventListener("click", function (e) {
  if (
    window.pageYOffset <
    (headerTop.offsetHeight + headerNav.offsetHeight) * 1.5
  ) {
    searchActive.classList.toggle("is-show");
    searchActive.style.top = `${headerNav.offsetHeight}px`;
    e.target.classList.toggle("fa-magnifying-glass");
    e.target.classList.toggle("fa-square-xmark");
  } else {
    searchActive.classList.toggle("is-show");
    searchActive.classList.add("search-scrolled");
    searchActive.style.top = `${headerNav.offsetHeight}px`;
    e.target.classList.toggle("fa-magnifying-glass");
    e.target.classList.toggle("fa-square-xmark");
  }
});

document.body.addEventListener("click", function (e) {
  if (
    !e.target.matches(".search-active") &&
    !e.target.matches(".input-search") &&
    !e.target.matches(".search-icon") &&
    e.target !== searchToggle
  ) {
    searchActive.classList.remove("is-show");
    searchActive.classList.remove("search-scrolled");
    searchToggle.classList.add("fa-magnifying-glass");
    searchToggle.classList.remove("fa-square-xmark");
  }
});

//=========== Selection Vehicle

const dropdownSelect = document.querySelectorAll(".dropdown-select");
const dropdownText = document.querySelectorAll(".dropdown-text");
const selectItem = document.querySelectorAll(".select-item");

dropdownSelect.forEach((item) =>
  item.addEventListener("click", function (e) {
    e.target.nextElementSibling.classList.toggle("show");
    e.target.lastElementChild.classList.toggle("fa-angle-up");
  })
);

document.addEventListener("click", function (e) {
  selectItem.forEach((item) => {
    if (!item.contains(e.target)) {
      item.lastElementChild.classList.remove("show");
      item.firstElementChild.lastElementChild.classList.remove("fa-angle-up");
    }
  });
});

dropdownText.forEach(
  (item) => item.addEventListener("click"),
  function (e) {
    console.log(e.target);
  }
);
