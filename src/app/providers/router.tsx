import { Routes as ROUTES } from "@shared/config/routes";
import { Routes, Route } from "react-router-dom";
import { getAllChildRoutes } from "@shared/lib/router.utils";
import { type JSX } from "react";

export default function Router (): JSX.Element {

    return (
        <Routes>
			{
				Object.values(ROUTES).map(value => (
					value.index && value.layout ?
						<Route index path={ value.path } element={ value.layout() } />
					: value.layout ?
						<Route path={ value.path } element={ value.layout() }>
							{
								!value.index &&
									Object.values(getAllChildRoutes(value.routes ?? {})).map(v => (
										v.layout && <Route index={ v.index ?? false } path={ v.path } element={ v.layout() } />
									))
							}
						</Route>
					: null
				))
			}
		</Routes>
    )

}