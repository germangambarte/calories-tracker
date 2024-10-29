import { CATEGORIES } from '../data/categories.ts'
import { Input } from './Input.tsx'
import { useState, ChangeEvent, FormEvent } from 'react'
import { Activity } from '../types'

export function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 'consuption',
    calories: 0,
    description: '',
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    if (name === 'calories') {
      setActivity({
        ...activity,
        [name]: Number(value),
      })
    } else {
      setActivity({
        ...activity,
        [name]: value,
      })
    }
  }

  const isValidActivity = () => {
    const { calories, description } = activity
    console.log(calories !== 0 && description.trim() !== '')
    return calories !== 0 && description.trim() !== ''
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      className="px-2 py-4 max-w-[40rem] mx-auto flex flex-col justify-center items-center gap-4 sm:p-0"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
        <label htmlFor="activity" className="flex flex-col w-full text-sm">
          Categoría
          <select
            name="category"
            id="category"
            value={activity.category}
            onChange={handleChange}
            className="border px-2 py-1 rounded-md mt-1 w-full"
          >
            {CATEGORIES.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <Input
          label="Calorias"
          type="number"
          name="calories"
          id="calories"
          placeholder="Calorias. ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Descripción"
        type="text"
        name="description"
        id="description"
        placeholder="Descripción. ej. Comida, Ejercicio, Caminata, etc."
        value={activity.description}
        onChange={handleChange}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded-md w-full md:w-[20rem] hover:bg-zinc-800 disabled:opacity-50"
        disabled={!isValidActivity()}
      >
        Guardar Actividad
      </button>
    </form>
  )
}