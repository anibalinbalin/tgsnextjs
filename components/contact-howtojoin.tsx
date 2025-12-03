'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import DevBadge from './dev-badge'

export default function ContactHowtojoin() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="relative py-16 md:py-32 bg-white">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-stretch">
                    {/* Left Column - Form */}
                    <div className="flex flex-col">
                        {/* Heading Banner */}
                        <div className="bg-[#D39885] py-12 px-6 mb-8">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                COUNT US IN!
                            </h2>
                        </div>
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                            {/* Form fields - flex-1 to align with image */}
                            <div className="space-y-6 flex-1">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                        NAME <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                placeholder=""
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="border-gray-300"
                                            />
                                            <span className="text-xs text-gray-500 mt-1 block">First Name</span>
                                        </div>
                                        <div>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                placeholder=""
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="border-gray-300"
                                            />
                                            <span className="text-xs text-gray-500 mt-1 block">Last Name</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        EMAIL <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder=""
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border-gray-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                        SUBJECT
                                    </Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder=""
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="border-gray-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        MESSAGE <span className="text-red-500">*</span>
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder=""
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="border-gray-300"
                                    />
                                </div>
                            </div>
                            {/* Submit button outside image alignment */}
                            <div className="mt-6">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-[#D39885] hover:bg-[#C65D3B] text-white px-8"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative h-full min-h-[500px]">
                        <Image
                            src="/assets/2_admissions/1-joinus/EleazarCuadros._2025_RosanBosh_9.jpeg"
                            alt="The Garzón School"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <DevBadge name="contact-howtojoin" />
        </section>
    )
}
