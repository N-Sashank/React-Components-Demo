import React from 'react'

const Dialog1 = ({open,onclose,children}) => {
  return (
    <>

    <div className={` mx-auto top-40  fixed inset-0 justify-center  rounded-xl shadow-xl w-96 text-center bg-gray-200 h-96  items-center transition-all ${open?"flex":"hidden"}`} >
        <button onClick={()=>onclose()} className='absolute top-4 right-4 text-gray-400 hover:scale-110 hover:text-gray-600 transition-all font-semibold text-xl p-2 w-10'>X</button>
    {children}
    </div>
    </>
  )
}

export default Dialog1
