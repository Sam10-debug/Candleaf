'use client'
import Image from 'next/image'
import { arr } from '@/app/(data)/Data'
import Button from '@/app/(shared)/button/Button'
import Switch from '@/app/(shared)/switch/Switch'
import { useData } from '@/app/context/DataContext'

const Item = ({ params}) => {
    let obj={}
    const paramsId=Number(params.id)
    const {mockArr,setMockArr}=useData()

        arr.forEach(elem=>{
            if(elem.id === paramsId){
               obj=elem
            }
        })

        function addToCart(){
          //before you add to cart, check if it is already there before
          if(mockArr.includes(paramsId)){
            return mockArr
          }else{
            // mockArr.push(paramsId)
            setMockArr(prev=>{
              return [...prev,paramsId]
            })
          }
          //then push
        }


  return (
    <section className=' h-screen flex flex-col md:flex-row mt-40 md:mt-0 justify-center items-center gap-12 px-8'>
      <div className=' flex-1 space-y-4'>
        <div className=' bg-[#F7F8FA] flex justify-center'><Image src={obj.source} width={400} height={400} alt='product image' /></div>
        <div className='space-y-4 text-center'>
            <p className='text-[20px] lg:text-[22px] leading-[25.6px] text-black font-medium'>All hand-made with natural soy wax, Candleaf is made for your pleasure moments. </p>
        </div>
      </div>
      <div className=' flex-1'>
        <h2 className=' lg:text-[26px] font-medium leading-[57.6px] text-black text-[22px]'>{obj.productName}</h2>
        <div>
            <h4 className='lg:text-[26px] font-semibold leading-[57.6px] text-buttonColor text-[22px]'>$9.99</h4>
        </div>

        <div className=''>
            <h6 className=' text-[18px] text-black'>Quantity</h6>
            <Switch />
        </div>
        <div className=' flex justify-center py-8'>
        <Button handleClick={addToCart} link={`/cart`}  title='+ Add to cart' styling='text-[20px] rounded-[4px] w-[350px] h-[42px] text-white font-regular bg-buttonColor' />
        </div>
        <div className='mt-4 rounded-[7px] space-y-4 border-[#E6E6E6] border-[1px] w-fit p-4'>
            <p><span className=' font-semibold'>Wax:</span> Top grade Soy wax that delivers a smoke less, consistent burn</p>
            <p><span className=' font-semibold'>Fragrance:</span> Premium Quality ingredients with natural essence oil</p>
            <p><span className=' font-semibold'>Burning Time:</span> 70-75 hours <span className=' font-semibold'>Dimension: </span> 10cm x 5cm <span className=' font-semibold'>Weight:</span> 400g</p>
        </div>
      </div>
    </section>
  )
}

export default Item