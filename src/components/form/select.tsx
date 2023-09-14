import { FieldError } from "react-hook-form";
import Image from "next/image";

type Props = {
  name: string;
  register: any;
  error?: FieldError;
  options: { value: string; label: string }[];
};

export default function Select({ name, register, error, options }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-center items-center border-0 border-b-2 border-b-yellow-300 bg-neutral-900">
        <label htmlFor={name} className="bg-yellow-300 p-2">
          <Image src={`/icons/${name}.svg`} alt={name} width={24} height={24} />
        </label>
        <select
          {...register(name, { required: true })}
          className="flex-grow bg-transparent outline-none p-2"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="text-sm italic">{error.message}</div>}
    </div>
  );
}
