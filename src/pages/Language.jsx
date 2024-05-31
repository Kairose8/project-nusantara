import arrow from "../assets/icons/arrow.png";
import NavigateBack from "../components/NavigateBack";

export default function Language() {
  return (
    <>
      <div className="h-screen">
        {/* isi */}
        <div>
          {/* page text  */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-4/5 text-4xl md:text-5xl items-center  font-bold text-white">
              <p>Be a Native!</p>
            </div>
            <div className="font-sans md:text-xl text-white">
              <p>Learn the languages that shape and define the culture.</p>
              <p>Click to start your learning journey!</p>
            </div>
          </div>

          {/* cards  */}
          <div className="flex flex-col items-center">
            {/* 1  */}
            <a
              href="https://www.udemy.com/course/learn-indonesian-with-inten/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.ID&campaigntype=Search&portfolio=Indonesia&language=EN&product=Course&test=&audience=DSA&topic=&priority=&utm_content=deal4584&utm_term=_._ag_112265177716_._ad_500831051438_._kw__._de_c_._dm__._pl__._ti_dsa-392130681248_._li_9120718_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8rsNtZWv0DkTwJIVXYI_5ZNt9rSAx6gbBB8yXn0kqJfiHtgV1DAHL8aAqx0EALw_wcB&couponCode=LEADERSALE24B"
              target="_blank"
              rel="noopener noreferrer"
              className="w-4/5 mb-5 p-6 bg-myColor-500 border border-myColor-600 rounded-lg"
            >
              <div>
                <p className="mb-2 text-2xl text-stone-200">Bahasa Indonesia</p>
                <p className="mb-3 text-xs text-stone-300 ">
                  Also known as Indonesian is the country's national language,
                  it would really help to know a few phrases.
                </p>
                <div className="inline-flex font-medium items-center text-blue-950 hover:underline">
                  Learn Indonesian
                  <img className="h-6" src={arrow} alt="arrow icon" />
                </div>
              </div>
            </a>
            {/* 2  */}
            <a
              href="https://www.digitaldialects.com/Javanese.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-4/5 mb-5 p-6 bg-myColor-500 border border-myColor-600 rounded-lg"
            >
              <div>
                <p className="mb-2 text-2xl text-stone-200">Boso Jowo</p>
                <p className="mb-3 text-xs text-stone-300 ">
                  known commonly as Javanese, is the language of the natives
                  that reside in Yogyakarta.
                </p>
                <div className="inline-flex font-medium items-center text-blue-950 hover:underline">
                  Learn Javanese
                  <img className="h-6" src={arrow} alt="arrow icon" />
                </div>
              </div>
            </a>
            <NavigateBack />
          </div>
        </div>
      </div>
    </>
  );
}
