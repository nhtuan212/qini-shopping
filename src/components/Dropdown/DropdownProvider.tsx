"use client";

import React, { createContext, useState } from "react";

type DropdownContextType = {
    open: boolean;
    setOpen: (value: boolean) => void;
    alwayOpen: boolean;
    setAlwaySetting: (value: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
    open: false,
    setOpen: () => {},
    alwayOpen: false,
    setAlwaySetting: () => {},
});

export default function TableProvider({ children }: { children: React.ReactNode }) {
    //** States */
    const [open, setOpen] = useState<boolean>(false);
    const [alwayOpen, setAlwaySetting] = useState<boolean>(false);

    //** Variables */
    const valueContext = {
        open,
        setOpen,

        alwayOpen,
        setAlwaySetting,
    };

    return <DropdownContext.Provider value={valueContext}>{children}</DropdownContext.Provider>;
}
