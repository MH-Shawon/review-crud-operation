import { useEffect, useState } from "react";


import Cart from "../../components/Cart";

const Shop=()=>{
    const[products, setAllProducts]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/shoes')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])

    return(
        <div>
            
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => (<Cart product={product} key={product.id}></Cart>))
                }
            </div>

        </div>
    )}
export default Shop;