import Link from 'next/link'
import React from 'react'
interface FooterLinkProps {
    route: string,
    name: string
}

const FooterLink: React.FC<FooterLinkProps> = ({route,name}) => {
  return (
    <Link href={route} className='hover:text-actions cursor-pointer text-gray-700 text-md text-center md:text-xl linearEffect after:bg-gray-700'>{name}</Link>
  )
}

export default FooterLink