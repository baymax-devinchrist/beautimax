// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { pillars } from "../beautimaxData"
import BeautimaxIcon from "./BeautimaxIcon"

interface MyComponentProps {
    title: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxAbout(props: MyComponentProps) {
    const { title } = props
    return (
        <section id="about" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell about-layout">
                <div className="about-copy">
                    <p className="section-kicker mono">01 / OPERATING MODEL</p>
                    <h2 className="section-title">{title}</h2>
                    <p className="card-copy" style={{ marginTop: 16, maxWidth: 680 }}>
                        Beautimax is a beauty brand operator and Indonesia market enabler based in Jakarta. We connect market-entry support, creator commerce, marketplace operations, channel development, and fulfilment into one operating system.
                    </p>
                    <p className="card-copy" style={{ marginTop: 12, maxWidth: 680 }}>
                        We work with global brands entering Indonesia, founders building from the ground up, and local brands ready for their next stage of growth.
                    </p>
                </div>
                <div className="pillars">
                    {pillars.map((pillar, index) => (
                        <article key={pillar.title} className="pillar">
                            <span className="pillar-number mono">0{index + 1}</span>
                            <BeautimaxIcon index={index + 4} />
                            <div className="pillar-copy">
                                <h3 className="card-title mono">{pillar.title}</h3>
                                <p className="card-copy">{pillar.body}</p>
                            </div>
                            <span className="pillar-arrow" aria-hidden="true">↗</span>
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
