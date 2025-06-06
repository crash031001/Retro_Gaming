import React from 'react'
import Title from '../Title'
import Article from '../Article'

const Where = () => {
    const props = {
        title: '¿Dónde Encontrarnos?',
        content: 'Radicamos en Remedios, Villa Clara, Cuba. Actualmente, no contamos con una tienda física ni locales abiertos al público. Sin embargo, ofrecemos servicios de instalación y atención personalizada directamente en tu domicilio. Si deseas saber más o agendar una visita, no dudes en contactarnos.'
    }
  return (
    <section className='my-5'>
        <Title title={props.title} />
        <Article text={props.content} />
    </section>
  )
}

export default Where