import HeroTitle from "./HeroTitle";
import { LinkPreview } from "./ui/link-preview";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <section className="flex min-h-[60vh] flex-col-reverse items-center justify-between gap-14 py-10 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <HeroTitle />

        <p className="animate-show-from-left text-balance text-xl text-muted-foreground opacity-0 md:w-96">
          Desenvolvedor web full-stack com paixão por criar interfaces de
          usuário intuitivas e experiências digitais excepcionais.
        </p>

        <div className="group relative z-10 inline-block w-fit">
          <LinkPreview
            isStatic
            imageSrc="/pagina-contato.jpeg"
            className="inline-block"
            url="/contato"
            quality={100}
          >
            <span className="text-3xl font-bold transition-all group-hover:text-orange-400">
              Entre em Contato 📭
            </span>
            <div className="absolute top-full h-2 w-56 translate-x-[2.5%] rounded-full bg-orange-500 sm:w-[77%]" />
            <div className="absolute top-[calc(100%_+_0.5rem)] h-2 w-56 translate-x-[5%] rounded-full bg-violet-500 sm:w-[77%]" />
          </LinkPreview>
        </div>
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
