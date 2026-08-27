import { useEffect, useState } from "react"

export const ControlType = {
    Boolean: "Boolean",
    String: "String",
} as const

export function addPropertyControls(..._args: unknown[]) {
    // Property controls are only used inside Framer's editor.
}

export function useIsStaticRenderer() {
    const [isStatic, setIsStatic] = useState(true)

    useEffect(() => {
        setIsStatic(false)
    }, [])

    return isStatic
}
