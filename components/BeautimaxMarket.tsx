// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
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
    return (
        <section id="market" className="section market-section">
            <div className="beautimax-shell">
                <div className="market-stage">
                    <img className="img-full market-map" src={beautimaxAssets.map} alt="Indonesia map with market context" />
                    <div className="market-overlay">
                        <h2 className="market-title">{title}</h2>
                        <div className="stats">
                            {marketStats.map((item, index) => (
                                <article key={item.label} className="stat">
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
