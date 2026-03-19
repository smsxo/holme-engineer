"use client";

import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Logo({
  className,
  width = 160,
  height = 40,
  priority = false,
}: LogoProps) {
  const { theme } = useTheme();
  const src = theme === "light" ? "/logo-light.svg" : "/logo-dark.svg";

  return (
    <Image
      src={src}
      alt="Holme Engineering"
      width={width}
      height={height}
      priority={priority}
      className={cn("w-auto object-contain", className)}
    />
  );
}
