// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
export const beautimaxStyles = `
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:82px}
html,body{margin:0;padding:0;background:#f3f0e8;color:#10100f}
body{min-width:320px}
.beautimax-root{position:relative;width:100%;max-width:100%;overflow-x:hidden;background:#f3f0e8;color:#10100f;font-family:Archivo,Inter,system-ui,-apple-system,sans-serif}
.beautimax-shell{width:100%;max-width:1680px;margin:0 auto;padding-inline:clamp(20px,6.1vw,88px)}
.beautimax-shell>*{min-width:0}
.mono{font-family:"Necto Mono","SFMono-Regular",Menlo,Consolas,monospace;letter-spacing:.08em}
.muted{opacity:.8}
.section{padding:clamp(64px,5.85vw,84px) 0;border-top:1px solid rgba(16,16,15,.13);scroll-margin-top:82px}
.eyebrow{font-size:12px;text-transform:uppercase;margin:0 0 14px;opacity:.9}
h1,h2,h3,p{margin:0}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:11px 18px;background:#123a77;color:#fff;border:1px solid #123a77;border-radius:999px;text-decoration:none;font-size:13px;text-align:center}
.btn-outline{background:transparent;color:#123a77}
.line-icon{width:20px;height:20px;stroke:#123a77;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex:0 0 auto}
.nav{position:sticky;top:0;z-index:60;background:rgba(243,240,232,.94);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid rgba(16,16,15,.13)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;gap:clamp(12px,1.2vw,20px);padding:18px 0}
.brand{font-size:15px;font-weight:700;letter-spacing:.08em;color:#10100f;text-decoration:none;white-space:nowrap}
.nav-links{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:clamp(10px,1.1vw,16px);min-width:0}
.nav-links a,.drawer a{font-size:12px;color:#10100f;text-decoration:none}
.mobile-toggle{display:none;align-items:center;justify-content:center;min-width:44px;min-height:44px;background:none;border:1px solid rgba(16,16,15,.25);padding:8px 10px;border-radius:8px;color:#10100f}
.drawer{display:none;padding:2px 0 18px;flex-direction:column;gap:0;border-top:1px solid rgba(16,16,15,.13)}
.drawer a{display:flex;align-items:center;min-height:44px;border-bottom:1px solid rgba(16,16,15,.08)}
.hero{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);gap:clamp(24px,2.4vw,40px);align-items:center;padding:clamp(56px,5.15vw,74px) 0 clamp(72px,6.1vw,88px);scroll-margin-top:82px}
.h1{font-size:clamp(40px,4.45vw,64px);line-height:.95;letter-spacing:-.04em;margin:0 0 22px;text-wrap:balance}
.lead{font-size:clamp(16px,1.25vw,18px);line-height:1.45;margin:0 0 28px;max-width:720px}
.img-full{display:block;width:100%;height:auto;max-width:100%}
.market-title,.section-title{font-size:clamp(34px,3.35vw,48px);line-height:1;letter-spacing:-.03em;margin:0 0 16px;text-wrap:balance}
.market-map{margin:22px 0 26px}
.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.stat,.card{min-width:0;border:1px solid rgba(16,16,15,.16);background:rgba(255,255,255,.52);border-radius:12px;padding:16px}
.stat-value{font-size:clamp(25px,2.1vw,30px);line-height:1.05;letter-spacing:-.02em;margin-bottom:8px}
.stat-label{font-size:12px;overflow-wrap:anywhere}
.grid-2{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);gap:clamp(24px,2vw,32px)}
.pillars{display:grid;grid-template-columns:1fr;gap:12px}
.card-title{font-size:15px;margin:0 0 8px}
.card-copy{font-size:15px;line-height:1.4;overflow-wrap:anywhere}
.cap-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.cap-image{margin-top:14px;border-radius:10px;overflow:hidden}
.cap-image img{width:100%;height:auto;object-fit:contain}
.network-title{font-size:clamp(34px,3.2vw,46px);line-height:1;letter-spacing:-.03em;margin:0 0 16px;text-wrap:balance}
.network-stat{font-size:clamp(42px,3.65vw,52px);line-height:1;letter-spacing:-.03em;margin:18px 0 4px}
.brands-layout{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(260px,.92fr);gap:clamp(24px,3vw,48px);align-items:center}
.phone-frame{display:flex;justify-content:center;min-width:0}
.phone-frame img{display:block;max-width:320px;width:100%;height:auto}
.carousel{position:relative;max-width:100%;overflow:hidden;border-radius:12px;border:1px solid rgba(16,16,15,.16);touch-action:pan-y}
.slides{display:flex;transition:transform .45s ease;will-change:transform}
.slide{min-width:100%;max-width:100%}
.carousel-meta{display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:12px}
.carousel-nav{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.icon-btn{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:999px;border:1px solid #123a77;background:transparent;color:#123a77}
.dot{width:12px;height:12px;border-radius:999px;border:1px solid #123a77;background:transparent;padding:0}
.dot.active{background:#123a77}
.partnerships{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.contact-layout{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(24px,3vw,48px);align-items:center}
.contact-links a{color:#123a77;text-decoration:none;display:block;margin-top:10px;overflow-wrap:anywhere}
.footer{padding:24px 0 36px;border-top:1px solid rgba(16,16,15,.13);font-size:11px;letter-spacing:.04em}

@media (max-width:1180px){
  .nav-links{gap:10px}
  .nav-links a{font-size:11px}
  .nav-cta{display:none}
  .cap-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}

@media (max-width:960px){
  html{scroll-padding-top:76px}
  .section,.hero{scroll-margin-top:76px}
  .nav-links,.nav-cta{display:none}
  .mobile-toggle{display:inline-flex}
  .drawer{display:flex}
  .hero,.grid-2,.brands-layout,.contact-layout{grid-template-columns:1fr}
  .hero{align-items:start}
  .hero>div:first-child{max-width:780px}
  .hero>.img-full{max-width:760px;margin-inline:auto}
  .stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .partnerships{grid-template-columns:1fr}
  .phone-frame{order:2}
  .contact-layout>div:last-child{max-width:760px;margin-inline:auto}
}

@media (max-width:810px){
  .section{padding:clamp(56px,8vw,68px) 0}
  .h1{font-size:clamp(38px,8.2vw,50px)}
  .market-title,.section-title,.network-title{font-size:clamp(32px,6.2vw,40px)}
  .lead{font-size:16px}
  .cap-grid,.pillars{grid-template-columns:1fr}
  .carousel-meta{align-items:flex-start}
}

@media (max-width:520px){
  html{scroll-padding-top:70px}
  .section,.hero{scroll-margin-top:70px}
  .nav-inner{padding:12px 0}
  .brand{font-size:14px}
  .hero{gap:28px;padding:46px 0 60px}
  .h1{font-size:clamp(36px,10.25vw,40px);line-height:1.02}
  .market-title,.section-title,.network-title{font-size:clamp(30px,8.7vw,34px);line-height:1.04}
  .lead{line-height:1.5;margin-bottom:22px}
  .stats{gap:10px}
  .stat,.card{padding:14px}
  .stat-value{font-size:clamp(23px,7vw,28px)}
  .card-copy{font-size:14px;line-height:1.5}
  .cap-grid{gap:18px}
  .carousel-meta{flex-direction:column}
  .carousel-nav{width:100%;justify-content:space-between}
  .phone-frame img{max-width:280px}
  .contact-layout{gap:30px}
  .contact-layout .section-title{font-size:clamp(38px,11vw,46px);line-height:.98}
  .footer{font-size:10px;line-height:1.5}
}

@media (max-width:360px){
  .stats{grid-template-columns:1fr}
  .btn{width:100%}
}

@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .slides{transition:none}
}
`
