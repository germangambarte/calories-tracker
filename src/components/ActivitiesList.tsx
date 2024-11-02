import { DeleteIcon, EditIcon } from './Icons'
import { Activity } from '../types'
import { CATEGORIES } from '../data/categories'
import { Dispatch, useMemo } from 'react'
import { ActivityActions } from '../reducers/activityReducer'

type Props = {
  activities: Activity[]
  dispatch: Dispatch<ActivityActions>
}

export function ActivitiesList({ activities, dispatch }: Props) {
  const categoryName = useMemo(
    () => (category: Activity['category']) =>
      CATEGORIES.map((cat) => (cat.id === category ? cat.name : '')),
    [activities]
  )
  return (
    <>
      <div className="space-y-4">
        {activities.map(({ id, calories, category, description }) => (
          <article
            key={id}
            className="w-full flex justify-between items-center border px-3 py-4 rounded-md"
          >
            <div className="space-x-4">
              <p
                className={`${
                  category === 'exercise'
                    ? 'bg-green-100 text-green-500'
                    : 'bg-red-100 text-red-500'
                } text-sm px-2 py-1 rounded-full inline`}
              >
                {categoryName(category)}
              </p>
              <p className="inline">{description}</p>
              <p className="inline text-zinc-400">{calories} cal</p>
            </div>
            <div className="space-x-4">
              <button
                className="p-2 border rounded-md text-center hover:bg-blue-500 hover:text-white"
                onClick={() =>
                  dispatch({ type: 'set-activeId', payload: { id } })
                }
              >
                <EditIcon />
              </button>
              <button
                className="p-2 border rounded-md text-center hover:bg-red-500 hover:text-white"
                onClick={() =>
                  dispatch({ type: 'delete-activity', payload: { id } })
                }
              >
                <DeleteIcon />
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
