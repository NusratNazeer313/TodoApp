import React from "react";


import SecondlftCom from "../componenet/left2ndcomponent";
import Sidebar from "../page2";



const Page4 = () => {
    return (
        <>
            <div className="grid grid-cols-3 pt-">

                <Sidebar page={"Location"} />
                <SecondlftCom />
            </div>
        </>
    );
}

export default Page4;
