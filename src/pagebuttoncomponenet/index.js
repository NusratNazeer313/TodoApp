import React from "react";

const Button = (props) => {
    return (
        <button className={` px-4 ${props.className}`}>
            <img src={props.img} className="px-3" alt="icon" />
            <span className="fw-bold">{props.text}</span>
        </button>
    );
}

export default Button;
