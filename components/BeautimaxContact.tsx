// User request: Verify the Beautimax code implementation file set and implement missing components using requested visuals, copied content, and responsive carousel behavior.
import { addPropertyControls, ControlType } from "../framerShim"
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
        <section id="contact" className="section contact-section">
            <div className="beautimax-shell">
                <div className="contact-layout">
                    <div className="contact-copy">
                        <h2 className="section-title">{title}</h2>
                        <p className="contact-subcopy">From market entry to daily execution, let&apos;s define the right operating model for your brand.</p>
                        <div className="contact-action">
                            <a className="btn" href="mailto:hello@beautimax.id">
                                {ctaLabel}
                            </a>
                            <div className="contact-links mono">
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
                    </div>
                    <div className="contact-artwork">
                        <img
                            className="img-full contact-art"
                            src={beautimaxAssets.planes}
                            alt="Paper planes visual representing partnership outreach"
                        />
                        <img className="contact-monogram" src={beautimaxAssets.monogram} alt="" aria-hidden="true" />
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
