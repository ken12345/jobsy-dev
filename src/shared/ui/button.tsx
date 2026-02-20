import React, { type JSX, type Ref } from "react";
import { FontSize, Margin, Padding, Radius } from "./ui.const";
import type { TSize } from "./ui.type";

interface IButton {
    ref?: Ref<HTMLButtonElement>
    label: string
    rounded?: TSize | `full`
    size?: TSize
    style?: React.CSSProperties
    type?: `button` | `submit` | `reset`
    onClick?: (e: React.MouseEvent) => void
}

export default function Button ({ ref, type, style, size, label, rounded, onClick }: IButton): JSX.Element {
    const buttonSize: TSize = size ?? `md`;

    return (
        <button 
            ref={ ref }
            type={ type ?? `button` }
            onClick={ e => onClick?.(e) }
            className={ 
                `transition w-full bg-[#029CDD] font-[500] text-white hover:bg-[var(--secondary-color)] cursor-pointer`
            }
            style={{ fontSize: FontSize[ buttonSize ], padding: Padding[ buttonSize ], margin: Margin[ buttonSize ], borderRadius: Radius[ rounded ?? `none` ], ...style }}
        >{ label }</button>
    )
}