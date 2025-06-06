import React from 'react'

interface PhoneLinkProps{
    phone:string
}
const PhoneLink: React.FC<PhoneLinkProps> = ({phone}) => {
  return (
    <a href={`https://wa.me/${phone}?text=Hola%20Retro%20Gaming,%20me%20gustaría%20hacer%20una%20consulta.`} className='linearEffect after:bg-gray-700 cursor-pointer text-gray-700 text-sm' target="_blank" rel="noopener noreferrer" >+{phone}</a>
  )
}

export default PhoneLink