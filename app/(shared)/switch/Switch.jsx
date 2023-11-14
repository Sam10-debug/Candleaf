'use client'
import {useState} from 'react'

const Switch = () => {

  const [cartNumber,setCartNumber]= useState(1)

  function Increment(){
    setCartNumber(prev=>prev+1)
  }

  function Decrement(){
    setCartNumber(prev=>{
      if(prev>1){
        return prev-1
      }else{
        return prev
      }
    })
  }

  return (
    <div className=' flex justify-center gap-2 text-[18px] hover:cursor-pointer text-black w-[75px] h-[30px] border-buttonColor border-[1px]'>
                <span onClick={Decrement} className='text-buttonColor'>-</span>
                <span >{cartNumber}</span>
                <span onClick={Increment} className='text-buttonColor'>+</span>
    </div>
  )
}

export default Switch
