import { Github, Instagram, Linkedin, LucideIcon } from "lucide-react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";

type SocialLink = {
  url: string;
  label: string;
  icon: LucideIcon;
};

const socials: SocialLink[] = [
  {
    url: "https://www.instagram.com/ruan.sena01",
    label: "Instagram",
    icon: Instagram,
  },
  {
    url: "https://www.linkedin.com/in/ruanosena",
    label: "Linkedin",
    icon: Linkedin,
  },
  {
    url: "https://github.com/ruanosena",
    label: "GitHub",
    icon: Github,
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-2.5 py-10 sm:gap-5">
      <h1 className="-rotate-2 whitespace-nowrap font-mono text-xl font-bold underline decoration-violet-600 underline-offset-8 sm:text-2xl">
        <Link href="/">ruanosena &lt;&gt;</Link>
      </h1>
      <div className="flex items-center gap-2.5 sm:gap-5">
        <NavbarLink
          className="hidden items-center gap-1 text-lg transition-all duration-100 hover:scale-110 sm:flex"
          href="/contato"
        >
          Contato
        </NavbarLink>
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.url}
              key={index}
              aria-label={social.label}
              target="_blank"
            >
              <Icon className="size-8 transition-all hover:scale-125" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
