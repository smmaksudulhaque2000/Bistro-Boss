import React from "react";
import cartImg from "../../assets/home/slide1.jpg";
import SectionTitle from "../../components/SectionTitle";

const Cart = () => {
  return (
    <div className="my-20">
      <SectionTitle
        subTitle={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-3">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={cartImg} alt="Shoes" className="w-full h-60" />
          </figure>
          <div className="card-body text-center flex flex-col items-center justify-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4 text-yellow-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={cartImg} alt="Shoes" className="w-full h-60" />
          </figure>
          <div className="card-body text-center flex flex-col items-center justify-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn bg-neutral-900 text-yellow-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={cartImg} alt="Shoes" className="w-full h-60" />
          </figure>
          <div className="card-body text-center flex flex-col items-center justify-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4 text-yellow-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
