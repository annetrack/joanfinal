/* =========================================================
   ORIGINAL SCRIPT BLOCK 1
   ========================================================= */

const VOICEWORK_CTA_URL = "https://calendly.com/voicework-audioeditingservice/30min";

/* =========================================================
   ORIGINAL SCRIPT BLOCK 2
   ========================================================= */

/* EDIT ME: title/show are placeholders derived from the episode links — swap in the real episode titles and podcast/show names any time. */
const episodesData=[
  {yt:'ZYPE3QcqPdg',title:'A Fond Farewell and the Evolution to Childfree',show:'Podcast Client Feature',spotify:'https://open.spotify.com/episode/6Q42hVawW4dep16W8f3toY?si=4b34bd1844884c57',apple:'https://podcasts.apple.com/us/podcast/a-fond-farewell-and-the-evolution-to-childfree/id1637482639?i=1000741664126'},
  {yt:'dN7tqAdqzBM',title:'James McPartland on Rewriting Your Story',show:'Podcast Client Feature',spotify:'https://open.spotify.com/episode/0KXaFq1qTohrbOQbXckNHY?si=b7aa16477c30473a',apple:'https://podcasts.apple.com/us/podcast/james-mcpartland-on-rewriting-your-story-how-to-take/id1701141731?i=1000752865889'},
  {yt:'Bt91ASkNs5s',title:'The Cathedral Builders',show:'Podcast Client Feature',spotify:'https://open.spotify.com/episode/36dkCDw23OA3rzZRtzyGoG?si=011aa565a2224f8e',apple:'https://podcasts.apple.com/us/podcast/the-cathedral-builders/id1699229023?i=1000776122900'},
  {yt:'BhdUNiINAOA',title:'Are Wheelchairs Hurting Children\u2019s Hips?',show:'Podcast Client Feature',spotify:'https://open.spotify.com/episode/7wiuVucLhR5KXZWfbCrz8w?si=34321bb083bc443e',apple:'https://podcasts.apple.com/us/podcast/are-wheelchairs-hurting-childrens-hips-s2-ep1-with-dr/id1819677329?i=1000771951218'}
];
const ICON_YT='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.2c-.26-1-1.04-1.76-2.04-2C18.6 3.7 12 3.7 12 3.7s-6.6 0-8.46.5c-1 .24-1.78 1-2.04 2C1 8.06 1 12 1 12s0 3.94.5 5.8c.26 1 1.04 1.76 2.04 2 1.86.5 8.46.5 8.46.5s6.6 0 8.46-.5c1-.24 1.78-1 2.04-2 .5-1.86.5-5.8.5-5.8s0-3.94-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z"/></svg>';
const ICON_SPOTIFY='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.4a.62.62 0 0 1-.86.2c-2.36-1.44-5.33-1.77-8.84-.97a.62.62 0 1 1-.27-1.2c3.84-.88 7.14-.5 9.77 1.1a.62.62 0 0 1 .2.87Zm1.22-2.72a.78.78 0 0 1-1.07.25c-2.7-1.66-6.82-2.14-10.02-1.17a.78.78 0 1 1-.45-1.49c3.65-1.1 8.19-.57 11.29 1.34a.78.78 0 0 1 .25 1.07Zm.1-2.83c-3.24-1.92-8.6-2.1-11.7-1.16a.93.93 0 1 1-.54-1.79c3.56-1.08 9.48-.87 13.22 1.35a.93.93 0 1 1-.98 1.6Z"/></svg>';
const ICON_APPLE='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm0 4.4c1.9 0 3.44 1.55 3.44 3.46A3.45 3.45 0 0 1 12 12.8a3.45 3.45 0 0 1-3.44-3.44A3.45 3.45 0 0 1 12 5.9Zm0 15c-2.36 0-4.46-1.1-5.83-2.82.03-1.94 3.9-3 5.83-3s5.79 1.06 5.83 3A7.44 7.44 0 0 1 12 20.9Z"/></svg>';
const sets=document.querySelectorAll('#proof .set');
const epCards=episodesData.map(e=>`<div class="ep-card"><div class="ep-thumb"><img src="https://img.youtube.com/vi/${e.yt}/hqdefault.jpg" alt="Podcast episode thumbnail" loading="lazy"></div><div class="ep-info"><div class="ep-title">${e.title}</div><div class="ep-show">${e.show}</div></div><div class="ep-links"><a class="ep-icon" href="https://www.youtube.com/watch?v=${e.yt}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">${ICON_YT}</a><a class="ep-icon" href="${e.spotify}" target="_blank" rel="noopener noreferrer" aria-label="Listen on Spotify">${ICON_SPOTIFY}</a><a class="ep-icon" href="${e.apple}" target="_blank" rel="noopener noreferrer" aria-label="Listen on Apple Podcasts">${ICON_APPLE}</a></div></div>`).join('');
sets.forEach(s=>s.innerHTML=epCards);

