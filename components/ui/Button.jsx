"use client"
import * as React from "react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

const Button = React.forwardRef(({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700",
    secondary: "bg-secondary text-black hover:bg-secondary/90 dark:bg-yellow-500 dark:hover:bg-yellow-600",
    accent: "bg-accent text-white hover:bg-accent/90 dark:bg-red-600 dark:hover:bg-red-700",
    outline: "bg-white text-black border-2 border-black hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:border-gray-600 dark:hover:bg-zinc-700",
    ghost: "bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 border-none shadow-none",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, translate: "2px 2px", boxShadow: "0px 0px 0px 0px #000" }}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-2 border-black dark:border-gray-600 shadow-retro dark:shadow-none",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
