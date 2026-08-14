// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { useEffect, useRef, useState } from "react"
import { beautimaxAssets } from "../beautimaxData"

interface MyComponentProps {
    title: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxNetwork(props: MyComponentProps) {
    const { title } = props
    const sectionRef = useRef<HTMLElement | null>(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section || typeof IntersectionObserver === "undefined") return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setActive(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.32 }
        )
        observer.observe(section)
        return () => observer.disconnect()
    }, [])
    return (
        <section id="network" ref={sectionRef} className={`section chapter-screen network-section ${active ? "network-active" : ""}`}>
            <div className="beautimax-shell">
                <div className="network-header">
                    <h2 className="network-title">{title}</h2>
                    <p className="card-copy" style={{ maxWidth: 680 }}>
                        A broad creator ecosystem supporting content activation, affiliate commerce, product education,
                        livestream, and always-on brand visibility.
                    </p>
                </div>
                <div className="network-visual">
                    <div>
                        <p className="network-stat">10,000+</p>
                        <p className="network-label">Creators, affiliates, and content partners</p>
                    </div>
                    <div className="network-art-frame">
                        <img
                            className="img-full network-art"
                            src={beautimaxAssets.network}
                            alt="Creator and commerce network visual across Indonesia"
                        />
                        <svg className="network-connections" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
                            <path className="network-path path-one" d="M35 278 C190 80 292 100 455 248" />
                            <path className="network-path path-two" d="M445 248 C590 86 760 92 965 252" />
                            <circle className="network-node node-one" cx="35" cy="278" r="6" />
                            <circle className="network-node node-two" cx="455" cy="248" r="6" />
                            <circle className="network-node node-three" cx="965" cy="252" r="6" />
                            <circle className="network-particle particle-one" r="5">
                                <animateMotion dur="3.8s" repeatCount="indefinite" path="M35 278 C190 80 292 100 455 248" />
                            </circle>
                            <circle className="network-particle particle-two" r="5">
                                <animateMotion dur="4.2s" begin="1.1s" repeatCount="indefinite" path="M445 248 C590 86 760 92 965 252" />
                            </circle>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxNetwork, {
    title: {
        type: ControlType.String,
        defaultValue: "Beauty discovery is distributed. Our network is built for it.",
    },
})
