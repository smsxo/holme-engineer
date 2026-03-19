"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ANIMATION,
  DIRECTION_OFFSET,
  type AnimationDirection,
} from "@/lib/constants";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: ANIMATION.viewMargin });

  const offset = DIRECTION_OFFSET[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }
      }
      transition={{
        duration: ANIMATION.duration,
        delay,
        ease: ANIMATION.ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = ANIMATION.staggerDelay,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: ANIMATION.viewMargin });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: ANIMATION.staggerDuration,
            ease: ANIMATION.ease,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
