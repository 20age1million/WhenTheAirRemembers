type CTAProps = {
  title: string;
  body: string;
  button: string;
};

export function CTA({ title, body, button }: CTAProps) {
  return (
    <section className="bg-[#15803D] py-12 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-3 max-w-2xl text-sm text-white/80">{body}</p>
        <button className="mt-6 rounded-md bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm transition-colors hover:bg-stone-50">
          {button}
        </button>
      </div>
    </section>
  );
}
