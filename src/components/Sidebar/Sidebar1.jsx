import React from "react";
import { LogOut, Sidebar } from "react-feather";
import { useEffect } from "react";
const Sidebar1 = ({ expanded, setExpanded, children }) => {

    return (
        <div className="transition-all duration-500">
            <div className={`h-screen ${expanded ? "w-72 transition-all ease-in-out overflow-hidden duration-500 " : "w-16 transition-all ease-in-out overflow-hidden duration-500 "} bg-blue-50 flex flex-col border-r `}>
                <div className="flex justify-around items-center border-b h-16">
                    <span
                        className={`font-bold text-xl m-2 p-2 ${expanded
                            ? "w-56 transition-all ease-in-out overflow-hidden duration-500 "
                            : "w-0  ease-in-out invisible duration-500 overflow-hidden  transition-all "
                            }`}
                    >
                        <h1 className={`${expanded ? "" : "hidden transition-all ease-in-out overflow-hidden duration-500"}`}> Brand Factory</h1>
                    </span>
                    <button
                        className={`${expanded ? "" : "absolute text-center m-6  "}`}
                        onClick={() => {
                            setExpanded((item) => !item);
                        }}
                    >
                        <Sidebar />
                    </button>
                </div>
                <div className=" flex-1  border-b">
                    <ul className="flex flex-col gap-4 my-6">{children} </ul>
                </div>
                <div className="w-72 h-16 flex items-center relative ">
                    <h1 className={` ${expanded ? "p-2 m-2 bg-blue-100 text-xl font-semibold w-14 text-center rounded-lg" : "p-2 ml-1 bg-blue-100 text-xl font-semibold w-14 text-center rounded-lg "}`}>
                        JD
                    </h1>
                    <div
                        className={`leading-4 ${expanded
                            ? "w-24 transition-all ease-in-out  duration-500 "
                            : " w-0 transition-all ease-in-out hidden overflow-hidden duration-500 "
                            }`}
                    >
                        <h3 className="text-sm font-bold ">John Doe</h3>
                        <p className="text-xs font-extralight">johndoe@gmail.com</p>
                    </div>
                    <div
                        className={`absolute right-2 ${expanded
                            ? "w-10 transition-all ease-in-out overflow-hidden duration-500"
                            : " w-0 transition-all ease-in-out overflow-hidden duration-500 "
                            }`}
                    >
                        <button >
                            <LogOut />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function SidebarItem({ id, icon, label, message, expanded, activeitem, handleclick }) {

    useEffect(() => {
        const activeitem = localStorage.getItem("sideBarItem")
        if (activeitem) {
            handleclick(Number(activeitem))
        }


    }, [])

    return (
        <div onClick={() => handleclick(id)}>


            <li
                className={`${expanded ? `w-auto transition-all relative flex mx-3 items-center bg-blue-100 gap-4 h-7 rounded-xl ease-in-out overflow-hidden duration-500 ${activeitem === id ? "bg-indigo-400" : ""
                    } p-6` : ` flex items-center justify-center  p-3 rounded bg-gray-100 m-1  ${activeitem === id ? "bg-indigo-400" : ""
                    }`}    `}
            >

                {icon}
                <span className={`${expanded ? "w-auto transition-all ease-in-out overflow-hidden duration-500" : " hidden w-0 transition-all ease-in-out overflow-hidden duration-500 "}`}>{label}</span>
                {message ? (
                    <div className={`${expanded ? "w-auto transition-all ease-in-out overflow-hidden duration-500" : " w-0 transition-all ease-in-out overflow-hidden duration-500 "} absolute right-3 h-2 rounded-full bg-blue-600 w-2`}></div>
                ) : (
                    <div></div>
                )}
            </li>
        </div>
    );
}
export default Sidebar1;
