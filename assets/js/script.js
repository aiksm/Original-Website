// $(function(){
//     $(".slideshow-slide li").css({"position":"relative"});
//     $(".slideshow-slide li").hide().css({"position":"absolute"});
//     $(".slideshow-slide li:first").addClass("slide");
//     $(".slideshow-slide li:nth-child(2)").css({"display":"block"});
//     setInterval(function(){
//         var $active = $(".slideshow-slide li.slide");
//         var $next = $active.next("li").length?$active.next("li"):$(".slideshow-slide li:first");
//         var $nextnext = $next.next("li");
//         $active.fadeOut(0).removeClass("slide");
//         $next.show().addClass("slide");
//         $nextnext.css({"display":"block"});
//         },3000);
// });

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1. 1)";
      link.style.color = "azure";
    });

    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
      link.style.color = "#333";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slideshow-slide");
  const slideCount = slides.children.length;
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, 3000);
});

//menu bar mobile ver

const hamburger = document.querySelector(".humburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});

//旬の野菜スクロール

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box1");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box2");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box3");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box4");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box5");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box6");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box7");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box8");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".box9");
  boxes.forEach((box) => {
    const distanceToBox = box.offsetTop;
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
});
