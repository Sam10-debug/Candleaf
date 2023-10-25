'use client'
import Button from "@/app/(shared)/button/Button"
import { useData } from "@/app/context/DataContext"
import Table from "@/app/(shared)/table/Table"


const Cart = ({params}) => {
    const paramId= Number(params.id)-1
    const {mockArr} = useData()

    //map through mock array to return each Table
    const mapped= mockArr.map(elem=>(<Table key={elem} elem={elem-1} paramId={paramId} />))

    if(mockArr.length===0){

        return <div className="mt-24 flex justify-center items-center h-screen text-xl font-semibold">There are no items on your cart</div>

    }


  return (
    <section className="mt-24">
        <h2 className=' font-medium text-[22px] lg:text-[26px] leading-[57.6px] text-black text-center'>Your Cart Items</h2>
        <p className=' lg:text-[18px] text-buttonColor leading-[25.6px] underline text-center'>Back to shopping</p>
        <table className=" lg:w-[90%] mx-auto mt-8 table-auto w-full">
      <thead>
        <tr className="w-full">
          <th className='w-1/4  lg:w-1/2 text-left py-2'>Product</th>
          <th className='w-1/4 lg:w-1/6 text-left py-2'>Price</th>
          <th className='w-1/4 lg:w-1/6 text-left py-2'>Quantity</th>
          <th className='w-1/4 lg:w-1/6 text-left py-2'>Total</th>
        </tr>
      </thead>
      <tbody >
      {mapped}
        <tr>
          <td></td>
          <td className=" lg:text-[20px] font-bold leading-[25.6px]">Subtotal</td>
          <td className=" lg:text-[20px] font-bold leading-[25.6px]">$9.99</td>
          <td><Button title='Check Out' link={`/cart`} styling=' rounded-[4px] w-[183px] h-[40px] text-white font-medium bg-buttonColor' /></td>
        </tr>
      </tbody>
    </table>
    </section>
  )
}

export default Cart
