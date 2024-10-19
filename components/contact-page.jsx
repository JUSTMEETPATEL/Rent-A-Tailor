"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/cards";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      console.error("Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#1F2937] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#9333EA]">About Us</h1>
          <Button
            asChild
            className="bg-[#9333EA] hover:bg-[#A855F7] text-white"
          >
            <a href="/">Home</a>
          </Button>
        </header>

        <Card className="bg-[#374151] shadow-lg border border-[#4B5563]">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-[#9333EA]">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-[#A855F7]">
              We&apos;d love to hear from you! Fill out the form below to send
              us a message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="bg-[#4B5563] border-[#6B7280] text-white placeholder-gray-400 focus:border-[#9333EA] focus:ring-[#9333EA]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-[#4B5563] border-[#6B7280] text-white placeholder-gray-400 focus:border-[#9333EA] focus:ring-[#9333EA]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-[#4B5563] border-[#6B7280] text-white placeholder-gray-400 focus:border-[#9333EA] focus:ring-[#9333EA]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px] bg-[#4B5563] border-[#6B7280] text-white placeholder-gray-400 focus:border-[#9333EA] focus:ring-[#9333EA]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#9333EA] hover:bg-[#A855F7] text-white"
                >
                  Submit
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-[#9333EA] mb-2">
                  Thank you!
                </h3>
                <p className="text-[#A855F7]">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-[#9333EA] mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center text-[#A855F7]">
              <Mail className="h-5 w-5 mr-2" />
              <a
                href="mailto:justmeetpatel@gmail.com"
                className="hover:underline"
              >
                justmeetpatel@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
