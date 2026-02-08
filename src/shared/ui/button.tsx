import React, { type JSX, type Ref } from "react";
import { FontSize, Margin, Padding } from "./ui.const";
import type { TSize } from "./ui.type";

interface IInput {
    ref?: Ref<HTMLButtonElement>
    label: string
    rounded?: TSize | `full`
    size?: TSize
    style?: React.CSSProperties
    type?: `button` | `submit` | `reset`
}

export default function Button ({ ref, type, style, size, label, rounded }: IInput): JSX.Element {
    const buttonSize: TSize = size ?? `md`;

    return (
        <button 
            ref={ ref }
            type={ type ?? `button` }
            className={ 
                `transition w-full bg-[#029CDD] font-[500] text-white hover:bg-[var(--secondary-color)] cursor-pointer rounded-${ rounded ?? 0 }`
            }
            style={{ ...style, fontSize: FontSize[ buttonSize ], padding: Padding[ buttonSize ], margin: Margin[ buttonSize ] }}
        >{ label }</button>
    )
}