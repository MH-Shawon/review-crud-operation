import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const img_hosting_api_link =
    "https://api.imgbb.com/1/upload?key=c577856be5b8c03054a37bce85fd5576";

// id, title, brand, price, description, image_url

const AddProducts = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        

        const imageFile = { image: data.image_url[0] };
        const res = await axios.post(img_hosting_api_link, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        
        if (res.data.success) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Add it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    if (data) {
                        const products = {
                            id: data.id,
                            title: data.title,
                            brand: data.brand,
                            price: parseFloat(data.price),
                            Details: data.description,
                            image: res.data.data.display_url,
                        };
                        const prodRes = await axios.post(
                            "http://localhost:3000/shoes",
                            products
                        );
                        

                        if (prodRes.data) {
                            reset();
                            toast.success(`${data.title} added to the menu`);
                        }
                    }
                }
            });
        }
    };

    return (
        <div className="mb-12">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[740px] mx-auto  ">
                <div className="col-span-1 px-12 py-6 bg-[#F3F3F3] rounded shadow-md space-y-6">
                    <div className="flex w-full gap-6">
                        <div className="w-1/2">
                            <h2>Products Name*</h2>
                            <input
                                placeholder="Products name"
                                {...register("title", { required: true })}
                                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
                            />
                            {errors.title && (
                                <span className="error">Products Name is required</span>
                            )}
                        </div>
                        <div className="w-1/2">
                            <h2>Id*</h2>
                            <input
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
                                {...register("brand", { required: true })}
                                className="border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 w-full mt-2"
                            >
                                <option value="">Select Category</option>
                                <option value="nike">Nike</option>
                                <option value="adidas">Adidas</option>
                                <option value="new balance">New Balance</option>
                                <option value="hoka one one">Hoka One One</option>
                                <option value="asics">ASICS</option>
                                <option value="salomon">Salomon</option>
                            </select>
                            {errors.brand && (
                                <span className="error">Category is required</span>
                            )}
                        </div>

                        <div className="w-1/2">
                            <h2>Price*</h2>
                            <input
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
                            />
                            {errors.price && <span className="error">Price is required</span>}
                        </div>
                    </div>

                    <h2>Products Details*</h2>
                    <textarea
                        placeholder="Products Details"
                        {...register("description", { required: true })}
                        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1  mt-2 w-full h-[100px]"
                    />
                    {errors.ProductsDetails && (
                        <span className="error">Products Details are required</span>
                    )}

                    <input
                        type="file"
                        {...register("image_url", { required: true })}
                        className="block w-full p-3 text-base font-normal text-gray-700 transition ease-in-out bg-white border-gray-300 rounded cursor-pointer bg-clip-border focus:outline-none file:mr-4 file:py-2 file:px-3 file:rounded-full file:bg-blue-500 file:text-white"
                    />

                    <button
                        type="submit"
                        className="flex gap-1 font-bold text-white items-center justify-center text-[20px] bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-1"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
