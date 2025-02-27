"use client";

import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { HoverEffect, HoverEffectItem } from "./ui/card-hover-effect";

const skills: HoverEffectItem[] = [
  {
    text: "React",
    icon: SiReact,
  },
  { text: "Next.js", icon: SiNextdotjs },
  {
    text: "Tailwindcss",
    icon: SiTailwindcss,
  },
  {
    text: "Node.js",
    icon: SiNodedotjs,
  },
  {
    text: "Strapi",
    icon: SiStrapi,
  },
  {
    text: "Prisma",
    icon: SiPrisma,
  },
  {
    text: "Postgresql",
    icon: SiPostgresql,
  },
  {
    text: "TypeScript",
    icon: SiTypescript,
  },
  {
    text: "JavaScript",
    icon: SiJavascript,
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <div className="relative mx-auto w-fit -rotate-6">
        <h2 className="text-3xl font-bold transition-all group-hover:text-orange-400">
          Skills 🤹‍♂️
        </h2>
        <div className="absolute top-full h-2 w-56 translate-x-[2.5%] rounded-full bg-orange-500 sm:w-[77%]" />
        <div className="absolute top-[calc(100%_+_0.5rem)] h-2 w-56 translate-x-[5%] rounded-full bg-violet-500 sm:w-[77%]" />
      </div>

      <HoverEffect items={skills} />
    </div>
  );
}
