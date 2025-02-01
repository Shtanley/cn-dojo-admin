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
        url: "/dashboard/customers",
        text: "Customers"
    },
    {
        url: "/dashboard/orders",
        text: "Orders"
    },
]