// User request: Verify the Beautimax code implementation file set and implement missing components using requested visuals, copied content, and responsive carousel behavior.
import { addPropertyControls, ControlType, useIsStaticRenderer } from "../framerShim"
import {
    startTransition,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
    type TouchEvent,
} from "react"
import { beautimaxAssets, type BrandSlide } from "../beautimaxData"

interface MyComponentProps {
    title: string
    body: string
    slides: BrandSlide[]
    carouselLabel: string
    previousLabel: string
    nextLabel: string
    slideLabel: string
    phoneLabel: string
    phoneAlt: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxBrandExperience(props: MyComponentProps) {
    const { title, body, slides, carouselLabel, previousLabel, nextLabel, slideLabel, phoneLabel, phoneAlt } = props
    const [index, setIndex] = useState(0)
    const [isInView, setIsInView] = useState(true)
    const touchStartX = useRef<number | null>(null)
    const carouselRef = useRef<HTMLDivElement | null>(null)
    const isStatic = useIsStaticRenderer()
    const slideCount = slides.length
    const orderedSlides = useMemo(
        () => slides.map((_, offset) => slides[(index + offset) % slideCount]),
        [index, slideCount, slides]
    )

    useEffect(() => {
        if (isStatic) {
            startTransition(() => setIsInView(true))
            return
        }
        if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
            startTransition(() => setIsInView(true))
            return
        }

        const node = carouselRef.current
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                startTransition(() => setIsInView(Boolean(entry?.isIntersecting)))
            },
            { threshold: 0.4 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [isStatic])

    const goTo = useCallback(
        (next: number) => {
            const normalized = (next + slideCount) % slideCount
            startTransition(() => setIndex(normalized))
        },
        [slideCount]
    )

    const next = useCallback(() => goTo(index + 1), [goTo, index])
    const prev = useCallback(() => goTo(index - 1), [goTo, index])

    useEffect(() => {
        if (isStatic || !isInView) return
        if (typeof window === "undefined") return
        const timer = window.setInterval(() => {
            startTransition(() => setIndex((prevIndex) => (prevIndex + 1) % slideCount))
        }, 4500)
        return () => window.clearInterval(timer)
    }, [isInView, isStatic, slideCount])

    const onKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "ArrowRight") next()
            if (event.key === "ArrowLeft") prev()
        },
        [next, prev]
    )

    const onTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
    }, [])

    const onTouchEnd = useCallback(
        (event: TouchEvent<HTMLDivElement>) => {
            const startX = touchStartX.current
            const endX = event.changedTouches[0]?.clientX
            if (startX === null || typeof endX !== "number") return
            const delta = endX - startX
            if (Math.abs(delta) > 35) {
                if (delta < 0) next()
                if (delta > 0) prev()
            }
            touchStartX.current = null
        },
        [next, prev]
    )

    return (
        <section id="brands" className="section" style={{ position: "relative" }}>
            <div className="beautimax-shell">
                <div className="brands-layout">
                    <div className="brands-copy">
                        <h2 className="section-title">{title}</h2>
                        <p className="card-copy" style={{ maxWidth: 700 }}>
                            {body}
                        </p>
                    </div>
                    <div className="brand-stage">
                        <div
                            ref={carouselRef}
                            className="carousel"
                            tabIndex={0}
                            onKeyDown={onKeyDown}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                            aria-label={carouselLabel}
                        >
                            <div className="slides">
                                {orderedSlides.map((slide) => (
                                    <figure className="slide" key={slide.title} style={{ margin: 0 }}>
                                        <img className="img-full" src={slide.image} alt={slide.alt} />
                                    </figure>
                                ))}
                            </div>
                        </div>
                        <div className="carousel-meta">
                            <div className="carousel-nav">
                                <button className="icon-btn" aria-label={previousLabel} onClick={prev} type="button">
                                    ←
                                </button>
                                {slides.map((slide, dotIndex) => (
                                    <button
                                        key={slide.title}
                                        className={`dot ${dotIndex === index ? "active" : ""}`}
                                        aria-label={`${slideLabel} ${dotIndex + 1}`}
                                        type="button"
                                        onClick={() => goTo(dotIndex)}
                                    />
                                ))}
                                <button className="icon-btn" aria-label={nextLabel} onClick={next} type="button">
                                    →
                                </button>
                            </div>
                        </div>
                        <aside className="phone-frame" aria-label={phoneLabel}>
                            <img src={beautimaxAssets.phone} alt={phoneAlt} />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

addPropertyControls(BeautimaxBrandExperience, {
    title: { type: ControlType.String, defaultValue: "We operate in the market, not outside it." },
    body: {
        type: ControlType.String,
        defaultValue:
            "Our experience operating beauty brands gives us a direct view of how consumers respond to products, positioning, content, pricing, channels, and repeat purchase.",
        displayTextArea: true,
    },
})
