const tl = gsap.timeline({defaults: {duration: 1}});
tl.fromTo(".cookie-container", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1 });
tl.fromTo(".cookie", { opacity: 0, x:-50, rotation: '40' }, { opacity: 1, x:0, rotation: '0' });
tl.fromTo(".text",{opacity:0, x:-50}, {opacity:1, x:0}, '<');

tl.to('.cookie', { y: -20, repeat: -1, yoyo: true, rotate: '-20' });
tl.to('#crumbs', { y: -20, repeat: -1, yoyo: true, rotate: '-20' });

const button = document.querySelector('button');
button.addEventListener('click', () => {
  gsap.to('.cookie-container', { duration: 1, scale: 0.5, opacity: 0 });
});