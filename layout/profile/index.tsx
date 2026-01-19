"use client";

import { IconChevronDown, IconLogout, IconUser } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function formatEmail(email: string) {
  const [name, domain] = email.split("@");
  if (!domain) return email;

  return `${name.slice(0, 5)}...@${domain}`;
}

export function Profile() {
  const { data: session, status } = useSession();

  if (status !== "authenticated" || !session.user) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-2 text-sm text-black transition"
      >
        <IconUser className="h-4 w-4" />
        <span>Entrar</span>
      </Link>
    );
  }

  const { name, email } = session.user;

  return (
    <UserDropdown>
      <div className="flex flex-col gap-y-1">
        <p className="leading-none font-medium text-start truncate">
          {name ?? "Usuário"}
        </p>
        {email && (
          <p className="text-gray-500 text-sm leading-none truncate">
            {formatEmail(email)}
          </p>
        )}
      </div>
    </UserDropdown>
  );
}

export function UserDropdown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="focus:outline-none cursor-pointer flex items-center gap-x-3"
      >
        {children} <IconChevronDown size={18} />
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-44
            rounded-xl border border-zinc-800
            bg-zinc-900 shadow-xl
            overflow-hidden
            animate-in fade-in zoom-in-95
          "
        >
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="
              flex w-full items-center gap-2
              px-4 py-2 text-sm
              text-red-400 hover:bg-zinc-800
              transition  cursor-pointer
            "
          >
            <IconLogout className="h-4 w-4" />
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
