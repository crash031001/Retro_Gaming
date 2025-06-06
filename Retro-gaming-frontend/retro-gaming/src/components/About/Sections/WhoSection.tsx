import React from "react";
import Title from "../Title";
import Article from "../Article";

const Who = () => {
  const props = {
    title: "¿Quiénes Somos?",
    content:
      "En Retro Gaming, somos una comunidad apasionada por los videojuegos y la experiencia que ofrecen. Desde hace años, nos dedicamos a traer lo mejor en juegos de PS4, ofreciendo una amplia variedad de títulos para que cada jugador pueda disfrutar al máximo. Nuestro compromiso es brindar un servicio de calidad, asesoramiento personalizado y un ambiente donde la pasión por los videojuegos sea el motor que nos impulsa. ¡Únete a nuestra familia gamer y descubre todo lo que tenemos preparado para ti!",
  };

  return (
    <section className="my-5">
      <Title title={props.title} />
      <Article text={props.content} />
    </section>
  );
};

export default Who;
