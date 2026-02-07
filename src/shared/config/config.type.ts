import type { JSX } from "react";

export type TRoute = Record<string, {
    build?: (id: string) => string
    index?: boolean
    layout: () => JSX.Element
    name: string
    path: string
    routes?: TRoute
}>