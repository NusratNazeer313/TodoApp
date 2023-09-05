import React from "react";


const Leftsidecom = ({ card, changeStatus }) => {

    return (


        <div className="flex flex-row">
            <input checked={card.isCompleted} onChange={e => changeStatus(e.target.checked, card.id)} className="w-4 h-5  rounded-lg bg-slate-600 accent-inherit" type="checkbox" />
            <div className=" pb-4 pl-4 text-sm">
                <h1 className="bp-8 " >
                    {card.title}
                </h1>
                <div className="flex flex-row text-gray-400 ">
                    <img src={card.src} alt="img" className="w-4 h-4" />
                    <span >{card.time}</span>
                </div>
            </div>

        </div>
    );
}

export default Leftsidecom;

