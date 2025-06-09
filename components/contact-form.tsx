"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mailtoUrl, setMailtoUrl] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const formValues = form.watch()

  useEffect(() => {
    // Create mailto URL with current form values
    const subject = encodeURIComponent(formValues.subject || "Inquiry from Website")
    const body = encodeURIComponent(
      `Name: ${formValues.name || ""}\nEmail: ${formValues.email || ""}\nPhone: ${formValues.phone || ""}\n\n${
        formValues.message || ""
      }`,
    )
    setMailtoUrl(`mailto:Danielalli5742@gmail.com?subject=${subject}&body=${body}`)
  }, [formValues])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Open email client with form data
    window.location.href = mailtoUrl

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitting(false)
      form.reset()
      toast({
        title: "Email client opened!",
        description: "Please send the email from your email client to complete your inquiry.",
      })
    }, 1000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject of your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell me about your project" className="min-h-[150px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? "Opening Email Client..." : "Send Message"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => {
              window.location.href = "mailto:Danielalli5742@gmail.com"
            }}
          >
            Email Directly
          </Button>
        </div>
      </form>
    </Form>
  )
}
