"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SubMenu from "./SubMenu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { router } from "@/configs/routes";

export default function Navbar() {
    const pathname = usePathname();

    //** States */
    const [menu, setMenu] = useState<{
        id: string;
        open: boolean;
    }>({
        id: "",
        open: false,
    });

    return (
        <nav className="flex items-center justify-between">
            <ul className="flex items-center gap-4">
                {router.map(item => (
                    <li
                        key={item.path}
                        className={clsx(
                            "relative text-gray-700 z-[51]",
                            pathname === item.path && "text-primary",
                        )}
                        onMouseEnter={() =>
                            setMenu({
                                id: item.path,
                                open: true,
                            })
                        }
                        onMouseLeave={() =>
                            setMenu({
                                id: "",
                                open: false,
                            })
                        }
                    >
                        <Link href={item.path} className="flex items-center gap-1">
                            {item.title}
                            {item?.children && (
                                <ChevronDownIcon
                                    className={clsx(
                                        "w-2.5",
                                        menu.id === item.path && "transform rotate-180",
                                    )}
                                />
                            )}
                        </Link>

                        {item?.children && menu.id === item.path && menu.open && (
                            <SubMenu item={item} />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
