// Header: custom margin-bottom when scrolling
document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");
  let root = document.documentElement;
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.style.marginBottom = "0";
    } else {
      header.style.marginBottom = getComputedStyle(root).getPropertyValue("--margin-bottom");
    }
  });
});

// Header: show dropdown button
document.addEventListener("DOMContentLoaded", function () {
  let userElement = document.querySelector(".header__user");
  let dropdownElement = document.querySelector(".header-dropdown");
  userElement.addEventListener("click", function (event) {
    dropdownElement.classList.toggle("show");
    event.stopPropagation();
  });
  document.addEventListener("click", function (event) {
    if (!dropdownElement.contains(event.target)) {
      dropdownElement.classList.remove("show");
    }
  });
  dropdownElement.addEventListener("click", function (event) {
    event.stopPropagation(); // Ngăn sự kiện click này lan ra ngoài
  });
});

// Feed item (home page): clicked the action btton
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".feed-item__act-btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("feed-item__act-btn--clicked")) {
        button.classList.remove("feed-item__act-btn--clicked");
      } else {
        button.classList.add("feed-item__act-btn--clicked");
      }
    });
  });
});

// Suggested follows: followed state
document.addEventListener("DOMContentLoaded", function () {
  const followButtons = document.querySelectorAll(".follow__btn");
  followButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList.contains("follow__btn--followed")) {
        button.textContent = "Follow";
        button.classList.remove("follow__btn--followed");
      } else {
        button.textContent = "Followed";
        button.classList.add("follow__btn--followed");
      }
    });
  });
});

// Theme toggle button
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("theme-toggle");
  let html = document.documentElement;
  let isDarkMode = false;
  button.addEventListener("click", function () {
    if (isDarkMode) {
      html.classList.remove("dark");
      button.innerHTML =
        '<img src="./assets/icons/moon.svg" alt="" class="header-dropdown__icon" /> Dark';
    } else {
      html.classList.add("dark");
      button.innerHTML =
        '<img src="./assets/icons/sun.svg" alt="" class="header-dropdown__icon" /> Light';
    }
    isDarkMode = !isDarkMode;
  });
});
