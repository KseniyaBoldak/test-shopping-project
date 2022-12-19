import {useContext, useEffect } from "react";
import ProductCategory from '../ProductCategory';
import { PathContext } from "../../Context/PathContext";


const MensProducts = () => {
    const path = useContext(PathContext);
    return (
        <div className="categories">
            <h1>Men's clothing</h1>
            <ProductCategory path={path.mens}/>
            <hr />
        </div>
    )
}
export default MensProducts;