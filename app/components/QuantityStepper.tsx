type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max: number;
};

export default function QuantityStepper({ value, onChange, label, min = 1, max }: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-forest/25 bg-white" role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        className="h-10 w-10 rounded-full text-lg text-forest hover:bg-sage-soft disabled:opacity-35"
        aria-label={`Decrease ${label.toLowerCase()}`}
      >
        -
      </button>
      <span className="w-8 text-center text-sm font-semibold text-forest" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        className="h-10 w-10 rounded-full text-lg text-forest hover:bg-sage-soft disabled:opacity-35"
        aria-label={`Increase ${label.toLowerCase()}`}
      >
        +
      </button>
    </div>
  );
}
