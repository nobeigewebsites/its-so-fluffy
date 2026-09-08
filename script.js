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
    mainNav.classList.toggle("mobile-open");
    menuToggle.classList.toggle("active");
  });

  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("mobile-open");
      menuToggle.classList.remove("active");
    });
  });
}


// =========================
// HEADER CHANGE ON SCROLL
// =========================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


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
  ".about-why-inner"
);

revealElements.forEach(el => {
  el.classList.add("reveal");
});

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

revealElements.forEach(el => {
  revealObserver.observe(el);
});


// =========================
// GALLERY FILTERS
// =========================

const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryCards = document.querySelectorAll(".scrapbook-card");

galleryFilters.forEach(filter => {
  filter.addEventListener("click", () => {

    galleryFilters.forEach(btn => {
      btn.classList.remove("active");
    });

    filter.classList.add("active");

    const selected = filter.textContent
      .trim()
      .toLowerCase();

    galleryCards.forEach(card => {

      const caption = card.textContent
        .trim()
        .toLowerCase();

      if (
        selected === "all the fluff" ||
        caption.includes(selected.replace("sweet treats", "sweet"))
      ) {
        card.classList.remove("gallery-hidden");
      } else {
        card.classList.add("gallery-hidden");
      }

    });

  });
});


// =========================
// TINY PARALLAX EFFECT
// =========================

const floatingElements = document.querySelectorAll(
  ".hero-sparkles img, " +
  ".hero-candy img, " +
  ".events-floating-candy, " +
  ".creations-sprinkle-trail, " +
  ".gallery-hero-sprinkles, " +
  ".about-hero-sprinkles"
);

window.addEventListener("mousemove", event => {

  const x =
    (event.clientX / window.innerWidth - 0.5) * 2;

  const y =
    (event.clientY / window.innerHeight - 0.5) * 2;

  floatingElements.forEach((el, index) => {

    const strength = 6 + index * 1.5;

    el.style.translate =
      `${x * strength}px ${y * strength}px`;

  });

});


// =========================
// BUTTON MICRO INTERACTION
// =========================

document.querySelectorAll(".btn, .nav-cta, .social-btn").forEach(button => {

  button.addEventListener("mouseenter", () => {
    button.classList.add("button-pop");
  });

  button.addEventListener("animationend", () => {
    button.classList.remove("button-pop");
  });

});


// =========================
// FORM SUCCESS PLACEHOLDER
// =========================

const contactForm =
  document.querySelector(".contact-page-form") ||
  document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const submitButton =
      contactForm.querySelector("button[type='submit']");

    if (!submitButton) return;

    const originalText = submitButton.textContent;

    submitButton.textContent = "Fluffy enquiry ready ✨";
    submitButton.classList.add("form-success");

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.classList.remove("form-success");
    }, 3000);

  });

}


// =========================
// REDUCED MOTION SUPPORT
// =========================

if (
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

  document
    .querySelectorAll("*")
    .forEach(el => {
      el.style.animationDuration = "0.01ms";
      el.style.animationIterationCount = "1";
      el.style.scrollBehavior = "auto";
    });

}
