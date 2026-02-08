import type { JSX } from "react";

export type TRoute = Record<string, {
    build?: (id: string) => string
    excludeMenu?: boolean
    icon?: string
    index?: boolean
    layout?: () => JSX.Element // if undefined means dropdown
    name: string
    path: string
    routes?: TRoute
}>