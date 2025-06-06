import React from 'react'

interface ArticleProps {
    text:string
}
const Article :React.FC<ArticleProps> = ({text}) => {
  return (
    <article className='mt-2 md:px-[170px]'>
        <p className='text-center text-gray-200'>{text}</p>
    </article>
  )
}

export default Article