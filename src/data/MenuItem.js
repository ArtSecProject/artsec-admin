
import { icons } from "../constant/icon";

export const MenuItem = [
    {
        id: 1,
        title: "Dashboard",
        icon: <icons.Dashboard />,
        path: "overview"
    },
    {
        id: 2,
        title: "Trend",
        icon: <icons.Media />,
        path: "trends",

    },

    {
        id: 3,
        title: "Favourite",
        icon: <icons.Projects />,
        path: "favourite",
    },

    // {
    //     id: 4,
    //     title: "Pages",
    //     icon: <icons.Dashboard />,
    //     path: '#',
    //     submenu: true,
    //     submenuItem: [
    //         {
    //             id: 1,
    //             title: "Home Page",
    //             path: "pages/home",
    //         },
    //         {
    //             id: 2,
    //             title: "About Us",
    //             path: "pages/about",
    //         },
    //     ]
    // },

    // {
    //     id: 5,
    //     title: "Comment",
    //     icon: <icons.Comment />,
    //     path: "comment",
    //     // spacing: true,
    // },

    // {
    //     id: 6,
    //     title: "Management",
    //     icon: <icons.Management />,
    //     path: "management",
    // },

    // {
    //     id: 7,
    //     title: "Audit Log",
    //     icon: <icons.AuditLog />,
    //     path: "audit-log"
    // },

    // {
    //     id: 8,
    //     title: "Setting",
    //     icon: <icons.Setting />,
    //     path: "setting"
    // },
]



export const user_profile = [
    {
        id: 1,
        title: "Profile",
        icon: <icons.ProfileIcon />,
        path: "user-account"
    },
    {
        id: 2,
        title: "Investment History",
        icon: <icons.HistoryIcon />,
        path: "user-account/investment-history",

    },

    {
        id: 3,
        title: "Payment Method",
        icon: <icons.PaymentMethod />,
        path: "user-account/payment-method",
    },

    {
        id: 4,
        title: "Documents",
        icon: <icons.DocumentIcon />,
        path: "user-account/documents",
    },

    {
        id: 5,
        title: "Notification Settings",
        icon: <icons.NotifyIcon />,
        path: "user-account/notification-setting",
    },
]