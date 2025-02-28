"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

interface NavbarLinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function NavbarLink({
  href,
  children,
  className,
  ...props
}: Readonly<NavbarLinkProps>) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        isActive && "underline decoration-violet-600 underline-offset-4",
        "flex items-center gap-1 text-lg font-semibold transition-all duration-100 hover:scale-110",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
