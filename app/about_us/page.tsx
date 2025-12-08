import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="bg-stone-50 text-stone-800">
      {/* Hero */}
      <section
        className="text-white"
        style={{ background: "linear-gradient(90deg, #15803D 0%, #14532D 100%)" }}
      >
        <div className="mx-auto max-w-5xl px-4 py-10 text-center">
          <h1 className="text-2xl font-semibold">About Sustainable Future Hub</h1>
          <p className="mt-3 text-sm text-white/85">
            We&apos;re on a mission to accelerate sustainability initiatives through knowledge sharing,
            <br />
            community building, and practical tools.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-white pt-4 pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <Image
            src="/images/about_us_page_beginning.jpg"
            alt="London smog and the river"
            width={1440}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#f9fafb] py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4 text-[15px] leading-relaxed text-stone-700 max-w-xl">
            <h2 className="text-lg font-semibold text-stone-900">Our Story</h2>
            <p>
              The turning point came when we discovered a piece of weathered wood. It looked ordinary at first, but its surface
              revealed deep fissures, darkened textures and patterns that resembled the branching lines of human lungs. It felt
              like an object that had quietly absorbed decades of harsh air—almost as if time itself had carved into it.
            </p>
            <p>
              This wood became the heart of our exhibition. We began calling it the Weathered Lung, because it captured everything
              we were trying to articulate: the way air leaves marks on bodies, on materials, on cities. The installation became a
              bridge between 1952 and 2025, a tangible reminder that the past doesn’t stay in photographs or documents—it settles
              inside us.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/about_us_page_grass.jpg"
              alt="Recovered artifact in the grass"
              width={420}
              height={260}
              className="h-auto w-full max-w-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-stone-700">
          <h3 className="text-lg font-semibold text-stone-900">Meet Our Team</h3>
          <p className="mt-4 text-[13px] leading-relaxed text-green-700">
            AirMemory is not an institution. It is a collective of students from different disciplines—photography, digital
            media, environmental studies, design, and art direction—working together across London. What unites us is a belief
            that awareness grows when people feel connected, when history becomes emotional rather than instructional.
          </p>
          <div className="mt-6 text-[13px] leading-relaxed text-stone-700">
            <p>We want visitors to experience a story, not a lecture.</p>
            <p className="mt-3 text-base font-semibold text-stone-800">
              A shift in perception, not a warning.
              <br />
              A moment of recognition, rather than fear.
            </p>
          </div>
          <p className="mt-8 text-[13px] leading-relaxed text-stone-700">
            By bringing together archival materials, contemporary photography, environmental data and artistic installations,
            we hope to create a space where people can reflect on how the air of London has been shaping them long before they
            noticed it.
          </p>
        </div>
      </section>

      {/* Exhibitor */}
      <section className="bg-[#f9fafb] py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-center text-base font-semibold text-stone-900">Our Exhibitor</h3>
          <div className="mt-6 rounded-[14px] border-[3px] border-[#166534] bg-[#f6f6f9] px-16 md:px-20 py-10 text-sm leading-relaxed text-stone-700 shadow-[0_0_0_0.5px_rgba(0,0,0,0.02)]">
            <p>
              When the Air Remembers is designed as a slow, immersive journey through the city’s breathing history. Visitors move
              from the heavy imagery of the 1952 smog, through the familiar scenes of today’s heatwave summers, and into the
              uncertain atmosphere of London’s future under climate change.
            </p>
            <p className="mt-4">
              At the centre, the Weathered Lung installation waits, asking people to pause and consider the marks that air leaves
              behind—on wood, on buildings, on lungs, and on memory.
            </p>
            <p className="mt-4">
              This exhibition is not only about the damage of pollution. It is about resilience, recognition, and the ability of a
              city to confront its own past in order to understand its future.
            </p>
          </div>
        </div>
      </section>

      {/* Hope */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-6 text-sm leading-relaxed text-stone-700">
          <h3 className="text-base font-semibold text-stone-900 text-left">Our Hope</h3>
          <p className="mt-4 text-[13px] text-stone-700 text-left">
            We created AirMemory because we believe that remembering is its own form of action. When we understand the emotional
            and historical relationship we have with the air around us, we begin to understand why climate awareness matters
            beyond statistics.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-[13px]">
            <span className="bg-[#d1d5db] px-5 py-3 text-stone-700">a new way of noticing the sky,</span>
            <span className="bg-[#d1d5db] px-5 py-3 text-stone-700">a deeper breath of awareness,</span>
            <span className="bg-[#d1d5db] px-5 py-3 text-stone-700">a moment of connection to the city—</span>
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="border-t border-stone-200 bg-[#f9fafb] py-12">
        <div className="mx-auto max-w-4xl px-6 text-center text-[15px] leading-relaxed text-stone-600">
          <p>then AirMemory has done its work.</p>
          <p>Because the air remembers more than we realise.</p>
          <p>And now, we invite you to remember with it.</p>
        </div>
      </section>
    </main>
  );
}
