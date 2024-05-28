import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) =>setAllProducts(data)
      );
  }, []);

  const handleDelete = (product) => {
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
        const res = await axios.delete(
          `http://localhost:3000/shoes/${product.id}`
        );
        if (res.data) {
          setAllProducts(allProducts.filter(p=>p.id!==product.id))
          toast.success(`${product.name} is successfully deleted from DB`);
        }
      }
    });
  };

  return (
    <div className="border rounded">
      <p className="m-5 text-2xl font-extrabold text-center">
        {" "}
        Total Product:{allProducts.length}
      </p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr className="text-center">
              <th>Serial</th>
              <th>Image</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Manage Products</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allProducts.map((product, index) => (
              
              <tr className="text-center" key={product.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src={product.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td className="flex items-center justify-center gap-5">
                  <Link to={`/dashboardLayout/update-products/${product.id}`}>
                    <button className="bg-[#D1A054] text-white text-xl px-3 py-1 rounded w-[40px] h-[40px]">
                      <FiEdit />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(product)}
                    className="bg-[#B91C1C] text-white px-3 py-1 rounded text-xl w-[40px] h-[40px]"
                  >
                    <RiDeleteBin5Line />
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
export default AllProducts;
