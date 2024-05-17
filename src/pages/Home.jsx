import GetStarted from "../components/GetStarted";


export default function Home() {


  return (
    <div className="h-screen ">
      <p class="font-serif text-5xl mb-5 mt-52 text-white ml-12 w-1/3">
        The Amazing Yogyakarta
      </p>
      <p class="font-serif text-white  md:text-sm ml-12 w-2/3 lg:text-xl lg:w-2/5">
        Yogyakarta was known with the slogan of "Jogja The Never ending Asia"
        for its endless appeals. Today, it is also renowned as "Jogja Istimewa
        ", a tagline that elaborates its special values.
      </p>
      <br />
      <p class="font-serif text-white ml-12 w-1/3">
        Explore Indonesia’s Special Region!!!
      </p>
      <GetStarted />
    </div>
  );
}
