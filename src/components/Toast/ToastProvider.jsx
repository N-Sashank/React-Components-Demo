import React from 'react'
import ToastContext from './ToastService'
import { useState } from 'react'
import { X } from 'react-feather'

export const ToastProvider = ({ children }) => {

    const [toasts, settoasts] = useState([])
    const open = (component) => {

        // console.log(component)
        const id = Date.now()
        settoasts([...toasts, { id, component }])
        // console.log(toasts)
        setTimeout(() => {
            close(id)
        }, 5000);

    }
    const close = (id) => {
        settoasts(toasts => toasts.filter((toast) => toast.id != id))
    }
    return (
        <ToastContext.Provider value={{ open, close }}>
            {children}
            <div className='bottom-4 right-3 fixed space-y-2 rounded shadow-lg'>
                {toasts.map((toast) => (
                    <div key={toast.id} className="relative rounded-xl shadow bg-slate-200 p-8">
                        <button
                            onClick={() => close(toast.id)}
                            className='absolute font-semibold text-xl text-gray-400 hover:text-gray-800  top-2 right-4 p-1 rounded-lg bg-gray-200/20 hover:scale-110 transition-all' >
                            <X />
                        </button>
                        <div>
                            {toast.component}
                        </div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}
//bookmark