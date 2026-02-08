import arrowDownIcon from "@assets/images/icons/arrow-down.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, type JSX } from "react";
import type { TRoute } from "@shared/config/config.type";

interface IItem {
    icon?: string
    label: string
    path: string
    routes?: TRoute
}

export default function Item ({ icon, label, path, routes }: IItem): JSX.Element {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [ collapse, setCollapse ] = useState<boolean>(Object.values(routes ?? {}).findIndex(route => route.path === pathname) > -1);

    function click (): void {
        if(!routes)
            navigate(path);
        else setCollapse(!collapse);
    }

    return (
        <>
            <button onClick={ click }
            className="flex items-center gap-4 p-4 my-1 w-full text-left rounded-lg cursor-pointer"
            style={{ backgroundColor: pathname === path ? `var(--tertiary-color)` : `transparent` }}
            >
                <div className="flex-none w-[24px]">
                    { icon && <img src={ icon } alt="icon" /> }
                </div>
                <div className="w-full text-md font-inter-medium">{ label }</div>
                <div className="flex-none">
                    { routes && <img src={ arrowDownIcon } className="transition duration-200" style={{ transform: `scaleY(${ collapse ? 1 : -1 })` }} alt="icon" /> }
                </div>
            </button>
            {
                routes && 
                    <div className="transition-[height] duration-500 overflow-hidden" style={{ height: !collapse ? `0px` : `auto` }}>
                        {
                            Object.values(routes).map(route => (
                                <button onClick={ () => navigate(route.path) }
                                className="flex items-center gap-4 p-4 my-1 w-full text-left rounded-lg cursor-pointer"
                                style={{ backgroundColor: pathname === route.path ? `var(--tertiary-color)` : `transparent` }}>
                                    <div className="flex-none w-[24px]"></div>
                                    <div className="w-full text-md font-inter-medium">{ route.name }</div>
                                </button>
                            ))
                        }
                    </div>
            }
        </>
        
    )

}