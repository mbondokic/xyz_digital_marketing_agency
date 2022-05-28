// Testimonials
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slides = document.querySelectorAll(".slide");

let index = 0;
display(index);
function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Contact Form Validation
(function () {
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      const validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (e) {
            if (form.checkValidity() === false) {
              e.preventDefault();
              e.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Switch theme
let toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
let currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    // Switch theme
    document.documentElement.setAttribute("data-theme", "dark");
    // Save the theme in local storage
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

// Scroll to top with progress
let progressPath = document.querySelector(".progress-wrap path");
let pathLength = progressPath.getTotalLength();

function scrollTop() {
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

progressPath.style.transition = progressPath.style.WebkitTransition = "none";
progressPath.style.strokeDasharray = pathLength + " " + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
  "stroke-dashoffset 10ms linear";

let updateProgress = function () {
  let scroll = this.scrollY;
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = progress;
};
updateProgress();

window.addEventListener("scroll", updateProgress);

let offset = 100;
let progressWrap = document.querySelector(".progress-wrap");

window.addEventListener("scroll", function () {
  if (this.scrollY > offset) {
    progressWrap.classList.add("active-progress");
  } else {
    progressWrap.classList.remove("active-progress");
  }
});

progressWrap.addEventListener("click", function (e) {
  e.preventDefault();
  scrollTop();
});