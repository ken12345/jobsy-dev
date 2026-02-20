import { type JSX } from "react";
import { FontSize, Margin, Padding } from "./ui.const";
import type { TSize } from "./ui.type";

interface IRadioGroup {
    label?: string
    name: string
    margin?: TSize
    options: Array<{
        value: string | number
        label: string
        checked?: boolean
    }>
    size?: TSize
    style?: React.CSSProperties
}

export default function RadioGroup ({ label, name, margin, options, size, style }: IRadioGroup): JSX.Element {
    const fieldSize: TSize = size ?? `md`;

    return (
        <fieldset className="text-[#9C9C9C]" style={{ fontSize: FontSize[ fieldSize ], margin: Margin[ margin ?? `md` ], padding: Padding[ fieldSize ], ...style }}>
            {
                label &&
                <legend>{ label }</legend>
            }
            <div className="w-full flex gap-2 justify-between">
                {
                    options.map((option, i) => (
                        <label className="flex item-center gap-2" key={ i }>
                            <input type="radio" className="accent-[var(--primary-color)] scale-150" name={ name } value={ option.value } checked={ option.checked } />
                            {
                                option.label &&
                                <div>{ option.label }</div>
                            }
                        </label>
                    ))
                }
            </div>
        </fieldset>
    )
}