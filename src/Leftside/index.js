import React, { useState, useEffect } from "react";
import Leftsidecom from "../componenet/leftsidecomponent";
import Completed from '../componenet/completed';
import { toast } from "react-toastify";
const Leftside = () => {
    const [data, setdata] = useState([
        {
            id: 1,
            title: "Submit my resume ",
            src: './acids/clock.png',
            time: new Date(2023, 8, 26, 6, 51).getMinutes(),
            isCompleted: false,
        },
        {
            id: 2,
            title: "Complete the task",
            src: './acids/clock.png',
            time: new Date(2023, 8, 26, 12, 54).getMinutes(),

            isCompleted: false,
        },
        {
            id: 3,
            title: "Meting with jack",
            src: './acids/clock.png',
            time: new Date(2023, 8, 26, 12, 55).getMinutes(),

            isCompleted: false,
        },
        {
            id: 4,
            title: "Buy a chocolate for mom",
            src: './acids/clock.png',
            time: new Date(2023, 8, 26, 10, 13).getMinutes(),
            isCompleted: false,
        },
        {
            id: 5,
            title: "Face time with Dad",
            src: './acids/clock.png',
            time: new Date(2023, 8, 26, 10, 14).getMinutes(),
            isCompleted: false,
        },
        {
            id: 6,
            title: "Submit my resume",
            src: './acids/clock.png',
            time: new Date(2023, 8, 26, 10, 15).getMinutes(),

            isCompleted: false,
        },
    ])

    const handleclick = (e) => {
        e.preventDefault()
        let obj = {
            id: data.length + 1,
            title: e.target['title'].value,
            src: './acids/clock.png',
            time: e.target['time'].value,

        }
        data.push(obj)
        setdata([...data])
        setismodalopen(false)
    }

    const changeStatus = (value, id) => {
        const task = data.find((el) => el.id === id);
        if (task) {
            task.isCompleted = value;
            setdata([...data]);
            if (value) {
                setispopupopen(true);
            }
            if (task.title) {
                settitle(task.title);
            }
        }
    };



    const [ismodalopen, setismodalopen] = useState(false)
    const [ispopupopen, setispopupopen] = useState(false)
    const [title, settitle] = useState('')





    useEffect(() => {

        const currentMinutes = new Date().getMinutes();
        data.forEach(task => {
            if (task.time === currentMinutes) {
                setispopupopen(true)
            }
        })
    }, [data]);




    return (

        <>

            <div className="flex flex-col pt-12 ">
                <div className="pb-6 font-bold  cursor-pointer" onClick={() => setismodalopen(true)}> <h1> + Add a new task</h1> </div>
                <div className=" pb-4 font-bold"> <h1> In Complete</h1> </div>

                {data.filter((el) => !el.isCompleted).map(card => <Leftsidecom
                    card={card}
                    changeStatus={changeStatus}
                />)}

                <div className=" pb-4 font-bold"> <h1> Complete</h1> </div>

                {data.filter((el) => el.isCompleted).map(card => <Completed
                    card={card}
                    changeStatus={changeStatus}

                />)}

                <Modal ismodalopen={ismodalopen} setismodalopen={setismodalopen} handleclick={handleclick} />
                <Popup ispopupopen={ispopupopen} setispopupopen={setispopupopen} title={title} />

            </div>

        </>
    )
}
export default Leftside;

const Modal = ({ ismodalopen, setismodalopen, handleclick }) => {

    return (
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" className={`fixed flex justify-center items-center w-full px-30 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] cursor-pointer max-h-full ${ismodalopen ? '' : "hidden"}`}
            style={{
                backdropFilter: ismodalopen ? "blur(2px)" : "none",
            }}


        >
            <div className="relative w-6/12 shadow-2xl ">

                <div className="relative bg-white rounded-lg shadow dark:bg-white ">
                    <button onClick={() => setismodalopen(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8 w-full">
                        <h3 className="mb-4 text-xl font-medium text-black">New Task</h3>
                        <form className="space-y-6" onSubmit={handleclick}>
                            <div className='flex'>
                                <img src="./acids/Vector.png" className='w-4 h-4 mt-3' />
                                <input type=" text" name="title" id="title" className="bg-white  text-black text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  dark:placeholder-gray-400 dark:text-black" placeholder="Summary" required />
                            </div>
                            <hr />
                            <div className='flex'>
                                <img src="./acids/Vector (1).png" className='w-4 h-4 mt-12 mr-2' />
                                <input type="text" name="desc" id="desc" multiple={true} className="bg-white h-24  pt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   dark:placeholder-gray-400 dark:text-black" placeholder="Description" required />
                            </div>
                            <hr />
                            <div className='flex'>

                                <img src="./acids/Vector (2).png" className='w-4 h-4 mt-3' />

                                <input type="time" name="time" id="time" className="bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  dark:placeholder-gray-400 dark:text-black" placeholder="Due date" required />
                            </div>
                            <hr />
                            <button className="h-12 rounded-full w-96 ml-32 bg-gray-900 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Save
                            </button>
                            <button className="h-12 rounded-full w-96 ml-32 bg-white hover:bg-gray-900 hover:text-white text-black text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer " type="button" onClick={() => setismodalopen(false)}>
                                Cancel
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

const Popup = ({ ispopupopen, setispopupopen, title }) => {


    return (




        <div id="popup-modal" tabindex="-1" className={`fixed flex justify-end top-0 left-0 right-0 z-50 h-40px pt-6 mr-2 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] ${ispopupopen ? '' : "hidden"}`}>
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow w-96 shadow-lg">
                    <button type="button" className="absolute w-60px top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm rounded-lg w-12 h-12 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">

                        <img src="./acids/Frame.png" className="w-60px h-60px " />
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="pt-3 ">

                        <h1 className=" w-64 pl-4 text-lg font-bold  text-black "  >{title}</h1>
                        <h6 className=" mb-2 pl-4   text-black ">submit my resume to digitalTolk</h6>
                        <div className="bg-gray-50 flex justify-end">
                            <button onClick={() => setispopupopen(false)} data-modal-hide="popup-modal" type="button" className="text-black bg-gray-50 hover:bg-gray-50 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Skip
                            </button>

                            <button onClick={() => setispopupopen(false)} data-modal-hide="popup-modal" type="button" className="text-black bg-gray hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-gray-50 rounded-lg border border-gray-50 text-sm font-medium px-5 py-2.5 hover:text-green-500 focus:z-10 dark:bg-gray-50 dark:text-black dark:border-gray-50 dark:hover:text-green dark:hover:bg-gray-50 dark:focus:ring-gray-50">Remind me later</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>


    )
}
