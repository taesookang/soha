import React from "react";
import { getCategoriesWithFoods } from "../../services";
import Image from "next/image";

const MenuPage = ({ categories }) => {
  console.log(categories);
  return (
    <>
      {categories.map((category) => (
        <div className="container mx-auto" key={category.id}>
          <div className="border-b-2 border-brand px-4 my-12 pb-2 text-brand text-xl ">
            {category.title}
            <span className="text-base ml-4 text-gray-500">
              {category.titleKr}
            </span>
          </div>
          <div className="w-5/6 mx-auto flex flex-wrap items-center gap-3 gap-y-5">
            {category.foods.map((food) => (
              <div className="card w-80 h-80 rounded-md">
                <div className="relative overflow-hidden w-full h-3/4 bg-gray-100 shadow-md rounded-t-md">
                  {/* <div className="absolute top-0 left-0 w-full h-full hover:bg-black z-10" style={{ opacity: .3 }}/> */}
                  <div className="absolute top-3 right-3 z-10">
                    {food.spicy && (
                      <div className="flex justify-center items-center text-red-900 bg-red-200 font-bold w-14 h-6 rounded-sm text-xs mb-1 shadow">
                        Spicy
                      </div>
                    )}
                    {food.veg && (
                      <div className=" flex justify-center items-center text-green-900 bg-green-200 font-bold w-14 h-6 rounded-sm text-xs shadow">
                        Vegan
                      </div>
                    )}
                  </div>
                  )
                  <Image src={food.image.url} layout="fill" objectFit="cover" />
                </div>
                <div className="w-full h-1/4 px-4 pt-4 flex justify-between">
                    <div>
                     <p className="text-gray-800 font-bold capitalize">{food.title}</p>
                     <p className="text-gray-500 text-sm capitalize">{food.titleKr}</p>
                     </div>
                     <span className="text-brand">${food.price}</span>
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
