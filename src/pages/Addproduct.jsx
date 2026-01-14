import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function AppProduct() {
    const [title, setTitle] = useState ("");
    const [price, setPrice] = useState (null);

    const handleAdd = () => {
        alert(`Produto "${title}" adicionado com sucesso!`);
        setTitle("");
        setPrice(null);
    };

    return (
        <div className="card p-4 mt-5 shadow-2 border-round-x1">
            <InputText 
                placeholder="Nome do produto"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <InputNumber 
                placeholder="Preço"
                value={price}
                onValueChange={e => setPrice(e.value)}
            />

            <Button 
                label="Salvar"
                icon="pi pi-check"
                onClick={handleAdd}
            />
        </div>
    );
};
