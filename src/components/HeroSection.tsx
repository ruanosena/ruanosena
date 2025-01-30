import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import Title from "./Title";
import { WriteLineEffect } from "./ui/write-line-effect";
import HeroTitle from "./HeroTitle";

export default function HeroSection() {
  return (
    <section className="flex min-h-[60vh] flex-col-reverse items-center justify-between gap-14 py-10 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <HeroTitle />

        <p className="animate-show-from-left text-balance text-xl text-muted-foreground opacity-0 md:w-96">
          Desenvolvedor web full-stack com paixão por criar interfaces de
          usuário intuitivas e experiências digitais excepcionais.
        </p>
        <Link
          className="group inline-block"
          href="mailto:ruosena@hotmail.com?subject=Desenvolvimento+de+site&body=Ol%C3%A1+Ruan,+gostaria+de+um+or%C3%A7amento+para+um+site..."
        >
          <Title>Entre em Contato 📭</Title>
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

        <div className="absolute bottom-5 left-0 animate-bump sm:-left-10 sm:bottom-14">
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
