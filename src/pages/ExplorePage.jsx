import SwiperCard from "../components/SwiperCard";
import DynamicNavigationButtons from "../components/DynamicNavigationButtons";

export default function ExplorePage() {
  return (
    <div className="xsm:h-screen">
      <div className="mt-11 font-serif text-xl text-white text-center">
        <p>Only in</p>
      </div>
      <div className="text-5xl  text-center font-semibold  font-serif text-white">
        <p>Yogyakarta</p>
      </div>
        <SwiperCard />
        <DynamicNavigationButtons/>
    </div>
  );
}
