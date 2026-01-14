import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/Api";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";


export default function ProductDetails () {
    const { id } = useParams ();
    const navigate = useNavigate ();

    const [product, setProduct] = useState (null);
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        api.get(`/products/${id}`)
        .then (res => setProduct(res.data))
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-content-center mt-6">
                <Skeleton width="400px" height="450px" />
            </div> 
        );
    }

    if (!product) {
        return <p>Produto não encontrado.</p>
    };

    return (
        <div className="flex justify-content-center mt-5">
            <Card
                title = {product.title}
                subTitle = {`$ ${product.price}`}
                className="w-full md:w-6 shadow-4 border-round-xl"
                header = {
                    <img 
                        src = {product.image}
                        alt = {product.title}
                        style={{ height: 300, objectFit: "contain"}}
                    />
                }
            > 
                <p className="line-height-3">{product.description}</p>

                <div className="flex gap-3 mt-4">
                    <Button 
                        label="Voltar"
                        icon = "pi pi-arrow-left"
                        className="p-button-text"
                        onClick = {() => navigate(-1)}
                    />

                    <Button 
                        label="Adicionar ao carrinho"
                        icon = "pi pi-shopping-cart"
                    />
                </div>
            </Card>
        </div>
    );
};