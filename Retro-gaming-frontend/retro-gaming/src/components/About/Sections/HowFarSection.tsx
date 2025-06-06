import React from 'react'
import Title from '../Title'
import Article from '../Article'

const HowFar = () => {
    const props = {
        title: '¿Hasta dónde llegamos?',
        content:'Realizamos entregas a domicilio en diversas zonas para que puedas recibir tus juegos sin salir de casa. Nuestra cobertura incluye las principales áreas de la ciudad y alrededores. Sin embargo actualmente hacemos domicilio en Santa clara y Remedios',
    }
  return (
    <section className='my-5'>
        <Title title={props.title} />
        <Article text={props.content} />
    </section>
  )
}

export default HowFar