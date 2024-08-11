"use client";

import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    inputRef?: any;
}

const Input = React.forwardRef(
    (
        {
            className,
            label,
            errorMessage,
            startContent,
            endContent,
            type = "text",
            ...props
        }: InputProps,
        ref: React.ForwardedRef<HTMLInputElement>,
    ) => {
        return (
            <div className={clsx("input", className)}>
                {label && <label className="text-sm">{label}</label>}
                <div className="input-group flex items-center gap-2">
                    {startContent && <span>{startContent}</span>}

                    <input ref={ref} type={type} {...props} />

                    {endContent && <span>{endContent}</span>}
                </div>

                {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            </div>
        );
    },
);

export default Input;
