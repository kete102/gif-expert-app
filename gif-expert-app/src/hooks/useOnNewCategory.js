import { useState } from 'react'

export function useOnNewCategory() {
  const [categories, setCategories] = useState([])

  const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      // TODO: add toast
      console.log(`${newCategory} already exits`)
      return
    }
    setCategories([newCategory, ...categories])
  }
  return { categories, onNewCategory }
}
