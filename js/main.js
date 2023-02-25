// Fade-in animation: create the observer
var observer = new IntersectionObserver((entries) => {
  applyAnimation(entries);
});

function applyAnimation(entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fade-in-up", entry.isIntersecting);
    if (entry.intersectionRatio > 0) observer.unobserve(entry.target);
  });
}

// Observe the elements
const heroBody = document.querySelector(".hero-body")
const videoCards = document.querySelectorAll(".grid-card")
const elementsObserved = []

videoCards.forEach(card => elementsObserved.push(card))
elementsObserved.push(heroBody)

elementsObserved.forEach((element) => {
  observer.observe(element);
});