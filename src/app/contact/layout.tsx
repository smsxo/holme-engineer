import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Holme Engineering for project inquiries, partnerships, technical support, or career opportunities.",
  openGraph: {
    title: "Contact Us — Holme Engineering AS",
    description:
      "Reach out for project inquiries, partnerships, or technical consultation.",
    url: "https://holme-engineering.com/contact",
  },
  twitter: {
    title: "Contact Holme Engineering",
    description:
      "Start your next maritime or energy project. Get in touch with our engineering team.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
