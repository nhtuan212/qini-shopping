import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Layouts from "@/layouts";
import "./globals.scss";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Layouts>{children}</Layouts>
            </body>
        </html>
    );
}
