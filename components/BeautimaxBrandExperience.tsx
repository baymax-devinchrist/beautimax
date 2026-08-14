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
import { beautimaxAssets, brandSlides } from "../beautimaxData"

interface MyComponentProps {
    title: string
    body: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxBrandExperience(props: MyComponentProps) {
    const { title, body } = props
    const [index, setIndex] = useState(0)
    const [isInView, setIsInView] = useState(true)
    const touchStartX = useRef<number | null>(null)
    const carouselRef = useRef<HTMLDivElement | null>(null)
    const isStatic = useIsStaticRenderer()
    const slideCount = useMemo(() => brandSlides.length, [])
    const orderedSlides = useMemo(
        () => brandSlides.map((_, offset) => brandSlides[(index + offset) % slideCount]),
        [index, slideCount]
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
        }, 2000)
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
                            aria-label="Brand experience carousel"
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
                            <p className="mono" style={{ fontSize: 12 }}>
                                {brandSlides[index]?.title}
                            </p>
                            <div className="carousel-nav">
                                <button className="icon-btn" aria-label="Previous slide" onClick={prev} type="button">
                                    ←
                                </button>
                                {brandSlides.map((slide, dotIndex) => (
                                    <button
                                        key={slide.title}
                                        className={`dot ${dotIndex === index ? "active" : ""}`}
                                        aria-label={`Go to slide ${dotIndex + 1}`}
                                        type="button"
                                        onClick={() => goTo(dotIndex)}
                                    />
                                ))}
                                <button className="icon-btn" aria-label="Next slide" onClick={next} type="button">
                                    →
                                </button>
                            </div>
                        </div>
                        <aside className="phone-frame" aria-label="Phone commerce preview">
                            <img src={beautimaxAssets.phone} alt="Phone preview of beauty commerce experience" />
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
