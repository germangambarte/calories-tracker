export type Category = {
  id: string
  name: string
}

export type Activity = {
  id: string
  category: 'consuption' | 'exercise'
  calories: number
  description: string
}
