import SwiperCard from "../components/SwiperCard";


export default function ExplorePage() {
  return (
    
      <div class="flex justify-around flex-wrap px-14 h-screen sm:mt-40 md:mt-40">
        <div>
          <div class="mt-11 font-serif text-xl text-white  w-1/3">
            <p>Only in</p>
          </div>
          <div class="font-serif text-5xl font-bold text-white  w-1/3 ">
            <p>
              Yogyakarta
            </p>
          </div>
        </div>
        <SwiperCard/>
      </div>
    
  );
}
