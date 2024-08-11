"use client";

import React from "react";

export default function Loading() {
    return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-white z-50">
            <div className="w-20 h-20 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
        </div>
    );
}
