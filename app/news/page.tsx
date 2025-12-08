import Image from "next/image";

type ArticleCard = {
  type: "article";
  key: string;
  category: string;
  title: string;
  meta: string;
  body: string;
};

type ContentCard = {
  type: "content";
  key: string;
  title: string;
  date: string;
  bodyBeforeBullets: string[];
  bullets?: string[];
  bodyAfterBullets?: string[];
  footer: string;
};

type Card = ArticleCard | ContentCard;

const CARDS: Card[] = [
  {
    type: "article",
    key: "card-1",
    category: "London / Air Quality",
    title: "70 years since the Great London Smog",
    meta: "Greater London Authority - 5 December 2022",
    body: "An official report revisits the 1952 Great Smog and how the Clean Air Act improved visibility and public health across the capital.",
  },
  {
    type: "article",
    key: "card-2",
    category: "Heat / Public Health",
    title: "Record-breaking heat putting UK public health at risk",
    meta: "Imperial College London - 10 January 2025",
    body: "Research finds one in five people have suffered heat-related illness, linked to around 4,000 premature deaths a year in the city.",
  },
  {
    type: "article",
    key: "card-3",
    category: "Climate Risk / London",
    title: "Britain unprepared for worsening impact of climate change, advisers say",
    meta: "Climate Change Committee - April 2025",
    body: "Advisers warn climate-driven floods, heatwaves, and air pollution could cause tens of thousands of deaths annually without swift action.",
  },
  {
    type: "article",
    key: "card-4",
    category: "Heat / Public Health",
    title: "Record-breaking heat putting UK public health at risk.",
    meta: "Imperial College London - 10 January 2025",
    body: "A time of almost relentless heat sees rising illness and stress across recent years. Findings link impacts directly to inequalities in the city.",
  },
  {
    type: "article",
    key: "card-5",
    category: "Climate Risk / UK",
    title: "Extreme heat could lead to 3,000 deaths a year in England and Wales by the 2070s",
    meta: "The Guardian - July 2025",
    body: "New analysis warns of climbing climate risks—flooding, drought, wildfires, extreme heat—and thousands of potential excess deaths annually.",
  },
  {
    type: "article",
    key: "card-6",
    category: "Policy / Air Quality",
    title: "Dramatic fall in London's deadly pollutants after ULEZ expansion",
    meta: "The Guardian - March 2025",
    body: "Studies show that the expanded ULEZ cuts harmful emissions, easing concerns and reflecting strong health gains for Londoners.",
  },
  {
    type: "content",
    key: "card-7",
    title: "Call for Entries Opens Today",
    date: "March 2026",
    bodyBeforeBullets: [
      'We are pleased to announce that submissions for the "When the Air Remembers" Art & Photography Exhibition are officially open.',
      "Artists, students, photographers, and storytellers across London and beyond are invited to submit works responding to the memory and legacy of the 1952 Great London Smog.",
      "Submissions are accepted in three thematic tracks:",
    ],
    bullets: ["Human Dilemma", "Industry & Nature", "Governance & Hope"],
    bodyAfterBullets: ["Entries will be reviewed anonymously by a panel of curators, environmental experts and London-based educators."],
    footer: "Submit your work via our Official Website.",
  },
  {
    type: "content",
    key: "card-8",
    title: "Behind-the-Scenes: Installation Begins",
    date: "April 2026",
    bodyBeforeBullets: [
      "Construction has officially begun at the London Science Museum. Our Weathered Wood installation — the emotional gateway of the exhibition — is now taking shape.",
      "This large-scale piece is built from ethically sourced reclaimed wood, symbolising erosion, memory, and the passage of polluted air over generations.",
    ],
    bodyAfterBullets: [
      "More behind-the-scenes images and timelapse videos will be shared throughout the week on our website and social platforms.",
    ],
    footer: "Follow our BTS updates on Instagram & TikTok.",
  },
  {
    type: "content",
    key: "card-9",
    title: "Over 1,000 Submissions Received",
    date: "April 2026",
    bodyBeforeBullets: [
      "We are thrilled to announce that the open call has received more than 1,000 submissions from 14 countries. This overwhelming response reflects the global relevance of air pollution, climate crisis, and collective memory.",
      "Our curatorial team is currently reviewing all works through an anonymous scoring system. Final selections will be announced in early May.",
      "More behind-the-scenes images and timelapse videos will be shared throughout the week on our website and social platforms.",
    ],
    footer: "Thank you to all contributors for sharing your vision and voice.",
  },
  {
    type: "content",
    key: "card-10",
    title: "Finalists Announced",
    date: "May 2026",
    bodyBeforeBullets: [
      "After multiple rounds of blind review, 30 photography works have been officially selected for the exhibition.",
      "The chosen works reflect a powerful emotional and visual spectrum:",
    ],
    bullets: [
      "portraits of everyday resilience,",
      "industrial landscapes transformed by haze,",
      "and hopeful visions of environmental recovery.",
    ],
    bodyAfterBullets: ["A full list of finalists is now available on our website."],
    footer: "Congratulations to all selected artists.",
  },
  {
    type: "content",
    key: "card-11",
    title: "Mid-Exhibition Report: Visitor Engagement Peaks",
    date: "June 22, 2026",
    bodyBeforeBullets: [
      "After one week of public opening, the exhibition has welcomed over 6,500 visitors.",
      "Key engagement highlights:",
    ],
    bullets: [
      "3,200+ audience votes submitted online",
      "1,100 feedback messages",
      "Over 8 million impressions across Instagram, TikTok and X",
      "The Weathered Wood installation has become the exhibition's most photographed feature",
    ],
    bodyAfterBullets: [
      "We express our gratitude to all visitors, volunteers and partners supporting this collective exploration of air and memory.",
    ],
    footer: "Share your visit using #WhenTheAirRemembers.",
  },
  {
    type: "content",
    key: "card-12",
    title: "Exhibition Concludes; Donations Announced",
    date: "July 2026",
    bodyBeforeBullets: [
      "We are proud to announce that all proceeds from merchandise sales, catalogue purchases and public donations will go toward:",
    ],
    bullets: [
      "Clean Air Fund",
      "Asthma + Lung UK",
      "Global Action Plan",
      "London Environment Agency Community Air Program",
    ],
    bodyAfterBullets: ["Thank you for helping us transform memory into action."],
    footer: "A full exhibition recap film will be released next month.",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-white text-stone-800">
      {/* Hero */}
      <section className="bg-[#15803d] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center">
          <h1 className="text-2xl font-semibold uppercase">NEWS</h1>
          <p className="mt-3 text-sm text-white/90">
            London&apos;s air is not just a subject for art and memory. It appears in headlines, health reports and climate warnings every
            year. Here are some of the stories that shape the world behind our exhibition.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white pb-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((card) => {
              if (card.type === "article") {
                return (
                  <div
                    key={card.key}
                    className="flex flex-col justify-between rounded-lg border border-stone-200 bg-white px-5 py-5 text-[13px] leading-relaxed text-stone-700 shadow-sm"
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">{card.category}</p>
                      <h3 className="text-[16px] font-semibold text-stone-900 leading-tight">{card.title}</h3>
                      <p className="text-[13px] text-stone-600">{card.meta}</p>
                      <p className="text-[13px] text-stone-700">{card.body}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <span className="text-[13px] font-semibold text-blue-600">Read full article →</span>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={card.key}
                  className="flex flex-col justify-between rounded-lg border border-stone-200 bg-white px-5 py-5 text-[13px] leading-relaxed text-stone-700 shadow-sm"
                >
                  <div className="space-y-2">
                    <h3 className="text-[15px] font-semibold text-stone-900">{card.title}</h3>
                    <p className="font-semibold text-stone-800">Date: {card.date}</p>
                    {card.bodyBeforeBullets.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    {card.bullets && (
                      <div className="space-y-[2px] text-[12px] text-stone-400">
                        {card.bullets.map((b, i) => (
                          <div key={i}>&bull; {b}</div>
                        ))}
                      </div>
                    )}
                    {card.bodyAfterBullets?.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-auto pt-5 text-center">
                    <span className="inline-block rounded-md border border-[#16a349] px-3 py-2 text-[12px] font-semibold text-[#16a349]">
                      → {card.footer}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom image */}
      <section className="bg-white pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative h-[520px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/news_page_lungs.jpg"
              alt="When The Air Remembers visual"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
