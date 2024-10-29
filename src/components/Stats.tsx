export function Stats() {
  return (
    <section className="max-w-[40rem] mx-auto mt-4 border p-4 space-y-4 rounded-md">
      <h2 className="text-start text-xl font-bold">Resumen de Calorias</h2>
      <div className="flex flex-col justify-evenly items-center gap-6 sm:flex-row ">
        <div className="flex flex-col items-center">
          <p className="text-zinc-500">Consumo</p>
          <p className="font-bold text-6xl">0</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-zinc-500">Ejercicio</p>
          <p className="font-bold text-6xl">0</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-zinc-500">Diferencia</p>
          <p className="font-bold text-6xl">0</p>
        </div>
      </div>
    </section>
  )
}
