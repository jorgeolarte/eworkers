import { ChangeEvent } from "react";

type Props = {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: string | null;
  touched?: boolean;
};

export default function SelectField(props: Props) {
  const { id, name, value, onChange, onBlur, options, error, touched } = props;

  return (
    <div className="flex flex-col gap-2">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="border-0 border-b-2 border-b-yellow-300 bg-neutral-900 outline-none p-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && <div className="text-sm italic">{error}</div>}
    </div>
  );
}
