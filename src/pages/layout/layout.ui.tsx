import Header from "@widgets/header";
import Sidebar from "@widgets/sidebar";
import { Outlet } from "react-router-dom";
// import { useAppSelector } from "@shared/lib/hooks";
import type { JSX } from "react";

export default function Layout (): JSX.Element {

    // const useDetails = useAppSelector((state) => state.user.details);

    return (
        <div className="flex w-[100vw] h-[100dvh] bg-[#ECEEF2] overflow-hidden">
            <Sidebar />
            <div className="w-full">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}