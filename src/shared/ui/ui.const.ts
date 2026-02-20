import type { TSize } from "./ui.type";

export const FontSize: Record<TSize, string> = {
    none: `0`,
    xs: `0.75rem`,
    sm: `0.875rem`,
    md: `1rem`,
    lg: `1.125rem`,
    xl: `1.25rem`,
    "2xl": `1.5rem`,
    "3xl": `1.75rem`,
    "4xl": `2rem`,
}

export const Margin: Record<TSize, string> = {
    none: `0`,
    xs: `0.25rem 0rem`,
    sm: `0.5rem 0rem`,
    md: `0.75rem 0rem`,
    lg: `1rem 0rem`,
    xl: `1.25rem 0rem`,
    "2xl": `1.5rem 0rem`,
    "3xl": `1.75rem 0rem`,
    "4xl": `2rem 0rem`,
}


export const Padding: Record<TSize, string> = {
    none: `0`,
    xs: `0.25rem 0.5rem`,
    sm: `0.5rem 0.75rem`,
    md: `0.75rem 1rem`,
    lg: `1rem 1.25rem`,
    xl: `1.25rem 1.5rem`,
    "2xl": `1.5rem 1.75rem`,
    "3xl": `1.75rem 2rem`,
    "4xl": `2rem 2.25rem`,
}

export const Radius: Record<TSize | `full`, string> = {
    none: `0`,
    xs: `0.125rem`,
    sm: `0.25rem`,
    md: `0.375rem`,
    lg: `0.5rem`,
    xl: `0.75rem`,
    "2xl": `1rem`,
    "3xl": `1.5rem`,
    "4xl": `2rem`,
    "full": `calc(infinity * 1px)`
}