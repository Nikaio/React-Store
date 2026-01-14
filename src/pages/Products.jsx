import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";
import { api } from "../services/Api";
import ProductCard from "../components/ProductCard";

export default function Products () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        api.get("/products")
        .then(res => setProducts(res.data))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="grid mt-4">
              {Array.from({ length: 8 }). map((_,i) => (
                <div key = {i} className="col-12 md:col-4 lg:col-3">
                    <Skeleton height="320px" className="border-round-x1" />
                </div>
              ))}      
            </div>
        );
    };

    return (
        <div className="grid mt-4">
            {products.map(product => (
                <div key={product.id} className="col-12 md:col-4 lg:col-3">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
};