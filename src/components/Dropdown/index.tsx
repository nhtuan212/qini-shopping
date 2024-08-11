/**
 * Dropdown component that provides a dropdown menu functionality.
 *
 * @component
 * @example
 * ```tsx
 * import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from "./components/Dropdown";
 *
 * const MyComponent = () => {
 *   return (
 *     <Dropdown>
 *       <DropdownButton>Toggle Dropdown</DropdownButton>
 *       <DropdownMenu>
 *         <DropdownItem>Option 1</DropdownItem>
 *         <DropdownItem>Option 2</DropdownItem>
 *         <DropdownItem>Option 3</DropdownItem>
 *       </DropdownMenu>
 *     </Dropdown>
 *   );
 * };
 * ```
 */

"use client";

import React, { ButtonHTMLAttributes, HTMLAttributes, useContext, useEffect, useRef } from "react";
import clsx from "clsx";
import DropdownProvider, { DropdownContext } from "./DropdownProvider";

type DropdownProps = {
    className?: string;
    children: React.ReactNode;
};

export const Dropdown = React.forwardRef(
    (
        { className, children, ...props }: DropdownProps & HTMLAttributes<HTMLDivElement>,
        ref: React.ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <div ref={ref} className={clsx("relative py-1 leading-normal", className)} {...props}>
                <DropdownProvider>{children}</DropdownProvider>
            </div>
        );
    },
);

export const DropdownButton = ({
    className,
    children,
    type = "button",
    ...props
}: DropdownProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { open, setOpen } = useContext(DropdownContext);

    return (
        <button
            className={clsx("relative w-full h-full", className)}
            type={type}
            onClick={() => setOpen(!open)}
            {...props}
        >
            {children}
        </button>
    );
};

export const DropdownMenu = ({ className, children, ...props }: DropdownProps) => {
    const { open, setOpen } = useContext(DropdownContext);

    //** Effects */
    useEffect(() => {
        //** Handle outside click */
        const handleOutsideClick = (event: MouseEvent) => {
            const dropdownMenu = document.getElementById("dropdown-menu");
            if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [open, setOpen]);

    return (
        open && (
            <div
                id="dropdown-menu"
                className={clsx(
                    "absolute right-0 w-40 mt-2 py-2 bg-white border border-gray-200 rounded-md shadow-lg animate-zoomIn z-[51]",
                    !open && "animate-zoomOut",
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        )
    );
};

export const DropdownItem = ({ className, children, ...props }: DropdownProps) => {
    const { setOpen } = useContext(DropdownContext);

    //** Refs */
    const dropdownMenuItemRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={dropdownMenuItemRef}
            className={clsx(
                "relative z-[51]",
                "[&>*]:w-full",
                "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                className,
            )}
            onClick={() => setOpen(false)}
            {...props}
        >
            {children}
        </div>
    );
};
