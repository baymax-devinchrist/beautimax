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
                    <p className="section-kicker mono">03 / DISTRIBUTED DISCOVERY</p>
                    <h2 className="network-title">{title}</h2>
                    <p className="card-copy" style={{ maxWidth: 680 }}>
                        A broad creator ecosystem supporting content activation, affiliate commerce, product education,
                        livestream, and always-on brand visibility.
                    </p>
                </div>
                <div className="network-visual">
                    <div className="network-proof">
                        <p className="network-proof-label mono">ACTIVE NETWORK</p>
                        <p className="network-stat">10,000+</p>
                        <p className="network-label">Creators, affiliates, and content partners</p>
                        <p className="network-proof-foot mono">CREATORS → CONTENT → COMMERCE</p>
                    </div>
                    <div className="network-art-frame">
                        <img
                            className="img-full network-art"
                            src={beautimaxAssets.network}
                            alt="Creator and commerce network visual across Indonesia"
                        />
                        <span className="network-signal signal-one" aria-hidden="true" />
                        <span className="network-signal signal-two" aria-hidden="true" />
                        <span className="network-signal signal-three" aria-hidden="true" />
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
