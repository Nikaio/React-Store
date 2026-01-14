import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard ({ product }) {
    const toast = useRef (null);
    const navigate = useNavigate ();    

    const handleAdd = () => {
        toast.current.show({
            severity: "success",
            summary: "Produto selecionado",
            detail: product.title,
            life: 2500
        });
    };

    return (
        <>

            <Toast ref={toast} />


            <Card
                title={product.title}
                subTitle={`$ ${product.price}`}
                className="card-hover shadow-4 border-round-x1 h-full"
                header={
                    <img 
                        src={product.image}
                        alt={product.title}
                        style={{ height: 200, objectFit: "contain" }}
                    />
                }
            >
                <p className="text-sm text-color-secondary">
                    {product.description.substring(0, 90)}...
                </p>

                    <div>
                        <Button 
                            label = "Detalhes"
                            icon = "pi pi-eye"
                            className="p-button-outlined w-full mt-3"
                            onClick={() => navigate(`/products/${product.id}`)}
                        />
                    </div>

                    <div>
                        <Button 
                            label = "Selecionar"
                            icon = "pi pi-check"
                            className="p-button-outlined w-full mt-2"
                            onClick={handleAdd}
                        />
                    </div>
            </Card>
        </>
    );
};