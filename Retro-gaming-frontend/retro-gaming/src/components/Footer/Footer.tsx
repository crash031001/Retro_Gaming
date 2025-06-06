import React from "react";
import FooterLink from "./FooterLink";
import PhoneLink from "./PhoneLink";
import MadeBy from "./MadeBy";

const Footer = () => {
  return (
    <footer className="md:px-[130px] w-full pb-2 pt-5 md:h-50 h-34 mt-10 bg-amber-500 md:rounded-t-full rounded-t-[60px]">
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col justify-center items-center">
          <FooterLink route="/store" name="Tienda" />
          <FooterLink route="/cart" name="Carrito" />
          <FooterLink route="/about" name="Nosotros | Acerca" />
        </div>
        <div className="flex flex-col justify-center items-center text-center text-gray-700">
          <h2 className="font-bold md:text-xl text-md">Contáctanos</h2>
          <PhoneLink phone="5356419170" />
          <PhoneLink phone="5355409448" />
        </div>
      </div>
      <MadeBy />
    </footer>
  );
};

export default Footer;
