import type { Metadata } from "next";
import DemoForm from "../components/DemoForm";
import { Field, fieldClass } from "../components/FormFields";
import PageHeader from "../components/PageHeader";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for the Dew & Bloom concept (placeholders).",
};

export default function ContactPage() {
  const details = [
    { label: "Email", value: site.email },
    { label: "Phone", value: site.phone },
    { label: "Studio", value: site.studio },
    { label: "Hours", value: site.hours },
  ];

  return (
    <>
      <PageHeader eyebrow="Contact" title="Say hello" intro="Questions about a product or an order? The details below are placeholders for this concept." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <dl className="space-y-5 rounded-3xl bg-white p-8">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">{d.label}</dt>
                <dd className="mt-1 text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
          <div className="rounded-3xl bg-white p-8">
            <h2 className="font-display text-2xl text-forest">Follow along</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {site.socials.map((s) => (
                <li key={s.label} className="flex flex-wrap justify-between gap-x-4">
                  <span className="font-semibold text-forest">{s.label}</span>
                  <span className="text-ink-soft">{s.handle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 sm:p-9">
          <h2 className="font-display text-3xl text-forest">Send a message</h2>
          <div className="mt-6">
            <DemoForm>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input name="name" required autoComplete="name" className={fieldClass} />
                </Field>
                <Field label="Email">
                  <input name="email" type="email" required autoComplete="email" className={fieldClass} />
                </Field>
              </div>
              <Field label="Topic">
                <select name="topic" className={fieldClass} defaultValue="Product question">
                  <option>Product question</option>
                  <option>Order question</option>
                  <option>Stockists and press</option>
                  <option>Something else</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea name="message" rows={6} required className={fieldClass} />
              </Field>
            </DemoForm>
          </div>
        </div>
      </section>
    </>
  );
}
