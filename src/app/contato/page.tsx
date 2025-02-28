import Navbar from "@/components/Navbar";
import { House, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-7xl p-5">
      <Navbar />
      <div className="relative isolate">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative mx-auto max-w-2xl px-6 py-24 sm:py-40 lg:static lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden shadow shadow-ring/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-muted-foreground/70 [mask-image:radial-gradient(100%_100%_at_top_right,_white,_transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y="-1"
                    id="sq"
                    width="200"
                    height="200"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                  </pattern>
                </defs>
                <svg x="100%" y="-1" className="overflow-visible fill-muted/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect
                  fill="url(#sq)"
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                ></rect>
              </svg>
              <div
                aria-hidden="true"
                className="absolute left-56 top-[calc(100%_-_13rem)] transform blur-3xl lg:left-[max(-14rem,_calc(100%_-_59rem))] lg:top-[calc(50%_-_7rem)]"
              >
                <div
                  className="aspect-[1155_/_678] w-[72.1875rem] bg-gradient-to-br from-orange-600 via-violet-600 to-emerald-600 opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                ></div>
              </div>
            </div>

            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Contato
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-muted-foreground">
              Vamos criar algo incrível juntos? Entre em contato para
              discutirmos suas ideias!
            </p>

            <dl className="mt-10 space-y-4 text-base/7 text-muted-foreground">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <div className="sr-only">Endereços</div>
                  <House className="size-7" />
                </dt>
                <dd>
                  Jandira, SP
                  <br />
                  Várzea da Roça, BA
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <div className="sr-only">Telefone</div>
                  <Phone className="size-7" />
                </dt>
                <dd>
                  <Link href="tel:+5511951949746">+55 (11) 95194-9746</Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <div className="sr-only">E-mail</div>
                  <Mail className="size-7" />
                </dt>
                <dd>
                  <Link href="mailto:ruosena@hotmail.com">
                    ruosena@hotmail.com
                  </Link>
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
