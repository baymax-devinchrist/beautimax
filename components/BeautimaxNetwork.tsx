// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
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
    return (
        <section id="network" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell grid-2">
                <div>
                    <h2 className="network-title">{title}</h2>
                    <p className="card-copy" style={{ maxWidth: 680 }}>
                        A broad creator ecosystem supporting content activation, affiliate commerce, product education,
                        livestream, and always-on brand visibility.
                    </p>
                    <p className="network-stat">10,000+</p>
                    <p className="mono" style={{ fontSize: 12 }}>
                        Creators, affiliates, and content partners
                    </p>
                </div>
                <div>
                    <img
                        className="img-full"
                        src={beautimaxAssets.network}
                        alt="Creator and commerce network visual across Indonesia"
                    />
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
