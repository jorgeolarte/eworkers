import Input from "@/components/input";

export default function Index() {
  return (
    <section className="flex flex-col h-screen justify-center items-center">
      <div className="container mx-auto"></div>
      <h1 className="text-4xl">Únete</h1>
      <form className="flex flex-col gap-5">
        <Input type="text" id="name" placeholder="Nombre" required />
        <Input type="text" id="lastName" placeholder="Apellidos" required />
        <Input
          type="text"
          id="phone"
          placeholder="Número de teléfono"
          required
        />
        <Input
          type="email"
          id="email"
          placeholder="Correo electrónico"
          required
        />

        <button
          type="submit"
          className="bg-yellow-300 px-6 py-3 text-neutral-900 rounded-md hover:bg-yellow-500"
        >
          Registrarse
        </button>
      </form>
    </section>
  );
}
