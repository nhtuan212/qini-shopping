"use client";

import React from "react";
import Slider from "@/components/Slider";
import Products from "@/components/Products";
import { slideApi } from "@/apis/slide";

export default function Home() {
    return (
        <div>
            <Slider
                data={slideApi}
                slidesPerView={1}
                autoplay={{
                    pauseOnMouseEnter: true,
                }}
            />

            <div className="container px-4 py-8">
                <h1 className="font-bold text-3xl text-center">
                    Welcome to the Next.js E-commerce template
                </h1>
                <p className="mt-4 text-lg text-center">
                    This template is built with Next.js, Tailwind CSS, and TypeScript. It includes a
                    home page, a product page, a cart page, and a checkout page.
                </p>
            </div>

            <Products />
        </div>
    );
}
