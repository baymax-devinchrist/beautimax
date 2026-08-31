// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "./framerShim"
import { useEffect, useMemo, useState } from "react"
import { beautimaxStyles } from "./beautimaxStyles"
import { translations, type Language } from "./beautimaxTranslations"
import BeautimaxNav from "./components/BeautimaxNav"
import BeautimaxHero from "./components/BeautimaxHero"
import BeautimaxMarket from "./components/BeautimaxMarket"
import BeautimaxAbout from "./components/BeautimaxAbout"
import BeautimaxCapabilities from "./components/BeautimaxCapabilities"
import BeautimaxNetwork from "./components/BeautimaxNetwork"
import BeautimaxBrandExperience from "./components/BeautimaxBrandExperience"
import BeautimaxPartnerships from "./components/BeautimaxPartnerships"
import BeautimaxContact from "./components/BeautimaxContact"
import BeautimaxWhatsApp from "./components/BeautimaxWhatsApp"

interface MyComponentProps {
    showNav: boolean
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxHome(props: MyComponentProps) {
    const { showNav } = props
    const css = useMemo(() => beautimaxStyles, [])
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") return "en"
        const saved = window.localStorage.getItem("beautimax-language")
        return saved === "id" || saved === "zh" ? saved : "en"
    })
    const copy = translations[language]

    useEffect(() => {
        if (typeof document !== "undefined") document.documentElement.lang = copy.documentLanguage
        if (typeof window !== "undefined") window.localStorage.setItem("beautimax-language", language)
    }, [copy.documentLanguage, language])

    useEffect(() => {
        if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        const sections = document.querySelectorAll<HTMLElement>(".hero-section, .section:not(.market-section)")
        sections.forEach((section) => section.classList.add("reveal-ready"))
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12 }
        )
        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <main className="beautimax-root" lang={copy.documentLanguage} style={{ position: "relative" }}>
            <style>{css}</style>
            {showNav && (
                <BeautimaxNav
                    brandLabel={copy.nav.brandLabel}
                    buttonLabel={copy.nav.ctaLabel}
                    items={copy.nav.items}
                    language={language}
                    languageLabel={copy.languageLabel}
                    menuLabel={copy.menuLabel}
                    closeLabel={copy.closeLabel}
                    primaryNavigationLabel={copy.primaryNavigationLabel}
                    mobileNavigationLabel={copy.mobileNavigationLabel}
                    toggleMenuLabel={copy.toggleMenuLabel}
                    onLanguageChange={setLanguage}
                />
            )}
            <BeautimaxHero
                heading={copy.hero.heading}
                body={copy.hero.body}
                ctaLabel={copy.hero.ctaLabel}
            />
            <BeautimaxMarket title={copy.market.title} stats={copy.market.stats} imageAlt={copy.market.imageAlt} />
            <BeautimaxAbout
                title={copy.about.title}
                intro={copy.about.intro}
                audience={copy.about.audience}
                pillars={copy.about.pillars}
            />
            <BeautimaxCapabilities title={copy.capabilities.title} items={copy.capabilities.items} />
            <BeautimaxNetwork
                title={copy.network.title}
                body={copy.network.body}
                statLabel={copy.network.statLabel}
                imageAlt={copy.network.imageAlt}
            />
            <BeautimaxBrandExperience
                title={copy.brands.title}
                body={copy.brands.body}
                slides={copy.brands.slides}
                carouselLabel={copy.brands.carouselLabel}
                previousLabel={copy.brands.previousLabel}
                nextLabel={copy.brands.nextLabel}
                slideLabel={copy.brands.slideLabel}
                phoneLabel={copy.brands.phoneLabel}
                phoneAlt={copy.brands.phoneAlt}
            />
            <BeautimaxPartnerships title={copy.partnerships.title} cards={copy.partnerships.cards} />
            <BeautimaxContact
                title={copy.contact.title}
                body={copy.contact.body}
                ctaLabel={copy.contact.ctaLabel}
                artworkAlt={copy.contact.artworkAlt}
                footer={copy.contact.footer}
            />
            <BeautimaxWhatsApp label={copy.whatsappLabel} />
        </main>
    )
}

addPropertyControls(BeautimaxHome, {
    showNav: { type: ControlType.Boolean, title: "Show Nav", defaultValue: true },
})
