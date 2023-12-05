import * as React from "react"

import { cn } from "@/lib/utils"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="relative w-full mx-auto max-w-7xl ">
        <div className="relative flex flex-row w-full px-8 py-5 mx-auto md:items-center justify-between md:flex-row md:px-12 lg:px-32">


          <div className="flex items-center justify-center w-full pt-6 pb-6 border-t border-neutral-100 dark:border-neutral-800">
            <div className="container flex items-center justify-between">
              <div className="text-xs text-neutral-500">
                Built By Michel
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}