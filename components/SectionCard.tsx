type SectionCardProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  footer?: string;
};

export function SectionCard({ title, subtitle, meta, footer }: SectionCardProps) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-stone-800">{title}</div>
      {subtitle && <div className="mt-1 text-sm text-stone-600">{subtitle}</div>}
      {meta && <div className="mt-4 text-sm font-medium text-stone-700">{meta}</div>}
      {footer && (
        <div className="mt-3 text-sm text-stone-600">
          {footer} <span className="ml-1 text-green-600">→</span>
        </div>
      )}
    </div>
  );
}
