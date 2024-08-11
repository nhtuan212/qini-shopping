/**
 * Renders a skeleton component with a specified number of items.
 *
 * @component
 * @param {number} count - The number of skeleton items to render.
 * @param {number[]} [itemPerRow=[4, 3, 2]] - The number of items to display per row at different breakpoints.
 * @returns {JSX.Element} The rendered skeleton component.
 *
 * @example
 * // Render a skeleton component with 10 items and default itemPerRow values.
 * <Skeleton count={10} />
 *
 * // Render a skeleton component with 5 items and custom itemPerRow values.
 * <Skeleton count={5} itemPerRow={[3, 2, 1]} />
 */

`use client`;

import clsx from "clsx";
import React from "react";

type SkeletonProps = {
    count: number;
    itemPerRow?: number[];
};

export default function Skeleton({ count, itemPerRow = [4, 3, 2] }: SkeletonProps): JSX.Element {
    return (
        <div
            className={clsx(
                "grid gap-4",
                `md:grid-cols-${itemPerRow[0]}`,
                `sm:grid-cols-${itemPerRow[1]}`,
                `grid-cols-${itemPerRow[2]}`,
            )}
        >
            {Array.from({ length: count }).map((_, index) => (
                <div key={index}>
                    <div className="bg-gray-200 h-80 w-full animate-pulse rounded-md"></div>
                    <div className="bg-gray-200 h-4 w-4/5 mt-2 animate-pulse rounded-md"></div>
                    <div className="bg-gray-200 h-4 w-3/5 mt-2 animate-pulse rounded-md"></div>
                </div>
            ))}
        </div>
    );
}
