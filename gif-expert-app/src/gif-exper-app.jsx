import { AddCategory } from './add-category'
import { CategoriesContainer } from './categories-container'
import { useOnNewCategory } from './hooks/useOnNewCategory'

export const GifExpertApp = () => {
  const { categories, onNewCategory } = useOnNewCategory()

  return (
    <div className='w-full h-screen flex flex-col items-center mx-auto'>
      <header className='mt-10'>
        <h1 className='text-3xl font-bold'>GifExpertApp</h1>
      </header>
      <main className='mt-20 w-full px-16 flex flex-col gap-5'>
        <aside className='w-[30%] h-full'>
          <AddCategory onNewCategory={onNewCategory} />
        </aside>
        <CategoriesContainer categories={categories} />
        {/* Listado de los gifs */}
      </main>
    </div>
  )
}
