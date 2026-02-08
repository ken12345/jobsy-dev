import Item from "./item.ui";
import logo from "@assets/images/logo.png";
import { Routes } from "@shared/config/routes";
import type { JSX } from "react";

export default function Sidebar (): JSX.Element {

    return (
        <div className="relative w-full max-w-[282px] p-4 bg-white border-r-1 border-[#E2E7EE]">
            <img src={ logo } className="max-w-[172px] mx-auto" alt="logo" />
            <div className="mt-18">
                {
                    Object.values(Routes.admin.routes!).map((route, i) => (
                        !route.excludeMenu &&
                            <Item icon={ route.icon } label={ route.name } path={ route.path } routes={ route.routes } key={ i }/>
                    ))
                }
            </div>
        </div>
    )

}