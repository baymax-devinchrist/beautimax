const marqueeItems = [
    "BUILT FOR HOW INDONESIA MOVES",
    "BEAUTY. BRANDS. BUILT TO SCALE.",
    "JAKARTA TO EVERY CHANNEL",
]

export default function BeautimaxMarquee() {
    const repeatedItems = [...marqueeItems, ...marqueeItems]

    return (
        <section className="marquee-section" aria-label="Built for how Indonesia moves">
            <div className="marquee-rule" aria-hidden="true" />
            <div className="marquee-viewport">
                <div className="marquee-track">
                    {repeatedItems.map((item, index) => (
                        <span className="marquee-item" key={`${item}-${index}`}>
                            {item}
                            <i aria-hidden="true" />
                        </span>
                    ))}
                </div>
            </div>
            <div className="marquee-meta beautimax-shell mono">
                <span>INDONESIA BEAUTY OPERATING SYSTEM</span>
                <span>06°12&apos;S / 106°49&apos;E</span>
            </div>
        </section>
    )
}
