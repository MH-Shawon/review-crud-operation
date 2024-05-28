import { useLoaderData } from "react-router-dom";
import Products from "./Products/Products";
import Banner from "../components/Banner/Banner";


const Home = () => {
    const shoes = useLoaderData();

    return (
        <div>
            <Banner />
            <Products shoes={shoes} />
            

        </div>
    )
}
export default Home;