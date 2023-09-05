import React from "react";
import Sidebar from "../page2";
import Leftside from "../Leftside";


const Page1 = () => {
    return (
        <>
            <div className="grid grid-cols-3">
                <Sidebar
                    page={"Task"}

                />
                <Leftside />
            </div>
        </>
    );
}

export default Page1;
