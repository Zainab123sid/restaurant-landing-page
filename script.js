const toggleMenu=document.getElementById("toggleMenu");
const siteNav=document.getElementById("siteNav");
toggleMenu.onclick=function(){
  siteNav.classList.toggle("active");
  toggleMenu.classList.toggle("active");
  
}

/* TESTIMONIAL SLIDER */

const reviews = [
  {
    text: "The food was absolutely delicious! The atmosphere was wonderful.",
    name: "Ayesha Khan",
    role: "Happy Customer"
  },
  {
    text: "Amazing restaurant! Friendly staff and excellent service.",
    name: "Sara Ahmed",
    role: "Regular Customer"
  },
  {
    text: "One of the best dining experiences. Highly recommended!",
    name: "Ali Hassan",
    role: "Food Lover"
  }
];

const reviewText = document.querySelector("#reviewText");
const reviewName = document.querySelector("#reviewName");
const reviewRole = document.querySelector("#reviewRole");
const sliderDots = document.querySelector("#sliderDots");

let currentIndex = 0;

function showReview(index) {
  reviewText.textContent = reviews[index].text;
  reviewName.textContent = reviews[index].name;
  reviewRole.textContent = reviews[index].role;

  sliderDots.innerHTML = reviews.map((_, i) =>
    `<span class="${i === index ? 'active' : ''}"></span>`
  ).join("");
}

document.querySelector("#nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
});

document.querySelector("#prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex);
});

showReview(currentIndex);

/* SCROLL ANIMATION */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((element) => observer.observe(element));

/* DEMO BOOKING FORM */

const bookingForm = document.querySelector("#bookingForm");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#bookingMessage").textContent =
    "Demo submitted! No reservation has been placed.";

  bookingForm.reset();
});

/* FULL PAGE SCROLL ANIMATIONS */

const animatedElements = document.querySelectorAll(
  ".scroll-animate"
);

const scrollObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.1
  }
);

animatedElements.forEach((element) => {
  scrollObserver.observe(element);
});
