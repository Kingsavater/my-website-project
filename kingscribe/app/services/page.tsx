import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { Palette, Award, ImageIcon, FileText, PenTool, Monitor } from "lucide-react"

export const metadata = {
  title: "Services - Kingscribe",
  description: "Professional graphic design services including flyer design, branding, and promotional materials.",
}

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Professional Design Services</h1>
            <p className="text-muted-foreground text-lg mb-8">
              From eye-catching flyers to comprehensive branding solutions, I provide a range of graphic design services
              to help your business or event stand out.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <SectionHeading
          title="Services Offered"
          description="Comprehensive design solutions tailored to your specific needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ServiceCard
            icon={<Palette className="h-10 w-10" />}
            title="Flyer Design"
            description="Eye-catching flyers that effectively communicate your message and drive engagement for events, promotions, and announcements."
          />
          <ServiceCard
            icon={<Award className="h-10 w-10" />}
            title="Branding"
            description="Distinctive visual elements including logos, color schemes, and typography that set your business apart and create a memorable impression."
          />
          <ServiceCard
            icon={<ImageIcon className="h-10 w-10" />}
            title="Social Media Graphics"
            description="Engaging visual content optimized for different social platforms to enhance your online presence and engagement."
          />
          <ServiceCard
            icon={<FileText className="h-10 w-10" />}
            title="Business Stationery"
            description="Consistent and professional business cards, letterheads, envelopes, and other stationery that reinforce your brand identity."
          />
          <ServiceCard
            icon={<PenTool className="h-10 w-10" />}
            title="Illustration"
            description="Custom illustrations and graphics that add unique visual elements to your marketing materials and brand assets."
          />
          <ServiceCard
            icon={<Monitor className="h-10 w-10" />}
            title="Digital Design"
            description="Web banners, email headers, digital ads, and other online graphics that drive traffic and conversions."
          />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">Ready to Elevate Your Visual Communications?</h2>
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
