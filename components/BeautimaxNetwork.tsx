// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { beautimaxAssets } from "../beautimaxData"

interface MyComponentProps {
    title: string
    body: string
    statLabel: string
    imageAlt: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxNetwork(props: MyComponentProps) {
    const { title, body, statLabel, imageAlt } = props
    return (
        <section id="network" className="section chapter-screen network-section">
            <div className="beautimax-shell">
                <div className="network-header">
                    <h2 className="network-title">{title}</h2>
                    <p className="card-copy" style={{ maxWidth: 680 }}>{body}</p>
                </div>
                <div className="network-visual">
                    <div className="network-proof">
                        <p className="network-stat">10,000+</p>
                        <p className="network-label">{statLabel}</p>
                    </div>
                    <div className="network-art-frame">
                        <img
                            className="img-full network-art"
                            src={beautimaxAssets.network}
                            alt={imageAlt}
                        />
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
