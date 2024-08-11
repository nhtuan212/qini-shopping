export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const router = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/products",
        title: "Products",
        children: [
            {
                path: "/products",
                title: "All Products",
            },
        ],
    },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
];
