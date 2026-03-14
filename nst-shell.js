/* NoServerTools — shared shell v2.0
   Usage: <script src="/nst-shell.js"></script>  anywhere in <body>
   It injects: sticky nav, lang switcher, decorative blobs, donation footer
   The current page URL is used to highlight the active nav link.
*/
(function(){
'use strict';

/* ── Logo (32px NST mark) ── */
const LOGO_SRC = 'data:image/png;base64,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';

/* ── Navigation links ── */
const TOOLS = [
  {label:'Merge',    href:'/merge-pdf/'},
  {label:'Compress', href:'/compress-pdf/'},
  {label:'Split',    href:'/split-pdf/'},
  {label:'JPG↔PDF',  href:'/pdf-to-jpg/'},
  {label:'Rotate',   href:'/rotate-pdf/'},
  {label:'Protect',  href:'/protect-pdf/'},
  {label:'Unlock',   href:'/unlock-pdf/'},
  {label:'Edit',     href:'/edit-pdf/'},
  {label:'Delete',   href:'/delete-pages/'},
  {label:'Reorder',  href:'/reorder-pages/'},
];

/* ── i18n strings ── */
const I18N = {
  en:{back:'All tools',privacy:'Zero uploads · Zero servers · Zero tracking',free:'Free forever · No limits · No accounts'},
  es:{back:'Todas las herramientas',privacy:'Sin subidas · Sin servidores · Sin rastreo',free:'Gratis siempre · Sin límites · Sin cuentas'},
  pt:{back:'Todas as ferramentas',privacy:'Sem uploads · Sem servidores · Sem rastreio',free:'Grátis sempre · Sem limites · Sem contas'},
  fr:{back:'Tous les outils',privacy:'Zéro upload · Zéro serveur · Zéro suivi',free:'Gratuit pour toujours · Sans limites'},
  de:{back:'Alle Werkzeuge',privacy:'Keine Uploads · Keine Server · Kein Tracking',free:'Kostenlos für immer · Keine Grenzen'},
};
const FLAGS={en:'🇺🇸',es:'🇪🇸',pt:'🇧🇷',fr:'🇫🇷',de:'🇩🇪'};
const LABELS={en:'EN',es:'ES',pt:'PT',fr:'FR',de:'DE'};
const LANGS=Object.keys(FLAGS);

function getLang(){
  const s=localStorage.getItem('nst_lang');
  if(s&&FLAGS[s])return s;
  const n=(navigator.language||'en').toLowerCase().slice(0,2);
  return FLAGS[n]?n:'en';
}
let CUR=getLang();
function t(k){return(I18N[CUR]||I18N.en)[k]||'';}

/* ── CSS ── */
const CSS = `
#nst-shell-nav{position:sticky;top:0;z-index:200;height:54px;border-bottom:1px solid rgba(255,255,255,.07);backdrop-filter:blur(16px);background:rgba(14,17,23,.82);}
#nst-nav-inner{max-width:1200px;margin:0 auto;height:54px;display:flex;align-items:center;gap:14px;padding:0 20px;}
#nst-logo{display:flex;align-items:center;gap:9px;text-decoration:none;flex-shrink:0;}
#nst-logo img{width:28px;height:28px;border-radius:50%;object-fit:cover;display:block;}
#nst-logo-text{font-family:'Syne',sans-serif;font-size:15px;font-weight:800;color:#fff;white-space:nowrap;}
#nst-logo-text span{color:#5a87ff;}
#nst-back{display:flex;align-items:center;gap:5px;color:rgba(255,255,255,.4);font-size:12px;text-decoration:none;white-space:nowrap;padding:4px 8px;border-radius:6px;transition:color .15s,background .15s;flex-shrink:0;}
#nst-back:hover{color:rgba(255,255,255,.8);background:rgba(255,255,255,.06);}
#nst-nav-links{display:flex;gap:2px;overflow-x:auto;flex:1;scrollbar-width:none;}
#nst-nav-links::-webkit-scrollbar{display:none;}
.nst-nl{color:rgba(255,255,255,.38);text-decoration:none;font-size:12px;padding:4px 9px;border-radius:6px;transition:color .15s,background .15s;white-space:nowrap;font-family:'Outfit',sans-serif;}
.nst-nl:hover{color:rgba(255,255,255,.8);background:rgba(255,255,255,.06);}
.nst-nl.active{color:#5a87ff;background:rgba(90,135,255,.12);font-weight:600;}

#nst-ls{position:fixed;top:12px;right:12px;z-index:9999;font-family:'DM Mono',monospace;}
#nst-ls-btn{display:flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(14,17,23,.88);border:1px solid rgba(90,135,255,.32);border-radius:8px;color:rgba(255,255,255,.7);font-size:11px;cursor:pointer;backdrop-filter:blur(12px);letter-spacing:.04em;transition:border-color .15s;}
#nst-ls-btn:hover{border-color:rgba(90,135,255,.7);color:#fff;}
#nst-ls-menu{display:none;position:absolute;top:calc(100% + 5px);right:0;background:rgba(14,17,23,.97);border:1px solid rgba(90,135,255,.18);border-radius:10px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.55);min-width:138px;}
#nst-ls-menu.open{display:block;}
.nst-ls-opt{display:flex;align-items:center;gap:9px;width:100%;padding:9px 14px;background:none;border:none;color:rgba(255,255,255,.65);font-size:12px;font-family:'DM Mono',monospace;cursor:pointer;text-align:left;letter-spacing:.03em;transition:background .12s,color .12s;}
.nst-ls-opt:hover{background:rgba(90,135,255,.1);color:#fff;}
.nst-ls-opt.active{color:#5a87ff;background:rgba(90,135,255,.08);}

.nst-blob{position:fixed;border-radius:50%;pointer-events:none;z-index:0;}
.nst-blob-a{width:680px;height:680px;background:radial-gradient(circle,rgba(55,80,255,.09) 0%,transparent 65%);top:-200px;left:-150px;}
.nst-blob-b{width:540px;height:540px;background:radial-gradient(circle,rgba(120,60,255,.07) 0%,transparent 65%);top:280px;right:-150px;}

#nst-privacy-strip{max-width:1200px;margin:0 auto;padding:0 20px 16px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;}
.nst-pi{display:flex;align-items:center;gap:7px;}
.nst-pdot{width:6px;height:6px;border-radius:50%;background:#4ade80;flex-shrink:0;}
.nst-plabel{font-size:13px;color:rgba(255,255,255,.55);}

#nst-footer{position:relative;z-index:1;border-top:1px solid rgba(255,255,255,.07);background:rgba(0,0,0,.25);padding:24px 20px 28px;}
#nst-footer-inner{max-width:1200px;margin:0 auto;}
.nst-ft-links{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px;}
.nst-ft-link{color:rgba(255,255,255,.3);text-decoration:none;font-size:12px;padding:4px 10px;border:1px solid rgba(255,255,255,.07);border-radius:6px;transition:all .2s;font-family:'Outfit',sans-serif;}
.nst-ft-link:hover{color:#5a87ff;border-color:rgba(90,135,255,.3);}
#nst-footer-copy{font-size:11px;color:rgba(255,255,255,.2);font-family:'DM Mono',monospace;}
`;

/* ── Build nav HTML ── */
function buildNav(){
  const path=location.pathname;
  const isHome=path==='/'||path==='/index.html';
  const backBtn=!isHome?`<a id="nst-back" href="/"> ← <span id="nst-back-lbl">${t('back')}</span></a>`:'';
  const links=TOOLS.map(({label,href})=>{
    const active=path===href?' active':'';
    return `<a class="nst-nl${active}" href="${href}">${label}</a>`;
  }).join('');
  return `
<nav id="nst-shell-nav" role="navigation" aria-label="Main navigation">
  <div id="nst-nav-inner">
    <a id="nst-logo" href="/">
      <img src="${LOGO_SRC}" alt="NoServerTools" width="28" height="28">
      <span id="nst-logo-text">NoServer<span>Tools</span></span>
    </a>
    ${backBtn}
    <div id="nst-nav-links">${links}</div>
  </div>
</nav>`;
}

/* ── Build lang switcher ── */
function buildLS(){
  const opts=LANGS.map(l=>`<button class="nst-ls-opt${l===CUR?' active':''}" data-lang="${l}">${FLAGS[l]}&nbsp; ${l.toUpperCase()}</button>`).join('');
  return `
<div id="nst-ls" role="navigation" aria-label="Language selector">
  <button id="nst-ls-btn" aria-haspopup="true" aria-expanded="false">
    <span id="nst-ls-flag">${FLAGS[CUR]}</span><span id="nst-ls-lbl">${LABELS[CUR]}</span>
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M1 1l3.5 4L8 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
  </button>
  <div id="nst-ls-menu" role="menu">${opts}</div>
</div>`;
}

/* ── Build footer ── */
function buildFooter(){
  const ftLinks=TOOLS.map(({label,href})=>`<a class="nst-ft-link" href="${href}">${label} PDF</a>`).join('');
  const pills=`<div id="nst-privacy-strip">
    <div class="nst-pi"><div class="nst-pdot"></div><span class="nst-plabel">No file uploads</span></div>
    <div class="nst-pi"><div class="nst-pdot"></div><span class="nst-plabel">Local processing</span></div>
    <div class="nst-pi"><div class="nst-pdot"></div><span class="nst-plabel">No accounts</span></div>
    <div class="nst-pi"><div class="nst-pdot"></div><span class="nst-plabel">No tracking</span></div>
    <div class="nst-pi"><div class="nst-pdot"></div><span class="nst-plabel">Free forever</span></div>
  </div>`;
  return `
${pills}
<footer id="nst-footer">
  <div id="nst-footer-inner">
    <div class="nst-ft-links">${ftLinks}</div>
    <div id="nst-footer-copy">NoServerTools — Your files never leave your computer.</div>
  </div>
</footer>`;
}

/* ── Inject CSS ── */
function injectCSS(){
  const s=document.createElement('style');
  s.id='nst-shell-css';
  s.textContent=CSS;
  document.head.appendChild(s);
}

/* ── Apply lang ── */
function applyLang(lang){
  CUR=lang;
  localStorage.setItem('nst_lang',lang);
  const f=document.getElementById('nst-ls-flag');
  const l=document.getElementById('nst-ls-lbl');
  if(f) f.textContent=FLAGS[lang];
  if(l) l.textContent=LABELS[lang];
  document.querySelectorAll('.nst-ls-opt').forEach(b=>{
    b.classList.toggle('active',b.dataset.lang===lang);
  });
  const back=document.getElementById('nst-back-lbl');
  if(back) back.textContent=t('back');
  /* fire custom event so tool pages can hook in */
  document.dispatchEvent(new CustomEvent('nst:lang',{detail:{lang}}));
}

/* ── Wire lang switcher events ── */
function wireLs(){
  const btn=document.getElementById('nst-ls-btn');
  const menu=document.getElementById('nst-ls-menu');
  if(!btn||!menu)return;
  btn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
    if(open){
      setTimeout(()=>{
        document.addEventListener('click',function outside(e){
          if(!document.getElementById('nst-ls').contains(e.target)){
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded','false');
            document.removeEventListener('click',outside);
          }
        });
      },10);
    }
  });
  menu.querySelectorAll('.nst-ls-opt').forEach(b=>{
    b.addEventListener('click',()=>{
      applyLang(b.dataset.lang);
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
}

/* ── Init ── */
function init(){
  injectCSS();

  /* Blobs — only if body doesn't already have them */
  if(!document.querySelector('.nst-blob-a')){
    const ba=document.createElement('div');
    ba.className='nst-blob nst-blob-a';
    const bb=document.createElement('div');
    bb.className='nst-blob nst-blob-b';
    document.body.prepend(bb);
    document.body.prepend(ba);
  }

  /* Nav — inject before first child of body that's not a blob */
  if(!document.getElementById('nst-shell-nav')){
    const navEl=document.createElement('div');
    navEl.innerHTML=buildNav();
    const first=document.body.querySelector(':not(.nst-blob):not(script):not(style):not(#nst-ls)');
    if(first) document.body.insertBefore(navEl.firstElementChild,first);
    else document.body.prepend(navEl.firstElementChild);
  }

  /* Lang switcher */
  if(!document.getElementById('nst-ls')){
    const lsEl=document.createElement('div');
    lsEl.innerHTML=buildLS();
    document.body.appendChild(lsEl.firstElementChild);
  }
  wireLs();

  /* Footer */
  if(!document.getElementById('nst-footer')){
    const ftEl=document.createElement('div');
    ftEl.innerHTML=buildFooter();
    while(ftEl.firstChild) document.body.appendChild(ftEl.firstChild);
  }

  /* Remove old duplicate nav/lang switcher that may be hardcoded in the HTML */
  /* We identify them by checking for the old #ls id (not nst-ls) */
  const oldLs=document.getElementById('ls');
  if(oldLs) oldLs.remove();
  /* Remove old <header> if it has the nav-inner pattern — only on tool pages */
  const path=location.pathname;
  if(path!=='/'&&path!=='/index.html'){
    const oldHeader=document.querySelector('header:not(#nst-shell-nav)');
    if(oldHeader&&oldHeader.querySelector('.nav-inner')){
      oldHeader.remove();
    }
    /* Also remove old sticky nav elements */
    document.querySelectorAll('nav:not(#nst-shell-nav)').forEach(n=>{
      if(n.querySelector('.nav-inner')||n.id==='') n.remove();
    });
  }

  applyLang(CUR);
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
} else {
  init();
}

})();
