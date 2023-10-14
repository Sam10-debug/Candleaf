import Image from 'next/image';
import Button from '@/app/(shared)/button/Button'
import {textArr} from'@/app/(data)/Data'
import Text from '@/app/(shared)/text/Text'

const Clean=()=>{

    const mapped= textArr.map(elem=>(<Text key={elem} text={elem} />))

    return (
        <section className=' flex bg-[#F7F8FA] p-12 flex-col lg:flex-row'>
            <div className=' flex-1'>
                <h2 className='text-center lg:text-left  text-[26px] lg:text-[40px] text-blackTexts leading-[46.6px] font-medium'>Clean and fragrant soy wax</h2>
                <p className='text-center lg:text-left mt-4 mb-8 leading-[22.8px] text-buttonColor font-normal'>Made for your home and for your wellness</p>
                <div className=' space-y-2 mb-6'>
                {mapped}
                </div>
                <div className=' flex justify-center lg:justify-start'><Button title='Learn More' styling=' bg-buttonColor text-white rounded-[4px] w-[194px] h-[40px]' /></div>
            </div>
            <div className=' flex-1 flex justify-center'>
                <Image src='/images/image.png' alt='image of candleaf' width={500} height={500} />
            </div>
        </section>
    )
}

export default Clean;