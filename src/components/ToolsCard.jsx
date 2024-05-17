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
      <div className="w-80 md:w-96 mb-5 p-6 bg-myColor-400 border border-myColor-600 rounded-lg">
        <img className="h-6" src={clouds} alt="icon" />
        <p className="mb-2 text-2xl text-gray-900">Yogyakarta's Weather</p>
        <p className="mb-3 text-xs text-gray-800 ">
          Enjoy Yogyakarta on a sunny day by finding out what the weather is
          like in Yogyakarta beforehand.
        </p>
        <button
          onClick={() => navigate("/Weather")}
          className="inline-flex font-medium items-center text-blue-700 hover:underline"
        >
          Predict the weather
          <img className="h-6" src={arrow} alt="arrow icon" />
        </button>
      </div>
      {/* 2  */}
      <div
        className="w-80 md:w-96 mb-5 p-6 bg-myColor-400 border border-myColor-600
       rounded-lg"
      >
        <img className="h-6" src={money} alt="icon" />

        <p className="mb-2 text-2xl text-gray-900">Indonesia's Currency</p>
        <p className="mb-3 text-xs text-gray-800 ">
          Splurge on your holidays worry free by using this tool to calculate
          your budget.
        </p>
        <button
          onClick={() => navigate("/Currency")}
          className="inline-flex font-medium items-center text-blue-700 hover:underline"
        >
          Be like a millionaire
          <img className="h-6" src={arrow} alt="arrow icon" />
        </button>
      </div>
      {/* 3  */}
      <div
        className="w-80 md:w-96 mb-5 p-6 bg-myColor-400 border border-myColor-600
       rounded-lg"
      >
        <img className="h-6" src={language} alt=" icon" />

        <p className="mb-2 text-2xl text-gray-900">Languages in Yogyakarta</p>
        <p className="mb-3 text-xs text-gray-800 ">
          Dont get lost and have a fun time. learn the basics of the Languages
          spoken in Yogyakarta.
        </p>
        <button
          onClick={() => navigate("/Language")}
          className="inline-flex font-medium items-center text-blue-700 hover:underline"
        >
          Speak like a local
          <img className="h-6" src={arrow} alt="arrow icon" />
        </button>
      </div>
    </>
  );
}
