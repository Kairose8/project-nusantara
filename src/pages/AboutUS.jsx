import desi from "../assets/desi.jpg";
import sharon from "../assets/sharon.jpg";
import tere from "../assets/tere.jpg";
import bintang from "../assets/Bintang2.jpg";
import denzel from "../assets/denzel1.jpg";

export default function AboutUs() {
  return (
    <>
      <h1 class="text-5xl mt-10 text-center font-semibold text-yellow-800 font-serif">
        Hihiheha
        <br />
      </h1>
        <h1 class="text-5xl mt-2 mb-10 text-center text-yellow-400 font-serif">
          Meet Our Team!
        </h1>

      <div class="flex justify-around flex-wrap px-14">
        <div class="w-52 mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-yellow-600 mb-5">
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
            <p class="text-gray-600">00000104984</p>
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
            <p class="text-gray-600">00000104984</p>
            <br />
            <br />
          </div>
          <div class="px-6 py-4 ">
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
            <p class="text-gray-600">00000104984</p>
            <br />
          </div>
          <div class="px-6 py-4 ">
            <span class="inline-block px-2 py-1 font-semibold text-zinc-50 bg-amber-800 rounded-full">
              Outfit
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
            <p class="text-gray-600">00000104984</p>
            <br />
            <br />
          </div>
          <div class="px-6 py-4 ">
            <span class="inline-block px-2 py-1 font-semibold text-zinc-50 bg-amber-800 rounded-full">
              Outfit
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

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