function stage(el,t){document.querySelectorAll('.stage').forEach(x=>x.classList.remove('active'));el.classList.add('active');document.getElementById('detail').textContent=t}
const ep=document.getElementById('ep'),ln=document.getElementById('ln');
function calc(){let e=+ep.value,l=+ln.value,d=Math.round(e*l/60*8),c=e;document.getElementById('eo').textContent=e;document.getElementById('lo').textContent=l+' min';document.getElementById('diy').textContent=d+' hrs / mo';document.getElementById('cl').textContent=c+' hrs / mo';document.getElementById('sv').textContent=Math.max(0,d-c)+' hrs / mo'}
ep.oninput=ln.oninput=calc;calc();function booking(){document.getElementById('bm').classList.add('on');document.body.style.overflow='hidden'}function closeBooking(){document.getElementById('bm').classList.remove('on');document.body.style.overflow=''}function faq(b){let x=b.parentElement;let grp=x.closest('.faq-group');grp.querySelectorAll('.faqitem').forEach(i=>{if(i!==x){i.classList.remove('open');i.querySelector('span').textContent='⌄'}});x.classList.toggle('open');b.querySelector('span').textContent=x.classList.contains('open')?'⌃':'⌄'}
function faqTab(btn){document.querySelectorAll('.faq-tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');const cat=btn.dataset.cat;document.querySelectorAll('.faq-group').forEach(g=>g.classList.toggle('active',g.dataset.cat===cat))}document.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px')});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeVideo();closeBooking()}});

/* =========================================================
   ORIGINAL SCRIPT BLOCK 3
   ========================================================= */

/* Primary CTA controller — the single editable URL is VOICEWORK_CTA_URL in the Design Control Panel / CTA config section. */
document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll("a.primary-cta").forEach(function(link){
    link.href=VOICEWORK_CTA_URL;
    link.target="_blank";
    link.rel="noopener";
  });
});

/* =========================================================
   ORIGINAL SCRIPT BLOCK 4
   ========================================================= */

