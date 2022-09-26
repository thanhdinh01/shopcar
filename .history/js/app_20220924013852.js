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

// ============== Menu toggle Mobile
const dropDowns = document.querySelectorAll(".drop-down--mobile");
const btnCloseMobile = document.body.querySelector(".btn-close");
const menuToggleMobile = document.querySelector(".menu-list--mobile");
const menuMobile = document.querySelector(".menu-toggle--mobile");
const menuContentMobile = document.querySelector(".menu-content-mobile");

menuToggleMobile.addEventListener("click", function (e) {
  menuMobile.classList.add("show");
});

btnCloseMobile.addEventListener("click", function (e) {
  menuMobile.classList.remove("show");
  console.log(e.target);
});
menuMobile.addEventListener("click", function (e) {
  if (!menuContentMobile.contains(e.target)) {
    menuMobile.classList.remove("show");
  }
});
dropDowns.forEach((item) =>
  item.addEventListener("click", function (e) {
    e.target.classList.toggle("active");
    e.target.nextElementSibling.classList.toggle("show");
  })
);

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
const dropdownItem = document.querySelectorAll(".dropdown-item");
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

dropdownItem.forEach((item) =>
  item.addEventListener("click", function (e) {
    let textSelected =
      e.target.parentNode.previousElementSibling.firstElementChild;
    let textItem = e.target.firstElementChild.textContent;

    textSelected.textContent = textItem;
    e.target.parentNode.classList.remove("show");
    e.target.parentNode.previousElementSibling.lastElementChild.classList.remove(
      "fa-angle-up"
    );
  })
);

// ======== Release cars===

const btnMenuCar = document.querySelectorAll(".btn-menu-car");
const carList = document.querySelector(".car-list");
const listCars = [
  {
    id: 1,
    name: "Jaguer M1 Hybrid",
    desc: "Placlder text commonly used detrate",
    price: 2900,
    running: 6800,
    image: "./images/latest-car/t_released_cars_thumb01.jpg",
    type: "usedcar",
  },
  {
    id: 2,
    name: "Audi New BoM 800",
    desc: "Placlder text commonly used detrate Placlder text commonly used detrate Placlder text commonly used detrate",
    price: 4000,
    running: 10000,
    image: "./images/latest-car/t_released_cars_thumb02.jpg",
    type: "usedcar",
  },
  {
    id: 3,
    name: "Mercedez Benz EI8",
    desc: "Placlder text commonly used detrate",
    price: 2300,
    running: 7500,
    image: "./images/latest-car/t_released_cars_thumb03.jpg",
    type: "newcar",
  },
  {
    id: 4,
    name: "Audi New BoM 800",
    desc: "Placlder text commonly used detrate",
    price: 2700,
    running: 6000,
    image: "./images/latest-car/t_released_cars_thumb04.jpg",
    type: "newcar",
  },
  {
    id: 5,
    name: "Audi A8 Hybrid",
    desc: "Placlder text commonly used detrate",
    price: 3300,
    running: 9000,
    image: "./images/latest-car/t_released_cars_thumb05.jpg",
    type: "usedcar",
  },
  {
    id: 6,
    name: "Mercedez New EI9",
    desc: "Placlder text commonly used detrate",
    price: 2100,
    running: 7000,
    image: "./images/latest-car/t_released_cars_thumb06.jpg",
    type: "newcar",
  },
];

function showAllCars() {
  listCars.forEach((item) => {
    const template = `
    <li class="car-item" data-id="${item.id}">
                    <div class="car-item-img">
                      <a href="#">
                        <img
                          src="${item.image}"
                          alt=""
                        />
                      </a>
                      <button class="button button-book">BOOK NOW</button>
                    </div>
                    <div class="car-item-content">
                      <div class="car-content-info">
                        <h2><a href="#">${item.name}</a></h2>
                        <span>${item.desc}</span>
                      </div>
                      <div class="car-content-bottom">
                        <div class="car-content-desc">
                          <div class="car-desc1">
                            <i class="fa-solid fa-gear"></i>
                            Automatic
                          </div>
                          <div class="car-desc1">
                            <i class="fa-solid fa-gas-pump"></i>
                            Diesel
                          </div>
                          <div class="car-desc1">
                            <i class="fa-solid fa-road"></i>
                            ${item.running} km
                          </div>
                        </div>
                        <div class="car-content-interaction">
                          <div class="car-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div class="car-price">
                            Total Price :
                            <span>$</span>
                            <span>${item.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
    `;
    carList.insertAdjacentHTML("beforeend", template);
  });
}
showAllCars();

