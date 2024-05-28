import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id, title, brand, price, description, image_url } = useLoaderData();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (data) {
          const updateItem = {
            id: data.id,
            title: data.title,
            brand: data.brand,
            price: parseFloat(data.price),
            Details: data.description,
          };
          const res = await axios.patch(
            `http://localhost:3000/shoes/${id}`,
            updateItem
          );
          if (res.data) {
            toast.success(`${title} has been updated successfully`);
          }
        }
      }
    });
  };
  return (
    <div className="mb-12 ">
      <h1 className="text-[40px] text-center mt-12 mb-16 uppercase">
        update item
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[740px] mx-auto">
        <div className="col-span-1 px-12 py-6 bg-[#F3F3F3] rounded shadow-md space-y-6">
          <div className="flex w-full gap-6">
            <div className="w-1/2">
              <h2>Product Name*</h2>
              <input
                defaultValue={title}
                placeholder="Product name"
                {...register("title", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.title && (
                <span className="error">Product Name is required</span>
              )}
            </div>
            <div className="w-1/2">
              <h2>Id*</h2>
              <input
                defaultValue={id}
                placeholder="Id"
                {...register("id", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.id && <span className="error">Id is required</span>}
            </div>
          </div>

          <div className="flex w-full gap-6">
            <div className="w-1/2">
              <h2>Brand*</h2>
              <select
                defaultValue={brand} //
                {...register("brand", { required: true })}
                className="border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 w-full mt-2"
              >
                <option value="">Select Brand</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="new balance">New Balance</option>
                <option value="hoka one one">Hoka One One</option>
                <option value="asics">ASICS</option>
                <option value="salomon">Salomon</option>
              </select>
              {errors.brand && <span className="error">Brand is required</span>}
            </div>

            <div className="w-1/2">
              <h2>Price*</h2>
              <input
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.price && <span className="error">Price is required</span>}
            </div>
          </div>

          <h2>Product Details*</h2>
          <textarea
            defaultValue={description}
            placeholder="Product Details"
            {...register("description", { required: true })}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 mt-2 w-full h-[100px]"
          />
          {errors.description && (
            <span className="error">Product Details are required</span>
          )}

          <button
            type="submit"
            className="flex gap-1 font-bold text-white items-center justify-center text-[20px] bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-1"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateProduct;
