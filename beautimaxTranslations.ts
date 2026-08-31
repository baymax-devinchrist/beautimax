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
            ctaLabel: "Mari berdiskusi",
            items: [
                { label: "BERANDA", href: "#home" },
                { label: "PASAR", href: "#market" },
                { label: "TENTANG", href: "#about" },
                { label: "CARA KERJA", href: "#capabilities" },
                { label: "JARINGAN", href: "#network" },
                { label: "BRAND", href: "#brands" },
                { label: "KEMITRAAN", href: "#partnerships" },
                { label: "KONTAK", href: "#contact" },
            ],
        },
        hero: {
            heading: "Kami membangun, menjalankan, dan mengembangkan brand kecantikan di Indonesia.",
            body: "Dari brand baru sampai brand global yang sudah mapan, kami mengubah peluang pasar menjadi brand yang tumbuh sesuai cara konsumen Indonesia menemukan, membeli, dan merekomendasikan produk kecantikan.",
            ctaLabel: "Lihat cara kami bekerja",
        },
        market: {
            title: "Indonesia adalah pasar berskala besar, bergerak cepat, dan punya karakter lokal yang kuat.",
            stats: [
                { value: "284.4M", label: "PENDUDUK" },
                { value: "US$99B", label: "EKONOMI DIGITAL" },
                { value: "2.6B", label: "TRANSAKSI VIDEO-COMMERCE" },
                { value: "20%", label: "KECANTIKAN & PERAWATAN DIRI" },
            ],
            imageAlt: "Peta Indonesia dengan konteks pasar",
        },
        about: {
            title: "Di balik brand yang tumbuh di Indonesia.",
            intro: "Beautimax adalah operator brand kecantikan berbasis di Jakarta sekaligus partner untuk masuk ke pasar Indonesia. Kami menggabungkan strategi masuk pasar, creator commerce, operasional marketplace, pengembangan channel, hingga fulfilment dalam satu sistem kerja.",
            audience: "Kami bekerja dengan brand global yang ingin masuk ke Indonesia, founder yang sedang membangun dari nol, dan brand lokal yang siap naik ke tahap berikutnya.",
            pillars: [
                { title: "MASUK PASAR", body: "Kami membantu brand mempersiapkan diri dan meluncur dengan eksekusi lokal yang tepat." },
                { title: "MEMBANGUN BRAND", body: "Kami membangun brand yang berbeda, relevan, dan siap berkembang." },
                { title: "CREATOR COMMERCE", body: "Kami mendorong discovery lewat kreator, afiliasi, konten, dan aktivitas commerce yang saling terhubung." },
                { title: "OPERASIONAL CHANNEL", body: "Kami menangani eksekusi harian di marketplace, retail, dan channel penjualan lainnya." },
                { title: "FULFILMENT", body: "Kami memastikan proses gudang dan pengiriman berjalan andal dan efisien." },
            ],
        },
        capabilities: {
            title: "Satu sistem kerja. Empat mesin yang saling terhubung.",
            items: [
                { number: "01", title: "MASUK PASAR", body: "Membawa brand global agar siap masuk dan tumbuh di pasar lokal.", image: beautimaxAssets.marketEntry, alt: "Visual kesiapan operasional masuk pasar" },
                { number: "02", title: "SOCIAL & CREATOR COMMERCE", body: "Membangun perhatian lewat orang-orang yang membentuk tren dan discovery di dunia beauty.", image: beautimaxAssets.creator, alt: "Visual social dan creator commerce" },
                { number: "03", title: "MARKETPLACE & CHANNELS", body: "Mengubah kehadiran brand menjadi penjualan dan eksekusi harian.", image: beautimaxAssets.marketplace, alt: "Visual operasional marketplace dan channel" },
                { number: "04", title: "LOGISTIK & FULFILMENT", body: "Menjaga operasional brand tetap bergerak setelah setiap pesanan.", image: beautimaxAssets.logistics, alt: "Visual operasional logistik dan fulfilment" },
            ],
        },
        network: {
            title: "Konsumen menemukan produk kecantikan di berbagai tempat. Jaringan kami dibangun untuk menjangkaunya.",
            body: "Ekosistem kreator yang luas untuk mendukung aktivasi konten, affiliate commerce, edukasi produk, livestream, dan visibilitas brand yang selalu aktif.",
            statLabel: "Kreator, afiliator, dan partner konten",
            imageAlt: "Visual jaringan kreator dan commerce di Indonesia",
        },
        brands: {
            title: "Kami bergerak langsung di dalam pasar, bukan mengamatinya dari luar.",
            body: "Pengalaman menjalankan brand kecantikan memberi kami pemahaman langsung tentang respons konsumen terhadap produk, positioning, konten, harga, channel, dan repeat purchase.",
            slides: brandSlides.map((slide) => ({ ...slide, alt: `Tampilan brand kecantikan ${slide.title}` })),
            carouselLabel: "Galeri pengalaman brand",
            previousLabel: "Slide sebelumnya",
            nextLabel: "Slide berikutnya",
            slideLabel: "Buka slide",
            phoneLabel: "Tampilan commerce di ponsel",
            phoneAlt: "Tampilan pengalaman beauty commerce di ponsel",
        },
        partnerships: {
            title: "Dibangun sesuai peluang, bukan paket yang seragam.",
            cards: [
                { title: "KEMITRAAN OPERASIONAL", body: "Kami ikut menjalankan brand yang sudah ada dengan infrastruktur dan keahlian Beautimax untuk mempercepat pertumbuhan." },
                { title: "KEMITRAAN PASAR", body: "Kami membantu brand global masuk dan berkembang di Indonesia lewat tim lokal, playbook, dan eksekusi yang solid." },
                { title: "KEMITRAAN PENGEMBANGAN", body: "Kami membantu membangun brand baru dan bermitra dalam bisnis dengan potensi jangka panjang." },
            ],
        },
        contact: {
            title: "Mari bicarakan langkah berikutnya untuk brand Anda di Indonesia.",
            body: "Dari masuk pasar sampai eksekusi harian, mari temukan model operasional yang paling tepat untuk brand Anda.",
            ctaLabel: "Mari berdiskusi",
            artworkAlt: "Visual bidang geometris yang mewakili jangkauan kemitraan",
            footer: "© 2026 BEAUTIMAX. HAK CIPTA DILINDUNGI.",
        },
        whatsappLabel: "Hubungi Beautimax lewat WhatsApp",
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
            ctaLabel: "聊聊合作",
            items: [
                { label: "首页", href: "#home" },
                { label: "市场", href: "#market" },
                { label: "关于我们", href: "#about" },
                { label: "核心能力", href: "#capabilities" },
                { label: "生态网络", href: "#network" },
                { label: "品牌", href: "#brands" },
                { label: "合作", href: "#partnerships" },
                { label: "联系", href: "#contact" },
            ],
        },
        hero: {
            heading: "我们在印度尼西亚打造、运营并推动美妆品牌成长。",
            body: "从新锐品牌到成熟的国际品牌，我们帮助品牌抓住市场机会，更贴近印度尼西亚消费者发现、购买和分享美妆产品的方式。",
            ctaLabel: "了解我们如何助力品牌",
        },
        market: {
            title: "印度尼西亚市场规模庞大、变化迅速，也高度依赖本地洞察。",
            stats: [
                { value: "284.4M", label: "人口" },
                { value: "US$99B", label: "数字经济规模" },
                { value: "2.6B", label: "视频电商交易量" },
                { value: "20%", label: "美妆与个护" },
            ],
            imageAlt: "印度尼西亚市场概览地图",
        },
        about: {
            title: "我们如何助力品牌在印度尼西亚成长。",
            intro: "Beautimax 总部位于雅加达，是专注美妆品牌运营和印度尼西亚市场拓展的合作伙伴。我们将市场进入、创作者电商、平台运营、渠道拓展和仓储履约整合为一套完整的运营体系。",
            audience: "我们服务希望进入印度尼西亚的国际品牌、从零起步的创业者，以及准备迈向下一增长阶段的本土品牌。",
            pillars: [
                { title: "市场进入", body: "我们以扎实的本地执行，帮助品牌做好市场准备并顺利上市。" },
                { title: "品牌建设", body: "我们打造差异鲜明、能打动消费者并持续增长的品牌。" },
                { title: "创作者电商", body: "我们通过创作者、联盟伙伴和优质内容，连接品牌发现与销售转化。" },
                { title: "渠道运营", body: "我们负责电商平台、零售渠道和日常商业运营。" },
                { title: "仓储与履约", body: "我们提供稳定、高效的仓储与配送服务。" },
            ],
        },
        capabilities: {
            title: "一套运营体系，四大协同引擎。",
            items: [
                { number: "01", title: "市场进入", body: "帮助国际品牌做好准备，在本地市场顺利落地。", image: beautimaxAssets.marketEntry, alt: "市场进入准备示意图" },
                { number: "02", title: "社交与创作者电商", body: "通过那些影响美妆消费趋势的人，持续为品牌赢得关注。", image: beautimaxAssets.creator, alt: "社交与创作者电商示意图" },
                { number: "03", title: "电商平台与渠道", body: "把品牌影响力转化为日常销售与商业运营。", image: beautimaxAssets.marketplace, alt: "电商平台与渠道运营示意图" },
                { number: "04", title: "物流与履约", body: "让品牌在每一笔订单之后都能稳定运转。", image: beautimaxAssets.logistics, alt: "物流与履约运营示意图" },
            ],
        },
        network: {
            title: "消费者发现美妆产品的渠道无处不在，我们的网络也因此而生。",
            body: "我们拥有广泛的创作者生态，支持内容营销、联盟电商、产品教育、直播和持续的品牌曝光。",
            statLabel: "创作者、联盟伙伴与内容合作方",
            imageAlt: "印度尼西亚创作者与电商网络示意图",
        },
        brands: {
            title: "我们就在市场一线，而不是站在场外观察。",
            body: "长期运营美妆品牌，让我们能够直接了解消费者对产品、定位、内容、价格、渠道和复购的真实反馈。",
            slides: brandSlides.map((slide) => ({ ...slide, alt: `${slide.title} 美妆品牌展示` })),
            carouselLabel: "品牌体验轮播",
            previousLabel: "上一张",
            nextLabel: "下一张",
            slideLabel: "查看幻灯片",
            phoneLabel: "手机端电商预览",
            phoneAlt: "手机端美妆电商体验预览",
        },
        partnerships: {
            title: "围绕实际机会灵活合作，不套用固定方案。",
            cards: [
                { title: "运营合作", body: "我们利用 Beautimax 的基础设施和专业能力，与合作伙伴共同运营现有品牌，加快增长。" },
                { title: "市场合作", body: "我们通过本地团队、成熟方法和执行体系，帮助国际品牌进入并拓展印度尼西亚市场。" },
                { title: "品牌共创", body: "我们与合作伙伴共同打造新品牌，发展具有长期市场潜力的项目。" },
            ],
        },
        contact: {
            title: "聊聊您的品牌在印度尼西亚的下一步。",
            body: "从市场进入到日常运营，我们一起找到最适合您品牌的合作与运营模式。",
            ctaLabel: "与我们聊聊",
            artworkAlt: "象征合作拓展的几何平面视觉",
            footer: "© 2026 BEAUTIMAX。保留所有权利。",
        },
        whatsappLabel: "通过 WhatsApp 联系 Beautimax",
    },
}
