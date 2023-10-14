import Button from "@/app/(shared)/button/Button"


const Hero = () => {
  return (
    <section className=" hero h-[650px] max-h-[700px] flex items-center justify-center">
        <div className=" bg-[#F7F8FA] h-[349px] w-[90%] lg:w-1/2 flex items-center justify-center flex-col space-y-10 px-4">
            <h1 className=" leading-[57.6px] lg:text-[40px] text-[26px]  font-medium">
                🌱 
                The nature candle
            </h1>
            <p className=" text-center">All handmade with natural soy wax,Candleaf is a companion for all your pleasure moments.</p>
             <Button  title='Discover our collection' styling=' rounded-[4px] w-[310px] h-[40px] text-white font-medium bg-buttonColor' />
        </div>
    </section>
  )
}

export default Hero
