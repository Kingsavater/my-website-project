"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { PortfolioFilter } from "@/components/portfolio-filter"

export default function PortfolioPage() {
  const categories = ["Event", "Business", "Promotional", "Social Media", "Educational", "Church"]
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      image: "/images/flyers/sutwes-easter.png",
      title: "SUTWES Easter Campaign",
      category: "Church",
      slug: "sutwes-easter-campaign",
    },
    {
      image: "/images/flyers/study-techniques.png",
      title: "Academic Power Talk",
      category: "Educational",
      slug: "academic-power-talk",
    },
    {
      image: "/images/flyers/kingdom-teens.png",
      title: "Kingdom Teens Mentorship",
      category: "Social Media",
      slug: "kingdom-teens-mentorship",
    },
    {
      image: "/images/flyers/4k-followers.png",
      title: "Social Media Milestone",
      category: "Social Media",
      slug: "social-media-milestone",
    },
    {
      image: "/images/flyers/exam-tips.png",
      title: "Exam Tips Mental Health",
      category: "Educational",
      slug: "exam-tips-mental-health",
    },
    {
      image: "/images/flyers/call-for-vendor.png",
      title: "Vendor Exhibition",
      category: "Event",
      slug: "vendor-exhibition",
    },
    {
      image: "/images/flyers/church-countdown.png",
      title: "Church Countdown",
      category: "Church",
      slug: "church-countdown",
    },
    {
      image: "/images/hero/fusion-of-heritage.png",
      title: "Fusion of Heritage",
      category: "Event",
      slug: "fusion-of-heritage",
    },
    {
      image: "/images/hero/movie-night.png",
      title: "Movie Night & Karaoke",
      category: "Event",
      slug: "movie-night-karaoke",
    },
    {
      image: "/images/hero/thanks-for-coming.png",
      title: "Church Thank You",
      category: "Church",
      slug: "church-thank-you",
    },
    {
      image: "/images/flyers/welfare-director-election.png",
      title: "Student Election Campaign",
      category: "Promotional",
      slug: "student-election-campaign",
    },
    {
      image: "/images/flyers/social-director-election.png",
      title: "Social Director Campaign",
      category: "Promotional",
      slug: "social-director-campaign",
    },
    // Keep some of the existing projects
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Cafe Grand Opening",
      category: "Business",
      slug: "cafe-grand-opening",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Product Launch Campaign",
      category: "Promotional",
      slug: "product-launch-campaign",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="container py-12 md:py-16">
      <SectionHeading
        title="Portfolio"
        description="Explore my collection of flyer designs and promotional materials for various clients and industries."
      />

      <PortfolioFilter categories={categories} onFilterChange={setActiveCategory} className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
