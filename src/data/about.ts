import { Award, Lightbulb, Leaf, Globe } from "lucide-react";
import type { CompanyValue } from "@/types";

export const values: CompanyValue[] = [
  {
    title: "Engineering Excellence",
    description:
      "We hold ourselves to the highest technical standards, delivering robust solutions built on deep domain expertise.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We push boundaries in maritime technology, from AI-driven automation to next-generation energy storage systems.",
    icon: Lightbulb,
  },
  {
    title: "Sustainability",
    description:
      "Every system we build is designed to reduce emissions, optimize fuel consumption, and support the green transition.",
    icon: Leaf,
  },
  {
    title: "Global Reach",
    description:
      "Norwegian roots with worldwide deployment. Our solutions operate across 30+ countries on every ocean.",
    icon: Globe,
  },
];
