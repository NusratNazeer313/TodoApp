import React from "react";
import Leftsidecom from "../componenet/leftsidecomponent";
const Leftside2 = () => {
    return (

        <>

            <div className="flex flex-col pt-12 ">
                <div className="pb-6 font-bold "> <h1> + Add a new task</h1> </div>
                <div className=" pb-4 font-bold"> <h1> Complete</h1> </div>
                <Leftsidecom
                    title='Submit my resume'
                    imgSrc='./acids/clock.png'
                    text="Today, 17.00"
                />
                <Leftsidecom
                    title='Complete the test'
                    imgSrc='./acids/clock.png'
                    text="Tomorrow, 10.00"
                />
                <Leftsidecom
                    title='Meeting with jack'
                    imgSrc='./acids/clock.png'
                    text="Tomorrow, 15.00"
                />
                <Leftsidecom
                    title='Buy a chocolate for mom'
                    imgSrc='./acids/clock.png'
                    text="Tomorrow, 11.00"
                />
                <Leftsidecom
                    title='Face time with Dad'
                    imgSrc='./acids/clock.png'
                    text="Tomorrow, 18.00"
                />

                <div className=" pb-4 font-bold"> <h1> Complete</h1> </div>


            </div>

        </>

    )
}
export default Leftside2;

