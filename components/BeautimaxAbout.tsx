// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { pillars } from "../beautimaxData"

interface MyComponentProps {
    title: string
}

function PillarIcon() {
    return (
        <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 12h8M12 8v8" />
        </svg>
    )
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxAbout(props: MyComponentProps) {
    const { title } = props
    return (
        <section id="about" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell grid-2">
                <div>
                    <h2 className="section-title">{title}</h2>
                    <p className="card-copy" style={{ marginTop: 16, maxWidth: 680 }}>
                        Beautimax is a beauty brand operator and Indonesia market enabler based in Jakarta. We connect market-entry support, creator commerce, marketplace operations, channel development, and fulfilment into one operating system.
                    </p>
                    <p className="card-copy" style={{ marginTop: 12, maxWidth: 680 }}>
                        We work with global brands entering Indonesia, founders building from the ground up, and local brands ready for their next stage of growth.
                    </p>
                </div>
                <div className="pillars">
                    {pillars.map((pillar) => (
                        <article key={pillar.title} className="card">
                            <PillarIcon />
                            <h3 className="card-title mono" style={{ marginTop: 10 }}>
                                {pillar.title}
                            </h3>
                            <p className="card-copy">{pillar.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxAbout, {
    title: { type: ControlType.String, defaultValue: "Behind the brands built for Indonesia." },
})
