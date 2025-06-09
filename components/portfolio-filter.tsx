"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface PortfolioFilterProps {
  categories: string[]
  onFilterChange: (category: string) => void
  className?: string
}

export function PortfolioFilter({ categories, onFilterChange, className }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => handleCategoryChange("all")}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
