// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { useEffect, useRef } from "react"
import { beautimaxAssets, marketStats } from "../beautimaxData"
import BeautimaxIcon from "./BeautimaxIcon"

interface MyComponentProps {
    title: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxMarket(props: MyComponentProps) {
    const { title } = props
    const sectionRef = useRef<HTMLElement | null>(null)

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
            section.style.setProperty("--market-parallax", `${Math.max(-1, Math.min(1, progress)) * 18}px`)
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
        <section id="market" ref={sectionRef} className="section market-section chapter-screen">
            <div className="beautimax-shell">
                <div className="market-stage">
                    <img className="img-full market-map" src={beautimaxAssets.map} alt="Indonesia map with market context" />
                    <div className="market-overlay">
                        <h2 className="market-title">{title}</h2>
                        <div className="stats">
                            {marketStats.map((item, index) => (
                                <article key={item.label} className={`stat stat-${index + 1}`}>
                                    <BeautimaxIcon index={index} />
                                    <p className="stat-value">{item.value}</p>
                                    <p className="stat-label mono">{item.label}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxMarket, {
    title: {
        type: ControlType.String,
        defaultValue: "Indonesia is a market built on scale, speed, and local nuance.",
    },
})
