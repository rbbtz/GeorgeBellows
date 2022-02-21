const init = () => {
  const container = document.querySelector('.sample-hero-container');
  const heroBkg = document.querySelector('.sample-hero-bkg');
  const heroOverlay = document.querySelector('.sample-hero-overlay');
  const heroContent = document.querySelector('.sample-hero-content');
  const heroTitle = document.querySelector('.sample-hero-title');
  const heroSubtitle = document.querySelector('.sample-hero-subtitle');
  const heroButton = document.querySelector('.sample-hero-button');
  const bkg1 = document.querySelector('.bkg1');
  gsap.from(heroBkg, { duration: 3, scale: 1.25, opacity: 0, ease: "expo.inOut" });

  gsap.from(bkg1, { duration: .75, scaleX: 0, opacity: 0, ease: "expo.in" });

  gsap.to(bkg1, { duration: .75, delay: .75, x: '100%', scaleX: 0, opacity: 1, ease: "expo.in" });

  const text1 = document.querySelector('.text1');

  gsap.to(text1, { duration: .75, delay: .75, opacity: 1, ease: "expo.out" });

  heroButton.addEventListener('click', () => {
    window.alert('clicked!');
  });
};
init();
