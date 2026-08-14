// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { useEffect, useMemo, useRef, useState } from "react"
import { beautimaxAssets, marketStats } from "../beautimaxData"
import BeautimaxIcon from "./BeautimaxIcon"

interface MyComponentProps {
    title: string
}

function AnimatedStat({ value, delay }: { value: string; delay: number }) {
    const ref = useRef<HTMLParagraphElement | null>(null)
    const parsed = useMemo(() => {
        const match = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/)
        if (!match) return null
        return {
            prefix: match[1],
            target: Number(match[2]),
            suffix: match[3],
            decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
        }
    }, [value])
    const [displayed, setDisplayed] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value)

    useEffect(() => {
        const node = ref.current
        if (!node || !parsed || typeof IntersectionObserver === "undefined") return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplayed(value)
            return
        }
        let animation = 0
        let timer = 0
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) return
                observer.disconnect()
                timer = window.setTimeout(() => {
                    const start = performance.now()
                    const duration = 1250
                    const tick = (now: number) => {
                        const progress = Math.min(1, (now - start) / duration)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        const current = parsed.target * eased
                        setDisplayed(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`)
                        if (progress < 1) animation = window.requestAnimationFrame(tick)
                    }
                    animation = window.requestAnimationFrame(tick)
                }, delay)
            },
            { threshold: 0.55 }
        )
        observer.observe(node)
        return () => {
            observer.disconnect()
            window.clearTimeout(timer)
            if (animation) window.cancelAnimationFrame(animation)
        }
    }, [delay, parsed, value])

    return <p ref={ref} className="stat-value" aria-label={value}>{displayed}</p>
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
            section.style.setProperty("--market-parallax", `${Math.max(-1, Math.min(1, progress)) * 34}px`)
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
                                <article key={item.label} className="stat">
                                    <BeautimaxIcon index={index} />
                                    <AnimatedStat value={item.value} delay={index * 120} />
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
