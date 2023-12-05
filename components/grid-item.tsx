"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-grid rounded-3xl  flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "1x3": "md:col-span-1 col-span-4 row-span-3 md:p-8 p-4",
        "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
        "2x3": "md:col-span-2 col-span-full row-span-3 md:p-8 p-4",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
        "4x4": "md:col-span-4 col-span-full row-span-4",
        "2x6": "md:col-span-2 col-span-full row-span-6",

      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, children }: GridItemProps) => {
  return (

    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className:
            " duration-75 transition-colors ease-in-out ring-1  text-center ring-white/10 ",
        })
      )}
    >
      {children}
    </motion.div>


  );
};

export default GridItem;