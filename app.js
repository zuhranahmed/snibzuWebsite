gsap.from(".hero__content", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeInOut",
});
gsap.from(".hero__content--heading", {
  opacity: 0,
  duration: 1,
  y: -20,
  delay: 1.2,
});
gsap.from(".btn-text", { opacity: 0, duration: 1, y: -30, delay: 1.5 });
gsap.from(".navbar__logo", { opacity: 0, duration: 1, x: -70, delay: 1.8 });
gsap.from(".navbar__links--link", {
  opacity: 0,
  duration: 1,
  x: 70,
  stagger: 0.6,
  delay: 2,
});

gsap.from(".services__card", {
  opacity: 0,
  duration: 1,
  delay: 2,
  stagger: 0.6,
});

gsap.from(".iso", {
  opacity: 0,
  duration: 1,
  delay: 3.8,
});

// about page

gsap.from(".about-us", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeInOut",
});

gsap.from(".about__heading", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 1.8,
  ease: "Power2.easeInOut",
});

gsap.from(".about__details", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 2,
  ease: "Power2.easeInOut",
});
gsap.from(".about__image", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 2.2,
  ease: "Power2.easeInOut",
});

// Contact Page

gsap.from(".contact-us", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeInOut",
});

gsap.from("form div", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeInOut",
  stagger: 0.6,
  delay: 2,
});

gsap.from(".send-message", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeInOut",
  delay: 2,
});

gsap.from("button", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeInOut",
  delay: 3.6,
});
gsap.from(".form__image", {
  opacity: 0,
  duration: 1,
  x: 50,
  ease: "Power2.easeInOut",
  delay: 2.8,
});
