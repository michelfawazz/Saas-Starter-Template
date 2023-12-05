"use client";

import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import GridItem from "@/components/grid-item";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const HomeGrid = () => {
    const [scope, animate] = useAnimate();
    const staggerGridItems = stagger(0.02, {
        startDelay: 0.5,
    });

    // ANIMATION
    useEffect(() => {
        if (scope.current) {
            animate(
                "div",
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
                {
                    type: "spring",
                    stiffness: 330,
                    damping: 35,
                    delay: staggerGridItems,
                }
            );
        }
    }, [scope]);





    return (
        <section className="lg:p-8 ">
            <div className="mx-auto 2xl:max-w-7xl py-1 lg:px-16 md:px-12 px-8 xl:px-40 items-center w-full">
                <div
                    ref={scope}
                    className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 overflow-y-hidden overflow-x-hidden  auto-rows-[76px] "
                >

                    <GridItem size={"4x4"}>

                        <div
                            style={{
                                borderRadius: "1rem",
                            }}

                            className="flex justify-center items-center w-full h-full ">
                            <div className="container mx-auto flex flex-col items-center ">
                                <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
                                    Build, Scale, Succeed:


                                    <span className="md:block text-zinc-400">Your SaaS Journey Starts Here</span>
                                </h2>
                                <p className="mt-4 text-sm text-zinc-300 max-w-sm mx-auto">
                                    the open-source boilerplate for kickstarting your SaaS projects. Power-packed with Next.js, Tailwind CSS, and ShadcnUI, our template gives you the perfect foundation to craft seamless and stunning user experiences.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                        href="https://github.com/michelfawazz/Saas-Starter-Template"

                                    >
                                        <Button variant="variant1">
                                            Visit The Github repo!
                                        </Button>

                                    </Link>
                                </div>
                            </div>
                        </div>



                    </GridItem>



                    <GridItem size={"2x4"}>

                        <div className="py-12">
                            <div className="container mx-auto flex flex-col items-center">
                                <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center text-white ">
                                    🚀 Accelerate Development
                                </h2>
                                <p className="text-md lg:text-lg  text-zinc-300 mb-8 text-center">
                                    Jumpstart your SaaS project with our battle-tested stack. Save weeks of development time and focus on what matters – building features that delight your users.
                                </p>
                            </div>
                        </div>



                    </GridItem>


                    <GridItem size={"2x2"}>
                        <div className=" py-4">
                            <div className="container mx-auto flex flex-col items-center">
                                <h2 className="text-lg font-bold mb-2 text-center  text-white">
                                    💳 Stripe for Hassle-free Payments
                                </h2>
                                <p className="text-sm text-zinc-300 text-center">
                                    Monetize your SaaS effortlessly with Stripe. Accept payments, manage subscriptions, and scale your business without the hassle.
                                </p>
                            </div>
                        </div>




                    </GridItem>




                    <GridItem size={"2x4"}>

                        <div
                            style={{
                                borderRadius: "1rem",
                            }}

                            className="flex justify-center items-center w-full h-full ">
                            <div className="container mx-auto flex flex-col items-center">
                                <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center text-white ">
                                    🌐 Prisma for Effortless Data Management
                                </h2>
                                <p className="text-md lg:text-lg text-zinc-300 mb-8 text-center">
                                    Enjoy the simplicity and power of Prisma for your database needs. Effortlessly model your data and let Prisma handle the heavy lifting of database interactions.
                                </p>
                            </div>
                        </div>



                    </GridItem>


                    <GridItem size={"2x2"}>

                        <div className=" py-4">
                            <div className="container mx-auto flex flex-col items-center">
                                <h2 className="text-lg font-bold mb-2 text-center text-white ">
                                    🔐 Clerk for Seamless Authentication
                                </h2>
                                <p className="text-sm text-zinc-300 text-center">
                                    Say goodbye to authentication headaches. Clerk streamlines the user authentication process, allowing you to focus on crafting a secure and user-friendly login experience.
                                </p>
                            </div>
                        </div>




                    </GridItem>

                    <GridItem size={"4x4"}>

                        <div
                            style={{
                                borderRadius: "1rem",
                            }}

                            className="flex justify-center items-center w-full h-full ">
                            <div className="container mx-auto flex flex-col items-center ">
                                <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
                                    💻 Modern Tech Stack


                                    {/* <span className="md:block text-zinc-400">Your SaaS Journey Starts Here</span> */}
                                </h2>
                                <p className="mt-4 text-sm text-zinc-300  mx-auto">
                                    Next.js: The React framework for building modern web applications.
                                    <br /><br />
                                    Tailwind CSS: A utility-first CSS framework that adapts to your design system.
                                    <br /><br />
                                    ShadcnUI: Elevate your UI with elegant and customizable components.

                                </p>

                            </div>
                        </div>



                    </GridItem>




                </div>
            </div>
        </section>
    );
};

export default HomeGrid;