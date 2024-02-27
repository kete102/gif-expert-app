import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (inputValue.trim().length <= 1) return
    if (event.key === 'Enter') {
      const newCategory = inputValue

      onNewCategory(newCategory)
      setInputValue('')
    }
  }

  return (
    <>
      <input
        onChange={handleOnChange}
        type='text'
        placeholder='Buscar gif'
        value={inputValue}
        onKeyDown={handleKeyDown}
        className='text-black bg-black rounded-lg text-lg p-3 focus:ring-1 focus:bg-white focus:text-black placeholder:text-white'
      />
    </>
  )
}
