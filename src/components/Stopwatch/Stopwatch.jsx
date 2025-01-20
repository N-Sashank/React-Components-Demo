import React from 'react'
import { useState, useEffect } from 'react'

const Stopwatch = () => {
    const [time, settime] = useState(0)
    const [running, setrunning] = useState(false)
    useEffect(() => {
        let interval
        if (running) {
            interval = setInterval(() => {
                settime((prev) => prev + 10)
            }, 1000);
        }
        else { clearInterval(interval) }

        return () => {
            clearInterval(interval)
        }
    }, [running])



    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gray-500'>


            <div className='flex-col  items-center justify-center border border-black rounded-xl p-8 bg-white '>
                <h1 className='text-center text-xl font-bold m-2'>Stopwatch</h1>
                <div className='flex gap-2 justify-center items-center '>

                    <span className=' font-semibold text-neutral-700 text-xl'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
                    <span className=' font-semibold text-neutral-700 text-xl'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} :</span>
                    <span className=' font-semibold text-neutral-700 text-xl'>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
                </div>

                <div className=' flex gap-3 p-5 justify-center items-center'>
                    {running ? <button className="transition-all duration-300 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => { setrunning(false) }}>Stop</button> : <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800transition-all duration-300  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 " onClick={() => { setrunning(true) }}>Start</button>}

                    <button className=" transition-all duration-300  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700" onClick={() => { settime(0) }}>Reset</button>
                </div>

            </div>
        </div>
    )
}

export default Stopwatch
