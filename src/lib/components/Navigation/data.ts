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
        url: "/dashboard/products",
        text: "Products"
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