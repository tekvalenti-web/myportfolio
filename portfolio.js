window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.scrollY > 910 && window.scrollY < 1820) {
    navbar.classList.add("active");

  } else {
    navbar.classList.remove("active");

  }
});

