import React, { useEffect, useRef, useState } from "react";
import { useToast } from "../Toast/ToastService";
import { AlertCircle, Loader } from "react-feather";

const OtpField = ({ inputs }) => {
  const toast = useToast()
  const [otp, setotp] = useState(new Array(inputs).fill(""));


  const inputrefs = useRef([]);

  const handlechange = (e, index) => {

    // check if input is a number or not 
    if (isNaN(e.target.value)) {   // isNaN returns true if it is not a number
      e.target.value = "";
    }
    else {
      const newotp = [...otp] // create new array containing all values of otp 
      newotp[index] = e.target.value
      setotp(newotp)
      // move focus to next input box
      if (index === inputs - 1) { return }  //if last input box dont do anything
      else {
        if (e.target.value === "") { return } // if element is empty dont move forward ( backspace is also considered as a change- backspace error)  
        inputrefs.current[index + 1].focus()
      }
    }

  };

  const handlesubmit = (e) => {
    //prevent reload on form submit 
    e.preventDefault()
    const result = otp.join("") // convert otp array to string
    if (result.length < inputs) {
      toast.open(
        <div className="flex items-center justify-center gap-4 ">
          <AlertCircle className=" text-red-700" size={40} />

          <div className="w-72 ">
            <div className=''>
              <h1 className='font-bold text-2xl'>Invalid Otp</h1>
            </div>
            <div>
              <h3>Otp should have {inputs} digits</h3>
            </div>
          </div>
        </div>
      )
      return
    }
    else {

      //form submit logic
      toast.open(
        <div className="flex items-center justify-center gap-4 ">
          <Loader className=" text-green-700" size={40} />

          <div className="w-72 ">
            <div className=''>
              <h1 className='font-bold text-xl'>Submitting form </h1>
            </div>

          </div>
        </div>
      )

    }
  }

  const handlebackspace = (e, index) => {
    if ((e.target.value) != "") { // if element is not empty set empty 
      const newotp = [...otp]
      newotp[index] = ""
      setotp(newotp)

      e.target.value = ""
    }
    else {
      if (index === 0) { return } // if first input box then return 
      else {

        inputrefs.current[index - 1].focus() // focus previous input box 

      }
    }


  };
  useEffect(() => {
    if (inputrefs.current[0]) {

      inputrefs.current[0].focus();// focus on first input box on intial load 
    }
  }, []);

  return (
    <>
      <div className=" bg-slate-300 h-screen w-screen text-center flex flex-col gap-3 items-center justify-center">
        <h1 className="font-semibold text-xl"> Enter OTP</h1>
        <form action="submit">

          <div className="  flex gap-3 ">
            {otp.map((item, index) => {
              return (
                <input
                  required
                  //asign individual refs 
                  ref={(item) => {
                    inputrefs.current[index] = item;
                  }}
                  onChange={(e) => { handlechange(e, index) }}
                  onKeyDown={(e) => {

                    if (e.key === "Backspace") {
                      handlebackspace(e, index)
                    }
                  }}
                  className="w-14 h-14 text-center font-semibold text-2xl bg-gray-200 rounded-lg   "
                  key={index}
                  type="text"
                  maxLength={1}
                />
              );
            })}
          </div>
          <button onClick={handlesubmit} className=" w-36 h-10 my-5
         text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   ">Sumbit</button>

        </form>

      </div>
    </>
  );
};

export default OtpField;
