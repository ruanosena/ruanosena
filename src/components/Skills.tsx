"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect, HoverEffectItem } from "./ui/card-hover-effect";
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
      <Title className="mx-auto -rotate-6">Skills 🤹‍♂️</Title>

      <HoverEffect items={skills} />
    </div>
  );
}
