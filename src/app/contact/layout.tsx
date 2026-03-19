import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Holme Engineering for project inquiries, partnerships, technical support, or career opportunities.",
  openGraph: {
    title: "Contact Us — Holme Engineering AS",
    description:
      "Reach out for project inquiries, partnerships, or technical consultation.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
