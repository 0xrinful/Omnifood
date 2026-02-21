// Set current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll(".main-nav-link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    header.classList.remove("nav-open");
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
    } else {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
observer.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
