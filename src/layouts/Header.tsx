"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Language from "@/components/Language";

export default function Header() {
    return (
        <header>
            <div className="container flex items-center justify-between py-2 sm:py-4">
                <Link href="/">
                    <Image
                        src="/next.svg"
                        className="w-[8rem] h-auto"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>

                <Navbar />

                <Language />
            </div>
        </header>
    );
}
