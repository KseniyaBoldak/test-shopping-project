import React, { useEffect, useState } from "react";
import axios from "axios";
import http from "../../http";

const MensProducts = () => {
    const [products, setAllProducts] = useState<any[]>([]);
    const getAllProducts = async() => {
        try {
            const responseData = await http.get("/men's%20clothing");
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
    useEffect(() => {
        getAllProducts();
    }, []);
    
    return (
        <div>
            {products.map(product => <div key={product.id}>
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div>{product.description}</div>
                <img src={product.image}/>
            </div>            
            )}
        </div>
    )
}
export default MensProducts;