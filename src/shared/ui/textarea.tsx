import React, { type JSX, type Ref } from "react";
import { FontSize, Margin, Padding, Radius } from "./ui.const";
import type { TSize } from "./ui.type";

interface ITextArea {
    label?: string
    margin?: TSize
    placeholder?: string
    ref?: Ref<HTMLTextAreaElement>
    required?: boolean
    rounded?: TSize | `full`
    size?: TSize
    style?: React.CSSProperties
    resizable?: boolean
}

export default function TextArea ({ ref, margin, style, resizable, size, rounded, label, placeholder, required }: ITextArea): JSX.Element {
    const inputSize: TSize = size ?? `md`;

    return (
        <div style={{ margin: Margin[ margin ?? `md` ] }}>
            {
                label && 
                <div className="text-md text-[#9C9C9C]" style={{ fontSize: FontSize[ inputSize ] }}>
                    { label } { required && <span className="text-red-500">*</span> }
                </div>
            }
            <textarea 
                ref={ ref }
                placeholder={ placeholder ?? `` }
                required={ required ?? false }
                className={
                    `transition w-full bg-white font-[500] text-black placeholder-[#9C9C9C] box-shadow shadow-[#9D9D9D40] focus:outline-1 focus:outline-[var(--secondary-color)]` 
                } 
                style={{ fontSize: FontSize[ inputSize ], padding: Padding[ inputSize ], borderRadius: Radius[ rounded ?? `none` ], resize: resizable ? `vertical` : `none`, ...style }}
            />
        </div>
    )

}