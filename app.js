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
