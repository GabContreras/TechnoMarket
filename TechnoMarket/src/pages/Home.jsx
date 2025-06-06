import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFetchProducts from "../hooks/useFetchProducts";
import useProductAction from "../hooks/useDeleteProducts";

const Home = () => {
    const { dataProducts, getProducts } = useFetchProducts();
    const { deleteProduct, handleUpdateProduct } = useProductAction(getProducts);

    // Función para obtener el texto de categoría
    const getCategoryDisplay = (categoria) => {
        const categoryMap = {
            computadoras: "Computadoras",
            telefonos: "Teléfonos",
            audio: "Audio",
            monitores: "Monitores",
            accesorios: "Accesorios",
            gaming: "Gaming",
            tablets: "Tablets"
        };
        return categoryMap[categoria] || categoria;
    };

    return (
        <div className="tecno-page">
            {/* Header */}
            <div className="tecno-header">
                <div className="tecno-header-content">
                    <div>
                        <h1 className="tecno-title">TecnoMarket</h1>
                        <p className="tecno-subtitle">Instituto Técnico "Nuevo Horizonte"</p>
                    </div>
                    <Link to="/products">
                        <Button text="Nuevo Producto" />
                    </Link>
                </div>
            </div>

            <div className="tecno-content">
                <Titulo titulo="Inventario de Productos" />


                <div className="overflow-x-auto">
                    <table className="tecno-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataProducts?.map((product) => (
                                <tr key={product.id}>
                                    <td className="table-cell-white">{product.producto}</td>
                                    <td className="table-cell-gray">{getCategoryDisplay(product.categoria)}</td>
                                    <td className="table-cell-green">${product.precio}</td>
                                    <td className="table-cell-gray">{product.stock}</td>
                                    <td>
                                        <div className="flex gap-1">
                                            <Button
                                                text="Editar"
                                                onClick={() => handleUpdateProduct(product.id)}
                                            />
                                            <ButtonDelete
                                                text="Eliminar"
                                                onClick={() => deleteProduct(product.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Home;