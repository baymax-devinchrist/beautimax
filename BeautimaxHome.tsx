// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "./framerShim"
import { useEffect, useMemo } from "react"
import { beautimaxStyles } from "./beautimaxStyles"
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
        <main className="beautimax-root" style={{ position: "relative" }}>
            <style>{css}</style>
            {showNav && <BeautimaxNav brandLabel="BEAUTIMAX" buttonLabel="Start a conversation" />}
            <BeautimaxHero
                heading="We build, operate, and grow beauty brands in Indonesia."
                body="From new ventures to established global brands, we turn market potential into brands built for how Indonesia discovers, buys, and shares beauty."
                ctaLabel="Explore how we build"
            />
            <BeautimaxMarket title="Indonesia is a market built on scale, speed, and local nuance." />
            <BeautimaxAbout title="Behind the brands built for Indonesia." />
            <BeautimaxCapabilities title="One operating system. Four connected engines." />
            <BeautimaxNetwork title="Beauty discovery is distributed. Our network is built for it." />
            <BeautimaxBrandExperience
                title="We operate in the market, not outside it."
                body="Our experience operating beauty brands gives us a direct view of how consumers respond to products, positioning, content, pricing, channels, and repeat purchase."
            />
            <BeautimaxPartnerships title="Built around the opportunity, not a fixed package." />
            <BeautimaxContact
                title="Tell us where your brand should be in Indonesia."
                ctaLabel="Start the conversation"
            />
            <BeautimaxWhatsApp />
        </main>
    )
}

addPropertyControls(BeautimaxHome, {
    showNav: { type: ControlType.Boolean, title: "Show Nav", defaultValue: true },
})
