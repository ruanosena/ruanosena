"use client";

import { cn } from "@/lib/utils";
import { HTMLProps, useCallback, useState } from "react";

interface WriteLineEffectProps extends HTMLProps<HTMLParagraphElement> {
  shouldStart: boolean;
  onWriteEnd?: () => void;
}

export function WriteLineEffect({
  shouldStart,
  onWriteEnd,
  className,
  children,
  ...props
}: WriteLineEffectProps) {
  const [dettachRef, setDettachRef] = useState(false);
  const ref = useCallback(
    (node: HTMLParagraphElement | null) => {
      if (shouldStart && node !== null) {
        const text = node.innerHTML.trim();
        node.innerHTML = "";
        let writing = true;
        let hasClearWritingBar: NodeJS.Timeout | undefined;
        let index = 0;
        node.classList.remove("opacity-0");
        for (const char of text) {
          setTimeout(() => {
            if (writing) {
              node.innerHTML += char;
            }
            if (node.innerHTML === text || (!writing && !hasClearWritingBar))
              hasClearWritingBar = setTimeout(
                () => {
                  node.classList.remove(
                    "after:content-['|']",
                    "after:ml-1",
                    "after:animate-pulse",
                  );
                  onWriteEnd && onWriteEnd();
                  setDettachRef(true);
                },
                writing ? 1999 : undefined,
              );
          }, 68 * index);
          index++;
        }
        node.addEventListener(
          "click",
          () => {
            if (shouldStart) {
              writing = false;
              node.innerHTML = text;
              onWriteEnd && onWriteEnd();
              setDettachRef(true);
            }
          },
          { once: true },
        );
      }
    },
    [onWriteEnd, shouldStart],
  );

  return (
    <p
      ref={!dettachRef ? ref : null}
      className={cn(
        "opacity-0 after:ml-1 after:animate-pulse after:content-['|']",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
