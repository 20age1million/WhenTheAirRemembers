import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ThemeGrid } from "@/components/ThemeGrid";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="bg-stone-50 text-stone-800">
      {/* Hero */}
      <section
        className="text-white"
        style={{
          background: "linear-gradient(90deg, #15803D 0%, #14532D 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-3xl font-semibold">WHEN THE AIR REMEMBERS</h1>
          <p className="mt-3 text-sm text-white/85">
            London Smog 80th Anniversary Art & Photography Exhibition
          </p>
          <p className="mt-2 text-sm text-white/80">
            From the Great Smog of 1952 to the Extreme: Weather of 2025 - A city remembers what the air once-carried.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <Link href="/exhibition">
              <Button>Learn About the Exhibition</Button>
            </Link>
            <Button variant="ghost">Submit Your Work</Button>
          </div>
        </div>
      </section>

      {/* Logo / mark */}
      <section className="py-10">
        <div className="bg-[#eae6e0]">
          <div className="mx-auto flex justify-center px-4">
            <div className="relative h-[260px] w-full max-w-[720px] overflow-hidden rounded-lg">
              <Image
                src="/images/homepage_lungs.jpg"
                alt="When The Air Remembers"
                fill
                priority
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 45%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="mx-auto max-w-4xl px-4 pb-16 text-center">
        <h2 className="text-2xl font-semibold">Four Themes.</h2>
        <div className="mt-8">
          <ThemeGrid />
        </div>
      </section>

      {/* Venue card */}
      <section className="mx-auto max-w-xl px-4 pb-14">
        <div className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex items-start justify-between text-sm font-semibold text-stone-800">
            <span>Science Museum</span>
            <span className="text-stone-700">15–30 June 2026</span>
          </div>
          <div className="mt-1 text-sm text-stone-600 leading-tight">
            <div>London</div>
            <div>South Kensington</div>
          </div>
          <div className="mt-4 h-px bg-stone-200" />
          <div className="mt-3 flex items-center justify-between text-sm text-stone-700">
            <span>Open Daily 10:00–18:00</span>
            <span className="text-stone-700">Free Admission →</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="A Visual Timeline Through London's Air"
        body="Experience a curated journey across three decades of our changing air, and how it is shaping us. The exhibition blends history, art, and climate storytelling."
        button="into one immersive narrative."
      />

      {/* Footer */}
      <footer className="bg-[#f7f7fa] py-10 text-sm text-stone-600">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="font-semibold text-stone-800">Call for Entries</div>
              <div className="mt-4 space-y-3 text-xs leading-relaxed text-stone-600">
                <div>Open until 31 March 2026</div>
                <div>
                  Submit your photographs or historical
                  <br />
                  objects and be part of London's largest
                  <br />
                  climate art exhibition.
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-stone-800">Plan Your Visit</div>
              <div className="mt-4 text-xs leading-relaxed text-stone-600">
                Everything you need — opening hours,
                <br />
                venue details, and essential visiting tips.
              </div>
            </div>
          </div>
          <div className="my-6 h-px bg-stone-200" />
          <div className="flex flex-col items-start justify-between gap-3 text-xs text-stone-500 md:flex-row md:items-center">
            <div>© 2025 Sustainable Future Hub. All rights reserved.</div>
            <div className="flex gap-5 text-stone-500">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
