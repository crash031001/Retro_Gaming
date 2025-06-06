import React from 'react'

interface TitleProps {
    title:string
}

const Title :React.FC<TitleProps> = ({title}) => {
  return (
    <h2 className='text-center text-amber-500 font-bold md:text-2xl text-xl'>{title}</h2>
  )
}

export default Title