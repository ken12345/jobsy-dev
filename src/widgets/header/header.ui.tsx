import DateTime from "@widgets/datetime";
import { Routes } from "@shared/config/routes";
import { getAllChildRoutes } from "@shared/lib/router.utils";
import { type JSX } from "react";
import { useLocation } from "react-router-dom";

export default function Header (): JSX.Element {

    const { pathname } = useLocation();

    return (
        <div className="relative flex justify-between items-center w-full h-[94px] p-6 bg-white">
            <div className="text-3xl font-inter-bold">
                { Object.values(getAllChildRoutes(Routes.admin.routes!)).find(r => r.path === pathname)?.name }
            </div>
            <div>
                <DateTime />
            </div>
        </div>
    )

}