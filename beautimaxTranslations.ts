import {
    beautimaxAssets,
    brandSlides,
    capabilities,
    marketStats,
    navItems,
    partnershipCards,
    pillars,
    type BrandSlide,
    type Capability,
    type MarketStat,
    type NavItem,
    type PartnershipCard,
    type Pillar,
} from "./beautimaxData"

export type Language = "en" | "id" | "zh"

export const languageOptions: Array<{ value: Language; label: string }> = [
    { value: "en", label: "EN" },
    { value: "id", label: "ID" },
    { value: "zh", label: "中文" },
]

export interface SiteTranslation {
    documentLanguage: string
    languageLabel: string
    menuLabel: string
    closeLabel: string
    primaryNavigationLabel: string
    mobileNavigationLabel: string
    toggleMenuLabel: string
    nav: { brandLabel: string; ctaLabel: string; items: NavItem[] }
    hero: { heading: string; body: string; ctaLabel: string }
    market: { title: string; stats: MarketStat[]; imageAlt: string }
    about: { title: string; intro: string; audience: string; pillars: Pillar[] }
    capabilities: { title: string; items: Capability[] }
    network: { title: string; body: string; statLabel: string; imageAlt: string }
    brands: {
        title: string
        body: string
        slides: BrandSlide[]
        carouselLabel: string
        previousLabel: string
        nextLabel: string
        slideLabel: string
        phoneLabel: string
        phoneAlt: string
    }
    partnerships: { title: string; cards: PartnershipCard[] }
    contact: { title: string; body: string; ctaLabel: string; artworkAlt: string; footer: string }
    whatsappLabel: string
}

