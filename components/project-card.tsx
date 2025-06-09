import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  image: string
  title: string
  category: string
  slug: string
  className?: string
}

export function ProjectCard({ image, title, category, slug, className }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <Card className={cn("overflow-hidden group cursor-pointer", className)}>
        <CardContent className="p-4">
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          <h3 className="font-medium text-lg line-clamp-1">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
