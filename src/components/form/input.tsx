import { FieldError } from "react-hook-form";
import Image from "next/image";

type Props = {
  name: string;
  register: any;
  error?: FieldError;
  placeholder: string;
};

export default function Input({ name, register, error, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-center items-center border-0 border-b-2 border-b-yellow-300 bg-neutral-900 text-white focus:border-b-yellow-400">
        <label htmlFor={name} className="bg-yellow-300 p-2">
          <Image
            priority
            src={`/icons/${name}.svg`}
            alt={placeholder}
            width={24}
            height={24}
          />
        </label>
        <input
          {...register(name, { required: true })}
          placeholder={placeholder}
          className="flex-grow bg-transparent outline-none p-2"
        />
      </div>
      {error && <div className="text-sm italic">{error.message}</div>}
    </div>
  );
}
