const themes = ["Physical Collection", "Human Dilemma", "Industry & Nature,", "Governance & Hope"];

export function ThemeGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 text-center text-sm font-semibold text-stone-700 sm:grid-cols-4">
      {themes.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
