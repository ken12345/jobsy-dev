import type { JSX } from "react";
import { Margin, Padding, Radius } from "./ui.const";
import type { TSize } from "./ui.type";

interface IGroup {
    children: React.ReactNode
    label?: string
    padding?: TSize
    margin?: TSize
    rounded?: TSize | `full`
    style?: React.CSSProperties
}

export default function Group ({ children, label, margin, padding, rounded, style }: IGroup): JSX.Element {

    const border = style?.border ?? `1px dashed #9C9C9C`;

    return (
        <div className="relative w-full" style={{ margin: Margin[ margin ?? `xl` ] }}>
            {
                label && 
                <div style={{ backdropFilter: `blur(200px)` }}
                className="absolute top-[-11px] left-[10px] px-[10px] text-md text-[var(--primary-color)]">
                    { label }
                </div>
            }
            <div style={{ padding: Padding[ padding ?? `md` ], borderRadius: Radius[ rounded ?? `none` ], border, ...style }}>{ children }</div>
        </div>
    )

}