export interface NavItem {
    url: string,
    text: string,
}

export const navItems: NavItem[] = [
    {
        url: "/dashboard",
        text: "Overview"
    },
    {
        url: "/dashboard/students",
        text: "Students"
    },
    {
        url: "/dashboard/attendance",
        text: "Attendance",
    },
]

export const additionalNavItems: NavItem[] = [
    {
        url: "/dashboard/shop",
        text: "Shop"
    }
]