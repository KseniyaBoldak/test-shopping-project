import React, { useEffect, useState } from "react";
import axios from "axios";
import http from "../../../http";

const Jewelery = () => {
    const [products, setAllProducts] = useState<any[]>([]);

    const getAllProducts = async() => {
        try {
            const responseData = await http.get("/jewelery");
            if (responseData.status === 200) {
                setAllProducts(responseData.data);
                console.log(responseData.data);
            }else {
                console.log(responseData.status);
            }
            
        }catch (err) {
            alert(err);
        }
    }
    const deleteItem = async(id: number) => {
        const del = await axios.delete(`https://fakestoreapi.com/products/${id}`);
        if (del.status === 200) {
            setAllProducts(products.filter(product => product.id != id));
    }
    }
    useEffect(() => {
        getAllProducts();
    }, []);
    
    return (
        <div className="categories">
            <h1>Jewelery</h1>
            <div className="category-cards">
                {products.map(product => <div key={product.id} className="card">
                    <img src={product.image}/>
                    <div className="card-title">{product.title}</div>
                    <div className="card-text">{product.description}</div>
                    <div className="price">{product.price} $</div>
                    <div className="buttons">
                        <button className="btn btn-outline-danger"
                                onClick={() => deleteItem(product.id)}
                        >Delete</button>
                    </div>
                </div>            
                )}
            </div>
            <hr />
        </div>
    )
}
export default Jewelery;