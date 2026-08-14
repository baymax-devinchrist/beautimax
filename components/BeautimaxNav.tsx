// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { startTransition, useCallback, useEffect, useState } from "react"
import { beautimaxAssets, navItems } from "../beautimaxData"

interface MyComponentProps {
    brandLabel: string
    buttonLabel: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function BeautimaxNav(props: MyComponentProps) {
    const { brandLabel, buttonLabel } = props
    const [open, setOpen] = useState(false)
    const [compact, setCompact] = useState(false)
    const [activeHref, setActiveHref] = useState("#home")
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (typeof window === "undefined") return
        const updateScroll = () => {
            setCompact(window.scrollY > 44)
            const available = document.documentElement.scrollHeight - window.innerHeight
            setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0)
        }
        updateScroll()
        window.addEventListener("scroll", updateScroll, { passive: true })

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible?.target.id) setActiveHref(`#${visible.target.id}`)
            },
            { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.1, 0.35] }
        )
        navItems.forEach((item) => {
            const section = document.querySelector(item.href)
            if (section) observer.observe(section)
        })
        return () => {
            window.removeEventListener("scroll", updateScroll)
            observer.disconnect()
        }
    }, [])
    const smoothNavigate = useCallback((href: string) => {
        if (typeof window !== "undefined") {
            const node = document.querySelector(href)
            if (node) {
                node.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }
    }, [])
    const closeMenu = useCallback(() => {
        startTransition(() => setOpen(false))
    }, [])
    const toggleMenu = useCallback(() => {
        startTransition(() => setOpen((v) => !v))
    }, [])
    return (
        <header className={`nav ${compact ? "is-compact" : ""}`}>
            <div className="beautimax-shell">
                <div className="nav-inner">
                    <a href="#home" className="brand mono" onClick={(event) => {
                        event.preventDefault()
                        smoothNavigate("#home")
                    }}>
                        <img src={beautimaxAssets.monogram} alt="" aria-hidden="true" />
                        {brandLabel}
                    </a>
                    <nav className="nav-links" aria-label="Primary">
                        {navItems.map((item) => (
                            <a className={activeHref === item.href ? "active" : ""} key={item.href} href={item.href} onClick={(event) => {
                                event.preventDefault()
                                smoothNavigate(item.href)
                            }}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <a className="btn nav-cta" href="#contact" onClick={(event) => {
                        event.preventDefault()
                        smoothNavigate("#contact")
                    }}>
                        {buttonLabel}
                    </a>
                    <button
                        className="mobile-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        aria-controls="beautimax-mobile-navigation"
                        onClick={toggleMenu}
                        type="button"
                    >
                        {open ? "Close" : "Menu"}
                    </button>
                </div>
                {open && (
                    <nav id="beautimax-mobile-navigation" className="drawer" aria-label="Mobile navigation">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={(event) => {
                                event.preventDefault()
                                smoothNavigate(item.href)
                                closeMenu()
                            }}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
                <span className="nav-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
            </div>
        </header>
    )
}

addPropertyControls(BeautimaxNav, {
    brandLabel: { type: ControlType.String, defaultValue: "BEAUTIMAX" },
    buttonLabel: { type: ControlType.String, defaultValue: "Start a conversation" },
})
