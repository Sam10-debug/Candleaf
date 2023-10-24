'use client'
import Image from "next/image"
import Switch from "../switch/Switch"
import { arr } from "@/app/(data)/Data"
import { useData } from "@/app/context/DataContext"

const Table = ({paramId,elem}) => {

    const source=arr[elem].source
    const productName=arr[elem].productName
    const {mockArr,setMockArr}= useData()

    function removeCartItem(){
        //get the index of the element
        const i= mockArr.indexOf(elem)-1
        const updatedArray = [...mockArr];
        updatedArray.splice(i, 1);
        setMockArr(updatedArray)
    }

  return (
    
      <tr>
          <td className="py-12"><div className="flex gap-2">
                <div className=" bg-imgBg hidden lg:flex"><Image src={source} width={160} height={130} alt='product image' /></div>
                <div>
                    <h2 className=' font-medium text-[18px] lg:text-[26px] leading-[57.6px] text-black '>{productName}</h2>
                    <button onClick={removeCartItem} className="lg:text-[18px] hover:cursor-pointer text-buttonColor leading-[25.6px] underline ">Remove</button>
                </div>
            </div></td>
          <td>$9.99</td>
          <td><Switch /></td>
          <td>$9.99</td>
        </tr>
  )
}

export default Table
