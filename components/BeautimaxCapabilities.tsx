// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "framer"
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
        <section id="capabilities" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell">
                <h2 className="section-title">{title}</h2>
                <div className="cap-grid" style={{ marginTop: 18 }}>
                    {capabilities.map((item) => (
                        <article key={item.number} className="card">
                            <p className="eyebrow mono">{item.number}</p>
                            <h3 className="card-title mono">{item.title}</h3>
                            <p className="card-copy">{item.body}</p>
                            <div className="cap-image">
                                <img className="img-full" src={item.image} alt={item.alt} />
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