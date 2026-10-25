"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type DemoFormProps = {
  children: ReactNode;
  submitLabel?: string;
  inline?: boolean;
  dark?: boolean;
};

// Frontend-only form. Nothing is sent anywhere.
export default function DemoForm({ children, submitLabel = "Try the form", inline = false, dark = false }: DemoFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const button = (
    <button
      type="submit"
      className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
        dark ? "bg-cream text-forest hover:bg-blush" : "bg-forest text-cream hover:bg-forest-soft"
      }`}
    >
      {submitLabel}
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className={`text-sm ${dark ? "text-cream/80" : "text-ink-soft"}`}>This is a demo form. Nothing is sent.</p>
      {inline ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          {children}
          {button}
        </div>
      ) : (
        <>
          {children}
          {button}
        </>
      )}
      <div role="status" aria-live="polite">
        {submitted && (
          <p className={`rounded-xl px-4 py-3 text-sm ${dark ? "bg-cream/10 text-cream" : "bg-sage-soft text-forest"}`}>
            Demo only: nothing was sent. In a live version this would reach the Dew &amp; Bloom team.
          </p>
        )}
      </div>
    </form>
  );
}
