import type { JSX } from "react";
import logo from "@assets/images/logo.png";

export default function Sidebar (): JSX.Element {

    return (
        <div className="relative w-full max-w-[282px] p-4 bg-white border-r-1 border-[#E2E7EE]">
            <img src={ logo } className="max-w-[172px] mx-auto" alt="logo" />
        </div>
    )

}