import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <section className="flex min-h-[60vh] flex-col-reverse items-center justify-between gap-14 py-10 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl font-bold lg:text-7xl">
          Oi, tudo bem? 👋
          <br />{" "}
          <span className="underline decoration-violet-500 underline-offset-8">
            eu sou Ruan
          </span>
        </h1>
        <p className="text-balance text-xl text-muted-foreground md:w-96">
          Desenvolvedor web full-stack com paixão por criar interfaces de
          usuário intuitivas e experiências digitais excepcionais.
        </p>
        <Link className="group inline-block" href="mailto:ruaosena@hotmail.com">
          <div>
            <h1 className="text-3xl font-bold transition-all group-hover:text-orange-400">
              Entre em Contato
              <span className="sr-only sm:not-sr-only"> comigo 📭</span>
            </h1>
            <div className="h-2 w-56 translate-x-2.5 rounded-full bg-orange-500 sm:w-[53%]" />
            <div className="h-2 w-56 translate-x-5 rounded-full bg-violet-500 sm:w-[53%]" />
          </div>
        </Link>
      </div>

      <div className="relative">
        <div className="mt-8 size-60 -rotate-[30deg] space-y-3 sm:mt-12 sm:size-72">
          <div className="flex translate-x-8 gap-3">
            <div className="size-24 rounded-2xl bg-orange-500 sm:size-32" />
            <div className="size-24 rounded-full bg-violet-500 sm:size-32" />
          </div>

          <div className="flex -translate-x-8 gap-3">
            <div className="size-24 rounded-2xl bg-violet-500 sm:size-32" />
            <div className="size-24 rounded-full bg-orange-600 sm:size-32" />
          </div>

          <div className="glow absolute right-1/2 top-[40%] -z-50" />
        </div>

        <div className="absolute bottom-5 left-0 sm:-left-10 sm:bottom-14">
          <Button
            borderRadius="0.5rem"
            className="whitespace-nowrap p-3 font-mono font-medium xl:text-base"
          >
            📢 Disponível para Trabalhar
          </Button>
        </div>
      </div>
    </section>
  );
}
