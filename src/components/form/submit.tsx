import React from "react";

type Props = {
  isSubmitting: boolean;
};

export default function Submit({ isSubmitting }: Props) {
  return (
    <button
      type="submit"
      className={`${
        isSubmitting ? "bg-gray-500" : "bg-yellow-300"
      } px-6 py-3 text-neutral-900 rounded-md hover:bg-yellow-500`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Registrando..." : "Registrarse"}
    </button>
  );
}
