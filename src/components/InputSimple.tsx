import React from "react";
import { TypeInputChangeEvent, TypeSetter } from "@/common/types";

interface Props<T> {
    name: string;
    text: string;
    value: string;
    type?: React.HTMLInputTypeAttribute;
    required?: boolean;
    placeholder: string;
    onChange: TypeSetter<T>;
}

export default function InputSimple<T>({name, text, type, placeholder, required, value, onChange}: Props<T>) {

    function handleInputChange(e: TypeInputChangeEvent) {
        const {name, value} = e.target;
        onChange((prevState: T) => ({
            ...prevState,
            [name]: type === 'number' ? Number(value) : value
        }));
    }

    return (
        <div className="relative h-11 w-full min-w-[200px]">
            <input
                required={required ? required : true}
                autoComplete="off"
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-500 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#A18042] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-[#A18042] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {text}
            </label>
        </div>
    )
}