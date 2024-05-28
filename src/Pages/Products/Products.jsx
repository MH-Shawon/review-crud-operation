/* eslint-disable react/prop-types */
import Product from "./Product";

// eslint-disable-next-line react/prop-types
const Products = ({ shoes }) => {
  
  return (
    <div>
    <h4 className="m-5 text-4xl font-bold text-center">Products</h4>
      <div className="grid grid-cols-3 gap-4">

        {shoes.slice(0,6).map((shoe) => (
          <Product key={shoe.id} shoe={shoe}></Product>
        ))}
      </div>
    </div>
  );
};
export default Products;
