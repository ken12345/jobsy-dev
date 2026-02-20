import React, { type JSX } from "react";
import { Padding, Radius } from "./ui.const";
import type { TSize } from "./ui.type";

interface IPaper {
    children: React.ReactNode
    padding?: TSize
    rounded?: TSize | `full`
    style?: React.CSSProperties
}

export default function Paper ({ style, padding, rounded, children }: IPaper): JSX.Element {
    return (
        <div
        className="w-full bg-white"
        style={{ padding: Padding[ padding ?? `md` ], borderRadius: Radius[ rounded ?? `none` ], ...style }}
        >{ children }</div>
    )
}