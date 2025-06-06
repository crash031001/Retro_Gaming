import React from 'react'

interface CategoryCardProps{
    title:string
    content: string,
}

const CategoryCard: React.FC<CategoryCardProps> = ({title,content}) => {
  return (
    <article>
        <h3 className='text-lg text-amber-500 font-semibold'>{title}</h3>
        <p className='text-md text-gray-200'>{content}</p>
    </article>
  )
}

export default CategoryCard