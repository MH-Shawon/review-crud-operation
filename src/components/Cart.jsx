import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cart=({product})=>{
    const { id, title, brand, price, description, image_url }= product;
    return(
        <div className="rounded-md shadow-2xl bg-base-800">
            <figure className="flex items-center justify-center px-5 pt-5">
                <img src={image_url} alt="Shoes" className="rounded-xl h-[250px]" />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{brand}</h2>
                <p>{title}</p>
                <p>{description}</p>
                <p>Price:{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">
                        <Link to={`/products/${id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div>
    )}
export default Cart;