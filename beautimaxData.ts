// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
export type NavItem = { label: string; href: string }
export type MarketStat = { value: string; label: string }
export type Pillar = { title: string; body: string }
export type Capability = { number: string; title: string; body: string; image: string; alt: string }
export type BrandSlide = { title: string; image: string; alt: string }
export type PartnershipCard = { title: string; body: string }

export const beautimaxAssets = {
    hero: "https://framerusercontent.com/images/GGCJYzJXHmeZ2H8fhwjXzyDxU.png",
    map: "https://framerusercontent.com/images/IIWFSVmirEyeBT53vtZ6uKTiyo.png",
    marketEntry: "https://framerusercontent.com/images/FmO73MRaaTQXhcl4Z031DSrQVI.png",
    creator: "https://framerusercontent.com/images/GXQb185lB13gJOxtVckqKq2EAc.png",
    marketplace: "https://framerusercontent.com/images/8N10IhWCjlX6YZQYfbYStXYWyQ.png",
    logistics: "https://framerusercontent.com/images/QA6spQq1jkfHP9snlvXS3gm3oM.png",
    network: "https://framerusercontent.com/images/gmtz19oJlVD2I3haG64HFSUTV0.png",
    phone: "https://framerusercontent.com/images/hilYXX0mKBoXZXw09PkqqrLL4.png",
    planes: "https://framerusercontent.com/images/RRWpuTEFMtulN3a7cU1iH5A90.png",
    monogram: "https://framerusercontent.com/images/x5bU4AgVmk9OTVhs8N7qYUj7dw.png",
    neyra: "https://framerusercontent.com/images/O0qzLL2lFxiifaEMPip0FwiKbE.png",
    aestha: "https://framerusercontent.com/images/J52NRgIKN3QiM7PdTsoNMBpjY.png",
    luna: "https://framerusercontent.com/images/7qpm6ic1ki2sWpaJz9LAXHwR64.png",
    neyraAlt: "https://framerusercontent.com/images/gDlbvxStRGoUjmkwPhCTBWrXjQ.png",
} as const

export const navItems: NavItem[] = [
    { label: "HOME", href: "#home" },
    { label: "MARKET", href: "#market" },
    { label: "ABOUT", href: "#about" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "NETWORK", href: "#network" },
    { label: "BRANDS", href: "#brands" },
    { label: "PARTNERSHIPS", href: "#partnerships" },
    { label: "CONTACT", href: "#contact" },
]

export const marketStats: MarketStat[] = [
    { value: "284.4M", label: "PEOPLE" },
    { value: "US$99B", label: "DIGITAL ECONOMY" },
    { value: "2.6B", label: "VIDEO-COMMERCE TRANSACTIONS" },
    { value: "20%", label: "BEAUTY & PERSONAL CARE" },
]

export const pillars: Pillar[] = [
    { title: "MARKET ENTRY", body: "We prepare brands for launch and market entry with precise local execution." },
    { title: "BRAND BUILDING", body: "We build differentiated brands designed to resonate and scale." },
    { title: "CREATOR COMMERCE", body: "We turn discovery into demand through creators, affiliates, content, and commerce." },
    { title: "CHANNEL OPERATIONS", body: "We operate across marketplaces, retail, and the channels where consumers buy." },
    { title: "FULFILMENT", body: "We provide reliable warehousing, fulfilment, and delivery." },
]

export const capabilities: Capability[] = [
    { number: "01", title: "MARKET ENTRY", body: "From international brand to local market readiness.", image: beautimaxAssets.marketEntry, alt: "Market entry operating readiness visual" },
    { number: "02", title: "SOCIAL & CREATOR COMMERCE", body: "Build attention through the people shaping beauty discovery.", image: beautimaxAssets.creator, alt: "Social and creator commerce visual" },
    { number: "03", title: "MARKETPLACE & CHANNELS", body: "Turn brand presence into everyday sales and channel execution.", image: beautimaxAssets.marketplace, alt: "Marketplace and channels operations visual" },
    { number: "04", title: "LOGISTICS & FULFILMENT", body: "Keep the brand moving after every order.", image: beautimaxAssets.logistics, alt: "Logistics and fulfilment operations visual" },
]

export const brandSlides: BrandSlide[] = [
    { title: "Neyra", image: beautimaxAssets.neyra, alt: "Neyra beauty brand showcase" },
    { title: "Aestha", image: beautimaxAssets.aestha, alt: "Aestha beauty brand showcase" },
    { title: "Luna", image: beautimaxAssets.luna, alt: "Luna beauty brand showcase" },
    { title: "Neyra variation", image: beautimaxAssets.neyraAlt, alt: "Neyra variation beauty brand showcase" },
]

export const partnershipCards: PartnershipCard[] = [
    { title: "OPERATING PARTNERSHIP", body: "We work alongside existing brands, bringing Beautimax’s infrastructure and operating expertise to accelerate growth." },
    { title: "MARKET PARTNERSHIP", body: "We help global brands enter and scale in Indonesia through a local team, proven operating playbook, and hands-on execution." },
    { title: "ENABLER PARTNERSHIP", body: "We build new brands and partner on ventures with long-term market potential." },
]
