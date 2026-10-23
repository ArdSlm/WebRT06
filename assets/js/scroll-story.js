/* Progressive enhancement: content is never hidden while awaiting animation. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet();
  const observer = new IntersectionObserver(entries => entries.forEach(({target,isIntersecting}) => {
    if (!isIntersecting) return;
    observer.unobserve(target);
    if (!reduced.matches) target.animate([
      {opacity:.3,transform:'translateY(20px)'}, {opacity:1,transform:'translateY(0)'}
    ], {duration:650,easing:'cubic-bezier(.22,1,.36,1)',delay:Number(target.dataset.storyDelay || 0)});
  }), {threshold:.12});
  function register() {
    document.querySelectorAll('.photo-heading, .hero-story, #sambutan .max-w-4xl, #statistik .grid > div, .organigram-card, .activity-card, .ronda-card, .editorial-gallery figure, .resident-services-heading').forEach((el,i) => {
      if (seen.has(el)) return;
      seen.add(el); el.dataset.storyDelay = (i % 3)*90; observer.observe(el);
    });
  }
  let frame=0;
  function update() {
    frame=0;
    document.body.classList.toggle('story-scrolled',scrollY>40);
    const hero=document.querySelector('.hero-photo');
    if(hero) hero.style.transform = reduced.matches || innerWidth<768 ? 'none' : `scale(${1.06-.06*Math.min(1,scrollY/innerHeight)})`;
  }
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  const mutations=new MutationObserver(register);
  register(); update(); mutations.observe(document.querySelector('main'),{childList:true,subtree:true});
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',schedule);
  addEventListener('pagehide',()=>{observer.disconnect();mutations.disconnect();cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);reduced.removeEventListener('change',schedule)},{once:true});
})();
