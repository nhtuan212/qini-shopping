"use client";

import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

const Button = React.forwardRef(
    (
        { className, children, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>,
        ref: React.ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button ref={ref} className={clsx("button", className)} type={type} {...props}>
                {children}
            </button>
        );
    },
);

const Icon = React.forwardRef(
    (
        { className, children, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>,
        ref: React.ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button
                ref={ref}
                className={clsx("button buttonIcon", className)}
                type={type}
                {...props}
            >
                {children}
            </button>
        );
    },
);

(Button as any).Icon = Icon;

export default Button as any;
