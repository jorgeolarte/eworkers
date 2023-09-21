import { FieldError } from "react-hook-form";

type Props = {
  error?: FieldError;
};

export default function ErrorMessage({ error }: Props) {
  return (
    error && (
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {error.message}
      </div>
    )
  );
}
