import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

export const metadata = {
  title: "About - Kingscribe",
  description:
    "Learn about Daniel Alli, professional graphic designer specializing in flyers and promotional materials.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <SectionHeading
        title="About Me"
        description="Professional graphic designer with a passion for creating impactful visual communications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src="/images/profile/daniel-alli-professional.jpeg" alt="Daniel Alli" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h3 className="font-heading text-2xl">Daniel Oshiozolo Alli</h3>
          <p>
            I'm a passionate graphic designer specializing in creating eye-catching flyers and promotional materials
            that help businesses and events stand out from the competition.
          </p>
          <p>
            With several years of experience in the graphic design industry, I've developed a keen eye for detail and a
            deep understanding of what makes effective visual communication. My approach combines creativity with
            strategic thinking to deliver designs that not only look great but also achieve your business objectives.
          </p>
          <p>
            I believe that great design is about more than aesthetics—it's about solving problems and communicating
            messages effectively. That's why I take the time to understand each client's unique needs and goals before
            starting any project.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <SectionHeading title="My Design Philosophy" align="left" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Purpose-Driven Design</h4>
            <p className="text-muted-foreground">
              Every design decision I make is guided by your goals. Whether you're promoting an event, launching a
              product, or building brand awareness, I create designs that help you achieve specific outcomes.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Audience-Focused Approach</h4>
            <p className="text-muted-foreground">
              Understanding who you're trying to reach is essential for effective design. I create visuals that resonate
              with your target audience and inspire them to take action.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Balance of Creativity and Clarity</h4>
            <p className="text-muted-foreground">
              While creative, eye-catching designs are important, they should never come at the expense of clarity. I
              strike the perfect balance between innovative visuals and clear communication.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Collaborative Process</h4>
            <p className="text-muted-foreground">
              I believe the best results come from close collaboration with clients. Your input and feedback are
              valuable parts of my design process from concept to completion.
            </p>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading title="Skills & Expertise" align="left" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Design Skills</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Flyer & Poster Design</li>
              <li>• Logo & Brand Identity</li>
              <li>• Typography & Layout</li>
              <li>• Color Theory & Application</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Technical Proficiency</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Adobe Photoshop</li>
              <li>• Adobe Illustrator</li>
              <li>• Adobe After Effects</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Additional Skills</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Project Management</li>
              <li>• Client Communication</li>
              <li>• Motion Graphics</li>
              <li>• Social Media Graphics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
