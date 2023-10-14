import {arr} from'@/app/(data)/Data'
import Product from "@/app/(shared)/product/Product"

const Popular=()=>{
    // i need to map through just the first four elemennts of arr
    const newArr=[]
    arr.forEach(elem=>{
        if(elem.id<5){
            newArr.push(elem)
        }
    })

    const mapped =newArr.map(elem=>( <Product key={elem.source} source={elem.source} productName={elem.productName} />
    ))

    return (
        <section className='py-8'>
            <h2 className='text-center   text-[26px] lg:text-[40px] text-[#0B254B] leading-[46.6px] font-medium'>Popular</h2>
            <p className='text-center lg:text-[18px]  mt-4 mb-8 leading-[22.8px] text-[#5E6E89] font-normal'>Our top selling product that you may like</p>
            <div className='w-[90%] lg:w-4/5 mx-auto flex  lg:flex-wrap overflow-x-auto lg:justify-center  gap-8'>
                {mapped}
            </div>
        </section>
    )
}

export default Popular