import './App.css'
import { useState } from 'react'
import Dialog1Layout from './components/Dialog/Dialog1-layout'
import Toast1 from './components/Toast/Toast1'
import { Home, Loader, Sidebar } from 'react-feather'
import Sidebar1, { SidebarItem } from './components/Sidebar/Sidebar1'
import OtpField from './components/Otp-field/Otp'

function App() {
  const [expanded, setExpanded] = useState(true);

  return (

    <>
      <div className="overflow-hidden">

        {/* <Toast1 /> */}

        {/* <Dialog1Layout /> */}


        {/* <div className='bg-gray-200'>

          <Sidebar1 expanded={expanded} setExpanded={setExpanded} >
            <SidebarItem icon={<Home size={24} />} label="Home Dashboard" expanded={expanded}  ></SidebarItem>
            <SidebarItem icon={<Home size={24} />} label="Home Dashboard" expanded={expanded} active message ></SidebarItem>
            <SidebarItem icon={<Home size={24} />} label="Home Dashboard" expanded={expanded} ></SidebarItem>
            <SidebarItem icon={<Home size={24} />} label="Home Dashboard" expanded={expanded} ></SidebarItem>

          </Sidebar1>
        </div> */}




        <OtpField inputs={6} />


      </div>


    </>
  )
}

export default App
