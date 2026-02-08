import React, { type JSX, type Ref } from "react";
import { FontSize, Margin, Padding } from "./ui.const";
import type { TSize } from "./ui.type";

interface IInput {
    ref?: Ref<HTMLInputElement>
    placeholder?: string
    required?: boolean
    rounded?: TSize | `full`
    size?: TSize
    style?: React.CSSProperties
    type?: React.HTMLInputTypeAttribute
}

export default function Input ({ ref, type, style, size, rounded, placeholder, required }: IInput): JSX.Element {
    const inputSize: TSize = size ?? `md`;

    return (
        <input 
            ref={ ref }
            type={ type ?? `text` }
            placeholder={ placeholder ?? `` }
            required={ required ?? false }
            className={
                `transition w-full bg-white font-[500] text-[var(--primary-color)] placeholder-[#9C9C9C] shadow-md shadow-[#9D9D9D40] rounded-${ rounded ?? 0 }` 
            } 
            style={{ ...style, fontSize: FontSize[ inputSize ], padding: Padding[ inputSize ], margin: Margin[ inputSize ] }}
        />
    )
}