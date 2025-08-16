import React from "react";

interface props {
    text: string;
    type: "submit" | "reset" | "button" | undefined
    onClick?: () => void;
}

export default function ButtonSimple({text, type, onClick}: props) {
    if (type === "submit") {
        return (
            <button
                type={type} 
                className={`bg-[#A18042] hover:bg-[#A18042]/90 text-white font-semibold py-2 px-4 rounded-md`}
            >
                {text}
            </button>
        )
    } else {
        return (
            <button
                type={type}
                onClick={onClick}
                className={`bg-[#A18042] hover:bg-[#A18042] text-white font-semibold py-2 px-4 rounded-md`}
            >
                {text}
            </button>
        )
    }

}