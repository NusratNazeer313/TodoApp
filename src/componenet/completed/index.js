import React from "react";

const completed = ({ card, changeStatus }) => {
    return (


        <div className="flex flex-row">

            <input checked={card.isCompleted} onChange={e => changeStatus(e.target.checked, card.id)} className="w-4 h-5  rounded-lg bg-slate-600 accent-inherit" type="checkbox" />


            <div className=" pb-4 pl-4 text-sm text-inherit">
                <h1 className="bp-8 " >
                    {card.title}
                </h1>

            </div>
        </div>
    );
}

export default completed;
