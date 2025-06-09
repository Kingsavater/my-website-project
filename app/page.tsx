import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeroSlider } from "@/components/hero-slider"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { Palette, Megaphone, Award, Clock } from "lucide-react"

const heroSlides = [
  {
    image: "/images/hero/movie-night.png",
    alt: "Movie Night/Karaoke event flyer design",
    title: "Captivating Flyer Designs That Get Attention",
    description: "Professional graphic design services that help your business stand out from the crowd.",
  },
  {
    image: "/images/hero/thanks-for-coming.png",
    alt: "Church thank you flyer design",
    title: "Elevate Your Brand With Professional Design",
    description: "From concept to completion, I create designs that communicate your message effectively.",
  },
  {
    image: "/images/hero/fusion-of-heritage.png",
    alt: "Fusion of Heritage cultural event flyer",
    title: "Creative Solutions For Your Marketing Needs",
    description: "Custom designs tailored to your specific goals and target audience.",
  },
]

const featuredProjects = [
  {
    image: "/images/flyers/sutwes-easter.png",
    title: "SUTWES Easter Campaign",
    category: "Event",
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
]

export default function Home() {
  return (
    <div>
      <HeroSlider slides={heroSlides} />

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl">Bringing Your Vision To Life Through Creative Design</h2>
            <p className="text-muted-foreground">
              I'm Daniel Alli, a professional graphic designer specializing in eye-catching flyers and promotional
              materials that help businesses and events stand out from the competition.
            </p>
            <p className="text-muted-foreground">
              With a keen eye for detail and a passion for creating impactful designs, I work closely with clients to
              understand their goals and deliver results that exceed expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src="/images/profile/daniel-alli-professional.jpeg"
                alt="Daniel Alli"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Featured Projects"
            description="A selection of my recent work for clients across various industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <SectionHeading
          title="Services"
          description="Professional graphic design services tailored to your specific needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Palette className="h-10 w-10" />}
            title="Flyer Design"
            description="Eye-catching flyers that effectively communicate your message and drive engagement."
          />
          <ServiceCard
            icon={<Megaphone className="h-10 w-10" />}
            title="Promotional Materials"
            description="Cohesive marketing materials that strengthen your brand identity and reach your audience."
          />
          <ServiceCard
            icon={<Award className="h-10 w-10" />}
            title="Branding"
            description="Distinctive visual elements that set your business apart and create a memorable impression."
          />
          <ServiceCard
            icon={<Clock className="h-10 w-10" />}
            title="Quick Turnaround"
            description="Efficient design process with fast delivery without compromising on quality."
          />
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Let's work together to create designs that capture attention and drive results for your business or event.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
