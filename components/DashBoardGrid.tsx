"use client";
import axios from "axios";
import Link from "next/link";
import { toast, useToast } from "@/components/ui/use-toast";
import { useProModal } from "@/hooks/use-pro-modal";



const DadshboardGrid = ({ isPremium }: { isPremium: boolean }) => {
    const { toast } = useToast();
    const ProModal = useProModal();

    const onClick = async () => {
        try {


            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast({
                description: "Something went wrong",
                variant: "destructive",
            });
        }
    };


    return (



        <section className="md:px-12 lg:p-8 relative">
            <div className="mx-auto 2xl:max-w-7xl py-5 lg:px-16 md:px-12 px-8 xl:px-40 items-center  relative w-full rounded-4xl lg:rounded-[3rem]  "

            >

                <div
                    className={
                        "flex h-full w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
                    }
                >

                    <Link href={`/`} className=' w-full lg:w-3/5 ring-1  text-center ring-white/10 rounded-3xl '>
                        <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20">
                            <p className="z-10 text-center text-2xl font-medium text-white">
                                Subscription Status: <br />
                                {isPremium ? "Premium" : "Free"}
                            </p>

                        </div>
                    </Link>
                    <div className=' w-full lg:w-2/5 ring-1  text-center ring-white/10  rounded-3xl'>
                        <div onClick={onClick} className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 ">
                            <p className="z-10 text-center text-2xl font-medium text-white">
                                {isPremium ? "Manage Premium" : "Upgrade to Premium"}
                            </p>

                        </div>
                    </div>
                </div>

                <div
                    className={
                        "flex h-full w-full flex-col gap-4 lg:h-[250px] lg:flex-row mt-10"
                    }
                >


                    <Link href={`#`} className=' w-full lg:w-5/5 ring-1  text-center ring-white/10  rounded-3xl'>
                        <div onClick={() => ProModal.onOpen()} className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 ">
                            <p className="z-10 text-center text-2xl font-medium text-white">
                                Test Premium Modal
                            </p>

                        </div>
                    </Link>
                   
                </div>

            </div>
        </section>


    );
};
export default DadshboardGrid;