export const translations: Record<Language, SiteTranslation> = {
    en: {
        documentLanguage: "en",
        languageLabel: "Language",
        menuLabel: "Menu",
        closeLabel: "Close",
        primaryNavigationLabel: "Primary navigation",
        mobileNavigationLabel: "Mobile navigation",
        toggleMenuLabel: "Toggle menu",
        nav: { brandLabel: "BEAUTIMAX", ctaLabel: "Start a conversation", items: navItems },
        hero: {
            heading: "We build, operate, and grow beauty brands in Indonesia.",
            body: "From new ventures to established global brands, we turn market potential into brands built for how Indonesia discovers, buys, and shares beauty.",
            ctaLabel: "Explore how we build",
        },
        market: {
            title: "Indonesia is a market built on scale, speed, and local nuance.",
            stats: marketStats,
            imageAlt: "Indonesia map with market context",
        },
        about: {
            title: "Behind the brands built for Indonesia.",
            intro: "Beautimax is a beauty brand operator and Indonesia market enabler based in Jakarta. We connect market-entry support, creator commerce, marketplace operations, channel development, and fulfilment into one operating system.",
            audience: "We work with global brands entering Indonesia, founders building from the ground up, and local brands ready for their next stage of growth.",
            pillars,
        },
        capabilities: { title: "One operating system. Four connected engines.", items: capabilities },
        network: {
            title: "Beauty discovery is distributed. Our network is built for it.",
            body: "A broad creator ecosystem supporting content activation, affiliate commerce, product education, livestream, and always-on brand visibility.",
            statLabel: "Creators, affiliates, and content partners",
            imageAlt: "Creator and commerce network visual across Indonesia",
        },
        brands: {
            title: "We operate in the market, not outside it.",
            body: "Our experience operating beauty brands gives us a direct view of how consumers respond to products, positioning, content, pricing, channels, and repeat purchase.",
            slides: brandSlides,
            carouselLabel: "Brand experience carousel",
            previousLabel: "Previous slide",
            nextLabel: "Next slide",
            slideLabel: "Go to slide",
            phoneLabel: "Phone commerce preview",
            phoneAlt: "Phone preview of beauty commerce experience",
        },
        partnerships: { title: "Built around the opportunity, not a fixed package.", cards: partnershipCards },
        contact: {
            title: "Tell us where your brand should be in Indonesia.",
            body: "From market entry to daily execution, let's define the right operating model for your brand.",
            ctaLabel: "Start the conversation",
            artworkAlt: "Paper planes visual representing partnership outreach",
            footer: "COPYRIGHT 2026 BEAUTIMAX©. ALL RIGHTS RESERVED.",
        },
        whatsappLabel: "Chat with Beautimax on WhatsApp",
    },
    id: {
        documentLanguage: "id",
        languageLabel: "Bahasa",
        menuLabel: "Menu",
        closeLabel: "Tutup",
        primaryNavigationLabel: "Navigasi utama",
        mobileNavigationLabel: "Navigasi seluler",
        toggleMenuLabel: "Buka atau tutup menu",
        nav: {
            brandLabel: "BEAUTIMAX",
            ctaLabel: "Mulai percakapan",
            items: [
                { label: "BERANDA", href: "#home" },
                { label: "PASAR", href: "#market" },
                { label: "TENTANG", href: "#about" },
                { label: "KAPABILITAS", href: "#capabilities" },
                { label: "JARINGAN", href: "#network" },
                { label: "MEREK", href: "#brands" },
                { label: "KEMITRAAN", href: "#partnerships" },
                { label: "KONTAK", href: "#contact" },
            ],
        },
        hero: {
            heading: "Kami membangun, mengoperasikan, dan menumbuhkan merek kecantikan di Indonesia.",
            body: "Dari usaha baru hingga merek global yang telah mapan, kami mengubah potensi pasar menjadi merek yang dibangun untuk cara Indonesia menemukan, membeli, dan berbagi produk kecantikan.",
            ctaLabel: "Lihat cara kami membangun",
        },
        market: {
            title: "Indonesia adalah pasar yang dibentuk oleh skala, kecepatan, dan pemahaman lokal.",
            stats: [
                { value: "284.4M", label: "PENDUDUK" },
                { value: "US$99B", label: "EKONOMI DIGITAL" },
                { value: "2.6B", label: "TRANSAKSI VIDEO-COMMERCE" },
                { value: "20%", label: "KECANTIKAN & PERAWATAN DIRI" },
            ],
            imageAlt: "Peta Indonesia dengan konteks pasar",
        },
        about: {
            title: "Di balik merek yang dibangun untuk Indonesia.",
            intro: "Beautimax adalah operator merek kecantikan dan penggerak pasar Indonesia yang berbasis di Jakarta. Kami menyatukan dukungan masuk pasar, creator commerce, operasional marketplace, pengembangan kanal, dan pemenuhan pesanan dalam satu sistem operasi.",
            audience: "Kami bekerja bersama merek global yang memasuki Indonesia, para pendiri yang membangun dari awal, dan merek lokal yang siap menuju tahap pertumbuhan berikutnya.",
            pillars: [
                { title: "MASUK PASAR", body: "Kami membantu kesiapan pasar dan peluncuran dengan ketepatan operasional lokal." },
                { title: "PEMBANGUNAN MEREK", body: "Kami membangun merek yang berbeda, relevan, dan siap berkembang." },
                { title: "CREATOR COMMERCE", body: "Kami mendorong penemuan melalui kreator, afiliasi, konten, dan siklus perdagangan." },
                { title: "OPERASIONAL KANAL", body: "Kami beroperasi di marketplace, ritel, dan eksekusi komersial harian." },
                { title: "PEMENUHAN PESANAN", body: "Kami menyediakan pergudangan dan pengiriman yang andal dan efisien." },
            ],
        },
        capabilities: {
            title: "Satu sistem operasi. Empat mesin yang terhubung.",
            items: [
                { number: "01", title: "MASUK PASAR", body: "Dari merek asing hingga siap beroperasi di pasar lokal.", image: beautimaxAssets.marketEntry, alt: "Visual kesiapan operasional masuk pasar" },
                { number: "02", title: "SOCIAL & CREATOR COMMERCE", body: "Membangun perhatian melalui mereka yang membentuk penemuan produk kecantikan.", image: beautimaxAssets.creator, alt: "Visual social dan creator commerce" },
                { number: "03", title: "MARKETPLACE & KANAL", body: "Mengubah kehadiran merek menjadi eksekusi komersial harian.", image: beautimaxAssets.marketplace, alt: "Visual operasional marketplace dan kanal" },
                { number: "04", title: "LOGISTIK & PEMENUHAN", body: "Menjaga merek terus bergerak setelah setiap pesanan.", image: beautimaxAssets.logistics, alt: "Visual operasional logistik dan pemenuhan" },
            ],
        },
        network: {
            title: "Penemuan produk kecantikan tersebar. Jaringan kami dibangun untuk itu.",
            body: "Ekosistem kreator yang luas untuk mendukung aktivasi konten, perdagangan afiliasi, edukasi produk, siaran langsung, dan visibilitas merek yang selalu aktif.",
            statLabel: "Kreator, afiliasi, dan mitra konten",
            imageAlt: "Visual jaringan kreator dan perdagangan di Indonesia",
        },
        brands: {
            title: "Kami beroperasi di dalam pasar, bukan dari luarnya.",
            body: "Pengalaman mengoperasikan merek kecantikan memberi kami pandangan langsung tentang respons konsumen terhadap produk, positioning, konten, harga, kanal, dan pembelian ulang.",
            slides: brandSlides.map((slide) => ({ ...slide, alt: `Etalase merek kecantikan ${slide.title}` })),
            carouselLabel: "Karusel pengalaman merek",
            previousLabel: "Slide sebelumnya",
            nextLabel: "Slide berikutnya",
            slideLabel: "Buka slide",
            phoneLabel: "Pratinjau perdagangan di ponsel",
            phoneAlt: "Pratinjau pengalaman beauty commerce di ponsel",
        },
        partnerships: {
            title: "Dibangun mengikuti peluang, bukan paket yang kaku.",
            cards: [
                { title: "KEMITRAAN OPERASIONAL", body: "Beautimax mengoperasikan merek yang sudah ada bersama mitra melalui infrastruktur dan keahlian kami untuk mempercepat pertumbuhan." },
                { title: "KEMITRAAN PASAR", body: "Kami membantu merek global masuk dan berkembang di Indonesia dengan tim lokal, playbook, dan mesin eksekusi." },
                { title: "KEMITRAAN ENABLER", body: "Kami mendukung merek baru dan bermitra dalam usaha dengan potensi pasar jangka panjang." },
            ],
        },
        contact: {
            title: "Ceritakan posisi yang Anda inginkan untuk merek Anda di Indonesia.",
            body: "Dari masuk pasar hingga eksekusi harian, mari tentukan model operasi yang tepat untuk merek Anda.",
            ctaLabel: "Mulai percakapan",
            artworkAlt: "Visual bidang geometris yang mewakili jangkauan kemitraan",
            footer: "HAK CIPTA 2026 BEAUTIMAX©. SELURUH HAK DILINDUNGI.",
        },
        whatsappLabel: "Hubungi Beautimax melalui WhatsApp",
    },
    zh: {
        documentLanguage: "zh-CN",
        languageLabel: "语言",
        menuLabel: "菜单",
        closeLabel: "关闭",
        primaryNavigationLabel: "主导航",
        mobileNavigationLabel: "移动导航",
        toggleMenuLabel: "切换菜单",
        nav: {
            brandLabel: "BEAUTIMAX",
            ctaLabel: "洽谈合作",
            items: [
                { label: "首页", href: "#home" },
                { label: "市场", href: "#market" },
                { label: "关于我们", href: "#about" },
                { label: "能力", href: "#capabilities" },
                { label: "网络", href: "#network" },
                { label: "品牌", href: "#brands" },
                { label: "合作", href: "#partnerships" },
                { label: "联系", href: "#contact" },
            ],
        },
        hero: {
            heading: "我们在印度尼西亚打造、运营并发展美妆品牌。",
            body: "从新创品牌到成熟的全球品牌，我们把市场潜力转化为真正契合印度尼西亚消费者发现、购买与分享美妆方式的品牌。",
            ctaLabel: "了解我们的运作方式",
        },
        market: {
            title: "印度尼西亚市场以规模、速度与本地洞察为核心。",
            stats: [
                { value: "284.4M", label: "人口" },
                { value: "US$99B", label: "数字经济" },
                { value: "2.6B", label: "视频电商交易" },
                { value: "20%", label: "美妆与个人护理" },
            ],
            imageAlt: "印度尼西亚市场概览地图",
        },
        about: {
            title: "为印度尼西亚市场打造品牌背后的力量。",
            intro: "Beautimax 是一家位于雅加达的美妆品牌运营商和印度尼西亚市场赋能伙伴。我们将市场进入支持、创作者电商、平台运营、渠道拓展与履约整合为一套运营体系。",
            audience: "我们服务进入印度尼西亚的全球品牌、从零起步的创业者，以及准备迈向下一增长阶段的本土品牌。",
            pillars: [
                { title: "市场进入", body: "我们以精准的本地运营支持市场准备与品牌上市。" },
                { title: "品牌建设", body: "我们打造具有差异化、能够引发共鸣并持续增长的品牌。" },
                { title: "创作者电商", body: "我们通过创作者、联盟伙伴、内容与商业闭环推动品牌被发现。" },
                { title: "渠道运营", body: "我们覆盖电商平台、零售渠道与日常商业执行。" },
                { title: "仓储与履约", body: "我们提供可靠、高效的仓储与配送服务。" },
            ],
        },
        capabilities: {
            title: "一套运营体系，四个协同引擎。",
            items: [
                { number: "01", title: "市场进入", body: "帮助海外品牌为本地市场做好准备。", image: beautimaxAssets.marketEntry, alt: "市场进入准备示意图" },
                { number: "02", title: "社交与创作者电商", body: "通过塑造美妆发现趋势的人群建立品牌关注。", image: beautimaxAssets.creator, alt: "社交与创作者电商示意图" },
                { number: "03", title: "电商平台与渠道", body: "将品牌存在转化为日常商业执行。", image: beautimaxAssets.marketplace, alt: "电商平台与渠道运营示意图" },
                { number: "04", title: "物流与履约", body: "让品牌在每一笔订单之后持续运转。", image: beautimaxAssets.logistics, alt: "物流与履约运营示意图" },
            ],
        },
        network: {
            title: "美妆发现渠道日益分散，而我们的网络正为此而生。",
            body: "广泛的创作者生态支持内容激活、联盟电商、产品教育、直播以及持续在线的品牌曝光。",
            statLabel: "创作者、联盟伙伴与内容合作伙伴",
            imageAlt: "印度尼西亚创作者与电商网络示意图",
        },
        brands: {
            title: "我们身处市场之中，而非置身其外。",
            body: "运营美妆品牌的经验，让我们能够直接了解消费者对产品、定位、内容、价格、渠道与复购的真实反应。",
            slides: brandSlides.map((slide) => ({ ...slide, alt: `${slide.title} 美妆品牌展示` })),
            carouselLabel: "品牌体验轮播",
            previousLabel: "上一张",
            nextLabel: "下一张",
            slideLabel: "前往第",
            phoneLabel: "手机电商预览",
            phoneAlt: "手机端美妆电商体验预览",
        },
        partnerships: {
            title: "围绕机会灵活构建，而非套用固定方案。",
            cards: [
                { title: "运营合作", body: "Beautimax 通过我们的基础设施与专业能力，与合作伙伴共同运营现有品牌并加速增长。" },
                { title: "市场合作", body: "我们通过本地团队、方法体系与执行引擎，帮助全球品牌进入并拓展印度尼西亚市场。" },
                { title: "赋能合作", body: "我们赋能新品牌，并与伙伴共同发展具有长期市场潜力的项目。" },
            ],
        },
        contact: {
            title: "告诉我们，您的品牌应当如何立足印度尼西亚。",
            body: "从市场进入到日常执行，让我们共同确定最适合您品牌的运营模式。",
            ctaLabel: "开启对话",
            artworkAlt: "象征合作拓展的几何平面视觉",
            footer: "版权所有 2026 BEAUTIMAX©。保留所有权利。",
        },
        whatsappLabel: "通过 WhatsApp 联系 Beautimax",
    },
}
