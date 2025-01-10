import React from 'react'
import { useToast } from './ToastService'

const Toast1 = () => {
  const toast = useToast()

  const handleclick = () => {
    toast.open(
      <div className="w-72 ">
        <div className=''>
          <h1 className='font-bold text-2xl'>Title</h1>
        </div>
        <div>
          <h3>Description details like invalid input</h3>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div id='Toast_box' className='transition-all h-screen bg-gray-400 flex items-center justify-center'>
        <button className='text-xl font-semibold rounded w-32 h-16 text-center flex items-center justify-center bg-white cursor-pointer' onClick={handleclick}>
          Open Toast
        </button>


      </div>
    </div>
  )
}

export default Toast1
