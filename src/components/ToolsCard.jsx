import { useNavigate } from "react-router-dom";
import arrow from "../assets/icons/arrow.png";
import clouds from "../assets/icons/clouds.png";
import money from "../assets/icons/money.png";
import language from "../assets/icons/language.png";

export default function ToolsCard() {
  const navigate = useNavigate();

  return (
    <>
      {/* 1  */}
      <button
        onClick={() => navigate("/Weather")}
        className="w-4/5 mb-5 p-6 bg-myColor-500 border border-myColor-600 rounded-lg text-left"
      >
        <img className="h-6" src={clouds} alt="icon" />
        <p className="mb-2 text-2xl text-stone-200">Yogyakarta's Weather</p>
        <p className="mb-3 text-xs text-stone-300 ">
          Enjoy Yogyakarta on a sunny day by finding out what the weather is
          like in Yogyakarta beforehand.
        </p>
        <p className="inline-flex font-medium items-center text-blue-950 hover:underline">
          Predict the weather
          <img className="h-6" src={arrow} alt="arrow icon" />
        </p>
      </button>
      {/* 2  */}
      <button
        onClick={() => navigate("/Currency")}
        className="w-4/5 mb-5 p-6 bg-myColor-500 border border-myColor-600
       rounded-lg text-left"
      >
        <img className="h-6" src={money} alt="icon" />

        <p className="mb-2 text-2xl text-stone-200">Indonesia's Currency</p>
        <p className="mb-3 text-xs text-stone-300 ">
          Splurge on your holidays worry free by using this tool to calculate
          your budget.
        </p>
        <p className="inline-flex font-medium items-center text-blue-950 hover:underline">
          Be a millionaire
          <img className="h-6" src={arrow} alt="arrow icon" />
        </p>
      </button>
      {/* 3  */}
      <button
        onClick={() => navigate("/Language")}
        className="w-4/5 mb-5 p-6 bg-myColor-500 border border-myColor-600
       rounded-lg text-left"
      >
        <img className="h-6" src={language} alt=" icon" />

        <p className="mb-2 text-2xl text-stone-200">Languages in Yogyakarta</p>
        <p className="mb-3 text-xs text-stone-300 ">
          Dont get lost and have a fun time. learn the basics of the Languages
          spoken in Yogyakarta.
        </p>
        <p className="inline-flex font-medium items-center text-blue-950 hover:underline">
          Speak like a local
          <img className="h-6" src={arrow} alt="arrow icon" />
        </p>
      </button>
    </>
  );
}
