import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-background">
      <Container className="text-center">
        <p className="text-sm font-medium text-cyan-400 tracking-wide uppercase">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-foreground-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
