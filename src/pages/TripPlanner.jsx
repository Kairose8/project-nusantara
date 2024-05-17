import ToolsCard from "../components/ToolsCard";

export default function TripPlanner() {
  return (
    <div className="sm:h-full md:h-screen">
      {/* isi */}
      <div>
        {/* page text  */}
        <div className="flex flex-col items-center text-center mb-8">
          <div class="text-3xl md:text-5xl items-center left-14 font-serif  text-white md:w-1/3 ">
            <p>Plan Out Your Trip!</p>
          </div>
          <div class="left-14 font-serif text-lg text-white md:w-1/3 ">
            <p>Use these tools to help you on your journey.</p>
          </div>
        </div>
        {/* cards  */}
        <div className="flex flex-col items-center">
          <ToolsCard />
        </div>
      </div>
    </div>
  );
}
