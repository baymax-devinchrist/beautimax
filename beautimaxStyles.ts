// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
export const beautimaxStyles = `
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#f3f0e8;color:#10100f}
.beautimax-root{position:relative;width:100%;max-width:100%;overflow-x:hidden;background:#f3f0e8;color:#10100f;font-family:Archivo,Inter,system-ui,-apple-system,sans-serif}
.beautimax-shell{width:100%;max-width:1680px;margin:0 auto;padding:0 88px}
.mono{font-family:"Necto Mono","SFMono-Regular",Menlo,Consolas,monospace;letter-spacing:.08em}
.muted{opacity:.8}
.section{padding:84px 0;border-top:1px solid rgba(16,16,15,.13)}
.eyebrow{font-size:12px;text-transform:uppercase;margin:0 0 14px;opacity:.9}
h1,h2,h3,p{margin:0}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:11px 18px;background:#123a77;color:#fff;border:1px solid #123a77;border-radius:999px;text-decoration:none;font-size:13px}
.btn-outline{background:transparent;color:#123a77}
.line-icon{width:20px;height:20px;stroke:#123a77;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex:0 0 auto}
.nav{position:sticky;top:0;z-index:60;background:rgba(243,240,232,.94);backdrop-filter:blur(8px);border-bottom:1px solid rgba(16,16,15,.13)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 0}
.brand{font-size:15px;font-weight:700;letter-spacing:.08em;color:#10100f;text-decoration:none;white-space:nowrap}
.nav-links{display:flex;flex-wrap:wrap;gap:16px}
.nav-links a,.drawer a{font-size:12px;color:#10100f;text-decoration:none}
.mobile-toggle{display:none;background:none;border:1px solid rgba(16,16,15,.25);padding:8px 10px;border-radius:8px;color:#10100f}
.drawer{display:none;padding:0 0 14px;flex-direction:column;gap:10px}
.hero{display:grid;grid-template-columns:1.08fr .92fr;gap:34px;align-items:center;padding:74px 0 88px}
.h1{font-size:64px;line-height:.95;letter-spacing:-.04em;margin:0 0 22px}
.lead{font-size:18px;line-height:1.45;margin:0 0 28px;max-width:720px}
.img-full{display:block;width:100%;height:auto;max-width:100%}
.market-title,.section-title{font-size:48px;line-height:1;letter-spacing:-.03em;margin:0 0 16px}
.market-map{margin:22px 0 26px}
.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.stat,.card{border:1px solid rgba(16,16,15,.16);background:rgba(255,255,255,.52);border-radius:12px;padding:16px}
.stat-value{font-size:30px;line-height:1.05;letter-spacing:-.02em;margin-bottom:8px}
.stat-label{font-size:12px}
.grid-2{display:grid;grid-template-columns:1.08fr .92fr;gap:28px}
.pillars{display:grid;grid-template-columns:1fr;gap:12px}
.card-title{font-size:15px;margin:0 0 8px}
.card-copy{font-size:15px;line-height:1.4}
.cap-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.cap-image{margin-top:14px;border-radius:10px;overflow:hidden}
.network-title{font-size:46px;line-height:1;letter-spacing:-.03em;margin:0 0 16px}
.network-stat{font-size:52px;line-height:1;letter-spacing:-.03em;margin:18px 0 4px}
.brands-layout{display:grid;grid-template-columns:1.08fr .92fr;gap:24px;align-items:center}
.phone-frame{display:flex;justify-content:center}
.phone-frame img{max-width:320px;width:100%;height:auto}
.carousel{position:relative;overflow:hidden;border-radius:12px;border:1px solid rgba(16,16,15,.16)}
.slides{display:flex;transition:transform .45s ease}
.slide{min-width:100%}
.carousel-meta{display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:12px}
.carousel-nav{display:flex;align-items:center;gap:8px}
.icon-btn{width:34px;height:34px;border-radius:999px;border:1px solid #123a77;background:transparent;color:#123a77}
.dot{width:10px;height:10px;border-radius:999px;border:1px solid #123a77;background:transparent}
.dot.active{background:#123a77}
.partnerships{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.contact-layout{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:center}
.contact-links a{color:#123a77;text-decoration:none;display:block;margin-top:10px}
.footer{padding:24px 0 36px;border-top:1px solid rgba(16,16,15,.13);font-size:11px;letter-spacing:.04em}
@media (max-width:1440px){
  .beautimax-shell{padding:0 32px}
  .hero,.grid-2,.brands-layout,.contact-layout{grid-template-columns:1fr}
  .h1{font-size:52px}
  .market-title,.section-title,.network-title{font-size:40px}
  .stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .cap-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .partnerships{grid-template-columns:1fr}
  .phone-frame{order:2}
}
@media (max-width:810px){
  .beautimax-shell{padding:0 20px}
  .section{padding:68px 0}
  .h1{font-size:38px}
  .market-title,.section-title,.network-title{font-size:32px}
  .lead{font-size:16px}
  .nav-links,.nav-cta{display:none}
  .mobile-toggle{display:inline-flex}
  .drawer{display:flex}
  .cap-grid,.pillars{grid-template-columns:1fr}
  .stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .carousel-meta{flex-direction:column;align-items:flex-start}
}
`