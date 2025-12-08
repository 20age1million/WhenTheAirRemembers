"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about_us", label: "About Us" },
  { href: "/get_involved", label: "Get Involved" },
  { href: "/news", label: "News" },
  { href: "/exhibition", label: "Exhibition" },
];

export function Header() {
  const pathname = usePathname() || "";
  const activeColor = "#16a349";

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/home" && pathname === "/") return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-green-700 transform -translate-y-[1px]"
        >
          WHEN THE AIR REMEMBERS
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex h-full items-end border-b-2 border-transparent px-1 pb-1 text-sm transition-colors ${
                isActive(link.href)
                  ? "font-semibold text-[#16a349]"
                  : "text-stone-700 hover:text-[#16a349]"
              }`}
              style={
                isActive(link.href)
                  ? { borderColor: activeColor, color: activeColor }
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
          <span className="inline-flex h-full items-end pb-1 text-sm text-stone-500">Login</span>
        </nav>
      </div>
    </header>
  );
}
