import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-t to-neutral-900 from-transparent absolute w-full">
      <div className="container mx-auto p-3">
        <div className="flex flex-row justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/isotipo.png"}
              width={52}
              height={52}
              alt="eWorkers Cartago"
            />
          </Link>
          <Link
            href={"/unete"}
            className="border border-yellow-300 rounded-md px-4 py-2 text-yellow-300 hover:border-yellow-500 hover:text-yellow-500"
          >
            Únete a la comunidad
          </Link>
        </div>
      </div>
    </nav>
  );
}
