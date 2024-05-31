import Map from "../components/Map";

export default function MapPage() {
  return (
    <div className="h-screen">
      <p className="text-5xl mt-10 text-center font-semibold text-white font-space">
        Adventure Map
      </p>
      <p className="text-xl text-center font-semibold text-white font-space lg:text-2xl">
        Who is ready for and adventure?  
      </p>
      <div className=" mt-8 flex flex-col items-center">
      <Map/>
      </div>
      <p className="text-xl mt-10 text-center font-semibold text-white font-space lg:text-2xl">
        Look at Yogyakarta's go to spots!
      </p>
    </div>
  );
}
