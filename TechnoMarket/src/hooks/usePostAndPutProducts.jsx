import { useEffect, useState } from "react";
import { url } from "../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProducts from "./useFetchProducts";

const useDataProduct = (methods) => {
    const [dataProduct, setDataProduct] = useState([]);
    const { getProductById, getProducts } = useFetchProducts();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods;

    const navigate = useNavigate();

    // Función para guardar el formulario de producto
    const saveProductForm = async (dataForm) => {
        try {
            // Convertir precio y stock a números
            const productData = {
                ...dataForm,
                precio: parseFloat(dataForm.precio),
                stock: parseInt(dataForm.stock),
            };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                toast.error("Error al agregar el producto");
                throw new Error("Failed to add product");
            }

            toast.success("Producto guardado exitosamente");
            navigate("/home");
            reset();
            getProducts();
        } catch (error) {
            console.log("Error al guardar:", error);
            toast.error("Error al guardar el producto");
            reset();
            getProducts();
        }
    };

    // Función para editar un producto
    const editProduct = async (dataForm) => {
        try {
            // Convertir precio y stock a números
            const productData = {
                ...dataForm,
                precio: parseFloat(dataForm.precio),
                stock: parseInt(dataForm.stock),
            };

            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                toast.error("Error al actualizar el producto");
                throw new Error("Failed to update product");
            }

            toast.success("Producto actualizado exitosamente");
            navigate("/home");
            reset();
            getProducts();
        } catch (error) {
            console.error("Error updating product:", error);
            toast.error("Error al actualizar el producto");
            reset();
            getProducts();
        }
    };

    // Función que decide si guardar un nuevo producto o editar uno existente
    const handleProductAction = (dataForm) => {
        if (id) {
            editProduct(dataForm);
        } else {
            saveProductForm(dataForm);
        }
    };

    // Función para manejar la actualización de un producto
    const handleUpdateProduct = (id) => {
        navigate(`/products/${id}`);
    };

    // Cargar los datos del producto por id
    const loadProduct = async () => {
        if (id) {
            const product = await getProductById(id);
            if (product) {
                reset({
                    producto: product?.producto,
                    categoria: product?.categoria,
                    precio: product?.precio?.toString(),
                    stock: product?.stock?.toString(),
                });
            }
        }
    };

    // useEffect para cargar los datos del producto cuando el componente se monta
    useEffect(() => {
        loadProduct();
    }, [id]);

    return {
        dataProduct,
        setDataProduct,
        register,
        handleSubmit: handleSubmit(handleProductAction),
        errors,
        getProductById,
        handleUpdateProduct,
        loadProduct,
    };
};

export default useDataProduct;