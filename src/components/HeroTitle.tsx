"use client";
import React, { useState } from "react";
import { WriteLineEffect } from "./ui/write-line-effect";

export default function HeroTitle() {
  const [hasWriteLine1, setHasWriteLine1] = useState(false);

  return (
    <>
      <WriteLineEffect
        shouldStart
        onWriteEnd={() => setHasWriteLine1(true)}
        className="text-4xl font-bold lg:text-7xl"
      >
        Oi, tudo bem? 👋
      </WriteLineEffect>
      <WriteLineEffect
        shouldStart={hasWriteLine1}
        className="text-4xl font-bold underline decoration-violet-500 underline-offset-8 lg:text-7xl"
      >
        eu sou Ruan
      </WriteLineEffect>
    </>
  );
}
