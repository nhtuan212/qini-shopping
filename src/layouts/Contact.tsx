"use client";

import React from "react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <div className="container flex flex-col gap-8 md:py-16 sm:py-8 py-4">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Qini Shop</h1>
                <p className="text-lg">
                    Địa chỉ: 51 Đ. Hoàng Diệu 2, Phường Linh Trung, Thủ Đức, Hồ Chí Minh
                </p>
                <Link href="tel:0938040098" className="flex items-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    <span className="text-lg">0938040098</span>
                </Link>
            </div>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3753892326117!2d106.76011967640231!3d10.859026457661912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275aa885ec27%3A0x1640a438ebbef921!2sQini!5e0!3m2!1sen!2s!4v1723354667483!5m2!1sen!2s"
                    width="100%"
                    height="600"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
