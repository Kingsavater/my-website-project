import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-heading text-xl">Kingscribe</h3>
            <p className="text-sm text-muted-foreground">
              Professional graphic design services specializing in flyers and promotional materials.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:Danielalli5742@gmail.com" className="hover:text-primary">
                  Danielalli5742@gmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="tel:07057424156" className="hover:text-primary">
                  07057424156
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="https://wa.me/07057424156" className="hover:text-primary">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Follow</h3>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.instagram.com/the.kingsscribe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://pin.it/6p2X1D7lk" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.9 6.4 9.4-.1-.8-.2-2 0-2.9.2-.8 1.3-5 1.3-5s-.3-.6-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.6 1.9 1.9 0 3.4-2 3.4-4.9 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.8 2.3-4.8 4.7 0 .9.3 1.9.8 2.4.1.1.1.2.1.3-.1.3-.2 1-.3 1.1-.1.2-.2.3-.4.2-1.4-.6-2.2-2.5-2.2-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.4-5.4 6.4-1.1 0-2.1-.6-2.4-1.2 0 0-.5 2-.6 2.4-.2.9-.8 2-1.2 2.7 1 .3 2 .4 3 .4 5.5 0 10-4.5 10-10S17.5 2 12 2z"></path>
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kingscribe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
