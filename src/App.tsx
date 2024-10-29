import { Activity } from './components/Activity'
import { Form } from './components/Form'
import { Stats } from './components/Stats'

function App() {
  return (
    <>
      <header className="max-w-[40rem] mx-auto px-2 py-4 flex gap-4 justify-between sm:px-0">
        <h1 className="font-bold text-2xl">Contador de Calorías</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800">
          Reiniciar App
        </button>
      </header>

      <Form />
      <Stats />
      <section className="px-2 max-w-[40rem] mx-auto mt-4 sm:p-0">
        <h2 className="pb-4 text-xl font-bold">Actividades Realizadas</h2>
        <div className="space-y-4">
          <div className="w-full flex justify-between items-center border px-3 py-4 rounded-md">
            <Activity />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
