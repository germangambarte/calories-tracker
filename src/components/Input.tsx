import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, id, ...props }: Props) {
  return (
    <label htmlFor={id} className="flex flex-col w-full text-sm">
      {label}
      <input
        id={id}
        {...props}
        className="border px-2 py-1 rounded-md mt-1"
      />
    </label>
  )
}
