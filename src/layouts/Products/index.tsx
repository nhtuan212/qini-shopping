"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "../../components/Skeleton";
import { useProductStore } from "@/stores/useProductStore";
import { formatMoney } from "@/utils";

export default function Products() {
    //** Stores */
    const { loading, getProducts, products } = useProductStore();

    //** Effects */
    useEffect(() => {
        getProducts("/products");
    }, [getProducts]);

    return (
        <div className="container px-4 py-8">
            {loading && <Skeleton count={12} />}

            <div className="grid grid-flow-row gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {!!products.length &&
                    products.map(product => (
                        <Link key={product.id} href="">
                            <article className="bg-white rounded shadow-md overflow-hidden">
                                <div className="flex items-center aspect-[1/1.2] w-full p-4 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        className="w-full h-full object-contain object-center hover:opacity-75 transition-opacity"
                                        alt={product.title}
                                        sizes="(max-width: 1024x) 100vw, (max-width: 1280px) 50vw, 700px"
                                        width={500}
                                        height={650}
                                        loading="eager"
                                        priority
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="min-h-[3rem] line-clamp-2">{product.title}</h3>
                                    <p className="font-bold text-primary">
                                        {formatMoney({
                                            amount: product.price,
                                            currency: "USD",
                                            locale: "en-US",
                                        })}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
