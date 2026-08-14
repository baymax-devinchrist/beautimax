export const beautimaxStyles = `
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:76px}
html,body{margin:0;padding:0;background:#f4f1e9;color:#10100f}
body{min-width:320px}
button,a{-webkit-tap-highlight-color:transparent}
.beautimax-root{position:relative;width:100%;overflow:hidden;background:#f4f1e9;color:#10100f;font-family:Archivo,Arial,Helvetica,sans-serif}
.beautimax-shell{width:min(100%,1680px);margin-inline:auto;padding-inline:clamp(22px,7.55vw,145px)}
.beautimax-shell>*{min-width:0}
.mono{font-family:"SFMono-Regular",Menlo,Consolas,monospace;letter-spacing:.08em}
.muted{opacity:.82}
h1,h2,h3,p,figure{margin:0}
.section{position:relative;padding:clamp(76px,7.3vw,140px) 0;scroll-margin-top:76px}
.section-title,.market-title,.network-title{font-size:clamp(38px,3.35vw,64px);line-height:.96;letter-spacing:-.055em;text-wrap:balance}
.card-copy{font-size:clamp(15px,1.05vw,20px);line-height:1.48}
.eyebrow{font-size:clamp(14px,1.05vw,20px);line-height:1.05;font-weight:800;margin-bottom:4px}
.img-full{display:block;width:100%;max-width:100%;height:auto}
.btn{display:inline-flex;align-items:center;justify-content:space-between;gap:32px;min-width:240px;min-height:56px;padding:15px 24px;background:#111;color:#fff;border:1px solid #111;border-radius:0;text-decoration:none;font-size:14px;font-weight:700}
.btn::after{content:"→";font-size:22px;font-weight:400;line-height:1}
.line-icon{display:block;width:64px;height:64px;stroke:#161615;fill:none;stroke-width:1.25;stroke-linecap:round;stroke-linejoin:round}
.framer-svg-icon{flex:0 0 auto}
.framer-svg-icon svg{display:block;width:100%;height:100%;overflow:visible}

.nav{position:sticky;top:0;z-index:60;background:rgba(244,241,233,.94);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.nav-inner{height:92px;display:flex;align-items:center;justify-content:space-between;gap:32px}
.brand{display:flex;align-items:center;gap:17px;color:#111;text-decoration:none;white-space:nowrap;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:800;letter-spacing:.17em}
.brand img{width:29px;height:54px;object-fit:contain}
.nav-links{display:flex;align-items:center;justify-content:flex-end;gap:clamp(19px,2.05vw,40px);margin-left:auto}
.nav-links a,.drawer a{font-family:"SFMono-Regular",Menlo,Consolas,monospace;font-size:12px;letter-spacing:.13em;color:#10100f;text-decoration:none}
.nav-cta{display:none}
.mobile-toggle{display:none;min-height:44px;padding:0;border:0;background:transparent;color:#10100f;font-family:"SFMono-Regular",Menlo,Consolas,monospace;font-size:12px;letter-spacing:.12em}
.drawer{display:none;padding:4px 0 18px;flex-direction:column;background:#f4f1e9;border-top:1px solid rgba(16,16,15,.15)}
.drawer a{display:flex;align-items:center;min-height:46px;border-bottom:1px solid rgba(16,16,15,.1)}

#home{scroll-margin-top:76px}
.hero{display:grid;grid-template-columns:minmax(430px,.78fr) minmax(620px,1.22fr);align-items:center;min-height:720px;padding:38px 0 72px}
.hero-copy{position:relative;z-index:2;padding-top:38px}
.h1{max-width:760px;font-size:clamp(52px,4.15vw,80px);line-height:1.03;letter-spacing:-.062em;text-wrap:balance;margin-bottom:38px}
.lead{max-width:690px;font-size:clamp(17px,1.16vw,22px);line-height:1.42;margin-bottom:28px}
.hero-visual{width:126%;max-width:none;margin-left:-21%;pointer-events:none}

.market-section{padding-top:0}
.market-stage{position:relative;min-height:670px;display:grid;align-items:start;overflow:hidden}
.market-map{grid-area:1/1;width:100%;min-height:610px;object-fit:cover;object-position:center}
.market-overlay{grid-area:1/1;position:relative;z-index:1;display:flex;min-height:610px;flex-direction:column;padding:58px 28px 28px}
.market-title{max-width:1200px;font-size:clamp(42px,3.45vw,66px)}
.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:auto}
.stat{min-width:0;padding:20px 28px 12px 16px;border-right:1px solid rgba(16,16,15,.18)}
.stat:last-child{border-right:0}
.stat .line-icon{width:72px;height:72px;margin-bottom:5px}
.stat-value{font-size:clamp(38px,3.2vw,61px);font-weight:800;line-height:.96;letter-spacing:-.045em;margin-bottom:10px}
.stat-label{font-size:clamp(13px,1.12vw,21px);line-height:1.25;overflow-wrap:anywhere}

.about-layout{display:grid;grid-template-columns:minmax(420px,.82fr) minmax(0,2.18fr);gap:46px;align-items:start}
.about-copy .section-title{max-width:510px}
.about-copy p{max-width:565px;margin-top:25px}
.about-copy p:last-child{font-weight:700}
.pillars{display:grid;grid-template-columns:repeat(5,minmax(0,1fr))}
.pillar{min-width:0;min-height:335px;padding:22px 20px;border-left:1px solid rgba(16,16,15,.18)}
.pillar .line-icon{width:76px;height:76px;margin-bottom:14px}
.card-title{font-size:clamp(13px,.93vw,18px);line-height:1.05;font-weight:800;margin-bottom:20px}
.pillar .card-copy{font-size:clamp(13px,.82vw,16px);line-height:1.45;color:#4b4945}

.capabilities-section{padding-top:80px}
.cap-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:38px;margin-top:72px}
.capability{min-width:0}
.cap-image{width:100%;aspect-ratio:1.15/1;margin-bottom:28px;display:flex;align-items:flex-end;justify-content:center}
.cap-image img{width:112%;max-width:none;height:100%;object-fit:contain}
.capability:nth-child(1) .eyebrow,.capability:nth-child(1) .card-title{color:#7da99d}
.capability:nth-child(2) .eyebrow,.capability:nth-child(2) .card-title{color:#7562a8}
.capability:nth-child(3) .eyebrow,.capability:nth-child(3) .card-title{color:#2d72dc}
.capability:nth-child(4) .eyebrow,.capability:nth-child(4) .card-title{color:#285e4b}
.capability .card-title{font-size:clamp(18px,1.35vw,26px);margin-bottom:34px}
.capability .card-copy{font-weight:700;font-size:clamp(14px,.95vw,18px);line-height:1.35}

.network-header{max-width:1500px}
.network-header .card-copy{margin-top:20px;max-width:1450px}
.network-visual{display:grid;grid-template-columns:250px minmax(0,1fr);align-items:center;gap:36px;margin-top:65px}
.network-stat{font-size:clamp(58px,5vw,96px);line-height:.95;letter-spacing:-.04em;color:#12418b;margin-bottom:18px}
.network-label{font-size:clamp(18px,1.35vw,26px);line-height:1.35;letter-spacing:0}
.network-art{width:113%;max-width:none;margin-left:-7%}

.brands-layout{display:grid;grid-template-columns:330px minmax(0,1fr);gap:55px;align-items:center}
.brands-copy .section-title{font-size:clamp(44px,3.35vw,64px);max-width:330px}
.brands-copy .card-copy{margin-top:32px;max-width:330px}
.brand-stage{position:relative;min-width:0;padding-right:238px}
.carousel{position:relative;min-width:0;overflow:hidden;touch-action:pan-y}
.slides{display:grid;grid-template-columns:repeat(4,minmax(210px,1fr));gap:18px;transition:opacity .3s ease}
.slide{min-width:0;border:1px solid rgba(16,16,15,.2);border-radius:7px;overflow:hidden;background:#f4f1e9}
.slide img{width:100%;aspect-ratio:.82/1;object-fit:cover}
.phone-frame{position:absolute;right:-14px;bottom:-8px;width:270px;z-index:3;pointer-events:none}
.phone-frame img{display:block;width:100%;height:auto}
.carousel-meta{display:flex;align-items:center;justify-content:flex-end;margin-top:16px;padding-right:10px}
.carousel-meta>p{display:none}
.carousel-nav{display:flex;align-items:center;gap:8px}
.icon-btn{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border:0;border-radius:50%;background:rgba(16,16,15,.18);color:#fff;font-size:19px;cursor:pointer}
.dot{width:9px;height:9px;border-radius:50%;border:1px solid #777;background:transparent;padding:0}
.dot.active{background:#777}

.partnerships{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:84px;margin-top:52px}
.partnership-card{min-height:285px;border:2px solid #d8d2c6;border-radius:10px;padding:28px 30px}
.partnership-card .line-icon{width:74px;height:74px;margin-bottom:14px}
.partnership-card .card-title{font-size:clamp(18px,1.35vw,26px);margin-bottom:14px}
.partnership-card .card-copy{font-size:clamp(14px,.96vw,18px)}

.contact-section{padding-bottom:0}
.contact-layout{display:grid;grid-template-columns:minmax(420px,.85fr) minmax(0,1.15fr);gap:70px;align-items:center;min-height:520px}
.contact-copy .section-title{max-width:650px;font-size:clamp(58px,4.45vw,86px)}
.contact-action{align-self:center}
.contact-action .btn{width:100%;min-height:62px;padding-inline:54px}
.contact-links{display:flex;gap:72px;font-size:13px;margin-top:25px}
.contact-links a{color:#10100f;text-decoration:none;overflow-wrap:anywhere}
.contact-art{margin-top:45px}
.footer{padding:26px 0 34px;font-size:10px;letter-spacing:.08em}

@media (max-width:1280px){
  .beautimax-shell{padding-inline:clamp(30px,6.1vw,78px)}
  .nav-links{gap:18px}.nav-links a{font-size:10px}
  .hero{grid-template-columns:minmax(380px,.86fr) minmax(530px,1.14fr);min-height:640px}
  .h1{font-size:clamp(50px,4.5vw,60px)}
  .market-stage,.market-overlay{min-height:570px}.market-map{min-height:570px}
  .about-layout{grid-template-columns:330px minmax(0,1fr);gap:28px}.pillar{padding-inline:14px}
  .cap-grid{gap:22px}.brands-layout{grid-template-columns:280px minmax(0,1fr);gap:35px}
  .brand-stage{padding-right:190px}.phone-frame{width:220px}.partnerships{gap:34px}
}

@media (max-width:980px){
  html{scroll-padding-top:72px}.section,#home{scroll-margin-top:72px}
  .nav-inner{height:72px}.nav-links,.nav-cta{display:none}.mobile-toggle{display:block}.drawer{display:flex}
  .hero{grid-template-columns:1fr;min-height:0;padding:60px 0 48px;gap:25px}.hero-copy{padding:0;max-width:740px}.hero-visual{width:110%;margin-left:-5%}
  .market-stage{min-height:0}.market-map{grid-area:auto;min-height:0;order:2}.market-overlay{grid-area:auto;min-height:0;padding:0;display:contents}
  .market-title{order:1;margin-bottom:30px}.stats{order:3;margin-top:-16%;position:relative;z-index:2;padding-inline:10px}
  .stat{padding:16px 12px}.stat .line-icon{width:58px;height:58px}.stat-value{font-size:clamp(32px,5vw,46px)}
  .about-layout{grid-template-columns:1fr;gap:55px}.about-copy .section-title,.about-copy p{max-width:720px}.pillars{grid-template-columns:repeat(3,1fr)}.pillar{min-height:270px}.pillar:nth-child(4),.pillar:nth-child(5){border-top:1px solid rgba(16,16,15,.18)}
  .cap-grid{grid-template-columns:repeat(2,1fr);gap:58px 32px}.capability .card-title{margin-bottom:18px}
  .network-visual{grid-template-columns:190px 1fr;gap:15px}.network-art{width:110%}
  .brands-layout{grid-template-columns:1fr;gap:46px}.brands-copy .section-title,.brands-copy .card-copy{max-width:700px}.brand-stage{padding-right:180px}.slides{grid-template-columns:repeat(4,minmax(190px,1fr))}
  .partnerships{gap:18px}.partnership-card{padding:22px;min-height:260px}
  .contact-layout{grid-template-columns:1fr;gap:30px}.contact-copy .section-title{max-width:760px}.contact-action{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}.contact-art{margin:0}.contact-links{gap:28px;flex-wrap:wrap}
}

@media (max-width:680px){
  .beautimax-shell{padding-inline:22px}.section{padding:72px 0}
  .brand{font-size:15px;gap:11px}.brand img{width:22px;height:40px}
  .h1{font-size:clamp(39px,11vw,50px);line-height:1}.lead{font-size:16px;margin-bottom:24px}.btn{width:100%;min-width:0}
  .hero{padding-top:46px}.hero-visual{width:126%;margin-left:-14%}
  .section-title,.market-title,.network-title{font-size:clamp(34px,9.7vw,44px)}
  .market-title{margin-bottom:22px}.market-map{width:145%;max-width:none;margin-left:-23%}.stats{grid-template-columns:repeat(2,1fr);margin-top:-4%;padding:0}
  .stat{border-right:0;border-top:1px solid rgba(16,16,15,.18);padding:18px 10px}.stat:nth-child(odd){border-right:1px solid rgba(16,16,15,.18)}.stat .line-icon{width:48px;height:48px}.stat-value{font-size:34px}.stat-label{font-size:11px}
  .about-layout{gap:42px}.about-copy p{margin-top:20px}.pillars{grid-template-columns:1fr 1fr}.pillar{min-height:245px;padding:20px 16px;border-top:1px solid rgba(16,16,15,.18)}.pillar:nth-child(odd){border-left:0}.pillar .line-icon{width:60px;height:60px}
  .capabilities-section{padding-top:58px}.cap-grid{grid-template-columns:1fr;gap:64px;margin-top:46px}.cap-image{aspect-ratio:1.32/1;margin-bottom:18px}.cap-image img{width:100%}.capability .card-title{font-size:21px}.capability .card-copy{font-size:16px}
  .network-header .card-copy{margin-top:18px}.network-visual{grid-template-columns:1fr;gap:28px;margin-top:42px}.network-stat{font-size:68px}.network-label{font-size:18px}.network-art{width:145%;margin-left:-22%}
  .brands-layout{gap:35px}.brands-copy .section-title{font-size:42px}.brands-copy .card-copy{margin-top:22px}.brand-stage{padding:0}.carousel{overflow:visible}.slides{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px;scrollbar-width:none}.slides::-webkit-scrollbar{display:none}.slide{flex:0 0 78%;scroll-snap-align:start}.phone-frame{position:relative;right:auto;bottom:auto;width:72%;margin:-28px 0 0 auto}.carousel-meta{display:none}
  .partnerships{grid-template-columns:1fr;gap:18px;margin-top:36px}.partnership-card{min-height:230px}
  .contact-layout{min-height:0}.contact-copy .section-title{font-size:clamp(48px,13.5vw,64px)}.contact-action{grid-template-columns:1fr;gap:30px}.contact-links{display:grid;gap:12px}.contact-art{width:125%;margin-left:-12%}.footer{padding-top:8px;line-height:1.5}
}

@media (max-width:400px){.pillars{grid-template-columns:1fr}.pillar{min-height:0;border-left:0}.stats{gap:0}.phone-frame{width:84%}}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`
