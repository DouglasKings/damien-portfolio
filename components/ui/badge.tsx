// Badge component for displaying status indicators and tags
import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Badge variants using class-variance-authority for consistent styling
 *
 * Variants include:
 * - default: Primary colored badge
 * - secondary: Secondary colored badge
 * - destructive: Red colored badge for warnings/errors
 * - outline: Outlined badge with transparent background
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

// TypeScript interface for Badge component props
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

/**
 * Badge Component
 *
 * A versatile badge component for displaying status, categories, or labels
 * Supports multiple variants and custom styling through className prop
 *
 * @param className - Additional CSS classes to apply
 * @param variant - Badge style variant (default, secondary, destructive, outline)
 * @param props - Additional HTML div attributes
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
