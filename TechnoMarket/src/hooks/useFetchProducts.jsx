import { useEffect, useState } from "react";
import { url } from "../utils/apiUrl";
import { toast } from "react-hot-toast";

// Hook para separar la lógica de obtención de productos
const useFetchProducts = () => {
    // State para almacenar los datos de los productos
    const [dataProducts, setDataProducts] = useState([]);

    // Función para obtener los productos desde la API
    const getProducts = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                toast.error("Error al obtener los productos");
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            setDataProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Error al cargar los productos");
        }
    };

    // Función para obtener un producto por su id
    const getProductById = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                console.log("Error al obtener el producto");
                throw new Error("Failed to fetch product");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching product:", error);
            console.log("Error al obtener el producto");
            return null;
        }
    };

    // useEffect para llamar a getProducts cuando el componente se monta
    useEffect(() => {
        getProducts();
    }, []);

    // Retornar los datos y las funciones para ser usados en otros componentes
    return {
        dataProducts,
        setDataProducts,
        getProducts,
        getProductById,
    };
};

export default useFetchProducts;