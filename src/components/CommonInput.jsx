const CommonInput = ({ label, placeholder, value, disabled, readOnly, type, onChange, name, errors }) => {
    const baseClasses = "w-full p-2 rounded-lg mb-4 border focus:outline-none focus:ring-2";
    const stateClasses = errors ? "border-red-500 bg-red-100 focus:ring-red-500" : "border-green-500 bg-green-100 focus:ring-green-500";
    const disabledClasses = disabled ? "bg-gray-200 cursor-not-allowed" : ""
    const readOnlyClasses = readOnly ? "bg-gray-100 pointer-events-none" : ""
    return (
        <div className="px-2 flex flex-col gap-[0.2px]">
            <label className="text-lg font-medium text-red-800">
                {label}
            </label>
            {
                type === "textarea" ?
                    <textarea
                        value={value}
                        name={name}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        rows={6}
                        className={`${baseClasses} ${stateClasses} ${disabledClasses} ${readOnlyClasses}`}
                        onChange={onChange} /> :
                    <input
                        type={type}
                        name={name}
                        value={value}
                        disabled={disabled}
                        readOnly={readOnly}
                        onChange={onChange}
                        className={`${baseClasses} ${stateClasses} ${disabledClasses} ${readOnlyClasses}`}
                        placeholder={placeholder}
                    />
            }
            <p className="text-red-500 text-sm min-h-[1rem]">
                {errors && errors.length?errors:"\u00A0"}
            </p>

        </div>
    )
}

export default CommonInput
