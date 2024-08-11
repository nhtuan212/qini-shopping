/**
 * Component for rendering a slider with images and links.
 *
 * @component
 * @example
 * ```tsx
 * const data = [
 *   {
 *     src: "image1.jpg",
 *     alt: "Image 1",
 *     url: "/image1",
 *   },
 *   {
 *     src: "image2.jpg",
 *     alt: "Image 2",
 *     url: "/image2",
 *   },
 *   {
 *     src: "image3.jpg",
 *     alt: "Image 3",
 *     url: "/image3",
 *   },
 * ];
 *
 * <Slider data={data} navigation={true} />
 * ```
 *
 * slidesPerView={1}
 *
 * autoplay={{
 *  delay: 2500,
 *  disableOnInteraction: true,
 *  pauseOnMouseEnter: true,
 * }}
 *
 * breakpoints={{
 * 640: {
 *  slidesPerView: 3,
 *  spaceBetween: 20,
 * },
 * 768: {
 *  slidesPerView: 2,
 *  spaceBetween: 20,
 * },
 * 1024: {
 *  slidesPerView: 1,
 *  spaceBetween: 20,
 * },
 *
 * ```
 *
 * @param {Object} props - The component props.
 *
 * @param {Object[]} data - The array of objects containing image source, alt text, and URL.
 * @param {string} data[].src - The source of the image.
 * @param {string} data[].alt - The alt text for the image.
 * @param {string} data[].url - The URL to navigate to when the image is clicked.
 * @param {boolean} [navigation=true] - Whether to show navigation buttons.
 * @param {SwiperProps} [props] - Additional props for the Swiper component.
 * @returns {JSX.Element} The rendered Slider component.
 */

`use client`;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { isEmpty } from "@/utils";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type SliderProps = {
    data: {
        src: string;
        alt: string;
        url: string;
    }[];
} & SwiperProps;

export default function Slider({ data, navigation = true, ...props }: SliderProps) {
    if (isEmpty(data)) return null;

    return (
        <Swiper
            spaceBetween={20}
            navigation={navigation}
            modules={[Autoplay, Pagination, Navigation]}
            {...props}
        >
            {data.map(item => (
                <SwiperSlide key={item.src}>
                    <Link href={item.url}>
                        <Image
                            className="w-full object-contain"
                            src={item.src}
                            alt={item.alt}
                            width={1920}
                            height={300}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
