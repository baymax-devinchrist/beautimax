// User request: Verify the Beautimax code implementation file set and implement missing components using requested visuals, copied content, and responsive carousel behavior.
import { addPropertyControls, ControlType } from "../framerShim"
import { partnershipCards } from "../beautimaxData"

interface MyComponentProps {
    title: string
}

function PartnershipIcon() {
    return (
        <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M12 5v14" />
            <circle cx="12" cy="12" r="9" />
        </svg>
    )
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
                    {partnershipCards.map((card) => (
                        <article className="card" key={card.title}>
                            <PartnershipIcon />
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
