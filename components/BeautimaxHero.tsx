// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { useCallback } from "react"
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
    const scrollToMarket = useCallback(() => {
        if (typeof window !== "undefined") {
            const node = document.querySelector("#market")
            if (node) node.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])
    return (
        <section id="home" className="beautimax-shell" style={{ position: "relative" }}>
            <div className="hero">
                <div className="hero-copy">
                    <h1 className="h1">{heading}</h1>
                    <p className="lead muted">{body}</p>
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
                </div>
                <img className="img-full hero-visual" src={beautimaxAssets.hero} alt="Beautimax hero serum product visual" />
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
