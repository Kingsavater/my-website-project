import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, description, className, align = "center" }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2 mb-8",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      <h2 className="font-heading text-3xl md:text-4xl">{title}</h2>
      {description && <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}
