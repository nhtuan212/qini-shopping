"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function SubMenu({
    item,
}: {
    item: {
        path: string;
        title: string;
        children?: { path: string; title: string }[];
    };
}) {
    return (
        <ul
            className={clsx(
                "absolute top-full right-[-1rem] min-w-44 bg-white shadow-lg animate-zoomIn",
            )}
        >
            {item?.children?.map(child => (
                <li key={child.path} className="border-b">
                    <Link href={child.path} className="block p-2 text-black hover:bg-gray-50">
                        {child.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
