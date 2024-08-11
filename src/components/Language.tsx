"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "@/components/Dropdown";

export default function Language() {
    return (
        <Dropdown>
            <DropdownButton>
                <div className="flex gap-2">
                    <Image className="" src="/images/vi.svg" width={24} height={24} alt="logo" />
                    Vietnamese
                </div>
            </DropdownButton>

            <DropdownMenu>
                <DropdownItem>
                    <Link href="#" className="flex items-center gap-2">
                        <div className="flex gap-2">
                            <Image
                                className=""
                                src="/images/vi.svg"
                                width={24}
                                height={24}
                                alt="logo"
                            />
                            Vietnamese
                        </div>
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link href="#" className="flex items-center gap-2">
                        <div className="flex gap-2">
                            <Image
                                className=""
                                src="/images/en.svg"
                                width={24}
                                height={24}
                                alt="logo"
                            />
                            English
                        </div>
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
