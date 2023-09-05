import React from "react";

const Leftsidecom2 = ({ title, imgSrc, text }) => {
    return (


        <div className="flex flex-row">

            <img src={imgSrc} alt="img" className="w-4 h-4" />

            <div className=" pb-4 pl-4 text-sm">
                <h1 className="bp-8 " >
                    {title}
                </h1>
                <div className="flex flex-row text-gray-400 ">

                    <span >{text}</span>
                </div>
            </div>
        </div>
    );
}

export default Leftsidecom2;
