"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { AnimatedSection } from "@/components/animated-section";
import { company } from "@/data/site-data";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
} from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-4" direction="left">
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground-muted">
              Reach out to us directly or fill out the form. We typically
              respond within one business day.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Office</p>
                  <p className="text-sm text-foreground-muted">
                    {company.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    LinkedIn
                  </p>
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection
            className="lg:col-span-8"
            delay={0.15}
            direction="right"
          >
            <Card hover={false} className="p-8 lg:p-10">
              {submitted ? (
                <div className="animate-[fade-scale-in_0.4s_ease-out_both] text-center py-12">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
                    <CheckCircle2 className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted max-w-sm mx-auto">
                    Thank you for reaching out. We&apos;ll review your message
                    and get back to you within one business day.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                      id="firstName"
                      label="First Name"
                      placeholder="John"
                      required
                    />
                    <Input
                      id="lastName"
                      label="Last Name"
                      placeholder="Smith"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                    <Input
                      id="company"
                      label="Company"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground-secondary mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="flex h-11 w-full rounded-lg border border-border-bright bg-border px-4 text-sm text-foreground transition-all duration-200 focus:border-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:bg-surface-elevated"
                      defaultValue=""
                      required
                      aria-required="true"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="project">Project Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <Textarea
                    id="message"
                    label="Message"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                  <div className="flex justify-end">
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
