// =========================
// FOOTER YEAR
// =========================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      mainNav.classList.toggle("mobile-open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });


  document.querySelectorAll(".main-nav a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("mobile-open");
      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}
// =========================
// HEADER CHANGE ON SCROLL
// =========================

const header = document.querySelector(".site-header");

if (header) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });

}


// =========================
// SCROLL REVEALS
// =========================

const revealElements = document.querySelectorAll(
  ".service-card, " +
  ".creation-card, " +
  ".event-feature, " +
  ".creation-feature, " +
  ".scrapbook-card, " +
  ".review-wall-card, " +
  ".community-card, " +
  ".sweet-chaos-card, " +
  ".personality-card, " +
  ".contact-faq-card, " +
  ".gallery-feature-inner, " +
  ".review-feature-inner, " +
  ".about-story-inner, " +
  ".about-why-inner, " +
  ".real-event-photo, " +
  ".creation-showcase-card, " +
  ".more-creation-card"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          revealObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

} else {

  revealElements.forEach(element => {
    element.classList.add("reveal-visible");
  });

}


// =========================
// GALLERY FILTERS
// =========================

const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryCards = document.querySelectorAll(".scrapbook-card");

if (galleryFilters.length && galleryCards.length) {

  galleryFilters.forEach(filter => {

    filter.addEventListener("click", () => {

      galleryFilters.forEach(button => {
        button.classList.remove("active");
      });

      filter.classList.add("active");

      const selected = filter.textContent
        .trim()
        .toLowerCase();


      galleryCards.forEach(card => {

        const caption = card.textContent
          .trim()
          .toLowerCase();


        const matches =
          selected === "all the fluff" ||
          caption.includes(selected) ||
          (
            selected === "sweet treats" &&
            caption.includes("sweet")
          );


        if (matches) {
          card.classList.remove("gallery-hidden");
        } else {
          card.classList.add("gallery-hidden");
        }

      });

    });

  });

}


// =========================
// TINY PARALLAX EFFECT
// =========================

const floatingElements = document.querySelectorAll(
  ".hero-sparkles img, " +
  ".hero-candy img, " +
  ".events-floating-candy, " +
  ".creations-sprinkle-trail, " +
  ".gallery-hero-sprinkles, " +
  ".about-hero-sprinkles, " +
  ".about-hero-floating-candy"
);


if (
  floatingElements.length &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

  window.addEventListener("mousemove", event => {

    const x =
      (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 2;


    floatingElements.forEach((element, index) => {

      const strength =
        Math.min(6 + index * 1.5, 16);

      element.style.translate =
        `${x * strength}px ${y * strength}px`;

    });

  });

}


// =========================
// BUTTON MICRO INTERACTION
// =========================

document
  .querySelectorAll(".btn, .nav-cta, .social-btn")
  .forEach(button => {

    button.addEventListener("mouseenter", () => {
      button.classList.remove("button-pop");

      void button.offsetWidth;

      button.classList.add("button-pop");
    });


    button.addEventListener("animationend", () => {
      button.classList.remove("button-pop");
    });

  });


// =========================
// SMOOTH INTERNAL LINKS
// =========================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }


      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }


      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start"
      });

    });

  });


// =========================
// CONTACT FORM
// =========================
//
// No fake success message here.
//
// The form will be connected to the real
// email/form service separately.
//
// IMPORTANT:
// Do not add event.preventDefault() here
// unless we are deliberately handling
// the real submission ourselves.
//


// =========================
// REDUCED MOTION SUPPORT
// =========================

if (
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

  document
    .querySelectorAll("*")
    .forEach(element => {

      element.style.animationDuration = "0.01ms";
      element.style.animationIterationCount = "1";
      element.style.scrollBehavior = "auto";

    });

}
