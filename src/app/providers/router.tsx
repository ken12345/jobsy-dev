import { Routes as ROUTES } from "@shared/config/routes";

import { Routes, Route } from "react-router-dom";
import { type JSX } from "react";

export default function Router (): JSX.Element {

    return (
        <Routes>
			{
				Object.values(ROUTES).map(value => (
					value.index ?
						<Route index path={ value.path } element={ value.layout() } />
					:
						<Route path={ value.path } element={ value.layout() }>
							{
								!value.index ?
									Object.values(value.routes ?? {}).map(v => (
										<Route index={ v.index ?? false } path={ v.path } element={ v.layout() } />
									))
								: null
							}
						</Route>
				))
			}
		</Routes>
    )

}