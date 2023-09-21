import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"}>
          <Image
            src={"/isotipo.png"}
            width={52}
            height={52}
            alt="eWorkers Cartago"
          />
        </Link>
        <div className="flex md:order-2">
          <Link
            href={"/unete"}
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Únete a la comunidad
          </Link>
        </div>
      </div>
    </nav>
  );
}
