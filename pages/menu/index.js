import React from "react";
import { getCategoriesWithFoods } from "../../services";
import Image from "next/image";
import { Badge, StickyTitle } from "../../components";

const MenuPage = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <div className="container mx-auto" key={category.id}>
          <StickyTitle title={category.title} titleKr={category.titleKr} />
          <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5">
            {category.foods.map((food) => (
              <div className="card w-full aspect-square rounded-md" key={food.title}>
                <div className="relative overflow-hidden w-full h-3/4 bg-gray-100 shadow-md rounded-t-md">
                  {/* <div className="absolute top-0 left-0 w-full h-full hover:bg-black opacity-30 z-10" /> */}
                  <div className="absolute top-3 right-3 z-10">
                    {food.spicy && <Badge type="spicy" />}
                    {food.veg && <Badge type="vegan" />}
                  </div>
                  )
                  <Image src={food.image.url} layout="fill" objectFit="cover" />
                </div>
                <div className="w-full h-1/4 px-4 pt-4 flex justify-between">
                  <div>
                    <p className="text-gray-800 font-bold capitalize xl:text-sm">
                      {food.title}
                    </p>
                    <p className="text-gray-500 text-sm capitalize">
                      {food.titleKr}
                    </p>
                  </div>
                  <span className="text-brand xl:text-sm">${food.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuPage;

export async function getStaticProps() {
  const results = [];
  const data = await getCategoriesWithFoods();
  data.map(({ node: { foods, title, titleKr, id } }) =>
    results.push({ foods, title, titleKr, id })
  );

  return {
    props: {
      categories: results,
    },
  };
}