function typeCar(car) {
  const template = `
  <li class="car-item" data-id="${car.id}">
                  <div class="car-item-img">
                    <a href="#">
                      <img
                        src="${car.image}"
                        alt=""
                      />
                    </a>
                    <button class="button button-book">BOOK NOW</button>
                  </div>
                  <div class="car-item-content">
                    <div class="car-content-info">
                      <h2><a href="#">${car.name}</a></h2>
                      <span>${car.desc}</span>
                    </div>
                    <div class="car-content-bottom">
                      <div class="car-content-desc">
                        <div class="car-desc1">
                          <i class="fa-solid fa-gear"></i>
                          Automatic
                        </div>
                        <div class="car-desc1">
                          <i class="fa-solid fa-gas-pump"></i>
                          Diesel
                        </div>
                        <div class="car-desc1">
                          <i class="fa-solid fa-road"></i>
                          ${car.running} km
                        </div>
                      </div>
                      <div class="car-content-interaction">
                        <div class="car-rating">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="car-price">
                          Total Price :
                          <span>$</span>
                          <span>${car.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
  `;
  carList.insertAdjacentHTML("beforeend", template);
}

btnMenuCar.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (this.dataset.type === "all") {
      const allCar = listCars.filter(
        (item) => item.type === "newcar" || item.type === "usedcar"
      );
      carList.innerHTML = "";
      allCar.forEach((item) => typeCar(item));
    } else if (this.dataset.type === "newcar") {
      const newCar = listCars.filter((item) => item.type === "newcar");
      carList.innerHTML = "";
      newCar.forEach((item) => typeCar(item));
    } else {
      const usedCar = listCars.filter((item) => item.type === "usedcar");
      carList.innerHTML = "";
      usedCar.forEach((item) => typeCar(item));
    }
    btnMenuCar.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  })
);

//===== Achieved area
const achievedArea = document.querySelector(".achieved-area");
const achievedNums = achievedArea.querySelectorAll(".achieved-number");
let timers = [];
let started = false;

const resetCounter = () => {
  achievedNums.forEach((item) => {
    item.innerHTML = item.dataset.target;
    item.dataset.current = 0;
  });
  timers.forEach((item) => clearInterval(item));
};

resetCounter();

const counter = (duration) => {
  achievedNums.forEach((item, index) => {
    const goal = +item.dataset.target;
    const step = +item.dataset.step;
    const countUp = goal / step;

    timers[index] = setInterval(() => {
      if (item.dataset.current >= goal) {
        clearInterval(timers[index]);
        started = false;
        return;
      }
      item.dataset.current = +item.dataset.current + countUp;
      item.innerHTML = Math.round(item.dataset.current);
    }, duration);
  });
};

window.addEventListener("scroll", function (e) {
  if (
    window.scrollY >=
    achievedArea.offsetTop - 2 * achievedArea.offsetHeight
  ) {
    if (started) return;
    counter(30);
    started = true;
  } else {
    resetCounter();
    started = false;
  }
});
// ===== Blog Area
// 2 5 8 11...
const blogItems = document.querySelectorAll(".blog-item");
for (let i = 1; i < blogItems.length - 1; i += 3) {
  blogItems[i].style.borderRight = "1px dashed #c4c4c4";
  blogItems[i].style.borderLeft = "1px dashed #c4c4c4";
}

// ====== slick slider footer
$(document).ready(function () {
  $(".slider-footer").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// ====== Footer
const btnScrollTop = document.querySelector(".scroll-top");

btnScrollTop.addEventListener("click", function () {
  document.documentElement.style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "unset";
  }, 1500);
});

// ----------------- cart shopping ---------------
const decreaseBtn = document.querySelectorAll(".decr-qty");
const increaseBtn = document.querySelectorAll(".incr-qty");
const cartTop = document.querySelector(".cart-top");
let listCart = JSON.parse(localStorage.getItem("itemsCart")) || [];

if (Array.isArray(listCart) && listCart.length > 0) {
  [...listCart].forEach((item) => renderItemCart(item));
}

