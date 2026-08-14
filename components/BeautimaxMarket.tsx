// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "framer"
import { beautimaxAssets, marketStats } from "../beautimaxData"

interface MyComponentProps {
    title: string
}

function StatIcon() {
    return (
        <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 18h16M6 14l4-4 3 3 5-5" />
            <circle cx="6" cy="14" r="1" />
            <circle cx="10" cy="10" r="1" />
            <circle cx="13" cy="13" r="1" />
            <circle cx="18" cy="8" r="1" />
        </svg>
    )
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxMarket(props: MyComponentProps) {
    const { title } = props
    return (
        <section id="market" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell">
                <h2 className="market-title">{title}</h2>
                <img className="img-full market-map" src={beautimaxAssets.map} alt="Indonesia map with market context" />
                <div className="stats">
                    {marketStats.map((item) => (
                        <article key={item.label} className="stat">
                            <StatIcon />
                            <p className="stat-value">{item.value}</p>
                            <p className="stat-label mono">{item.label}</p>
                        </article>
                    ))}
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