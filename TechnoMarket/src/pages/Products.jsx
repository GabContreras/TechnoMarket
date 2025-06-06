import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { categoryOptions } from "../utils/apiUrl";
import useDataProduct from "../hooks/usePostAndPutProducts";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Products = () => {
    const { id } = useParams();
    const methods = useForm();
    const { register, handleSubmit, errors } = useDataProduct(methods);

    return (
        <div className="tecno-page">
            {/* Header */}
            <div className="tecno-header">
                <div className="tecno-header-content">
                    <div>
                        <h1 className="tecno-title">TecnoMarket</h1>
                        <p className="tecno-subtitle">Instituto Técnico "Nuevo Horizonte"</p>
                    </div>
                    <Link to="/home">
                        <Button text="Volver al Dashboard" />
                    </Link>
                </div>
            </div>

            <div className="tecno-content">
                <form onSubmit={handleSubmit} className="tecno-form">
                    <Titulo titulo={id ? "Editar Producto" : "Nuevo Producto"} />

                    <div className="form-grid">
                        {/* Nombre del Producto */}
                        <InputText
                            type="text"
                            name="producto"
                            label="Nombre del Producto"
                            placeholder="Ej: Laptop Gaming ROG"
                            register={register}
                            error={errors.producto?.message}
                        />

                        {/* Categoría */}
                        <SelectInput
                            label="Categoría"
                            name="categoria"
                            options={categoryOptions}
                            register={register}
                            error={errors.categoria?.message}
                        />

                        {/* Precio */}
                        <InputText
                            type="number"
                            name="precio"
                            label="Precio ($)"
                            placeholder="0.00"
                            register={register}
                            error={errors.precio?.message}
                        />

                        {/* Stock */}
                        <InputText
                            type="number"
                            name="stock"
                            label="Stock (unidades)"
                            placeholder="0"
                            register={register}
                            error={errors.stock?.message}
                        />
                    </div>

                    <div className="mt-6">
                        <Button type="submit" text={id ? "Actualizar Producto" : "Guardar Producto"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Products;