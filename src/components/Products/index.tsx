"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "../Loading";
import { useProductStore } from "@/stores/useProductStore";

export default function Products() {
    //** Stores */
    const { loading, getProducts, products } = useProductStore();

    //** Effects */
    useEffect(() => {
        getProducts("/products");
    }, [getProducts]);

    if (loading) {
        return (
            <div className="relative h-[20rem]">
                <Loading />
            </div>
        );
    }

    return (
        <div className="container px-4 py-8">
            <div className="grid grid-flow-row gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {!!products.length &&
                    products.map(product => (
                        <div key={product.id} className="h-full aspect-square border">
                            <div className="relative w-full h-full inline-flex flex-col gap-4 p-4">
                                <div className="w-full h-full mx-auto overflow-hidden">
                                    <Link
                                        href={""}
                                        className="relative flex justify-center items-center w-full h-full overflow-hidden"
                                    >
                                        <Image
                                            src={product.image}
                                            className="w-full h-full object-contain"
                                            alt={product.title}
                                            width={300}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <h3 className="line-clamp-2">
                                        <Link href={""}>{product.title}</Link>
                                    </h3>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
