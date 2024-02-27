/* eslint-disable react-hooks/exhaustive-deps */
import { useFetchGifs } from './hooks/useFetchGifs'

/* eslint-disable react/prop-types */
export function GifsContainer({ category }) {
  const { images, isLoading } = useFetchGifs(category)

  console.log({ images, isLoading })

  return (
    <div className='w-full mt-5'>
      <h3 className='text-xl font-bold text-black'>{category}</h3>
      <div className='mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 content-center'>
        {/* Aquí irán los gifs de esta categoría */}
        {images &&
          images.map((img) => (
            <>
              <img
                key={img.id}
                src={img.url}
                alt={img.title}
              />
            </>
          ))}
      </div>
    </div>
  )
}
