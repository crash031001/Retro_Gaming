import React from 'react'
interface SubtitleProps{
    subtitle:string
}
const Subtitle: React.FC<SubtitleProps> = ({subtitle}) => {
  return (
    <h3 className='text-center text-amber-500 font-semibold md:text-xl text-lg'>{subtitle}</h3>
  )
}

export default Subtitle