import { SEARCH } from "../assets/images"


const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center padding-t">
      <h1 style={{fontFamily:"Poppins"}} className="font-poppins text-[80px] font-semibold w-2/3 pb-4 leading-[90px] text-center text-white">Find a dream jobs in New Castle
    </h1>
    <p style={{fontFamily:"Open sans"}} className="text-[#8b8b8b] w-[45%] text-center text-[18px] pb-12">When you're searching for a job, there are a few things you can do to get the most out of your search</p>
    <div className="text-[#8b8b8b] border-2 border-[#fd6214d6] rounded-sm px-2 bg-[#FFFFFF] flex items-center justify-between gap-5 mb-8">
     <div className="flex gap-2 items-center">
     <div className="bg-red-500 p-2 rounded-lg">
     <img src={SEARCH} alt="searchIcon" width={20} height={20}/>
     </div>
    <input style={{fontFamily:"Open sans"}} className="px-4 py-5 border-none w-96 outline-none text-black text-md" type="text" placeholder="Job title, keyword or company" />
     </div>
    <button className="bg-[#cdcccc] px-4 py-2 rounded-md text-black">Any location</button>
    </div>

    <p style={{fontFamily:"poppins"}} className="text-white font-semibold pb-8"><span className="text-green-300 font-semibold text-xl">21,701,403</span> Total Jobs Posted</p>
      </div>
    
    </section>
    
  )
}

export default Hero