import Link from "next/link";
import { Button } from "./ui/button";

const BigCard = () => {
  return (
    <section className="lg:p-8">
      <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-40 items-center w-full">
        <div className="h-full bg-gradientdown-gray ring-1 text-center ring-white/10 rounded-3xl p-8 lg:p-20 lg:col-span-full">
          <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
            <span className="md:block text-zinc-400"></span>
          </h2>
          <p className="mt-4 text-sm text-zinc-300 max-w-sm mx-auto">

          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#pricing"

            >
              <Button variant="variant1">
                Get Started
              </Button>

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigCard;
