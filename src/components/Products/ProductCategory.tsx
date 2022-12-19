import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import http from "../../http";
import { useDispatch, useSelector } from "react-redux";
import { PathContext } from "../Context/PathContext";

const ProductCategory = ({path}: {path: string}) => {

    const store = useSelector(
    (store: { product: { selectedProducts: any[] } }) => store.product
            );
    const dispatch = useDispatch();
    console.log(path);
    const getSelectedProducts = async() => {
    try {
        const responseData = await http.get(`${path}`);
        if (responseData.status === 200) {
            dispatch({type: "GET_PRODUCTS", payload: responseData.data});
            console.log(responseData.data);
        }
    }catch (err) {
        alert(err);
    }
}
useEffect(() => {
    getSelectedProducts();
}, []);

    /* const deleteItem = async(id: number) => {
        const del = await axios.delete(`https://fakestoreapi.com/products/${id}`);
        if (del.status === 200) {
            setAllProducts(products.filter(product => product.id != id));
    }
    } */
    
    return (
            <div className="category-cards">
                {store.selectedProducts.map(product => <div key={product.id} className="card">
                    <img src={product.image}/>
                    <div className="card-title">{product.title}</div>
                    <div className="card-text">{product.description}</div>
                    <div className="price">{product.price} $</div>
                    <div className="buttons">
                        <button className="btn btn-outline-danger"
                                /* onClick={() => deleteItem(product.id)} */
                        >Delete</button>
                    </div>
                </div>            
                )}
            </div>
    )
    
}
export default ProductCategory;
