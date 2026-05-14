// Page Loader
const pageLoader = document.getElementById("page-loader");
const loaderSaying = document.getElementById("loader-saying");
const loaderProgressBar = document.getElementById("loader-progress-bar");
const loaderSkipBtn = document.getElementById("loader-skip");
const loaderArc = document.getElementById("loader-arc");

const techSayings = [
  "Building the future, one byte at a time...",
  "Turning ideas into innovations...",
  "Code is poetry, design is magic...",
  "Creating digital experiences that matter...",
  "Where creativity meets technology...",
  "Building products that inspire...",
  "Designing tomorrow, today...",
  "Innovation starts with a single idea...",
  "Crafting solutions, not just software...",
  "The best ideas become the best products...",
];

let currentSayingIndex = 0;
let loaderAllowed = true;
let sayingInterval = null;
const totalLoaderTime = techSayings.length * 2000; // 20 seconds for all sayings

const rotateLoaderSayings = () => {
  if (!loaderSaying) return;

  // Fade out current text
  loaderSaying.style.opacity = "0";

  // After fade out, update text
  setTimeout(() => {
    loaderSaying.textContent = techSayings[currentSayingIndex];
    currentSayingIndex++;

    // Fade in new text
    loaderSaying.style.transition = "opacity 0.6s ease";
    loaderSaying.style.opacity = "1";

    // Check if we've shown all sayings
    if (currentSayingIndex >= techSayings.length) {
      // Stop rotating and auto-hide after showing last saying
      clearInterval(sayingInterval);
      setTimeout(() => {
        if (loaderAllowed) {
          hidePageLoader();
        }
      }, 1800); // Wait for last saying to display before hiding
    }
  }, 300);
};

const hidePageLoader = () => {
  loaderAllowed = false;
  clearInterval(sayingInterval);
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
  if (pageLoader) {
    pageLoader.classList.add("fade-out");
    setTimeout(() => {
      pageLoader.style.display = "none";
    }, 600);
  }

  // Remove event listeners after loader is hidden
  document.removeEventListener("scroll", interruptLoader);
  document.removeEventListener("click", interruptLoader);
  document.removeEventListener("touchstart", interruptLoader);
};

const interruptLoader = () => {
  if (loaderAllowed) {
    hidePageLoader();
  }
};

// Start rotating sayings
rotateLoaderSayings(); // Show first saying immediately
sayingInterval = setInterval(rotateLoaderSayings, 2000);

// Start progress bar animation
if (loaderProgressBar) {
  loaderProgressBar.style.animation = `progress-fill ${totalLoaderTime}ms linear forwards`;
}

// Animate loader arc growth from small to full circle
if (loaderArc) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const minArc = circumference * 0.08;
  const startTime = performance.now();

  const animateArc = (now) => {
    if (!loaderAllowed) return;
    const progress = Math.min((now - startTime) / totalLoaderTime, 1);
    const arcLength = minArc + (circumference - minArc) * progress;
    loaderArc.style.strokeDasharray = `${arcLength} ${circumference}`;

    if (progress < 1) {
      requestAnimationFrame(animateArc);
    }
  };

  requestAnimationFrame(animateArc);
}

// Skip button functionality
loaderSkipBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  hidePageLoader();
});

// Allow user to interrupt with scroll, click, or touch
document.addEventListener("scroll", interruptLoader, { passive: true });
document.addEventListener("click", interruptLoader);
document.addEventListener("touchstart", interruptLoader, { passive: true });

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const form = document.getElementById("careers-form");
const modal = document.getElementById("form-modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalClose = document.getElementById("modal-close");

const toggleHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 10);
};

const toggleMenu = () => {
  if (!header || !menuToggle) return;
  const isOpen = header.classList.toggle("menu-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

const closeMenu = () => {
  if (!header || !menuToggle) return;
  header.classList.remove("menu-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const openModal = (title, message) => {
  if (!modal || !modalTitle || !modalMessage) return;
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};

toggleHeader();
window.addEventListener("scroll", toggleHeader, { passive: true });
menuToggle?.addEventListener("click", toggleMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

const liquidSections = document.querySelectorAll("main > section");
if (liquidSections.length) {
  const liquidObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("liquid-active");
        } else {
          entry.target.classList.remove("liquid-active");
        }
      });
    },
    { threshold: 0.1 } // Lower threshold for better mobile performance
  );

  liquidSections.forEach((section) => liquidObserver.observe(section));
}

// Scroll Reveal Observer
const revealElements = document.querySelectorAll(".reveal");
if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          // Once it's revealed, we can stop observing it
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const action = form.getAttribute("action") || "";

  if (!action || action === "#") {
    openModal(
      "Form not connected",
      "Add your Formspree action URL to submit this form."
    );
    return;
  }

  try {
    const response = await fetch(action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      openModal("Submitted", "Thanks for applying. We will reach out soon.");
    } else {
      openModal("Submission failed", "Please try again or contact the team.");
    }
  } catch (error) {
    openModal("Submission failed", "Please check your connection and retry.");
  }
});

// Project Redirect Loader
const projectButtons = document.querySelectorAll(".project-btn");
const redirectLoader = document.getElementById("redirect-loader");

projectButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const url = button.getAttribute("href");
    if (url && url !== "#") {
      e.preventDefault();

      // Show loader
      redirectLoader.classList.add("active");

      // Wait for animation then redirect
      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");

        // Hide loader after a bit so it's gone when user returns
        setTimeout(() => {
          redirectLoader.classList.remove("active");
        }, 500);
      }, 1500); // 1.5 seconds loader effect
    }
  });
});
