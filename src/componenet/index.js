import React from "react";

const Input = ({ id, type, placeholder, className, onChange }) => {
    return (
        <div className="relative mb-4">
            <input
                className={`appearance-none border rounded-lg bg-gray-50 h-12 w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />

        </div>
    );
};

export default Input;
