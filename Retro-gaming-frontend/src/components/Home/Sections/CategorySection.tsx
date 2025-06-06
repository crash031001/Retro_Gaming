import React from "react";
import CategoryCard from "../CategoryCard";

const CategorySection = () => {
  return (
    <section className="md:px-[130px] px-10 md:grid md:grid-cols-3 gap-3">
      <div className="p-3 shadow-md ">
        <div className="flex md:flex-col items-center justify-between md:justify-center">

        <CategoryCard title="SinglePlayer" content="" />
        </div>
      </div>

      <div className="p-3 shadow-md ">
        <CategoryCard title="Muliplayer" content="" />
      </div>

      <div className="p-3 shadow-md ">
        <CategoryCard title="Cooperative" content="" />
      </div>
    </section>
  );
};

export default CategorySection;
