import desi from "../assets/portrait/desi.jpg";
import sharon from "../assets/portrait/sharon.jpg";
import tere from "../assets/portrait/tere.jpg";
import bintang from "../assets/portrait/Bintang.jpg";
import denzel from "../assets/portrait/denzel1.jpg";

import DynamicNavigationButtons from "../components/DynamicNavigationButtons";

export default function AboutUs() {
  return (
    <div className="h-full">
      <h1 class="text-5xl mt-10 text-center font-semibold text-myColor-500 font-serif">
        Hihiheha
        <br />
      </h1>
      <h1 class="text-5xl mt-2 mb-10 text-center text-myColor-200 font-serif">
        Meet Our Team!
      </h1>

      <div class="flex justify-around flex-wrap px-14">
        <div class="w-52 mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-myColor-500 mb-5">
          <div class="relative">
            <img class="w-full h-48 object-cover" src={bintang} />
          </div>
          <div class="px-6 py-4">
            <div class="text-xl font-semibold text-gray-800">
              Hafizh Dikara Bintang
            </div>
            <p class="text-gray-600">00000104984</p>
            <br />
          </div>
          <div class="px-6 py-4">
            <span class="inline-block px-2 py-1 font-semibold text-zinc-50 bg-yellow-500 rounded-full ">
              Code
            </span>
          </div>
          <div class="px-6 py-4">
            <a
              href="https://www.instagram.com/dikarabintang/"
              class="text-yellow-600 hover:underline"
            >
              @dikarabintang
            </a>
          </div>
        </div>

        <div class="w-52 mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-yellow-600 mb-5">
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src={denzel}
              alt="Profile Image"
            />
          </div>
          <div class="px-6 py-4 pb-3">
            <div class="text-xl font-semibold text-gray-800">
              Benediktus Denzel Galgani Lumenon
            </div>
            <p class="text-gray-600">00000106218</p>
          </div>
          <div class="px-6 py-4 pb-3">
            <span class="inline-block px-2 py-1 font-semibold text-zinc-50 bg-yellow-500 rounded-full ">
              Code
            </span>
          </div>
          <div class="px-6 py-4 pb-3">
            <a
              href="https://www.instagram.com/denzellumenon/"
              class="text-yellow-600 hover:underline"
            >
              @denzellumenon
            </a>
          </div>
        </div>

        <div class="w-52 mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-yellow-600 mb-5">
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src={desi}
              alt="Profile Image"
            />
          </div>
          <div class="px-6 py-4">
            <div class="text-xl font-semibold text-gray-800">Descellia Ng</div>
            <p class="text-gray-600">00000108296</p>
            <br />
            <br />
          </div>
          <div class="px-6 py-4 mt-2 -mb-1">
            <span class="inline-block px-2 py-1 font-semibold text-zinc-50 bg-yellow-700 rounded-full">
              Design
            </span>
          </div>
          <div class="px-6 py-4 ">
            <a
              href="https://www.instagram.com/descellia/"
              class="text-yellow-600 hover:underline"
            >
              @descellia
            </a>
          </div>
        </div>

        <div class="w-52 mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-yellow-600 mb-5">
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src={tere}
              alt="Profile Image"
            />
          </div>
          <div class="px-6 py-4 ">
            <div class="text-xl font-semibold text-gray-800">
              Theresia Glory Emmanuella
            </div>
            <p class="text-gray-600">00000100723</p>
            <br />
          </div>
          <div class="px-6 py-4 ">
            <span class="inline-block px-2 py-1 font-semibold text-zinc-50 bg-amber-800 rounded-full">
              Banner
            </span>
          </div>
          <div class="px-6 py-4 ">
            <a
              href="https://www.instagram.com/abigailtheresiaaa/"
              class="text-yellow-600 hover:underline"
            >
              @abigailtheresiaaa
            </a>
          </div>
        </div>

        <div class="w-52 mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-yellow-600 mb-5">
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src={sharon}
              alt="Profile Image"
            />
          </div>
          <div class="px-6 py-4 ">
            <div class="text-xl font-semibold text-gray-800">
              Sharon Tionardi
            </div>
            <p class="text-gray-600">00000095084</p>
            <br />
            <br />
          </div>
          <div class="px-6 py-4 mt-2 -mb-1">
            <span class="inline-block px-2 py-1 font-semibold text-zinc-50 bg-amber-800 rounded-full">
              Banner
            </span>
          </div>
          <div class="px-6 py-4 ">
            <a
              href="https://www.instagram.com/shrron__/"
              class="text-yellow-600 hover:underline"
            >
              @shrron__
            </a>
          </div>

        </div>
      </div>
        <DynamicNavigationButtons/>
    </div>
  );
}
