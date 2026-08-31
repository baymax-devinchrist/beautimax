// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { type Pillar } from "../beautimaxData"
import BeautimaxIcon from "./BeautimaxIcon"

interface MyComponentProps {
    title: string
    intro: string
    audience: string
    pillars: Pillar[]
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxAbout(props: MyComponentProps) {
    const { title, intro, audience, pillars } = props
    return (
        <section id="about" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell about-layout">
                <div className="about-copy">
                    <h2 className="section-title">{title}</h2>
                    <p className="card-copy about-intro">{intro}</p>
                    <p className="card-copy about-audience">{audience}</p>
                </div>
                <div className="pillars">
                    {pillars.map((pillar, index) => (
                        <article key={pillar.title} className="pillar">
                            <BeautimaxIcon index={index + 4} />
                            <div className="pillar-copy">
                                <h3 className="card-title mono">{pillar.title}</h3>
                                <p className="card-copy">{pillar.body}</p>
                            </div>
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
