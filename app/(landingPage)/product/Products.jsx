import Product from "@/app/(shared)/product/Product"
import {arr} from'@/app/(data)/Data'

const Products = () => {
  const mapped =arr.map(elem=>( <Product key={elem.source} id={elem.id} source={elem.source} productName={elem.productName} />
  ))
  return (
    <section className=" py-8">
        <div className=" text-center">
        <h2 className="text-[24px] lg:text-[40px] font-medium leading-[57.6px] text-[#0B254B]">Products</h2>
        <p className=" text-[14px] leading-[27.6px] text-[#5E6E89] 5E6E89 lg:text-[18px]">Order it for you or for your beloved ones </p>
        </div>
        <div className='w-[90%] lg:w-4/5 mx-auto flex  lg:flex-wrap overflow-x-auto lg:justify-center  gap-4'>
          {mapped}
        </div>
    </section>
  )
}

export default Products;
