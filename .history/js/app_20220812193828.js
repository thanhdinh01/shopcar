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
    }
  } else {
    headerNav.classList.remove("is-fixed");
    logoHeader.src = `./images/header/logo.png`;
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

btnLogin.addEventListener("click", addModal);
btnRegister.addEventListener("click", addModal);
function addModal(e) {
  document.body.insertAdjacentHTML("beforeend", templateModal);
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
    console.log(e.target);
    chooseRegister.classList.remove("active");
    formRegister.classList.remove("active");
    e.target.classList.add("active");
    formLogin.classList.add("active");
  } else if (e.target.matches(".choose-register")) {
    console.log(e.target);
    chooseLogin.classList.remove("active");
    formLogin.classList.remove("active");
    e.target.classList.add("active");
    formRegister.classList.add("active");
  }
});

// === Search Header

const searchWrap = document.querySelector(".search");
searchWrap.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.children.classList.add("fa-square-xmark");
});
