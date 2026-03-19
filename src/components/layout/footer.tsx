import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { company, services } from "@/data/site-data";
import { Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-surface text-foreground-muted border-t border-border"
    >
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5"
              aria-label="Holme Engineering — Home"
            >
              <Logo width={200} height={60} className="h-11 opacity-90" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground leading-tight tracking-tight">
                  {company.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground-muted">
                  AS
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-foreground-muted max-w-xs">
              Norwegian engineering excellence in power management, energy
              storage, and maritime automation — globally deployed.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-border text-foreground-muted transition-all duration-200 hover:bg-cyan-500 hover:text-white hover:shadow-md hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Follow Holme Engineering on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Consulting Services */}
          <div>
            <h2 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
              Consulting Services
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/consulting-services#marine"
                  className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
                >
                  Marine
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting-services#ess-solutions"
                  className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
                >
                  ESS Solutions
                </Link>
              </li>
            </ul>
            <h2 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5 mt-8">
              R&D
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/research-development/software-product-dev"
                  className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
                >
                  Software & Product Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
              Services
            </h2>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
              Company
            </h2>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Projects", href: "/projects" },
                { label: "Industries", href: "/industries" },
                { label: "R&D", href: "/research-development" },
                { label: "News", href: "/news" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
                >
                  {company.phone}
                </a>
              </li>
              <li className="text-foreground-muted">{company.address}</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Start a Project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-foreground-dim">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <button
              type="button"
              className="text-xs text-foreground-dim hover:text-foreground-secondary transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="text-xs text-foreground-dim hover:text-foreground-secondary transition-colors duration-200"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
