// Leaf-and-dew mark with the Dew & Bloom wordmark. Original artwork.
export function BloomMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <path d="M20 36C10 30 7 21 11 10c6 3 10 9 9 26Z" fill="#a3b19a" />
      <path d="M20 36c10-6 13-15 9-26-6 3-10 9-9 26Z" fill="#6c7f63" />
      <path d="M20 36V14" stroke="#22372a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M20 3c2.6 3.3 4 5.6 4 7.4a4 4 0 0 1-8 0c0-1.8 1.4-4.1 4-7.4Z" fill="#e2bfb6" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <BloomMark className="h-9 w-9 shrink-0" />
      <span
        className={`font-display text-[1.7rem] font-medium leading-none tracking-wide ${light ? "text-cream" : "text-forest"}`}
      >
        Dew <span className={light ? "text-blush-deep" : "text-sage-deep"}>&amp;</span> Bloom
      </span>
    </span>
  );
}
