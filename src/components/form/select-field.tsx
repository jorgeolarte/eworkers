import { ChangeEvent } from "react";
import Image from "next/image";

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
      <div className="flex flex-row justify-center items-center border-0 border-b-2 border-b-yellow-300 bg-neutral-900">
        <label htmlFor={id} className="bg-yellow-300 p-2">
          <Image src={`/icons/${name}.svg`} alt={name} width={24} height={24} />
        </label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="flex-grow bg-transparent outline-none p-2"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && touched && <div className="text-sm italic">{error}</div>}
    </div>
  );
}
