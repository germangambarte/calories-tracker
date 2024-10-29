export type Category = {
  id: string
  name: string
}

export type Activity = {
  category: 'consuption' | 'exercise'
  calories: number
  description: string
}