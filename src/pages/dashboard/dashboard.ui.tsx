import Welcome from "./welcome.ui";
import type { JSX } from "react";

export default function DashboardPage (): JSX.Element {

    return (
        <div>
            <div className="text-sm font-inter-bold mb-1">Quick Stats</div>
            <div className="flex gap-4">
                <div></div>
                <Welcome />
            </div>
        </div>
    )

}