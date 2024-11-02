import { useMemo } from 'react'
import { Activity } from '../types'

type Props = {
  activities: Activity[]
}

export function Stats({ activities }: Props) {
  const totalConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 'consuption'
            ? total + Number(activity.calories)
            : total,
        0
      ),
    [activities]
  )
  const totalBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 'exercise'
            ? total + Number(activity.calories)
            : total,
        0
      ),
    [activities]
  )
  const diference = useMemo(() => totalConsumed - totalBurned, [activities])
  return (
    <section className="max-w-[40rem] mx-auto mt-4 border p-4 space-y-4 rounded-md">
      <h2 className="text-start text-xl font-bold">Resumen de Calorias</h2>
      <div className="flex flex-col justify-evenly items-center gap-6 sm:flex-row ">
        <div className="flex flex-col items-center">
          <p className="text-zinc-500">Consumido</p>
          <p className="font-bold text-6xl">{totalConsumed}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-zinc-500">Quemado</p>
          <p className="font-bold text-6xl">{totalBurned}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-zinc-500">Diferencia</p>
          <p className="font-bold text-6xl">{diference}</p>
        </div>
      </div>
    </section>
  )
}
