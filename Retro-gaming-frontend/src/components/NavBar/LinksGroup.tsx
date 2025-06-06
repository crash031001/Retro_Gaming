import Link from "next/link";
import React from "react";

const LinksGroup = () => {
  return (
    <ul className="flex gap-10">
      <li className="text-md text-amber-500 font-semibold flex flex-col gap-1 cursor-pointer hover:scale-110 transition-all duration-300 linearEffect after:bg-amber-500">
        <Link href='/about' className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg>
          <p>Contáctanos</p>
        </Link>
      </li>
      <li className="text-md text-amber-500 font-semibold flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-all duration-300 linearEffect after:bg-amber-500">
        <Link href='/store' className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-bag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
          </svg>
          <p>Tienda</p>
        </Link>
      </li>
      <li className="text-md text-amber-500 font-semibold flex flex-col gap-1 cursor-pointer hover:scale-110 transition-all duration-300 linearEffect after:bg-amber-500">
        <Link href='/cart' className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
          <p>Carrito</p>
        </Link>
      </li>
    </ul>
  );
};

export default LinksGroup;
