// User request: Verify the Beautimax code implementation file set and implement missing components using requested visuals, copied content, and responsive carousel behavior.
import { addPropertyControls, ControlType } from "../framerShim"
import { partnershipCards } from "../beautimaxData"
import BeautimaxIcon from "./BeautimaxIcon"

interface MyComponentProps {
    title: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxPartnerships(props: MyComponentProps) {
    const { title } = props
    return (
        <section id="partnerships" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell">
                <h2 className="section-title">{title}</h2>
                <div className="partnerships" style={{ marginTop: 18 }}>
                    {partnershipCards.map((card, index) => (
                        <article className="partnership-card" key={card.title}>
                            <BeautimaxIcon index={index + 9} />
                            <h3 className="card-title mono" style={{ marginTop: 10 }}>
                                {card.title}
                            </h3>
                            <p className="card-copy">{card.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxPartnerships, {
    title: {
        type: ControlType.String,
        defaultValue: "Built around the opportunity, not a fixed package.",
    },
})
