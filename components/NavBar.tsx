"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NavBar = () => {


    return (
        <div className="relative w-full mx-auto max-w-7xl ">
            <div className="relative flex flex-row w-full px-8 py-5 mx-auto md:items-center justify-between md:flex-row md:px-12 lg:px-32">
                <div className="flex flex-row items-center justify-between text-white lg:justify-start">
                    <a href="/" className="inline-flex items-center gap-3">

                        <span className="font-bold text-xl uppercase">SaaS Starter</span>
                    </a>



                </div>
                <Link href={"/dashboard"}>
                    <Button variant="secondary">
                        Test It Out
                    </Button>
                </Link>

            </div>
        </div >
    );
};

export default NavBar;
