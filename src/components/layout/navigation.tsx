"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, company } from "@/data/site-data";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";

export function Navigation() {
  const isScrolled = useScrollPosition(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useBodyScrollLock(mobileOpen);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    if (openDropdown) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [openDropdown]);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between lg:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Holme Engineering — Home"
          >
            <Logo priority className="h-8 md:h-9 lg:h-10" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground leading-tight tracking-tight">
                {company.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground-muted">
                AS
              </span>
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren && handleDropdownEnter(item.label)
                  }
                  onMouseLeave={handleDropdownLeave}
                  onFocus={() => hasChildren && handleDropdownEnter(item.label)}
                  onBlur={(e) => {
                    if (
                      hasChildren &&
                      !e.currentTarget.contains(e.relatedTarget)
                    )
                      setOpenDropdown(null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-200 group inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
                      isActive
                        ? "text-cyan-400"
                        : "text-foreground-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform duration-200",
                          openDropdown === item.label && "rotate-180",
                        )}
                      />
                    )}
                    {/* Active / hover underline */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-px rounded-full transition-all duration-300",
                        isActive
                          ? "w-4 bg-cyan-400"
                          : "w-0 bg-white/40 group-hover:w-4",
                      )}
                    />
                  </Link>

                  {/* Dropdown */}
                  {hasChildren && (
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 min-w-50 rounded-xl border border-border bg-surface/95 backdrop-blur-xl shadow-xl shadow-black/30 py-2"
                        >
                          {item.children!.map((child) => {
                            const childActive =
                              pathname === child.href ||
                              pathname.startsWith(child.href);
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                                  childActive
                                    ? "text-cyan-400 bg-cyan-500/10"
                                    : "text-foreground-muted hover:text-foreground hover:bg-border",
                                )}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 h-10 px-5 rounded-full bg-cyan-500 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden bg-surface/95 backdrop-blur-xl border-b border-border shadow-xl shadow-black/40 relative z-50"
            >
              <Container className="py-3">
                <div className="space-y-0.5">
                  {navigation.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href));
                    const hasChildren =
                      item.children && item.children.length > 0;
                    const isExpanded = mobileExpanded === item.label;

                    return (
                      <div key={item.href}>
                        <div className="flex items-center">
                          <Link
                            href={item.href}
                            onClick={closeMobile}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                              "flex-1 flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                              isActive
                                ? "text-cyan-400 bg-cyan-500/10"
                                : "text-foreground-secondary hover:text-foreground hover:bg-border",
                            )}
                          >
                            {item.label}
                            {isActive && !hasChildren && (
                              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            )}
                          </Link>
                          {hasChildren && (
                            <button
                              type="button"
                              onClick={() =>
                                setMobileExpanded(
                                  isExpanded ? null : item.label,
                                )
                              }
                              className="p-3 rounded-xl text-foreground-muted hover:text-foreground hover:bg-border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                              aria-label={`Expand ${item.label} submenu`}
                            >
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  isExpanded && "rotate-180",
                                )}
                              />
                            </button>
                          )}
                        </div>
                        {hasChildren && isExpanded && (
                          <div className="ml-4 mt-0.5 mb-1 space-y-0.5">
                            {item.children!.map((child) => {
                              const childActive =
                                pathname === child.href ||
                                pathname.startsWith(child.href);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={closeMobile}
                                  className={cn(
                                    "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                                    childActive
                                      ? "text-cyan-400 bg-cyan-500/10"
                                      : "text-foreground-muted hover:text-foreground hover:bg-border",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-border px-4 pb-1 flex items-center gap-3">
                  <ThemeToggle />
                  <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-cyan-500 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:bg-cyan-400 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
