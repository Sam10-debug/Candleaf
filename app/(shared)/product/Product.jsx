import Image from "next/image";
import Link from 'next/link'

const Product=({source,productName,id})=>{
    return (
        <Link href={`/items/${id}`}>
            <section className=' min-w-[200px] max-w-[255px] max-h-[230px] shadow-2xl'>
            <div className=" bg-[#9bc4ba] flex justify-center">
                <Image src={source} alt="product image" width={200} height={200} />
            </div>
            <div className=" flex flex-col px-4 ">
                <h6 className=" leading-[27.6px] font-medium text-[#1D293F]">{productName}</h6>
                <h6 className="leading-[27.6px] ml-auto font-medium lg:text-[20px] text-[#56B280]">$9.99</h6>
            </div>
        </section>
        </Link>
    )
        
}

export default Product;