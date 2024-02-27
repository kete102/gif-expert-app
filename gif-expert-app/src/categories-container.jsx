/* eslint-disable react/prop-types */

import { GifsContainer } from './gifs-container'

export const CategoriesContainer = ({ categories }) => {
  return (
    <ul>
      {categories &&
        categories.map((category) => (
          <GifsContainer
            key={category}
            category={category}
          />
        ))}
    </ul>
  )
}
