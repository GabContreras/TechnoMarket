const SelectInput = ({ name, label, options, register, error }) => {
    return (
        <div className="form-field">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                id={name}
                {...register(name, { required: `${label} es requerido` })}
                className="form-select"
            >
                <option value="">Seleccionar</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default SelectInput;