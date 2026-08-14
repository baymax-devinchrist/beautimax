// User request: Create a clean Framer React/TypeScript code-only implementation of the approved responsive Beautimax Home page with reusable section files.
import { addPropertyControls, ControlType } from "../framerShim"
import { startTransition, useCallback, useState } from "react"
import { navItems } from "../beautimaxData"

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
        <header className="nav">
            <div className="beautimax-shell">
                <div className="nav-inner">
                    <a href="#home" className="brand mono" onClick={(event) => {
                        event.preventDefault()
                        smoothNavigate("#home")
                    }}>
                        {brandLabel}
                    </a>
                    <nav className="nav-links" aria-label="Primary">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={(event) => {
                                event.preventDefault()
                                smoothNavigate(item.href)
                            }}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <a className="btn nav-cta" href="#market" onClick={(event) => {
                        event.preventDefault()
                        smoothNavigate("#market")
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
            </div>
        </header>
    )
}

addPropertyControls(BeautimaxNav, {
    brandLabel: { type: ControlType.String, defaultValue: "BEAUTIMAX" },
    buttonLabel: { type: ControlType.String, defaultValue: "Explore how we build" },
})
