"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="bg-primary sm:py-8 py-4 text-white">
                <div className="container">
                    <div className="flex flex-col items-center gap-8">
                        <Link href="/">
                            <Image
                                src="/next.svg"
                                className="w-[8rem] h-auto"
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                        </Link>

                        <section className="w-full flex justify-between gap-4">
                            <div className="basis-1/3">
                                <h3 className="font-bold">Contact Us</h3>
                                <p>Address: 1234 Main St, New York, NY 10001</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Email: nhtuan212@gmail.com</p>
                            </div>
                            <div className="basis-1/3">
                                <h3 className="font-bold">Contact Us</h3>
                                <p>Address: 1234 Main St, New York, NY 10001</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Email: nhtuan212@gmail.com</p>
                            </div>
                            <div className="basis-1/3">
                                <h3 className="font-bold">Contact Us</h3>
                                <p>Address: 1234 Main St, New York, NY 10001</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Email: nhtuan212@gmail.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="bg-primary-800 px-4 py-2 text-center text-white">
                <p>&copy; {new Date().getFullYear()} by Tuan Nguyen. All rights reserved.</p>
            </div>
        </footer>
    );
}
