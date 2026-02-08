import type { TRoute } from "@shared/config/config.type";

export function getAllChildRoutes (routes: TRoute): TRoute {
    const result: TRoute = {};

    function step (obj: TRoute): void {
        Object.entries(obj).forEach(([key, value]) => {
            result[key] = value;

            if (value?.routes)
                step(value.routes);
        });
    }

    step(routes);
    return result;
}