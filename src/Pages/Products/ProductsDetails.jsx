import { useLoaderData } from "react-router-dom";

const ProductsDetails=()=>{
    const shoe = useLoaderData();
    const { id, title, brand, price, description, image_url } = shoe
    return(
        <div
            className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-700 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8 pt-3 pb-3 mx-auto mt-3">
            <div
                className="relative pb-5 m-0 mb-5 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                    {brand}
                </p>
                
                    <img className="w-1/2 mx-auto rounded " src={image_url} alt="" />
                
                
            </div>
            <div className="p-0">
                <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg></span>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            {title}
                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg></span>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            {price}
                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg></span>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
{description}                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg></span>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            1 year free updates
                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg></span>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Life time technical support
                        </p>
                    </li>
                </ul>
            </div>
            <div className="p-0 mt-8">
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-black"
                    type="button">
                    Buy Now
                </button>
            </div>
        </div> 
    )}
export default ProductsDetails;