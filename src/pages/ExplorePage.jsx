import SwiperCard from "../components/SwiperCard";


export default function ExplorePage() {
  return (
    
      <div className="flex justify-around flex-wrap px-14 h-screen sm:mt-40 md:mt-40">
        <div>
          <div className="mt-11 font-serif text-xl text-white text-center sm:w-1/3 sm:text-left sm:text-base lg:text-xl">
            <p>Only in</p>
          </div>
          <div className="font-serif text-5xl font-bold text-white  w-1/3 sm:text-4xl lg:text-6xl ">
            <p>
              Yogyakarta
            </p>
          </div>
        </div>
        <SwiperCard/>
      </div>
    
  );
}
