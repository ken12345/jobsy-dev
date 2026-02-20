import { Paper } from "@shared/ui";
import type { JSX } from "react";

export default function Welcome (): JSX.Element {

    return (
        <Paper rounded="md">
            <div>
                <div className="leading-4">
                    <div className="text-xl">Hello,</div>
                    <div className="text-3xl font-inter-bold my-1">Lorraine!</div>
                    <div className="text-xs text-[#7F8FA4]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                </div>
            </div>
        </Paper>
    )

}