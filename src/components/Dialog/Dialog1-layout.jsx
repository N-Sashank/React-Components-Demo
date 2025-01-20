import React from 'react'
import { useState } from 'react'
import Dialog1 from './Dialog1'
import { AlertCircle, LogIn } from 'react-feather'
const Dialog1Layout = () => {
  const [Open, setOpen] = useState(false)

  return (
    <div>
      <div id='Dialog_box' className='transition-all h-screen bg-gray-400 flex items-center justify-center'>
        <button className='text-xl font-semibold rounded w-32 h-16 text-center flex items-center justify-center bg-white cursor-pointer' onClick={() => {
          setOpen(true)
          // console.log(Open)
        }}>
          Open Dialog
        </button>

        <Dialog1
          open={Open} onclose={() => {
            setOpen(false)
          }
          }
        >
          <p className=' text-black w-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt repellat tenetur omnis facilis aliquam nam voluptas beatae iusto distinctio aliquid maiores nemo provident, vero dolor rerum fuga ipsa ipsum?</p>
        </Dialog1>
      </div>
    </div>
  )
}

export default Dialog1Layout
