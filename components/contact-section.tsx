'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Phone, Mail, MapPin } from 'lucide-react'

interface ContactSectionProps {
  heading?: string
  description?: string
  phone?: string
  email?: string
  address?: string
}

export function ContactSection({
  heading = "Join our team.",
  description = "Are you a world-class educator who longs to effect meaningful change in education as part of a dynamic, driven and talented team? We want to hear from you!",
  phone = "(406) 555-0120",
  email = "hello@example.com",
  address = "192 Griffin Street, Gilbert, AZ 32521"
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToPrivacy: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#95af98' }}>
                {heading}
              </h2>
              <p className="text-body-intro" style={{ color: '#95af98' }}>
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us briefly about your experience and why you would be a good fit for The Garzón School."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.agreeToPrivacy}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, agreeToPrivacy: checked as boolean })
                  }
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  By selecting this you agree to our{' '}
                  <a href="/privacy-policy" className="underline hover:text-foreground">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                style={{ backgroundColor: '#D39885' }}
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
