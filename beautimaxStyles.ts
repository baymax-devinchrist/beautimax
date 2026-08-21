export const beautimaxStyles = `
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:88px}
html,body{margin:0;padding:0;background:#f4f1e9;color:#10100f}
body{min-width:320px}
button,a{-webkit-tap-highlight-color:transparent}
.beautimax-root{position:relative;width:100%;overflow:hidden;background:#f4f1e9;color:#10100f;font-family:Archivo,Arial,Helvetica,sans-serif}
.beautimax-shell{width:min(100%,1680px);margin-inline:auto;padding-inline:clamp(22px,7.55vw,145px)}
.beautimax-shell>*{min-width:0}
.mono{font-family:"SFMono-Regular",Menlo,Consolas,monospace;letter-spacing:.08em}
.muted{opacity:.82}
h1,h2,h3,p,figure{margin:0}
.section{position:relative;padding:clamp(76px,6vw,104px) 0;scroll-margin-top:0}
.section-title,.market-title,.network-title{font-size:clamp(38px,3.35vw,64px);line-height:.96;letter-spacing:-.055em;text-wrap:balance}
.card-copy{font-size:clamp(15px,1.05vw,20px);line-height:1.48}
.eyebrow{font-size:clamp(14px,1.05vw,20px);line-height:1.05;font-weight:800;margin-bottom:4px}
.img-full{display:block;width:100%;max-width:100%;height:auto}
.btn{display:inline-flex;align-items:center;justify-content:space-between;gap:32px;min-width:240px;min-height:56px;padding:15px 24px;background:#1d55c5;color:#fff;border:1px solid #1d55c5;border-radius:999px;box-shadow:0 10px 28px rgba(29,85,197,.18);text-decoration:none;font-size:14px;font-weight:700;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
.btn::after{content:"→";font-size:22px;font-weight:400;line-height:1}
.btn:hover{transform:translateY(-2px);background:#1749ae;box-shadow:0 15px 34px rgba(29,85,197,.28)}
.line-icon{display:block;width:64px;height:64px;stroke:#161615;fill:none;stroke-width:1.25;stroke-linecap:round;stroke-linejoin:round}
.framer-svg-icon{flex:0 0 auto}
.framer-svg-icon svg{display:block;width:100%;height:100%;overflow:visible}

.nav{position:fixed;top:0;left:0;right:0;z-index:60;background:transparent;padding-top:10px;pointer-events:none}
.nav .beautimax-shell{position:relative;pointer-events:auto}
.nav-inner{height:64px;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:0 18px;border:1px solid rgba(16,16,15,.08);border-radius:18px;background:rgba(247,245,238,.76);box-shadow:0 10px 30px rgba(36,38,45,.07),inset 0 1px 0 rgba(255,255,255,.72);backdrop-filter:blur(22px) saturate(135%);-webkit-backdrop-filter:blur(22px) saturate(135%);transition:height .3s ease,background .3s ease,box-shadow .3s ease}
.nav.is-compact .nav-inner{height:56px;background:rgba(247,245,238,.9);box-shadow:0 10px 26px rgba(36,38,45,.09),inset 0 1px 0 rgba(255,255,255,.82)}
.brand{display:flex;align-items:center;gap:17px;color:#111;text-decoration:none;white-space:nowrap;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:800;letter-spacing:.17em}
.brand img{width:29px;height:54px;object-fit:contain}
.nav-links{display:flex;align-items:center;justify-content:flex-end;gap:clamp(15px,1.45vw,28px);margin-left:auto}
.nav-links a,.drawer a{font-family:"SFMono-Regular",Menlo,Consolas,monospace;font-size:12px;letter-spacing:.13em;color:#10100f;text-decoration:none}
.nav-links a{position:relative;opacity:.66;transition:opacity .2s ease,color .2s ease}
.nav-links a:hover,.nav-links a.active{opacity:1;color:#1d55c5}
.nav-links a:focus-visible,.brand:focus-visible,.nav-cta:focus-visible,.drawer a:focus-visible{outline:2px solid rgba(29,85,197,.55);outline-offset:5px;border-radius:5px}
.nav-links a.active::after{content:"";position:absolute;left:50%;bottom:-10px;width:4px;height:4px;border-radius:50%;background:#1d55c5;transform:translateX(-50%)}
.nav-cta{display:inline-flex;min-width:172px;min-height:42px;padding:9px 17px;font-size:12px;box-shadow:none}
.nav-cta::after{font-size:17px}
.mobile-toggle{display:none;min-height:44px;padding:0;border:0;background:transparent;color:#10100f;font-family:"SFMono-Regular",Menlo,Consolas,monospace;font-size:12px;letter-spacing:.12em}
.mobile-toggle:focus-visible{outline:2px solid rgba(29,85,197,.55);outline-offset:4px;border-radius:6px}
.drawer{display:none;padding:12px 22px 18px;flex-direction:column;background:rgba(247,245,238,.94);border:1px solid rgba(255,255,255,.72);border-radius:24px;margin-top:8px;box-shadow:0 14px 38px rgba(36,38,45,.12);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
.drawer a{display:flex;align-items:center;min-height:46px;border-bottom:1px solid rgba(16,16,15,.1)}
.nav-progress{display:none}

#home{scroll-margin-top:0}
.hero-section{position:relative;--hero-parallax:0px}
.hero{position:relative;display:flex;align-items:center;min-height:calc(100svh - 94px);padding:52px 0 72px;isolation:isolate}
.hero::after{content:"";position:absolute;z-index:1;inset:0 auto 0 -6%;width:58%;background:linear-gradient(90deg,#f4f1e9 20%,rgba(244,241,233,.88) 72%,rgba(244,241,233,0));pointer-events:none}
.hero-copy{position:relative;z-index:2;max-width:57%;padding-top:18px}
.h1{max-width:760px;font-size:clamp(52px,4.15vw,80px);line-height:1.03;letter-spacing:-.062em;text-wrap:balance;margin-bottom:38px}
.lead{max-width:610px;font-size:clamp(17px,1.16vw,22px);line-height:1.42;margin-bottom:28px}
.hero-art{position:absolute;z-index:0;top:-3%;right:-5%;bottom:-5%;width:66%;display:flex;align-items:center;justify-content:center;transform:translate3d(0,var(--hero-parallax),0);will-change:transform;pointer-events:none}
.hero-visual{width:105%;max-width:none;pointer-events:none}

.market-section{padding:0;--market-parallax:0px}
.market-stage{position:relative;min-height:calc(100svh - 88px);display:grid;align-items:start;overflow:hidden}
.market-map{grid-area:1/1;width:100%;min-height:calc(100svh - 88px);object-fit:cover;object-position:center;transform:scale(1.035) translate3d(0,var(--market-parallax),0);will-change:transform}
.market-overlay{grid-area:1/1;position:relative;z-index:1;display:flex;min-height:calc(100svh - 88px);flex-direction:column;padding:clamp(64px,7vh,82px) 28px 34px}
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
.network-art{width:113%;max-width:none;margin-left:-7%;opacity:.84;transform:translateY(10px) scale(.992);transition:opacity .9s ease,transform 1.1s cubic-bezier(.2,.75,.25,1)}
.network-art-frame{position:relative;min-width:0;isolation:isolate}
.network-active .network-art{opacity:1;transform:none}
.network-signal{position:absolute;z-index:2;width:10px;height:10px;border:2px solid #1d55c5;border-radius:50%;background:#f4f1e9;opacity:0;transform:scale(.5);box-shadow:0 0 0 0 rgba(29,85,197,.22)}
.signal-one{left:22%;top:53%}.signal-two{left:56%;top:48%}.signal-three{right:9%;top:56%}
.network-active .network-signal{animation:signal-pulse 2.8s ease-out infinite}
.network-active .signal-two{animation-delay:.7s}.network-active .signal-three{animation-delay:1.4s}
@keyframes signal-pulse{0%{opacity:0;transform:scale(.5);box-shadow:0 0 0 0 rgba(29,85,197,.28)}18%{opacity:1;transform:scale(1)}65%,100%{opacity:0;transform:scale(1);box-shadow:0 0 0 15px rgba(29,85,197,0)}}

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

.chapter-screen,#brands,#contact,#about,#capabilities,#partnerships{min-height:auto;display:block}
.reveal-ready{opacity:0;transform:translateY(26px);transition:opacity .75s ease,transform .85s cubic-bezier(.2,.7,.2,1)}
.reveal-ready.is-visible{opacity:1;transform:none}

.whatsapp-float{position:fixed;z-index:75;right:clamp(18px,2.2vw,34px);bottom:clamp(18px,2.2vw,34px);display:flex;align-items:center;gap:9px;height:54px;padding:0 18px 0 14px;border:1px solid rgba(255,255,255,.78);border-radius:999px;background:rgba(247,245,238,.78);box-shadow:0 14px 40px rgba(25,28,35,.17),inset 0 1px 0 rgba(255,255,255,.82);backdrop-filter:blur(18px) saturate(150%);-webkit-backdrop-filter:blur(18px) saturate(150%);color:#10100f;text-decoration:none;opacity:0;transform:translateY(18px) scale(.94);pointer-events:none;transition:opacity .3s ease,transform .3s ease,box-shadow .25s ease}
.whatsapp-float.is-visible{opacity:1;transform:none;pointer-events:auto}
.whatsapp-float:hover{transform:translateY(-2px);box-shadow:0 18px 46px rgba(25,28,35,.22),inset 0 1px 0 rgba(255,255,255,.9)}
.whatsapp-float svg{width:25px;height:25px;fill:#151515}
.whatsapp-label{font-size:12px;font-weight:700}
.whatsapp-status{position:absolute;top:7px;left:35px;width:8px;height:8px;border-radius:50%;background:#38b66a;border:2px solid #f4f1e9}

@media (max-width:1280px){
  .beautimax-shell{padding-inline:clamp(30px,6.1vw,78px)}
  .nav-links{gap:16px}.nav-links a{font-size:10px}.nav-cta{display:none}
  .hero{min-height:calc(100svh - 90px)}
  .hero-copy{max-width:55%}
  .hero-art{right:-7%;width:70%}
  .h1{font-size:clamp(50px,4.5vw,60px)}
  .market-stage,.market-overlay{min-height:calc(100svh - 82px)}.market-map{min-height:calc(100svh - 82px)}
  .about-layout{grid-template-columns:330px minmax(0,1fr);gap:28px}.pillar{padding-inline:14px}
  .cap-grid{gap:22px}.brands-layout{grid-template-columns:280px minmax(0,1fr);gap:35px}
  .brand-stage{padding-right:190px}.phone-frame{width:220px}.partnerships{gap:34px}
}

@media (max-width:980px){
  .hero-art{top:35%;right:-13%;width:82%}
  html{scroll-padding-top:78px}.section,#home{scroll-margin-top:0}
  .chapter-screen,#brands,#contact,#about,#capabilities,#partnerships{min-height:auto;display:block}
  .nav{padding-top:8px}.nav-inner,.nav.is-compact .nav-inner{height:62px;padding-inline:18px}.nav-links,.nav-cta{display:none}.mobile-toggle{display:block}.drawer{display:flex}.nav-progress{bottom:-4px}
  .hero{min-height:calc(100svh - 76px);padding:112px 0 50px;align-items:flex-start}.hero-copy{padding:0;max-width:78%}.hero::after{width:76%;background:linear-gradient(90deg,#f4f1e9 26%,rgba(244,241,233,.86) 76%,rgba(244,241,233,0))}.hero-art{top:16%;right:-6%;bottom:-3%;width:78%}.hero-visual{width:105%}
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
  .hero{min-height:860px;padding:112px 0 48px}.hero-copy{max-width:100%}.hero::after{inset:-2% -22px auto -22px;width:auto;height:62%;background:linear-gradient(180deg,#f4f1e9 38%,rgba(244,241,233,.88) 76%,rgba(244,241,233,0))}.hero-art{top:49%;right:-10%;bottom:-3%;width:118%;transform:none}.hero-visual{width:100%}
  .section-title,.market-title,.network-title{font-size:clamp(34px,9.7vw,44px)}
  .market-title{margin-bottom:22px}.market-map{width:145%;max-width:none;margin-left:-23%}.stats{grid-template-columns:repeat(2,1fr);margin-top:-4%;padding:0}
  .stat{border-right:0;border-top:1px solid rgba(16,16,15,.18);padding:18px 10px}.stat:nth-child(odd){border-right:1px solid rgba(16,16,15,.18)}.stat .line-icon{width:48px;height:48px}.stat-value{font-size:34px}.stat-label{font-size:11px}
  .about-layout{gap:42px}.about-copy p{margin-top:20px}.pillars{grid-template-columns:1fr 1fr}.pillar{min-height:245px;padding:20px 16px;border-top:1px solid rgba(16,16,15,.18)}.pillar:nth-child(odd){border-left:0}.pillar .line-icon{width:60px;height:60px}
  .capabilities-section{padding-top:58px}.cap-grid{grid-template-columns:1fr;gap:64px;margin-top:46px}.cap-image{aspect-ratio:1.32/1;margin-bottom:18px}.cap-image img{width:100%}.capability .card-title{font-size:21px}.capability .card-copy{font-size:16px}
  .network-header .card-copy{margin-top:18px}.network-visual{grid-template-columns:1fr;gap:28px;margin-top:42px}.network-stat{font-size:68px}.network-label{font-size:18px}.network-art-frame{width:140%;margin-left:-20%}.network-art{width:100%;margin-left:0}.network-signal{width:8px;height:8px}
  .brands-layout{gap:35px}.brands-copy .section-title{font-size:42px}.brands-copy .card-copy{margin-top:22px}.brand-stage{padding:0}.carousel{overflow:visible}.slides{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px;scrollbar-width:none}.slides::-webkit-scrollbar{display:none}.slide{flex:0 0 78%;scroll-snap-align:start}.phone-frame{position:relative;right:auto;bottom:auto;width:72%;margin:-28px 0 0 auto}.carousel-meta{display:none}
  .partnerships{grid-template-columns:1fr;gap:18px;margin-top:36px}.partnership-card{min-height:230px}
  .contact-layout{min-height:0}.contact-copy .section-title{font-size:clamp(48px,13.5vw,64px)}.contact-action{grid-template-columns:1fr;gap:30px}.contact-links{display:grid;gap:12px}.contact-art{width:125%;margin-left:-12%}.footer{padding-top:8px;line-height:1.5}
  .whatsapp-float{width:52px;height:52px;padding:0;justify-content:center}.whatsapp-label{display:none}.whatsapp-status{left:34px;top:6px}
}

@media (max-width:400px){.pillars{grid-template-columns:1fr}.pillar{min-height:0;border-left:0}.stats{gap:0}.phone-frame{width:84%}}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}.reveal-ready{opacity:1;transform:none}.hero-art,.market-map,.network-art{transform:none!important}.network-art{opacity:1}.network-signal{display:none}.btn,.whatsapp-float{transition:none}}

/* Editorial campaign system */
.beautimax-root{--paper:#f4f1e9;--ink:#10100f;--blue:#2159c7;--aqua:#dceeea;--lilac:#e4e0f2;--rule:rgba(16,16,15,.16)}
.section{padding:clamp(112px,9.5vw,170px) 0}
.section-kicker{margin-bottom:20px;font-size:11px;font-weight:700;letter-spacing:.16em;color:#2159c7}
.section-title,.market-title,.network-title{font-size:clamp(54px,5.1vw,92px);line-height:.92;letter-spacing:-.065em}
.card-copy{font-size:clamp(16px,1.12vw,20px);line-height:1.55}
.btn{min-height:58px;padding-inline:25px;background:#2159c7;border-color:#2159c7;box-shadow:0 14px 34px rgba(33,89,199,.2)}

.nav{padding-top:14px}
.nav-inner{height:60px;border-radius:12px;background:rgba(244,241,233,.78);box-shadow:0 10px 34px rgba(31,34,39,.08);border-color:rgba(16,16,15,.1)}
.nav.is-compact .nav-inner{height:54px}
.brand img{height:46px}
.nav-links a{font-size:10px;letter-spacing:.15em}
.nav-cta{min-width:178px;min-height:40px}

.hero-section{max-width:none;padding-inline:0}
.hero{min-height:100svh;padding:150px max(7.55vw,calc((100vw - 1680px)/2 + 145px)) 90px;overflow:hidden}
.hero-rail{position:absolute;z-index:3;top:105px;left:max(7.55vw,calc((100vw - 1680px)/2 + 145px));right:max(7.55vw,calc((100vw - 1680px)/2 + 145px));display:flex;justify-content:space-between;padding-top:12px;border-top:1px solid rgba(16,16,15,.18);font-size:10px}
.hero-copy{max-width:56%;padding-top:40px}
.hero-kicker{margin-bottom:30px;font-size:11px;font-weight:700;letter-spacing:.16em;color:#2159c7}
.h1{max-width:900px;margin-bottom:38px;font-size:clamp(68px,6vw,112px);line-height:.91;letter-spacing:-.072em}
.lead{max-width:590px;font-size:clamp(17px,1.25vw,22px);line-height:1.5}
.hero-actions{display:flex;align-items:center;gap:26px}
.hero-note{max-width:180px;font-size:9px;line-height:1.5;opacity:.55}
.hero-art{top:7%;right:-1%;bottom:-7%;width:68%}
.hero-visual{width:112%}
.hero::after{left:0;width:57%;background:linear-gradient(90deg,#f4f1e9 24%,rgba(244,241,233,.92) 70%,rgba(244,241,233,0))}
.hero-coordinate{position:absolute;z-index:3;right:max(7.55vw,calc((100vw - 1680px)/2 + 145px));bottom:40px;font-size:9px;opacity:.52}

.market-section{background:#f4f1e9}
.market-stage{min-height:clamp(850px,105svh,1120px);overflow:hidden}
.market-map{min-height:clamp(850px,105svh,1120px);object-fit:cover;object-position:center;filter:saturate(.9) contrast(1.02);transform:scale(1.08) translate3d(0,var(--market-parallax),0)}
.market-overlay{min-height:clamp(850px,105svh,1120px);padding:clamp(86px,8vw,140px) 0 50px}
.market-kicker,.market-title{margin-left:clamp(24px,5vw,80px)}
.market-title{max-width:1040px}
.stats{position:absolute;inset:0;display:block;margin:0;pointer-events:none}
.stat{position:absolute;width:min(255px,21vw);padding:15px 16px 16px;border:0;border-top:1px solid rgba(16,16,15,.35);background:rgba(244,241,233,.68);box-shadow:0 18px 45px rgba(31,34,39,.06);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px)}
.stat-1{left:4%;top:53%}.stat-2{left:27%;bottom:7%}.stat-3{right:27%;top:51%}.stat-4{right:4%;bottom:8%}
.stat-index{position:absolute;right:15px;top:14px;font-size:9px;opacity:.48}
.stat .line-icon{width:46px;height:46px;margin-bottom:10px}
.stat-value{font-size:clamp(48px,4.4vw,78px);line-height:.88}
.stat-label{font-size:11px;line-height:1.35}

#about{position:relative;background:linear-gradient(90deg,#f4f1e9 0 42%,#efede6 42% 100%)}
.about-layout{grid-template-columns:minmax(390px,.88fr) minmax(540px,1.12fr);gap:clamp(70px,8vw,150px);align-items:start}
.about-copy{position:sticky;top:120px;padding-bottom:80px}
.about-copy .section-title{max-width:620px}
.about-copy p{max-width:610px;margin-top:28px}
.about-copy p:last-child{margin-top:22px;font-size:clamp(19px,1.35vw,24px);line-height:1.42}
.pillars{display:flex;flex-direction:column;border-top:1px solid var(--rule)}
.pillar{display:grid;grid-template-columns:38px 68px minmax(0,1fr) 28px;gap:20px;align-items:center;min-height:126px;padding:24px 10px;border:0;border-bottom:1px solid var(--rule);transition:background .3s ease,transform .3s ease,padding .3s ease}
.pillar:hover{padding-inline:22px;background:rgba(220,238,234,.78);transform:translateX(-10px)}
.pillar-number{align-self:start;padding-top:7px;font-size:10px;color:#2159c7}
.pillar .line-icon{width:58px;height:58px;margin:0}
.pillar-copy .card-title{margin:0 0 8px;font-size:16px}
.pillar-copy .card-copy{max-width:430px;font-size:15px;color:#4b4945}
.pillar-arrow{font-size:22px;opacity:.28;transition:opacity .2s ease,transform .2s ease}
.pillar:hover .pillar-arrow{opacity:1;transform:translate(3px,-3px)}

.capabilities-section{padding-block:clamp(125px,10vw,190px);background:linear-gradient(145deg,#eeece5 0 44%,#e9e6f0 100%)}
.cap-heading{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(250px,.6fr);column-gap:60px;align-items:end}
.cap-heading .section-kicker{grid-column:1/-1}
.cap-heading .section-title{max-width:1000px}
.cap-intro{max-width:380px;padding-bottom:8px;font-size:20px;line-height:1.45}
.cap-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;margin-top:80px}
.capability{position:relative;min-height:580px;padding:28px 32px 34px;overflow:hidden;border:1px solid rgba(16,16,15,.12);background:rgba(244,241,233,.74);transition:transform .35s ease,box-shadow .35s ease,background .35s ease}
.capability:nth-child(2),.capability:nth-child(3){background:rgba(235,232,243,.75)}
.capability:hover{z-index:2;transform:translateY(-8px);background:#f7f4ec;box-shadow:0 28px 70px rgba(27,29,34,.12)}
.cap-meta{display:flex;justify-content:space-between;font-size:9px;opacity:.55}
.cap-image{height:350px;aspect-ratio:auto;margin:12px 0 24px;align-items:center}
.cap-image img{width:100%;height:100%}
.cap-copy{display:grid;grid-template-columns:55px minmax(0,1fr);gap:20px;align-items:start}
.capability .eyebrow{font-size:28px}
.capability .card-title{margin:0 0 10px;font-size:clamp(22px,1.75vw,31px);line-height:1}
.capability .card-copy{max-width:430px;font-size:17px;font-weight:600}

.network-section{overflow:hidden;background-color:#f4f1e9;background-image:linear-gradient(rgba(16,16,15,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(16,16,15,.035) 1px,transparent 1px);background-size:52px 52px}
.network-header{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr);column-gap:60px;align-items:end}
.network-header .section-kicker{grid-column:1/-1}
.network-header .card-copy{margin:0 0 8px;max-width:500px;font-size:18px}
.network-title{max-width:1050px}
.network-visual{grid-template-columns:260px minmax(0,1fr);gap:50px;margin-top:95px}
.network-proof{padding:25px 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}
.network-proof-label,.network-proof-foot{font-size:9px;opacity:.55}
.network-proof-foot{margin-top:28px;line-height:1.5}
.network-stat{margin:70px 0 18px;font-size:clamp(76px,7vw,120px)}
.network-label{font-size:22px}
.network-art-frame{margin-right:0}
.network-art{width:108%;margin-left:-4%}
.network-signal{width:12px;height:12px}

#brands{position:relative;overflow:hidden;background:#111615;color:#f4f1e9}
#brands::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 72% 42%,rgba(99,175,163,.14),transparent 30%),radial-gradient(circle at 88% 75%,rgba(117,98,168,.16),transparent 26%);pointer-events:none}
#brands .section-kicker{color:#8bc6bb}
.brands-layout{position:relative;grid-template-columns:minmax(290px,.55fr) minmax(0,1.45fr);gap:70px;align-items:center}
.brands-copy .section-title{max-width:430px;font-size:clamp(62px,5vw,88px)}
.brands-copy .card-copy{margin-top:34px;max-width:430px;color:rgba(244,241,233,.72)}
.brands-proof{margin-top:42px;font-size:9px;line-height:1.6;opacity:.55}
.brand-stage{padding-right:230px}
.carousel{border:0;border-radius:0;overflow:hidden}
.slides{grid-template-columns:repeat(4,minmax(250px,1fr));gap:18px}
.slide{position:relative;border:1px solid rgba(244,241,233,.24);border-radius:4px;background:#f4f1e9;transition:transform .35s ease,box-shadow .35s ease}
.slide:hover{transform:translateY(-8px);box-shadow:0 28px 70px rgba(0,0,0,.32)}
.slide img{aspect-ratio:.79/1}
.slide-caption{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-between;padding:12px 14px;background:linear-gradient(transparent,rgba(15,15,14,.66));color:#fff;font-size:9px}
.phone-frame{right:-28px;bottom:-70px;width:300px;filter:drop-shadow(0 30px 45px rgba(0,0,0,.28))}
.carousel-meta{margin-top:22px}
.icon-btn{background:rgba(244,241,233,.14);border:1px solid rgba(244,241,233,.22)}
.dot{border-color:rgba(244,241,233,.5)}.dot.active{background:#f4f1e9}

#partnerships{background:#f4f1e9}
.partnership-heading{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(220px,.7fr)}
.partnership-heading .section-kicker{grid-column:1/-1}
.partnership-heading .section-title{max-width:1050px}
.partnerships{gap:18px;margin-top:78px}
.partnership-card{position:relative;display:flex;min-height:520px;flex-direction:column;padding:34px 32px;border:1px solid rgba(16,16,15,.16);border-radius:0;background:#efede6;transition:transform .35s ease,box-shadow .35s ease,background .35s ease}
.partnership-card:nth-child(2){background:#e7e4f0}.partnership-card:nth-child(3){background:#dfeeea}
.partnership-card:hover{z-index:2;transform:translateY(-12px);background:#f8f5ed;box-shadow:0 30px 75px rgba(29,31,37,.13)}
.partnership-number{position:absolute;right:30px;top:30px;font-size:10px;color:#2159c7}
.partnership-card .line-icon{width:105px;height:105px;margin:38px 0 62px}
.partnership-card .card-title{max-width:300px;margin:0 0 22px;font-size:clamp(23px,1.75vw,31px);line-height:1}
.partnership-card .card-copy{max-width:380px;font-size:17px}
.partnership-link{margin-top:auto;padding-top:34px;font-size:9px;opacity:.5}

.contact-section{position:relative;min-height:92svh;padding:0;overflow:hidden;background:#e9e7df}
.contact-section::before{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 0 54%,rgba(210,231,226,.5) 54% 72%,rgba(224,219,240,.55) 72%);opacity:.8}
.contact-layout{position:relative;z-index:1;grid-template-columns:minmax(440px,.9fr) minmax(0,1.1fr);min-height:calc(92svh - 70px);gap:70px;align-items:center}
.contact-copy .section-title{max-width:720px;font-size:clamp(74px,6.4vw,116px);line-height:.88}
.contact-subcopy{max-width:500px;margin-top:34px;font-size:19px;line-height:1.5}
.contact-action{position:relative;align-self:center;padding-top:60px}
.contact-action .btn{position:relative;z-index:3;max-width:660px;margin:0!important}
.contact-links{position:relative;z-index:3}
.contact-artwork{position:relative;margin-top:30px;min-height:420px}
.contact-art{position:absolute;right:-18%;bottom:-20%;width:125%;max-width:none;margin:0;opacity:.82}
.contact-monogram{position:absolute;z-index:2;left:20%;top:9%;width:90px;height:190px;object-fit:contain;filter:drop-shadow(0 18px 24px rgba(21,23,27,.12))}
.footer{position:relative;z-index:3;display:flex;align-items:center;min-height:70px;padding:0;border-top:1px solid rgba(16,16,15,.18)}

@media (max-width:1280px){
  .hero{padding-inline:6vw}.hero-rail{left:6vw;right:6vw}.hero-coordinate{right:6vw}.hero-copy{max-width:58%}.hero-art{right:-4%;width:72%}
  .market-title{max-width:780px}.stat{width:230px}.stat-2{left:22%}.stat-3{right:22%}
  .about-layout{grid-template-columns:340px 1fr;gap:55px}.pillar{grid-template-columns:32px 56px 1fr 24px;gap:14px}
  .network-art-frame{margin-right:0}.brand-stage{padding-right:190px}.phone-frame{width:250px}
}

@media (max-width:980px){
  .section{padding:110px 0}
  .section-title,.market-title,.network-title{font-size:clamp(52px,7.8vw,76px)}
  .nav{padding-top:8px}.nav-inner,.nav.is-compact .nav-inner{height:60px;border-radius:12px}
  .hero{min-height:960px;padding:125px 6vw 70px;align-items:flex-start}.hero-rail{top:88px;left:6vw;right:6vw}.hero-copy{max-width:82%;padding-top:25px}.h1{font-size:clamp(66px,9.2vw,82px)}.hero-art{top:35%;right:-13%;bottom:-5%;width:82%}.hero::after{width:76%}.hero-coordinate{right:6vw}
  .market-stage,.market-map,.market-overlay{min-height:920px}.market-overlay{display:flex;padding:85px 0 35px}.market-kicker,.market-title{margin-left:0}.market-title{max-width:700px}.stats{position:absolute;inset:auto 0 28px;display:grid;grid-template-columns:repeat(2,1fr);padding:0 22px}.stat{position:relative!important;inset:auto!important;width:auto;min-height:145px;background:rgba(244,241,233,.78)}
  #about{background:#f4f1e9}.about-layout{grid-template-columns:1fr;gap:70px}.about-copy{position:static;padding:0}.pillars{display:grid;grid-template-columns:1fr 1fr}.pillar{min-height:150px;border-left:0;border-top:0}.pillar:hover{transform:none}
  .cap-heading{grid-template-columns:1fr}.cap-intro{margin-top:25px}.cap-grid{gap:16px}.capability{min-height:500px;padding:24px}.cap-image{height:285px}
  .network-header{grid-template-columns:1fr}.network-header .card-copy{margin-top:28px}.network-visual{grid-template-columns:1fr;gap:35px}.network-proof{display:grid;grid-template-columns:auto 1fr;column-gap:30px;align-items:end}.network-proof-label,.network-proof-foot{grid-column:1/-1}.network-stat{margin:35px 0 0}.network-art-frame{width:100%;margin:0}.network-art{width:100%;margin:0}
  .brands-layout{grid-template-columns:1fr;gap:60px}.brands-copy .section-title,.brands-copy .card-copy{max-width:690px}.brand-stage{padding-right:180px}.slides{grid-template-columns:repeat(4,minmax(230px,1fr))}.phone-frame{width:230px}
  .partnerships{gap:12px}.partnership-card{min-height:460px;padding:26px 22px}.partnership-card .line-icon{width:80px;height:80px;margin:30px 0 48px}
  .contact-layout{grid-template-columns:1fr;gap:10px;padding-top:120px}.contact-copy .section-title{max-width:760px}.contact-action{padding-top:10px}.contact-artwork{min-height:380px}.contact-art{right:-10%;width:105%}.contact-monogram{left:45%;top:5%}
}

@media (max-width:680px){
  .section{padding:92px 0}.section-kicker{margin-bottom:15px}.section-title,.market-title,.network-title{font-size:clamp(42px,12vw,56px);line-height:.94}
  .nav{padding-inline:10px}.nav .beautimax-shell{padding:0}.nav-inner,.nav.is-compact .nav-inner{height:58px;padding-inline:15px}.brand{font-size:14px}
  .hero{min-height:920px;padding:108px 22px 55px}.hero-rail{display:none}.hero-copy{max-width:100%;padding-top:0}.hero-kicker{margin-bottom:20px;font-size:9px}.h1{font-size:clamp(49px,13.7vw,60px);line-height:.92}.lead{font-size:16px}.hero-actions{display:block}.hero-note{display:block;margin-top:18px}.hero-art{top:52%;right:-22%;bottom:-2%;width:130%}.hero::after{width:100%;height:62%;background:linear-gradient(180deg,#f4f1e9 45%,rgba(244,241,233,.86) 80%,transparent)}.hero-coordinate{right:22px;bottom:22px}
  .market-stage,.market-map,.market-overlay{min-height:1040px}.market-overlay{display:flex!important;padding:72px 0 25px}.market-kicker,.market-title{margin-left:0}.market-map{position:absolute;top:255px;left:-28%;width:156%;height:420px;min-height:0;object-fit:contain;transform:scale(1.03)}.stats{position:absolute;inset:auto 0 24px;display:grid;grid-template-columns:1fr 1fr;padding:0}.stat{min-height:168px;padding:18px 10px;background:rgba(244,241,233,.88);box-shadow:none}.stat .line-icon{width:42px;height:42px}.stat-value{font-size:42px}.stat-label{font-size:9px}.stat-index{font-size:8px}
  .about-layout{gap:54px}.about-copy p:last-child{font-size:18px}.pillars{grid-template-columns:1fr}.pillar{grid-template-columns:28px 52px 1fr 20px;min-height:126px;padding:20px 0}.pillar .line-icon{width:46px;height:46px}.pillar-copy .card-title{font-size:14px}.pillar-copy .card-copy{font-size:14px}
  .capabilities-section{padding-block:100px}.cap-intro{font-size:17px}.cap-grid{grid-template-columns:1fr;margin-top:50px}.capability{min-height:500px;padding:20px}.cap-image{height:280px}.cap-copy{grid-template-columns:42px 1fr}.capability .eyebrow{font-size:23px}.capability .card-title{font-size:22px}.capability .card-copy{font-size:16px}
  .network-header .card-copy{font-size:16px}.network-visual{margin-top:55px}.network-proof{grid-template-columns:1fr}.network-stat{font-size:74px}.network-label{font-size:18px}.network-art-frame{width:148%;margin-left:-24%}.network-art{width:100%;margin:0}
  #brands{padding-block:105px}.brands-copy .section-title{font-size:52px}.brands-proof{margin-top:28px}.brand-stage{padding:0}.slides{display:flex;grid-template-columns:none;gap:14px;overflow-x:auto}.slide{flex:0 0 82%}.phone-frame{position:relative;width:78%;margin:-34px -8% 0 auto}.slide-caption{display:flex}
  .partnership-heading{display:block}.partnerships{grid-template-columns:1fr;margin-top:50px}.partnership-card{min-height:420px;padding:28px}.partnership-card .line-icon{width:88px;height:88px;margin:34px 0 48px}.partnership-card .card-title{font-size:25px}
  .contact-section{min-height:auto}.contact-layout{min-height:0;padding:110px 0 40px}.contact-copy .section-title{font-size:clamp(56px,16vw,72px)}.contact-subcopy{font-size:17px}.contact-action .btn{width:100%}.contact-artwork{min-height:330px}.contact-art{right:-28%;bottom:-12%;width:150%}.contact-monogram{left:38%;top:10%;width:65px;height:140px}.footer{min-height:58px;font-size:8px}
}

/* Restrained industrial/editorial refinement */
.beautimax-root{--blue:#315f75;--aqua:#dceeea;--lilac:#e7e3ef;--rule:rgba(16,16,15,.17)}
.section{padding:clamp(90px,7vw,122px) 0}
.section-title,.market-title,.network-title{font-size:clamp(50px,4.65vw,82px)}
.section-kicker,.hero-kicker{color:rgba(16,16,15,.58);font-weight:600}
.btn{background:#151514;border-color:#151514;box-shadow:none}
.btn:hover{background:#253f46;border-color:#253f46;box-shadow:0 12px 28px rgba(22,35,38,.15)}
.nav-links a:hover,.nav-links a.active{color:#253f46}
.nav-links a.active::after{background:#527986}
.nav-links a:focus-visible,.brand:focus-visible,.nav-cta:focus-visible,.drawer a:focus-visible,.mobile-toggle:focus-visible{outline-color:rgba(49,95,117,.48)}

.hero-art{width:70%}
.hero-copy{padding-top:0}

.market-stage,.market-map,.market-overlay{min-height:clamp(820px,100svh,1030px)}
.market-map{transform:scale(1.045) translate3d(0,var(--market-parallax),0)}
.market-overlay{padding-bottom:42px}
.stats{position:relative;inset:auto;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:auto;border-top:1px solid rgba(16,16,15,.28);background:rgba(244,241,233,.84);pointer-events:auto;backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px)}
.stat,.stat-1,.stat-2,.stat-3,.stat-4{position:relative;inset:auto;width:auto;min-height:205px;padding:22px 22px 18px;border:0;border-right:1px solid rgba(16,16,15,.18);background:transparent;box-shadow:none;backdrop-filter:none;-webkit-backdrop-filter:none}
.stat:last-child{border-right:0}
.stat .line-icon{width:48px;height:48px;margin-bottom:13px}
.stat-value{font-size:clamp(48px,4.25vw,74px)}
.stat-label{font-size:clamp(12px,.95vw,16px);line-height:1.35}

#about{background:linear-gradient(90deg,#f4f1e9 0 42%,#efede6 42% 100%)}
.pillar{grid-template-columns:68px minmax(0,1fr);min-height:148px;padding-block:30px;transition:background .25s ease,padding .25s ease}
.pillar:hover{padding-inline:14px;background:rgba(220,238,234,.32);transform:none}
.pillar-copy .card-title{font-size:17px}.pillar-copy .card-copy{font-size:16px;line-height:1.52}

.capabilities-section{padding-block:clamp(100px,7.5vw,132px);background:#f4f1e9}
.cap-heading{display:block}
.cap-heading .section-title{max-width:1050px}
.cap-grid{gap:70px 52px;margin-top:88px}
.capability{--cap-accent:#7da99d;min-height:650px;padding:20px 0 38px;border:0;border-top:2px solid var(--cap-accent);border-bottom:1px solid rgba(16,16,15,.13);background:transparent!important;box-shadow:none;overflow:visible;transition:none}
.capability:nth-child(2){--cap-accent:#7562a8}.capability:nth-child(3){--cap-accent:#527fae}.capability:nth-child(4){--cap-accent:#285e4b}
.capability:hover{transform:none;background:transparent;box-shadow:none}
.cap-image{height:445px;margin:20px 0}
.cap-image img{width:108%;height:108%;transition:transform .45s ease}
.capability:hover .cap-image img{transform:scale(1.015)}
.cap-copy{grid-template-columns:52px minmax(0,1fr)}
.capability .eyebrow{color:var(--cap-accent)!important}
.capability .card-title{color:var(--cap-accent)!important}
.capability .card-copy{font-size:16px;font-weight:600}

.network-art-frame{overflow:hidden}
.network-art{margin-top:-3%;opacity:1;transform:none;transition:none}
.network-signal{display:none}
.network-stat{margin-top:0;color:#315f75}

#brands{background:#efede6;color:#10100f}
#brands::before{background:linear-gradient(135deg,transparent 55%,rgba(220,238,234,.35) 55% 72%,rgba(231,227,239,.46) 72%)}
#brands .section-kicker{color:rgba(16,16,15,.58)}
.brands-layout{grid-template-columns:minmax(290px,.58fr) minmax(0,1.42fr);gap:64px}
.brands-copy .section-title{font-size:clamp(58px,4.8vw,84px)}
.brands-copy .card-copy{color:rgba(16,16,15,.74)}
.brand-stage{padding:34px 185px 30px 30px;background:#171918;border:1px solid rgba(16,16,15,.22)}
.slides{gap:14px}
.slide{border-color:rgba(244,241,233,.24);transition:transform .3s ease,box-shadow .3s ease}
.slide:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(0,0,0,.22)}
.phone-frame{right:-16px;bottom:-38px;width:220px;filter:drop-shadow(0 24px 35px rgba(0,0,0,.22))}
.icon-btn{background:rgba(244,241,233,.12);border-color:rgba(244,241,233,.24);color:#f4f1e9}
.dot{border-color:rgba(244,241,233,.5)}.dot.active{background:#f4f1e9}

.partnerships{gap:20px}
.partnership-card,.partnership-card:nth-child(2),.partnership-card:nth-child(3){min-height:460px;padding:42px 38px;background:#f4f1e9;box-shadow:none;transition:border-color .25s ease}
.partnership-card::before{content:"";position:absolute;left:32px;top:-1px;width:72px;height:3px;background:#7da99d}
.partnership-card:nth-child(2)::before{background:#7562a8}.partnership-card:nth-child(3)::before{background:#527986}
.partnership-card:hover{transform:none;background:#f4f1e9;box-shadow:none;border-color:rgba(16,16,15,.38)}
.partnership-card .line-icon{margin-bottom:58px}

.contact-section{min-height:auto;background:#e9e7df}
.contact-section::before{background:linear-gradient(115deg,transparent 0 64%,rgba(210,231,226,.44) 64% 80%,rgba(224,219,240,.5) 80%)}
.contact-layout{grid-template-columns:minmax(430px,.95fr) minmax(270px,.55fr) minmax(360px,.8fr);min-height:680px;gap:54px}
.contact-copy .section-title{font-size:clamp(66px,5.5vw,104px)}
.contact-subcopy{font-size:16px}
.contact-details{position:relative;z-index:3;align-self:center}
.contact-details .btn{width:100%;min-width:0;min-height:58px;margin:0!important}
.contact-links{display:grid;gap:14px;margin-top:24px;font-size:12px}
.contact-links span{color:rgba(16,16,15,.62)}
.contact-artwork{align-self:stretch;min-height:500px;margin:0}
.contact-art{right:-34%;bottom:-6%;width:155%;opacity:.78}
.contact-monogram{left:28%;top:28%;width:105px;height:220px}
.footer{min-height:58px;padding:0}

@media (max-width:1280px){
  .hero-art{width:72%}
  .contact-layout{grid-template-columns:minmax(350px,.9fr) minmax(240px,.58fr) minmax(300px,.75fr);gap:35px}.contact-art{right:-40%;width:170%}
}

@media (max-width:980px){
  .stats{position:absolute;inset:auto 0 28px;grid-template-columns:repeat(2,1fr);padding:0;background:rgba(244,241,233,.86)}
  .stat,.stat-1,.stat-2,.stat-3,.stat-4{min-height:150px}.stat:nth-child(2){border-right:0}.stat:nth-child(-n+2){border-bottom:1px solid rgba(16,16,15,.18)}
  .cap-grid{gap:58px 34px}.capability{min-height:540px}.cap-image{height:330px}
  .brands-layout{grid-template-columns:1fr;gap:54px}.brands-copy .section-title,.brands-copy .card-copy{max-width:700px}.brand-stage{padding:30px 170px 28px 28px}.phone-frame{width:215px}
  .contact-layout{grid-template-columns:1fr 1fr;gap:40px;padding-top:120px}.contact-copy{grid-column:1/-1}.contact-details{align-self:start}.contact-artwork{min-height:390px}.contact-art{right:-20%;width:125%}.contact-monogram{left:40%;top:12%}
}

@media (max-width:680px){
  .hero-kicker{color:rgba(16,16,15,.58)}
  .hero-art{top:56%;right:-28%;width:150%}
  .market-stage,.market-map,.market-overlay{min-height:1060px}.stats{inset:auto 0 24px}.stat,.stat-1,.stat-2,.stat-3,.stat-4{min-height:170px;padding:18px 10px}.stat .line-icon{width:42px;height:42px}.stat-value{font-size:38px}.stat-label{font-size:10px}
  .pillar{grid-template-columns:52px 1fr}.pillar:hover{padding-inline:0}
  .capability{min-height:500px;padding-inline:0}.cap-image{height:300px}.cap-grid{gap:70px}
  .network-art{margin:-3% 0 0}
  #brands{padding-block:100px}.brand-stage{padding:22px 0 24px 20px;overflow:hidden}.slides{padding-right:20px}.phone-frame{width:68%;margin:-25px 2% 0 auto}.carousel-meta{padding-right:20px}
  .partnership-card,.partnership-card:nth-child(2),.partnership-card:nth-child(3){min-height:360px;background:#f4f1e9}.partnership-card::before{left:28px}.partnership-card .line-icon{margin-bottom:42px}
  .contact-layout{grid-template-columns:1fr;gap:34px;padding:105px 0 35px}.contact-copy{grid-column:auto}.contact-details .btn{width:100%}.contact-artwork{min-height:340px}.contact-art{right:-34%;bottom:-8%;width:150%}.contact-monogram{left:38%;top:8%;width:72px;height:150px}
}

@media (prefers-reduced-motion:reduce){.capability,.pillar,.partnership-card,.slide,.network-art{transition:none}}
`
