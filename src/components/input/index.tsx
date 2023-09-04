type InputProps = {
  id: string;
  type: "text" | "email" | "password";
  placeholder: string;
  required: boolean;
};

export default function Input({ id, type, placeholder, required }: InputProps) {
  return (
    <>
      <label htmlFor={id} className="hidden">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="border-0 border-b-2 border-b-yellow-300 bg-neutral-900 text-white outline-none p-2 focus:border-b-yellow-400"
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
