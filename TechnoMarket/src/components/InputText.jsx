const InputText = ({ name, label, placeholder, type = "text", register, error }) => {
    return (
        <div className="form-field">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                id={name}
                {...register(name, { required: `${label} es requerido` })}
                placeholder={placeholder}
                type={type}
                step={type === "number" ? "0.01" : undefined}
                min={type === "number" ? "0" : undefined}
                className="form-input"
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default InputText;