export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/src/assets/img/hero-bg.png')" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Cuidado Integral Femenino con Profesionalismo y Empatía
      </h2>
      <p className="mb-6 text-base md:text-xl">
        Tu bienestar es nuestra prioridad en cada etapa de tu vida.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-purple-700 px-6 py-3 rounded-lg hover:bg-purple-800">
          Reservar Consulta
        </button>
        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700">
          Conocer Más
        </button>
      </div>
    </section>
  );
}