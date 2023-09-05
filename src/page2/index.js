import React from "react";
import Button from "../pagebuttoncomponenet";
import { Link } from "react-router-dom";

const Sidebar = ({ page }) => {
    const buttons = [
        {
            text: "Task",
            link: "/page1",
            imageActive: "./acids/Vector (3).png",
            imageInactive: "./acids/6.png",

        },
        {
            text: "Location",
            link: "/page4",
            imageActive: "./acids/7.png",
            imageInactive: "./acids/Vector1.png",

        }
    ]
    return (
        <>
            <div className="flex-col justify-between h-full ">
                <div>
                    {buttons.map(btn => (
                        <Link to={btn.link}>
                            <Button
                                className={`rounded-r-full  pt-4 pb-4 pl-16 flex item-center w-64 h-15 mt-8 ${page === btn.text ? 'active' : 'inactive'} `}
                                img={page === btn.text ? btn.imageActive : btn.imageInactive}
                                text={btn.text}
                            />
                        </Link>
                    ))}

                </div>
                <div>
                    <Link to="/">
                        <Button
                            className="rounded-r-full bg-white pt-6 pb-12 pl-16 flex item-center w-70 mt-80  mb-10 text-black  "
                            img="./acids/Group 21.png"
                            text="Log out"

                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
