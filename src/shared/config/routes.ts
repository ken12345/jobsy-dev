import DashboardPage from "@pages/dashboard";
import FloorPage from "@pages/floor";
import Layout from "@pages/layout";
import LoginPage from "@pages/login";
import MenuPage from "@pages/menu";
import PromoPage from "@pages/promo";
import RegisterPage from "@pages/register";
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
    regiter: {
        excludeMenu: true,
        layout: RegisterPage,
        name: `Create Store Account`,
        path: `/create-store-account`
    },
    admin: {
        layout: Layout,
        name: `Admin`,
        path: `/`,
        routes: {
            dashboard: {
                icon: dashboardIcon,
                layout: DashboardPage,
                index: true,
                name: `Dashboard`,
                path: `/dashboard`
            },
            reservations: {
                icon: reservationsIcon,
                name: `Reservations`,
                path: `/reservations`,
                routes: {
                    tableOrder: {
                        layout: TableOrderPage,
                        name: `Table Order`,
                        path: `/tableorder`
                    },
                    tableStatus: {
                        layout: TableStatusPage,
                        name: `Table Status`,
                        path: `/tablestatus`
                    }
                }
            },
            report: {
                icon: reportIcon,
                layout: ReportPage,
                name: `Report`,
                path: `/report`
            },
            manage: {
                icon: manageIcon,
                name: `Manage`,
                path: `/manage`,
                routes: {
                    staffs: {
                        layout: StaffsPage,
                        name: `Staffs`,
                        path: `/staffs`
                    },
                    menu: {
                        layout: MenuPage,
                        name: `Menu`,
                        path: `/menu`
                    },
                    promo: {
                        layout: PromoPage,
                        name: `Event and Promotions`,
                        path: `/promo`
                    },
                    floor: {
                        layout: FloorPage,
                        name: `Floor and Tables`,
                        path: `/floor`
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