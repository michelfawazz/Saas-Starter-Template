
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

const HeroSection = () => {
    return (
        <section className="md:px-12 lg:p-8 relative">
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:pt-48 relative w-full rounded-4xl lg:rounded-[3rem]  "

            >
                <div className="text-center max-w-4xl lg:mx-auto">

                    <h2 className="text-3xl mt-12 tracking-tighter font-normal lg:text-5xl text-white">
                        SaaS Starter Template {' '}
                        <span className="block text-zinc-400">Free & OpenSource</span>
                    </h2>
                    <p className="mt-4 text-base text-white">
                        Check out the github repo and get started now.<br />
                        <span className="italic">Clone it</span>
                    </p>

                </div>
            </div>

            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                )}
            />




        </section >
    );
};

export default HeroSection;
