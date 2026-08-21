// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { capabilities } from "../beautimaxData"

interface MyComponentProps {
    title: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxCapabilities(props: MyComponentProps) {
    const { title } = props
    return (
        <section id="capabilities" className="section capabilities-section">
            <div className="beautimax-shell">
                <div className="cap-heading">
                    <h2 className="section-title">{title}</h2>
                </div>
                <div className="cap-grid">
                    {capabilities.map((item, index) => (
                        <article key={item.number} className="capability">
                            <div className="cap-meta mono">
                                <span>ENGINE {item.number}</span>
                                <span>0{index + 1} / 04</span>
                            </div>
                            <div className="cap-image">
                                <img className="img-full" src={item.image} alt={item.alt} />
                            </div>
                            <div className="cap-copy">
                                <p className="eyebrow mono">{item.number}</p>
                                <div>
                                    <h3 className="card-title mono">{item.title}</h3>
                                    <p className="card-copy">{item.body}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxCapabilities, {
    title: { type: ControlType.String, defaultValue: "One operating system. Four connected engines." },
})
