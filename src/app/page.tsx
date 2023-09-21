import { RightArrow } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        eWorkers Cartago
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Únete a la primera comunidad de trabajadores remotos de Cartago
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Link
          href="/unete"
          className="inline-flex gap-2 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300"
        >
          ¡Únete ahora! <RightArrow />
        </Link>
      </div>
    </section>
  );
}