(function(){
  const init=()=>{
    /* Brand cleanup: Voice Work everywhere; only the About section uses JOAN in uppercase. */
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n=>{
      if(n.parentElement && n.parentElement.closest('.about')) return;
      n.nodeValue=n.nodeValue.replace(/Voiceworks/g,'Voice Work').replace(/VOICEWORKS/g,'VOICE WORK').replace(/JOAN/g,'Joan');
    });
    const about=document.querySelector('.about');
    if(about){
      about.querySelectorAll('.about-photo-inner').forEach(el=>el.textContent='JOAN');
      const eyebrow=about.querySelector('.ey'); if(eyebrow) eyebrow.textContent='ABOUT JOAN';
      const h2=about.querySelector('h2'); if(h2) h2.innerHTML=h2.innerHTML.replace(/Meet JOAN/g,'Meet Joan');
    }

    /* Rebuild trust icons with more recognizable visual marks. */
    const trustIcons=[
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M5 20c.6-3.4 2.9-5.3 7-5.3s6.4 1.9 7 5.3"/><path d="M4 4h16"/></svg>',
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/><path d="M7 4.8 5.3 3.2M17 4.8l1.7-1.6"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M7 20V5h10v15"/><path d="M4 20h16"/><path d="M10 9h4M10 13h4"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="m12 3 2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z"/><path d="M19 16v5M16.5 18.5h5"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v5h4M8 13h8M8 17h6"/></svg>'
    ];
    document.querySelectorAll('.trust-logo').forEach((item,i)=>{
      const icon=item.querySelector('.trust-icon');
      if(icon) icon.innerHTML=trustIcons[i%trustIcons.length];
    });

    /* Engine copy — concise and explicit. */
    const intro=document.querySelector('.engine-intro');
    if(intro) intro.textContent='Voice Work handles the production, repurposing, scheduling, and publishing that turn raw recordings into a complete content system.';

    /* Keep the calculator result as a clean 28 / HOURS PER MONTH presentation. */
    const metric=document.querySelector('.calc .metric.big');
    if(metric){
      const b=metric.querySelector('#sv');
      if(b){
        const number=(b.textContent.match(/\d+/)||['0'])[0];
        b.textContent=number;
        let unit=metric.querySelector('.reclaim-unit');
        if(!unit){unit=document.createElement('span');unit.className='reclaim-unit';metric.appendChild(unit)}
        unit.textContent='HOURS PER MONTH';
      }
    }
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

/* =========================================================
   ORIGINAL SCRIPT BLOCK 5
   ========================================================= */

(function(){
  function initVoiceworksV2(){
    /* Mobile navigation: reuse the existing desktop links. */
    const nav=document.querySelector('nav');
    const links=nav && nav.querySelector('.links');
    const cta=nav && nav.querySelector('.nav-cta');
    if(nav && links && !nav.querySelector('.nav-menu-toggle')){
      const toggle=document.createElement('button');
      toggle.className='nav-menu-toggle';
      toggle.type='button';
      toggle.setAttribute('aria-label','Open navigation');
      toggle.setAttribute('aria-expanded','false');
      toggle.innerHTML='<span></span>';
      nav.insertBefore(toggle,cta || null);
      const closeMenu=()=>{
        links.classList.remove('mobile-open');
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-label','Open navigation');
      };
      toggle.addEventListener('click',()=>{
        const open=links.classList.toggle('mobile-open');
        toggle.setAttribute('aria-expanded',String(open));
        toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
      });
      links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
      document.addEventListener('click',e=>{
        if(!nav.contains(e.target)) closeMenu();
      });
      window.addEventListener('resize',()=>{if(window.innerWidth>900) closeMenu();});
    }

    /* Make the six post-production trap items visually consistent with line icons. */
    const iconSvgs=[
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="m15 4 5 5-9 9H6v-5l9-9Z"/><path d="m13 6 5 5"/><path d="M4 20h8"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v5h4M8 13h8M8 17h6"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 14v5h14v-5"/></svg>',
      '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5M8 17h8"/></svg>',
      '<svg viewBox="0 0 24 24"><circle cx="7" cy="8" r="2.5"/><circle cx="17" cy="8" r="2.5"/><path d="M3.5 19c.4-3 1.7-4.5 3.5-4.5s3.1 1.5 3.5 4.5M13.5 19c.4-3 1.7-4.5 3.5-4.5s3.1 1.5 3.5 4.5"/></svg>'
    ];
    document.querySelectorAll('.pain > div').forEach((item,i)=>{
      if(!item.querySelector('.pain-icon')){
        const icon=document.createElement('span');
        icon.className='pain-icon';
        icon.setAttribute('aria-hidden','true');
        icon.innerHTML=iconSvgs[i] || iconSvgs[0];
        item.insertBefore(icon,item.firstChild);
      }
    });

    /* Clarify the engine sentence without changing its meaning. */
    const intro=document.querySelector('.engine-intro');
    if(intro){
      intro.textContent='Voice Work handles the production, repurposing, scheduling, and publishing that turn raw recordings into a complete content system.';
    }

    /* Calculator: keep the existing model, but initialize and bind defensively. */
    const ep=document.getElementById('ep');
    const ln=document.getElementById('ln');
    if(ep && ln){
      const updateCalc=()=>{
        const episodes=Number(ep.value)||0;
        const length=Number(ln.value)||0;
        const diy=Math.round((episodes*length/60)*8);
        const client=episodes;
        const saved=Math.max(0,diy-client);
        const eo=document.getElementById('eo');
        const lo=document.getElementById('lo');
        const diyEl=document.getElementById('diy');
        const cl=document.getElementById('cl');
        const sv=document.getElementById('sv');
        if(eo) eo.textContent=episodes;
        if(lo) lo.textContent=length+' min';
        if(diyEl) diyEl.textContent=diy+' hrs / mo';
        if(cl) cl.textContent=client+' hrs / mo';
        if(sv) sv.textContent=saved+' hrs / mo';
      };
      ep.addEventListener('input',updateCalc);
      ln.addEventListener('input',updateCalc);
      updateCalc();
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initVoiceworksV2);
  else initVoiceworksV2();
})();

/* =========================================================
   ORIGINAL SCRIPT BLOCK 6
   ========================================================= */

(function(){
  const run=()=>{
    /* Brand spelling: visible content uses Voice Work, never Voice Work. */
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n=>{
      n.nodeValue=n.nodeValue.replace(/VOICE WORK/g,'VOICE WORK').replace(/Voice Work/g,'Voice Work').replace(/voice work/g,'voice work');
      n.nodeValue=n.nodeValue.replace(/Joan/g,'Joan').replace(/Joan/g,'Joan');
    });

    /* Rebuild the trust marks as proper visual icons. */
    const trustIcons=[
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M5 20c.5-3.5 2.8-5.5 7-5.5s6.5 2 7 5.5"/><path d="M4 4h16M4 4v3M20 4v3"/></svg>',
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M8 20V5h8v15M5 20h14M10 9h4M10 13h4"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="m12 3 2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z"/><path d="M19 16v5M16.5 18.5h5"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v5h4M8 13h8M8 17h6"/></svg>'
    ];
    document.querySelectorAll('.trust-logo').forEach((item,i)=>{
      const icon=item.querySelector('.trust-icon');
      if(icon){ icon.innerHTML=trustIcons[i%trustIcons.length]; }
    });

    /* Make the calculator metric explicitly: 28 / HOURS PER MONTH. */
    const metric=document.querySelector('.calc .metric.big');
    if(metric){
      const b=metric.querySelector('#sv');
      if(b){
        const raw=b.textContent.trim();
        const number=(raw.match(/\d+/)||['0'])[0];
        b.textContent=number;
        let unit=metric.querySelector('.reclaim-unit');
        if(!unit){
          unit=document.createElement('span');
          unit.className='reclaim-unit';
          metric.appendChild(unit);
        }
        unit.textContent='HOURS PER MONTH';
      }
    }

    /* Keep the large metric synced with the existing calculator. */
    const ep=document.getElementById('ep'), ln=document.getElementById('ln'), sv=document.getElementById('sv');
    if(ep && ln && sv && !sv.dataset.reclaimBound){
      const sync=()=>{
        const episodes=Number(ep.value)||0;
        const length=Number(ln.value)||0;
        const diy=Math.round((episodes*length/60)*8);
        const saved=Math.max(0,diy-episodes);
        sv.textContent=String(saved);
      };
      ep.addEventListener('input',sync);
      ln.addEventListener('input',sync);
      sv.dataset.reclaimBound='true';
      sync();
    }

    /* Fix the proof copy to the final brand spelling if it exists. */
    document.querySelectorAll('title, meta[content], [aria-label]').forEach(el=>{
      if(el.hasAttribute('content')) el.setAttribute('content',el.getAttribute('content').replace(/Voice Work/g,'Voice Work'));
      if(el.hasAttribute('aria-label')) el.setAttribute('aria-label',el.getAttribute('aria-label').replace(/Voice Work/g,'Voice Work'));
    });
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
})();