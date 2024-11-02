import { activityReducer, initialState } from './reducers/activityReducer'
import { useEffect, useMemo, useReducer } from 'react'
import { Form } from './components/Form'
import { Stats } from './components/Stats'
import { ActivitiesList } from './components/ActivitiesList'

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const isActivitiesEmpty = useMemo(
    () => state.activities.length === 0,
    [state.activities]
  )

  return (
    <>
      <header className="max-w-[40rem] mx-auto px-2 py-4 flex gap-4 justify-between sm:px-0">
        <h1 className="font-bold text-2xl">Contador de Calorías</h1>
        <button
          className="bg-black text-white px-2 py-1 rounded-md hover:bg-zinc-800 text-sm disabled:bg-zinc-500 disabled:text-zinc-300"
          onClick={() => dispatch({ type: 'restart-app' })}
          disabled={isActivitiesEmpty}
        >
          Reiniciar App
        </button>
      </header>

      <Form dispatch={dispatch} state={state} />
      <Stats activities={state.activities} />
      <section className="px-2 max-w-[40rem] mx-auto mt-4 sm:p-0">
        <h2 className="pb-4 text-xl font-bold">Actividades Realizadas</h2>
        {state.activities.length === 0 ? (
          <p className="text-center">No hay actividades realizadas...</p>
        ) : (
          <ActivitiesList activities={state.activities} dispatch={dispatch} />
        )}
      </section>
    </>
  )
}

export default App
