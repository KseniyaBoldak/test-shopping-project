import {useContext } from "react";
import ProductCategory from '../ProductCategory';
import { PathContext } from "../../Context/PathContext";


const WomensProducts = () => {
    const path = useContext(PathContext);
    return (
        <div className="categories">
            <h1>Women's clothing</h1>
            <ProductCategory path={path.womens}/>
            <hr />
        </div>
    )
}
export default WomensProducts;