import dynamic from "next/dynamic";
import { PageHero } from "@/components/page-hero";

const ContactForm = dynamic(
  () =>
    import("@/components/contact-form").then((mod) => mod.ContactForm),
  { ssr: true },
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Start a"
        titleHighlight="Conversation"
        description="Whether you have a project in mind, need technical consultation, or want to explore partnership opportunities — we'd love to hear from you."
      />
      <ContactForm />
    </>
  );
}
