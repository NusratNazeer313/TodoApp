import React from "react";
import Leftsidecom2 from "../leftside2componenet";

const SecondlftCom = () => {
    return (
        <div className="flex flex-col pt-12">
            <div className="pb-6 font-bold">
                <h1> + Check In</h1>
            </div>
            <div className="pb-4 font-bold">
                <h1>Current Location</h1>
            </div>
            <Leftsidecom2
                title='Pustegränd, Stockholm, SE'
                imgSrc='./acids/9.png'
                text="59.3293° N, 18.0686° E"
            />



            <div className="pb-4 font-bold">
                <h1>previous Location</h1>
            </div>
            <Leftsidecom2
                title='Halsingegätan, Stockholm, SE'
                imgSrc='./acids/9.png'
                text="59.3293° N, 18.0686° E"
            />
            <Leftsidecom2
                title='Pustegränd, Stockholm, SE'
                imgSrc='./acids/9.png'
                text="59.3293° N, 18.0686° E"
            />
            <Leftsidecom2
                title='Långa Gatan, Stockholm, SE'
                imgSrc='./acids/9.png'
                text="59.3293° N, 18.0686° E"
            />
            <Leftsidecom2
                title='Djurgården, Stockholm, SE'
                imgSrc='./acids/9.png'
                text="59.3293° N, 18.0686° E"
            />
            <Leftsidecom2
                title='Svartensgatan, Stockholm, SE'
                imgSrc='./acids/9.png'
                text="59.3293° N, 18.0686° E"
            />
        </div>
    );
}

export default SecondlftCom;