// increaseBtn.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     let input = e.target.parentNode.children[1];
//     let inputValue = input.value;
//     let newValue = parseInt(inputValue) + 1;
//     input.value = newValue;
//   })
// );

// decreaseBtn.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     let input = e.target.parentNode.children[1];
//     let inputValue = input.value;
//     let newValue = parseInt(inputValue) - 1;
//     if (newValue >= 0) {
//       input.value = newValue;
//     } else {
//       input.value = 0;
//     }
//   })
// );

// add item to cart shopping
function renderItemCart({ id, img, nameCar, priceCar, no }) {
  const template = `
  <div class="cart-item" data-id="${id}">
                        <a href="#" class="product-img">
                          <img
                            src='${img}'
                            alt=""
                          />
                        </a>
                        <div class="product-desc">
                          <a href="#" class="product-title"
                            >${nameCar}</a
                          >
                          <div class="price-qty-box">
                            <span class="product-price"><span>$</span>${priceCar}</span>
                            <div class="product-qty">
                              <button class="decr-qty btn-qty">-</button>
                              <input
                                type="text"
                                name="qty"
                                value="${no}"
                                id=""
                                class="input-qty"
                              />
                              <button class="incr-qty btn-qty">+</button>
                            </div>
                          </div>
                        </div>
                        <div class="delete-item">
                          <i class="fa-regular fa-trash-can"></i>
                        </div>
                      </div>
  `;
  cartTop.insertAdjacentHTML("beforeend", template);
}

// reset item cart shopping
function resetData() {
  localStorage.setItem("itemsCart", JSON.stringify(listCart));
  cartTop.innerHTML = "";
  const newLocalStorage = JSON.parse(localStorage.getItem("itemsCart"));
  newLocalStorage.forEach((item) => renderItemCart(item));
}

document.body.addEventListener("click", function (e) {
  // add data in to localStorage
  if (e.target.matches(".button-book")) {
    const itemCart = {
      id: e.target.parentNode.parentNode.dataset.id,
      img: e.target.previousElementSibling.children[0].src,
      nameCar:
        e.target.parentNode.nextElementSibling.children[0].children[0]
          .children[0].textContent,
      priceCar:
        e.target.parentNode.nextElementSibling.children[1].children[1]
          .children[1].children[1].textContent,
      no: 1,
    };
    // increase quantity in clicked same product
    if (JSON.parse(localStorage.getItem("itemsCart")) === null) {
      listCart.push(itemCart);
      localStorage.setItem("itemsCart", JSON.stringify(listCart));
      renderItemCart(itemCart);
    } else {
      const localItems = JSON.parse(localStorage.getItem("itemsCart"));
      const index = localItems.findIndex((el) => el.id === itemCart.id);
      console.log(index);
      if (index >= 0) {
        listCart[index].no = localItems[index].no + 1;
        resetData();
      } else {
        listCart.push(itemCart);
        resetData();
      }
    }
  }
  // remove data in localstorage
  function removeItemCart(e) {
    if (e.target.matches(".fa-trash-can")) {
      const product = e.target.parentNode.parentNode;
      console.log(product.dataset.id);
      const idProduct = product.dataset.id;
      product.remove();
      const indexRemove = listCart.findIndex((item) => item.id === idProduct);
      listCart.splice(indexRemove, 1);
      console.log(listCart);
      localStorage.setItem("itemsCart", JSON.stringify(listCart));
    }
  }
  removeItemCart(e);
  // button + - quantity
  if (e.target.matches(".decr-qty")) {
    let productValue = e.target.nextElementSibling.value;
    const idProduct =
      e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
    const indexIncr = listCart.findIndex((item) => item.id === idProduct);
    listCart[indexIncr].no--;
    let newItemvalue = +productValue - 1;
    productValue = newItemvalue;
    if (listCart[indexIncr].no <= 0) {
      listCart[indexIncr].no = 0;
    }
    resetData();
  }
  if (e.target.matches(".incr-qty")) {
    let productValue = e.target.previousElementSibling.value;
    const idProduct =
      e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
    const indexIncr = listCart.findIndex((item) => item.id === idProduct);
    listCart[indexIncr].no++;
    let newItemvalue = +productValue + 1;
    productValue = newItemvalue;
    resetData();
  }
});
