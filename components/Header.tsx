import Link from "next/link";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about_us", label: "About Us" },
  { href: "/get_involved", label: "Get Involved" },
  { href: "/news", label: "News" },
  { href: "/exhibition", label: "Exhibition" },
];

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-green-700">
          WHEN THE AIR REMEMBERS
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-green-600">
              {link.label}
            </Link>
          ))}
          <span className="text-sm text-stone-500">Login</span>
        </nav>
      </div>
    </header>
  );
}
