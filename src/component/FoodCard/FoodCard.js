import React from "react";
import { foodData } from "../../data/foodData";

const FoodCard = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[100px] gap-[50px]">
      {foodData?.map((data) => (
        <div className="card bg-white shadow-xl">
          <figure>
            <img src={data.img} alt="Food Images" className="" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl text-start">{data.name}</h2>
            <p className="text-black text-start">{data.description}</p>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Update</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
