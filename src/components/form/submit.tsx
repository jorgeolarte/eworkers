import React from "react";

type Props = {
  isSubmitting: boolean;
};

export default function Submit({ isSubmitting }: Props) {
  return (
    <button
      type="submit"
      className={`${
        isSubmitting ? "bg-gray-800" : "bg-yellow-400"
      } text-white  hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Registrando..." : "Registrarse"}
    </button>
  );
}
