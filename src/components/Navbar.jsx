import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function Navbar () {
    const navigate = useNavigate ();

    const items = [
        {
            label: "Home",
            icon: "pi pi-home",
            command: () => navigate("/")
        },

         {
            label: "Produtos",
            icon: "pi pi-shopping-bag",
            command: () => navigate("/products")
        },

        {
            label: "Adicionar",
            icon: "pi pi-plus",
            command: () => navigate("/add")
        },
    ];

    return <Menubar model={items}/>
};