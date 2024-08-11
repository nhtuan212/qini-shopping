"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layouts(props: { children: React.ReactNode }) {
    return (
        <main>
            <Header />

            <div>{props.children}</div>

            <Footer />
        </main>
    );
}
