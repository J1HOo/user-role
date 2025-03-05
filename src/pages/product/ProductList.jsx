import {useEffect, useState} from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Fancy Product",
            price: "$40.00 - $80.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        },
        {
            id: 2,
            name: "Fancy Product",
            price: "$40.00 - $80.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        },
        {
            id: 3,
            name: "Fancy Product",
            price: "$40.00 - $80.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        },
        {
            id: 4,
            name: "Fancy Product",
            price: "$40.00 - $80.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        },
    ]);

    const handleDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;