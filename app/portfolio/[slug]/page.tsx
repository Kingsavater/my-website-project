"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/image-gallery"
import { SectionHeading } from "@/components/section-heading"
import { ChevronLeft } from "lucide-react"

// Add detailed project data for the new flyers
const projectsData = {
  "exam-tips-mental-health": {
    title: "Exam Tips Mental Health",
    category: "Educational",
    client: "University Student Services",
    date: "May 2023",
    description:
      "An educational social media graphic designed to promote mental health awareness during exam season. The design needed to communicate important self-care tips in an engaging and visually appealing way.",
    approach:
      "I created a clean, modern design with a blue grid background that evokes an academic feel while remaining visually engaging. The cork board with pinned notes creates a relatable, tangible feel that students can connect with. Each mental health tip is clearly presented with bold typography for easy reading and retention.",
    images: [
      {
        src: "/images/flyers/exam-tips.png",
        alt: "Exam Tips Mental Health Graphic",
        category: "Social Media",
      },
    ],
  },
  "vendor-exhibition": {
    title: "Vendor Exhibition",
    category: "Event",
    client: "Federal University of Technology Akure",
    date: "April 2023",
    description:
      "A promotional flyer for vendor opportunities at the 'Fusion of Heritage' cultural event. The design needed to attract potential vendors and clearly communicate pricing and contact information.",
    approach:
      "I used warm, golden tones to create an inviting and premium feel. The vendor booth illustration immediately communicates the purpose of the flyer, while the clear pricing information and prominent contact details make it easy for interested vendors to take action. The university logos at the top establish credibility and official sponsorship.",
    images: [
      {
        src: "/images/flyers/call-for-vendor.png",
        alt: "Vendor Exhibition Flyer",
        category: "Event",
      },
    ],
  },
  "church-countdown": {
    title: "Church Countdown",
    category: "Church",
    client: "Redeemer's University Chapel",
    date: "March 2023",
    description:
      "A countdown flyer for a church event called 'Rediscover'. The design needed to build anticipation and excitement for the upcoming event while reflecting the spiritual nature of the gathering.",
    approach:
      "I created a mystical, heavenly atmosphere with a deep blue color palette and celestial imagery. The large '14 Days to go' text creates urgency and anticipation, while the dove imagery symbolizes the Holy Spirit and peace. The classical columns frame the design and add a sense of reverence and tradition.",
    images: [
      {
        src: "/images/flyers/church-countdown.png",
        alt: "Church Countdown Flyer",
        category: "Church",
      },
    ],
  },
  "fusion-of-heritage": {
    title: "Fusion of Heritage",
    category: "Event",
    client: "Federal University of Technology Akure",
    date: "April 2023",
    description:
      "A promotional flyer for a cultural event celebrating heritage and tradition. The design needed to capture the essence of cultural celebration while providing key event information.",
    approach:
      "I used warm, earthy tones and traditional African patterns to create an authentic cultural feel. The title 'Fusion of Heritage' is prominently displayed with a stylized font that evokes traditional craftsmanship. The portraits of people in traditional attire help potential attendees connect with the cultural theme of the event.",
    images: [
      {
        src: "/images/hero/fusion-of-heritage.png",
        alt: "Fusion of Heritage Event Flyer",
        category: "Event",
      },
    ],
  },
  "movie-night-karaoke": {
    title: "Movie Night & Karaoke",
    category: "Event",
    client: "Federal University of Technology Akure",
    date: "February 2023",
    description:
      "A promotional flyer for a combined movie night and karaoke event at the university. The design needed to create excitement and clearly communicate the entertainment value of the event.",
    approach:
      "I used rich, warm tones with theater seating imagery to immediately convey the movie night theme. The bold typography for 'MOVIE NIGHT/KARAOKE' creates impact and ensures the event title is instantly recognizable. The university logos and venue information are clearly presented for easy reference.",
    images: [
      {
        src: "/images/hero/movie-night.png",
        alt: "Movie Night & Karaoke Event Flyer",
        category: "Event",
      },
    ],
  },
  "church-thank-you": {
    title: "Church Thank You",
    category: "Church",
    client: "Redeemer's University Chapel",
    date: "January 2023",
    description:
      "A social media graphic to thank church members for their attendance and participation. The design needed to express gratitude while maintaining the church's visual identity.",
    approach:
      "I created a warm, inviting design with a rich orange/red background that conveys warmth and appreciation. The 'THANKS FOR COMING' message is bold and prominent, while the inclusion of photos from the service helps create a sense of community and shared experience. The church logo and social media handles are clearly displayed for continued engagement.",
    images: [
      {
        src: "/images/hero/thanks-for-coming.png",
        alt: "Church Thank You Graphic",
        category: "Church",
      },
    ],
  },
  // Keep the existing project data
  "sutwes-easter-campaign": {
    title: "SUTWES Easter Campaign",
    category: "Church",
    client: "Students Welfare Scheme",
    date: "March 2023",
    description:
      "A vibrant Easter-themed flyer design for a student organization's Easter celebration. The design needed to convey the religious significance of Easter while maintaining a modern, eye-catching aesthetic.",
    approach:
      "I used a striking blue background contrasted with gold elements to create visual impact. The crown of thorns imagery symbolizes the Easter story, while the modern typography and hashtags appeal to a younger audience. The design balances religious symbolism with contemporary design elements.",
    images: [
      {
        src: "/images/flyers/sutwes-easter.png",
        alt: "SUTWES Easter Campaign Flyer",
        category: "Flyer",
      },
    ],
  },
  "academic-power-talk": {
    title: "Academic Power Talk",
    category: "Educational",
    client: "Archbishop News",
    date: "April 2023",
    description:
      "A dynamic flyer for an educational event focused on study techniques. The client needed a design that would appeal to students while clearly communicating event details and the academic focus.",
    approach:
      "I created a grid-based design with bold typography and a vibrant color scheme to attract attention. The layout prioritizes key information while maintaining visual interest through geometric elements and color blocks. The design conveys academic seriousness while remaining approachable and engaging.",
    images: [
      {
        src: "/images/flyers/study-techniques.png",
        alt: "Academic Power Talk Flyer",
        category: "Flyer",
      },
    ],
  },
  "kingdom-teens-mentorship": {
    title: "Kingdom Teens Mentorship",
    category: "Social Media",
    client: "Kingdom Teens Academy",
    date: "January 2023",
    description:
      "A promotional flyer for a yearlong mentorship program targeting young girls. The client wanted a design that would appeal to both parents and children while conveying a sense of nurturing and growth.",
    approach:
      "I used a soft pink/purple gradient background to create a warm, inviting atmosphere. The floral elements symbolize growth and nurturing, while the images of smiling girls help the target audience visualize themselves in the program. The typography is modern yet accessible, with clear information about eligibility.",
    images: [
      {
        src: "/images/flyers/kingdom-teens.png",
        alt: "Kingdom Teens Mentorship Program Flyer",
        category: "Social Media",
      },
    ],
  },
  "social-media-milestone": {
    title: "Social Media Milestone",
    category: "Social Media",
    client: "Archbishop News",
    date: "February 2023",
    description:
      "A celebratory social media graphic to mark reaching 4,000 followers. The client wanted a design that would thank their audience while encouraging further engagement.",
    approach:
      "I created a clean, modern design with a grid background that references social media aesthetics. The large typography emphasizes the milestone achievement, while social media icons reinforce the digital theme. The inclusion of a person holding a phone adds a human element and relatability to the design.",
    images: [
      {
        src: "/images/flyers/4k-followers.png",
        alt: "4K Followers Thank You Graphic",
        category: "Social Media",
      },
    ],
  },
  // Keep the existing project data
  "cafe-grand-opening": {
    title: "Cafe Grand Opening",
    category: "Business",
    client: "Brew & Bake Cafe",
    date: "March 2023",
    description:
      "A sophisticated and inviting flyer design for the grand opening of a new artisanal cafe. The client wanted to attract local customers and communicate their unique selling points including specialty coffee and homemade pastries.",
    approach:
      "I created a warm and inviting design using a color palette inspired by coffee tones and natural textures. High-quality food photography was featured prominently to showcase the cafe's offerings. The typography was chosen to reflect the cafe's artisanal and quality-focused brand positioning.",
    images: [
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Cafe Grand Opening Flyer",
        category: "Flyer",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Cafe Menu Design",
        category: "Menu",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Cafe Social Media Announcement",
        category: "Social Media",
      },
    ],
  },
  "student-election-campaign": {
    title: "Student Election Campaign",
    category: "Promotional",
    client: "Anokwu Chiaza Daniella",
    date: "March 2023",
    description:
      "A professional election campaign flyer for a student running for Welfare Director position at Redeemer's University Student Association (RUNSA). The design needed to convey professionalism, trustworthiness, and appeal to the student body.",
    approach:
      "I created a bold, modern design with a striking blue gradient background that commands attention. The large 'VOTE' typography immediately communicates the call to action, while the professional portrait establishes credibility. The tagline 'Real change, real care, real impact' reinforces the candidate's message and values. The university logo adds official credibility to the campaign materials.",
    images: [
      {
        src: "/images/flyers/welfare-director-election.png",
        alt: "Student Election Campaign Flyer",
        category: "Campaign",
      },
    ],
  },
  "social-director-campaign": {
    title: "Social Director Campaign",
    category: "Promotional",
    client: "Ogunsola Oluwafisayo Omotola",
    date: "March 2023",
    description:
      "A vibrant election campaign flyer for a student running for Social Director position at Redeemer's University Economics Students' Association. The design needed to convey energy, creativity, and social engagement to appeal to the student body.",
    approach:
      "I created a dynamic, geometric design with bold orange, green, and blue color blocking that reflects energy and creativity. The large 'VOTE' typography commands attention while the geometric shapes create visual interest and movement. The tagline 'Bridging hearts through Events' perfectly captures the social director role, and the professional portrait establishes credibility and approachability.",
    images: [
      {
        src: "/images/flyers/social-director-election.png",
        alt: "Social Director Campaign Flyer",
        category: "Campaign",
      },
    ],
  },
  // Add more projects as needed
}

export default function ProjectPage() {
  const { slug } = useParams()
  const projectSlug = Array.isArray(slug) ? slug[0] : slug

  // In a real application, you would fetch this data from an API or database
  const project = projectsData[projectSlug as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="container py-12 md:py-16 text-center">
        <h1 className="font-heading text-3xl mb-6">Project Not Found</h1>
        <p className="mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/portfolio">Back to Portfolio</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-16">
      <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Portfolio
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <Image src={project.images[0].src || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h1 className="font-heading text-3xl md:text-4xl">{project.title}</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
              <p>{project.category}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Client</h3>
              <p>{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
              <p>{project.date}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Project Overview</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Design Approach</h3>
            <p className="text-muted-foreground">{project.approach}</p>
          </div>

          <Button asChild>
            <Link href="/contact">Request Similar Design</Link>
          </Button>
        </div>
      </div>

      <SectionHeading title="Project Gallery" description="View all designs created for this project." align="left" />

      <ImageGallery images={project.images} />
    </div>
  )
}
