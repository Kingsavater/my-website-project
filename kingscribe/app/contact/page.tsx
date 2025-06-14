import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MessageSquare, Clock } from "lucide-react"

export const metadata = {
  title: "Contact - Kingscribe",
  description: "Get in touch with Daniel Alli for professional graphic design services.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <SectionHeading
        title="Contact Me"
        description="Have a project in mind? Get in touch to discuss how I can help bring your vision to life."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="font-medium text-xl mb-4">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="font-medium text-xl mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:Danielalli5742@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Danielalli5742@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:07057424156" className="text-muted-foreground hover:text-primary transition-colors">
                    07057424156
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <a
                    href="https://wa.me/07057424156"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    07057424156
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-muted-foreground">
                    I typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="font-medium text-xl mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  View My Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
