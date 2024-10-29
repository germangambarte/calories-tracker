import { EditIcon, DeleteIcon } from './Icons'

export function Activity() {
  return (
    <>
      <div className="space-x-4">
        <p
          className={`${
            'consuption' === 'consuption'
              ? 'bg-green-100 text-green-500'
              : 'bg-red-100 text-red-400'
          } text-sm px-2 py-1 rounded-full inline`}
        >
          Consumo
        </p>
        <p className="inline">Descripción</p>
        <p className="inline text-zinc-400">0 cal</p>
      </div>
      <div className="space-x-4">
        <button className="p-2 border rounded-md text-center hover:bg-blue-500 hover:text-white">
          <EditIcon />
        </button>
        <button className="p-2 border rounded-md text-center hover:bg-red-500 hover:text-white">
          <DeleteIcon />
        </button>
      </div>
    </>
  )
}
