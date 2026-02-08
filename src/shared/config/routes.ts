import DashboardPage from "@pages/dashboard";
import FloorPage from "@pages/floor";
import Layout from "@pages/layout";
import LoginPage from "@pages/login";
import MenuPage from "@pages/menu";
import PromoPage from "@pages/promo";
import ReportPage from "@pages/report";
import StaffsPage from "@pages/staffs";
import TableOrderPage from "@pages/order";
import TableStatusPage from "@pages/report";
import dashboardIcon from "@assets/images/icons/dashboard.svg";
import manageIcon from "@assets/images/icons/manage.svg";
import reportIcon from "@assets/images/icons/report.svg";
import reservationsIcon from "@assets/images/icons/reservations.svg";
import type { TRoute } from "./config.type";

export const Routes: TRoute = {
    login: {
        excludeMenu: true,
        index: true,
        layout: LoginPage,
        name: `Login`,
        path: `/`,
    },
    admin: {
        layout: Layout,
        name: `Admin`,
        path: `/admin`,
        routes: {
            dashboard: {
                icon: dashboardIcon,
                layout: DashboardPage,
                index: true,
                name: `Dashboard`,
                path: `/admin`
            },
            reservations: {
                icon: reservationsIcon,
                name: `Reservations`,
                path: `/admin/reservations`,
                routes: {
                    tableOrder: {
                        layout: TableOrderPage,
                        name: `Table Order`,
                        path: `/admin/order`
                    },
                    tableStatus: {
                        layout: TableStatusPage,
                        name: `Table Status`,
                        path: `/admin/status`
                    }
                }
            },
            report: {
                icon: reportIcon,
                layout: ReportPage,
                name: `Report`,
                path: `/admin/report`
            },
            manage: {
                icon: manageIcon,
                name: `Manage`,
                path: `/admin/manage`,
                routes: {
                    staffs: {
                        layout: StaffsPage,
                        name: `Staffs`,
                        path: `/admin/staffs`
                    },
                    menu: {
                        layout: MenuPage,
                        name: `Menu`,
                        path: `/admin/menu`
                    },
                    promo: {
                        layout: PromoPage,
                        name: `Event and Promotions`,
                        path: `/admin/promo`
                    },
                    floor: {
                        layout: FloorPage,
                        name: `Floor and Tables`,
                        path: `/admin/floor`
                    }
                }
            }
        }
    },
    
    // user: {
    //     name: "User",
    //     path: "/users/:id",
    //     build: (id: string) => `/users/${id}`,
    // },
} as const;