import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const FoodCard = ({ items }) => {
  const { user } = useAuth();
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(user.email);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      });
    }
    
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 p-5">
        {currentItems.map((item) => (
          <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt="Image" /></figure>
              <p className="absolute right-0 mr-4 mt-4 px-3 bg-slate-800 text-white rounded">${item.price}</p>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions justify-center">
                <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5 space-x-3">
        <button
          className="btn btn-secondary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn mx-1 ${currentPage === index + 1 ? "btn-primary" : "btn-outline"}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn btn-secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
