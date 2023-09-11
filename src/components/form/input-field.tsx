import { ChangeEvent } from "react";
import Image from "next/image";

type Props = {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string | null;
};

export default function InputField(props: Props) {
  const { id, name, value, onChange, onBlur, placeholder, error } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-center items-center border-0 border-b-2 border-b-yellow-300 bg-neutral-900 text-white focus:border-b-yellow-400">
        <label htmlFor={id} className="bg-yellow-300 p-2">
          <Image
            priority
            src={`/icons/${name}.svg`}
            alt={placeholder}
            width={24}
            height={24}
          />
        </label>
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="flex-grow bg-transparent outline-none p-2"
          placeholder={placeholder}
        />
      </div>
      {error && <div className="text-sm italic">{error}</div>}
    </div>
  );
}
