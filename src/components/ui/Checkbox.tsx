interface CheckboxProps {
  id: string;
  title: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox = ({
  id,
  title,
  // checked,
  // onChange,
  disabled = false,
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2.5 select-none ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        name={id}
        // checked={checked}
        // disabled={disabled}
        // onChange={(e) => onChange?.(e.target.checked)}
        className="peer sr-only"
      />

      {/* custom box */}
      <span
        className="
          flex items-center justify-center
          w-4 h-4 shrink-0
          rounded-sm border border-gray-300
          bg-neutral-primary-soft
          transition-colors duration-150
          peer-checked:bg-brand-default peer-checked:border-brand-default
          peer-focus-visible:ring-2 peer-focus-visible:ring-brand-soft peer-focus-visible:ring-offset-1
        "
      >
        <svg
          className="w-3 h-3 text-white opacity-0 scale-75 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-150"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 6.2L4.6 9L10 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="text-sm">{title}</span>
    </label>
  );
};

export default Checkbox;