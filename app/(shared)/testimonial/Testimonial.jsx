import Image from 'next/image';

const Testimonial=({source,text,subText})=>{
    return (
        <section className=' w-[350px] h-[290px] bg-white p-4 space-y-4'>
            <div className=' flex justify-center'><Image src={source} alt='testimonial picture' width={100} height={100} /></div>
            <p className='text-[18px] text-center text-blackTexts lg:text-[22px] leading-[28.8px] font-medium'>{text}</p>
            <p className=' text-[14px] lg:text-[18px] text-center text-[#7C8087]'>{subText}</p>
        </section>
    )
}

export default Testimonial;