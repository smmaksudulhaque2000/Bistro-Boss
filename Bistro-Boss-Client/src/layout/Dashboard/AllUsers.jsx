import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });

  const handleRemove = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axiosSecure.delete(`/users/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
        } catch (error) {
          console.error("Error removing item:", error);
        }
      }
    });
  };

  const handleMakeAdmin = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axiosSecure.patch(`/users/admin/${id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Admin!", "Your user has been Admin.", "success");
            }
          });
        } catch (error) {
          console.error("Error make admin user:", error);
        }
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h3 className="text-xl font-bold">All Users</h3>
        <h3 className="text-xl font-bold">Total Users: {users.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Photo</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  { user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user._id)}>
                    <FaUsers />
                  </button>}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button onClick={() => handleRemove(user._id)}>
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
