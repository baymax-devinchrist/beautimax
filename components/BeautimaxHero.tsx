// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { useCallback, useEffect, useRef } from "react"
import { beautimaxAssets } from "../beautimaxData"

interface MyComponentProps {
    heading: string
    body: string
    ctaLabel: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxHero(props: MyComponentProps) {
    const { heading, body, ctaLabel } = props
    const sectionRef = useRef<HTMLElement | null>(null)
    const scrollToMarket = useCallback(() => {
        if (typeof window !== "undefined") {
            const node = document.querySelector("#market")
            if (node) node.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])

    useEffect(() => {
        if (typeof window === "undefined") return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        let frame = 0
        const update = () => {
            frame = 0
            const section = sectionRef.current
            if (!section || window.innerWidth <= 680) return
            const rect = section.getBoundingClientRect()
            const progress = (window.innerHeight * 0.5 - (rect.top + rect.height * 0.5)) / window.innerHeight
            section.style.setProperty("--hero-parallax", `${Math.max(-1, Math.min(1, progress)) * 42}px`)
        }
        const requestUpdate = () => {
            if (!frame) frame = window.requestAnimationFrame(update)
        }
        update()
        window.addEventListener("scroll", requestUpdate, { passive: true })
        window.addEventListener("resize", requestUpdate)
        return () => {
            if (frame) window.cancelAnimationFrame(frame)
            window.removeEventListener("scroll", requestUpdate)
            window.removeEventListener("resize", requestUpdate)
        }
    }, [])
    return (
        <section id="home" ref={sectionRef} className="beautimax-shell hero-section">
            <div className="hero">
                <div className="hero-rail mono" aria-hidden="true">
                    <span>BEAUTY BRAND OPERATOR</span>
                    <span>JAKARTA / INDONESIA</span>
                </div>
                <div className="hero-art" aria-hidden="true">
                    <img className="img-full hero-visual" src={beautimaxAssets.hero} alt="" />
                </div>
                <div className="hero-copy">
                    <p className="hero-kicker mono">MARKET ENABLER / OPERATING PARTNER</p>
                    <h1 className="h1">{heading}</h1>
                    <p className="lead muted">{body}</p>
                    <div className="hero-actions">
                        <a
                            className="btn"
                            href="#market"
                            onClick={(event) => {
                                event.preventDefault()
                                scrollToMarket()
                            }}
                        >
                            {ctaLabel}
                        </a>
                        <span className="hero-note mono">ENTRY → COMMERCE → FULFILMENT</span>
                    </div>
                </div>
                <p className="hero-coordinate mono" aria-hidden="true">BMX / 001 / ID</p>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxHero, {
    heading: {
        type: ControlType.String,
        defaultValue: "We build, operate, and grow beauty brands in Indonesia.",
    },
    body: {
        type: ControlType.String,
        defaultValue:
            "From new ventures to established global brands, we turn market potential into brands built for how Indonesia discovers, buys, and shares beauty.",
        displayTextArea: true,
    },
    ctaLabel: { type: ControlType.String, defaultValue: "Explore how we build" },
})
