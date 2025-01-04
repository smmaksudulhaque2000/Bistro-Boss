import React from "react";

const FoodCard = ({ items }) => {

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {items.map((item, index) => {
        return (
          <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt="Image" /></figure>
              <p className="absolute right-0 mr-4 mt-4 px-3 bg-slate-800 text-white rounded">${item.price}</p>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline border-0 border-b-4">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodCard;
