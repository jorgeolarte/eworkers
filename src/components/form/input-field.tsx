import { ChangeEvent } from "react";

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
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="border-0 border-b-2 border-b-yellow-300 bg-neutral-900 text-white outline-none p-2 focus:border-b-yellow-400"
        placeholder={placeholder}
      />
      {error && <div className="text-sm italic">{error}</div>}
    </div>
  );
}
