import { useEffect, useState } from "react"

export default function BeautimaxWhatsApp({ label }: { label: string }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return
        const update = () => setVisible(window.scrollY > Math.min(window.innerHeight * 0.55, 520))
        update()
        window.addEventListener("scroll", update, { passive: true })
        window.addEventListener("resize", update)
        return () => {
            window.removeEventListener("scroll", update)
            window.removeEventListener("resize", update)
        }
    }, [])

    return (
        <a
            className={`whatsapp-float ${visible ? "is-visible" : ""}`}
            href="https://wa.me/6285880011990"
            target="_blank"
            rel="noreferrer"
            aria-label={label}
        >
            <span className="whatsapp-status" aria-hidden="true" />
            <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16.02 4.2A11.6 11.6 0 0 0 6.2 21.98L4.7 27.4l5.56-1.46A11.6 11.6 0 1 0 16.02 4.2Zm0 20.9c-1.86 0-3.67-.5-5.25-1.45l-.38-.22-3.3.87.88-3.21-.25-.4a9.3 9.3 0 1 1 8.3 4.41Zm5.1-6.97c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.18.28-.72.91-.88 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39a8.43 8.43 0 0 1-1.55-1.93c-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.64-1.54-.87-2.1-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-.99.96-.99 2.35 0 1.38 1.01 2.72 1.15 2.91.14.19 1.98 3.02 4.8 4.24.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.89-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33Z" />
            </svg>
            <span className="whatsapp-label">WhatsApp</span>
        </a>
    )
}
