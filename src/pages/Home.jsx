import GetStarted from "../components/GetStarted";
import Quotes from "../components/Quotes";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center text-center ">
        <p className="font-serif text-5xl mb-10 mt-52 text-white w-2/3 lg:w-max">
          The Amazing Yogyakarta
        </p>
          <p className="font-grotesk text-white text-center  md:text-sm w-2/3 lg:text-xl lg:w-3/5">
          Yogyakarta was known with the slogan of "Jogja The Never ending Asia"
          for its endless appeals. Today, it is also renowned as "Jogja Istimewa" a tagline that elaborates its special values.
        </p>
        <br />
        <p className="font-grotesk text-white w-1/3">
          Explore Indonesia’s Special Region!!!
        </p>
      <GetStarted />
      <Quotes/>
      </div>
    </>
  );
}
