import DadshboardGrid from "@/components/DashBoardGrid";
import { toast } from "@/components/ui/use-toast";
import { checkSubscription } from "@/lib/subscription";
import axios from "axios";
import Link from "next/link";






export default async function Dashboard() {


    const isPremium = await checkSubscription();




    return (
        <DadshboardGrid isPremium={isPremium} />
    );
}