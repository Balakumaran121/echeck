const CommonInput = ({ label, placeholder, value, disabled, readOnly ,type,onChange,name,errors}) => {
    // const baseClasses = "w-full p-2 rounded-lg mb-4 border focus:outline-none focus:ring-2";
    // const stateClasses=errors?"border-red-500 bg-red-100 focus:ring-red-500":""
    return (
        <div className="px-2 flex flex-col">
            <label className="text-lg font-medium text-red-800">
                {label}
            </label>
            {
                type==="textarea" ?
                    <textarea value={value} name={name} disabled={disabled} readOnly={readOnly} placeholder={placeholder} rows={6} className={`not-[]:w-full p-2 rounded-lg mb-4 border border-red-500 focus:outline-none focus:ring-2 ${errors?"focus:ring-red-500":"focus:ring-green-500" }${disabled ? "bg-gray-200 cursor-not-allowed" : ""} ${readOnly ? "bg-gray-100 pointer-events-none" : ""}`} onChange={onChange} /> :
            <input
                type={type}
                name={name}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                onChange={onChange}
                className={`not-[]:w-full p-2 rounded-lg mb-4 border border-red-500 focus:outline-none focus:ring-2 ${errors?"focus:ring-red-500":"focus:ring-green-500" } ${disabled ? "bg-gray-200 cursor-not-allowed" : ""} ${readOnly ? "bg-gray-100 pointer-events-none" : ""}`}
                placeholder={placeholder}
            />
        }
        {errors.length? <p className="text-red-500 text-sm">{errors}</p>:null}

        </div>
    )
}

export default CommonInput
