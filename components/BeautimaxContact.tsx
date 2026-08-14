// User request: Verify the Beautimax code implementation file set and implement missing components using requested visuals, copied content, and responsive carousel behavior.
import { addPropertyControls, ControlType } from "framer"
import { beautimaxAssets } from "../beautimaxData"

interface MyComponentProps {
    title: string
    ctaLabel: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxContact(props: MyComponentProps) {
    const { title, ctaLabel } = props
    return (
        <section id="contact" className="section" style={{ position: "relative", paddingBottom: 0 }}>
            <div className="beautimax-shell">
                <div className="contact-layout">
                    <div>
                        <h2 className="section-title">{title}</h2>
                        <a className="btn" href="mailto:hello@beautimax.id" style={{ marginTop: 16 }}>
                            {ctaLabel}
                        </a>
                        <div className="contact-links mono" style={{ fontSize: 12, marginTop: 18 }}>
                            <a href="mailto:hello@beautimax.id" aria-label="Send email to hello@beautimax.id">
                                hello@beautimax.id
                            </a>
                            <a
                                href="https://wa.me/628158153589"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Open WhatsApp chat with Beautimax"
                            >
                                +62 815-8153-589
                            </a>
                        </div>
                    </div>
                    <div>
                        <img
                            className="img-full"
                            src={beautimaxAssets.planes}
                            alt="Paper planes visual representing partnership outreach"
                        />
                    </div>
                </div>
                <div className="footer mono">
                    COPYRIGHT 2026 BEAUTIMAX©. ALL RIGHTS RESERVED.
                </div>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxContact, {
    title: {
        type: ControlType.String,
        defaultValue: "Tell us where your brand should be in Indonesia.",
    },
    ctaLabel: {
        type: ControlType.String,
        defaultValue: "Start the conversation",
    },
})