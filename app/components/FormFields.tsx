import type { ReactNode } from "react";

export const fieldClass =
  "mt-1.5 w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-sm font-normal text-ink focus:border-forest focus:outline-none";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-forest">
      {label}
      {children}
    </label>
  );
}
