import Image from "next/image";
import React from "react";
import img from "../../../public/Poster.png";
import Link from "next/link";
const Poster = () => {
  return (
    <section className="w-full flex justify-center items-center mt-5">
        <Link href="/store">
      <div className="PosterContainer relative group flex justify-center items-center">
        <Image
          src={img}
          alt="PosterPrincipal"
          width={700}
          height={500}
          className="PosterImg hover:opacity-35 transition-opacity duration-500 px-5"
          />
        <p className="buyNow absolute opacity-0 transition-all duration-300 -translate-y-60 text-xl bg-amber-500 px-4 py-2 font-bold rounded-full">
          ¡Comprar Ahora!
        </p>
      </div>
          </Link>
    </section>
  );
};

export default Poster;
