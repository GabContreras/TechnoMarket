import { url } from "../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useProductAction = (getProducts) => {
    const navigate = useNavigate();

    // Función para eliminar un producto por su id
    const deleteProduct = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            try {
                const response = await fetch(`${url}/${id}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error("Error al eliminar el producto");
                }

                toast.success("Producto eliminado exitosamente");
                console.log("Product deleted:", response);
                getProducts(); // Actualizar la lista de productos
            } catch (error) {
                console.error("Error deleting product:", error);
                toast.error("Error al eliminar el producto");
            }
        }
    };

    // Función para manejar la actualización de un producto
    const handleUpdateProduct = (id) => {
        navigate(`/products/${id}`);
    };

    return {
        deleteProduct,
        handleUpdateProduct,
    };
};

export default useProductAction;