import SwiperCard from "../components/SwiperCard";

export default function ExplorePage() {
  return (
    <div>
      <div className="flex justify-around flex-wrap px-14 h-screen sm:mt-20 md:mt-40">
        <div>
          <div className="mt-11 font-serif text-xl text-white text-center sm:w-1/3 sm:text-left sm:text-base lg:text-xl">
            <p>Only in</p>
          </div>
          <div className="font-serif text-5xl font-bold text-white  w-1/3 sm:text-4xl lg:text-6xl ">
            <p>Yogyakarta</p>
          </div>
      <div className="flex flex-col items-center mt-14">
        <a
          href="https://www.tripadvisor.co.id/Tourism-g294230-Yogyakarta_Region_Java-Vacations.html"
          className="text-white bg-myColor-500 font-serif hover:bg-myColor-600 focus:outline-none text-xl rounded-full text-sm px-5 py-2.5  "
        >
          go to trip advisor
        </a>
      </div>
        </div>
        <SwiperCard />
      </div>
    </div>
  );
}
