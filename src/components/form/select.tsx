import { FieldError } from "react-hook-form";
import ErrorMessage from "./error-message";

type Props = {
  name: string;
  register: any;
  error?: FieldError;
  options: { value: string; label: string }[];
};

export default function Select({ name, register, error, options }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <select
        {...register(name, { required: true })}
        className="border text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ErrorMessage error={error} />
    </div>
  );
}
