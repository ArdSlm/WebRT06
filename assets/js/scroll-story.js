/* Progressive enhancement: content is never hidden while awaiting animation. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet();
  const pending = new Set();
  const running = new Set();
  const observer = new IntersectionObserver(entries => entries.forEach(({target,isIntersecting}) => {
    if (!isIntersecting) return;
    observer.unobserve(target);
    pending.delete(target);
    if (!reduced.matches) {
    const animation = target.animate([
      {opacity:.3,transform:'translateY(20px)'}, {opacity:1,transform:'translateY(0)'}
    ], {duration:target.matches('.activity-card, .editorial-gallery figure, #sambutan .max-w-4xl') ? 1200 : 900,easing:'cubic-bezier(.22,1,.36,1)',delay:Number(target.dataset.storyDelay || 0),fill:'backwards'});
    running.add(animation);
    animation.finished.catch(()=>{}).finally(()=>running.delete(animation));
    }
  }), {threshold:.12});
  function register() {
    document.querySelectorAll('.photo-heading, .hero-story, #sambutan .max-w-4xl, #statistik .grid > div, .organigram-card, .activity-card, .ronda-card, .editorial-gallery figure, .resident-services-heading').forEach((el,i) => {
      if (seen.has(el)) return;
      seen.add(el); pending.add(el); el.dataset.storyDelay = (i % 3)*150; observer.observe(el);
    });
  }
  let frame=0;
  function update() {
    frame=0;
    if (reduced.matches) running.forEach(animation=>animation.cancel());
    document.body.classList.toggle('story-scrolled',scrollY>40);
    const hero=document.querySelector('.hero-photo');
    if(hero) hero.style.transform = reduced.matches || innerWidth<768 ? 'none' : `scale(${1.06-.06*Math.min(1,scrollY/innerHeight)})`;
  }
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  // Legacy links remain useful without recreating the removed public section.
  const redirectLegacy=()=>{if(location.hash==='#pengumuman'){history.replaceState(null,'','#layanan');document.getElementById('layanan')?.scrollIntoView();}};
  addEventListener('hashchange',redirectLegacy);redirectLegacy();
  const mutations=new MutationObserver(register);
  register(); update(); mutations.observe(document.querySelector('main'),{childList:true,subtree:true});
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',schedule);
  addEventListener('pagehide',()=>{observer.disconnect();mutations.disconnect();running.forEach(animation=>animation.cancel());cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);reduced.removeEventListener('change',schedule)},{once:true});
  addEventListener('pageshow',event=>{if(event.persisted){addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',schedule);mutations.observe(document.querySelector('main'),{childList:true,subtree:true});pending.forEach(el=>{if(el.isConnected)observer.observe(el);else pending.delete(el)});register();update();}});
})();
