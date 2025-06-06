import React from "react";
import Title from "../About/Title";
import Subtitle from "../About/Subtitle";

const Slogan = () => {
  const props = {
    title: "¡Tu portal a mundos épicos!",
    subtitle: "Donde la pasión por los juegos cobra vida",
  };
  return (
    <section className="md:px-[130px] px-5 mt-5">
      <Title title={props.title} />
      <Subtitle subtitle={props.subtitle} />
      <p className="buyNow transition-all m-auto duration-300 md: w-fit md:text-xl text-md bg-amber-500 px-4 py-2 font-bold rounded-full mt-3 mb-10 md:hidden">
        ¡Comprar Ahora!
      </p>
    </section>
  );
};

export default Slogan;
