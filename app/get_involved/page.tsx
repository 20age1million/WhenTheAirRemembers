import Image from "next/image";

const cards = [
  {
    title: "1. Submit Your Work",
    subtitle: "(For photographers, artists, students, and storytellers)",
    intro: "Help us reveal what London’s air feels like today. You can submit:",
    bulletsLeft: [
      "Photography capturing smog, heatwaves, or urban air",
      "Portraits of life under pollution",
      "Environmental storytelling",
      "Historical objects from 1952–2025",
      "Personal archives, family stories, old masks or air-quality tools",
    ],
    footer: "Submit Your Work",
    footerText:
      "Your work may become part of the exhibition at the Science Museum this June, seen by thousands of visitors online and offline.",
    variant: "list",
  },
  {
    title: "2. Volunteer With Us",
    subtitle: "(For anyone who wants hands-on experience)",
    intro: "Be part of the team that brings this project to life. Volunteer roles include:",
    bulletsLeft: [
      "Exhibition guide & visitor support",
      "Social media ambassador",
      "Photography workshop assistant",
      "Event day helper (opening ceremony / community panel)",
      "Installation & layout support",
      "Sustainability advocate (green tips, public engagement)",
    ],
    footer: "Sign Up as a Volunteer",
    footerText: "You don’t need experience—just curiosity and enthusiasm.",
    variant: "list",
  },
  {
    title: "3. Share Your Air Story",
    subtitle: "(For the public & community groups)",
    intro: "Every Londoner has a personal connection to the air:",
    bulletsLeft: ["A memory.", "A street.", "A breath.", "A moment."],
    bulletsRight: [
      "We invite you to share:",
      "A short story",
      "A voice recording",
      "A childhood memory",
      "A family photo",
      "A neighbourhood experience of smog or heatwaves",
    ],
    footer: "Share Your Story",
    footerText:
      "Selected stories will appear in our interactive digital archive, featured both online and inside the exhibition.",
    variant: "columns-split",
  },
  {
    title: "4. Support the Exhibition",
    subtitle: "(For partners, organisations, and sponsors)",
    intro: "Climate awareness grows through collaboration. We welcome support from:",
    bulletsLeft: [
      "Nonprofits & environmental groups",
      "Arts organisations",
      "Student unions",
      "Local councils",
      "Brands working in health, technology, clean energy",
      "Museums & cultural institutions",
    ],
    bulletsRight: [
      "Support can mean:",
      "Funding",
      "Venue support",
      "Media partnerships",
      "Equipment donation",
      "Educational collaborations",
      "Co-hosted workshops",
    ],
    footer: "Partner With Us",
    footerText: "Together, we create a more breathable future for London.",
    variant: "columns-split",
  },
  {
    title: "5. Spread the Word Online",
    subtitle: "(For everyone with a phone)",
    intro: "Help keep the conversation alive. Share your experience using:",
    bulletsLeft: ["#AirMemory", "#WhenTheAirRemembers", "#LondonAir80"],
    footer: "", // no green footer for this card
    footerText:
      "Or repost our visuals on Instagram, TikTok, Twitter (X), and university channels. Every post helps someone learn something new.",
    variant: "list",
  },
  {
    title: "6. Attend the Events",
    subtitle: "(For visitors, families, and schools)",
    intro: "Join us at the Science Museum London, 15–30 June 2026. Activities include:",
    bulletsLeft: [
      "Exhibition opening ceremony",
      "Artist talks",
      "Smog simulation chamber",
      "Eco-photography workshop",
      "School-friendly guided tours",
      "Community discussion circles",
    ],
    footer: "Plan Your Visit",
    footerText: "Bring your friends, bring your family—or just bring your curiosity.",
    variant: "list",
  },
  {
    title: "7. Become Part of the Archive",
    subtitle: "",
    intro:
      "AirMemory is more than an exhibition. It is a long-term living archive documenting how Londoners breathe in the age of extreme weather.",
    bulletsLeft: ["Your voice, your work, your participation becomes part of that archive."],
    footer: "", // no green footer
    footerText: "Help us remember the air—so we can protect the future.",
    variant: "list",
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="bg-white text-stone-800">
      {/* Hero */}
      <section className="bg-[#15803d] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center">
          <h1 className="text-2xl font-semibold uppercase tracking-wide">
            GET INVOLVED — Join the AirMemory Movement
          </h1>
          <p className="mt-3 text-sm font-semibold text-white">
            Because climate awareness begins with people — not policies.
          </p>
        </div>
      </section>

      {/* Featured insight */}
      <section className="bg-white pt-10 pb-3">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-base font-semibold text-stone-900">Featured Insight</h2>
          <div className="mt-8 grid h-[380px] overflow-hidden rounded-[16px] bg-[#f9fafb] md:grid-cols-[1fr_1.1fr]">
            <div className="relative h-full w-full">
              <Image
                src="/images/get_involved_page_painting.jpg"
                alt="Art reflecting London's air"
                fill
                className="object-cover"
                style={{ objectPosition: "center 50%" }}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex h-full items-start">
              <div className="px-8 py-8 text-sm leading-relaxed text-stone-700">
                <p>
                  Extreme weather is no longer a distant prediction for London. It is already shaping the way we breathe, travel,
                  work, and live. AirMemory invites everyone—not just artists—to take part in rewriting the way our city remembers
                  its air.
                </p>
                <p className="mt-4">
                  Whether you want to create, participate, volunteer, or simply learn, there is a place for you here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution cards */}
      <section className="bg-white pb-14">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
              >
                <div className="relative h-[210px] w-full">
                  <Image
                    src="/images/get_involved_page_sun.jpg"
                    alt="Sunlight silhouettes"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex h-full flex-col space-y-2 px-4 py-4 text-[13px] leading-relaxed text-stone-700">
                  <h4 className="text-sm font-semibold text-stone-900">{card.title}</h4>
                  {card.subtitle && <p className="italic text-stone-500">{card.subtitle}</p>}
                  <p>{card.intro}</p>
                  {card.variant === "columns-split" ? (
                    <div className="grid grid-cols-2 gap-x-2 text-[10.5px] leading-[1.3] text-stone-500">
                      <div className="space-y-[3px]">
                        {card.bulletsLeft?.map((item) => (
                          <div key={item} className="whitespace-pre-line">
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-[3px]">
                        {card.bulletsRight?.map((item) => (
                          <div key={item} className="whitespace-pre-line">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-[3px] text-[10.5px] leading-[1.3] text-stone-500">
                      {card.bulletsLeft?.map((item) => (
                        <div key={item} className="whitespace-pre-line">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="pt-1 text-[13px] text-stone-800">{card.footerText}</p>
                  {card.footer && (
                    <div className="mt-auto pt-2 text-[13px] font-semibold text-[#16a349] text-right">
                      → [{card.footer}]
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit details */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl font-semibold text-stone-900">Submit Your Work</h2>
          <p className="mt-4 text-sm text-stone-700">
            Share how London&apos;s air looks, feels, and changes in your eyes. Selected works will be showcased in{" "}
            <span className="italic">When the Air Remembers</span> exhibition at the Science Museum, London.
          </p>
          <p className="mt-3 text-sm text-stone-500">Submissions open until 31 March 2026.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-300 px-6 py-6 text-left text-sm leading-relaxed text-stone-800">
              <h3 className="text-lg font-semibold text-stone-900">Photography</h3>
              <p className="mt-3">
                Single images or series capturing smog, heatwaves, urban air, or human responses to extreme weather.
              </p>
            </div>
            <div className="rounded-xl border border-stone-300 px-6 py-6 text-left text-sm leading-relaxed text-stone-800">
              <h3 className="text-lg font-semibold text-stone-900">Physical Objects &amp; Archives</h3>
              <p className="mt-3">Masks, tools, documents, or personal items from 1952 to present day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
