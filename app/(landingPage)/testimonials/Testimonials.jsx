import {testimonialArray} from'@/app/(data)/Data'
import Testimonial from '@/app/(shared)/testimonial/Testimonial'

const Testimonials=()=>{

    const mapped= testimonialArray.map(elem=>(<Testimonial key={elem.source} source={elem.source} text={elem.text} subText={elem.subText} />))

    return (
        <section className=' bg-[#e7f6ee] p-12'>
            <h2 className='text-center   text-[26px] lg:text-[40px] text-blackTexts leading-[46.6px] font-medium'>Testimonials</h2>
            <p className='text-center  mt-4 mb-8 leading-[22.8px] text-buttonColor font-normal'>Some quotes from our happy customers</p>
            <div className=' flex gap-8 flex-wrap justify-center'>
                {mapped}
            </div>
        </section>
    )
}

export default Testimonials;