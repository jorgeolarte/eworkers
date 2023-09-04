export default function Home() {
  return (
    <header className="bg-[url('/community.jpeg')] bg-cover bg-center h-screen">
      <div className="bg-gradient-to-t to-transparent from-neutral-900 h-full">
        <div className="container mx-auto flex flex-col justify-center align-middle h-full w-1/2 text-center">
          <h1 className="text-4xl font-semibold">eWorkers Cartago</h1>
          <p className="text-lg">
            Únete a la primera comunidad de trabajadores remotos de Cartago
          </p>
          <a
            href="#"
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 rounded-md px-6 py-3 mt-6 w-1/2 self-center"
          >
            ¡Únete ahora!
          </a>
        </div>
      </div>
    </header>
  );
}