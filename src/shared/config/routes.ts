import Layout from "@pages/layout";
import LoginPage from "@pages/login";

import type { TRoute } from "./config.type";

export const Routes: TRoute = {
    login: {
        index: true,
        layout: LoginPage,
        name: `Login`,
        path: `/`,
    },
    admin: {
        layout: Layout,
        name: `Admin`,
        path: `/admin`,
        // routes: {
        //     dashboard: {
        //         index: true,
        //         name: `Dashboard`,
        //         path: `/admin/dashboard`
        //     },
        //     reservations: {
        //         name: `Reservations`,
        //         path: `/admin/reservations`
        //     },
        //     report: {
        //         name: `Report`,
        //         path: `/admin/report`
        //     },
        //     manage: {
        //         name: `Manage`,
        //         path: `/admin/manage`
        //     },
        //     menu: {
        //         name: `Menu`,
        //         path: `/admin/manage/menu`
        //     }
        // }
    },
    
    // user: {
    //     name: "User",
    //     path: "/users/:id",
    //     build: (id: string) => `/users/${id}`,
    // },
} as const;