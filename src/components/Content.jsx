import React from 'react'
import Men1 from "./../assets/Images/men1.webp";
import Men1hover from "./../assets/Images/men1.webp";
import image2 from "./../assets/Images/image2.webp";
import image1 from "./../assets/Images/image1.webp";
import image3 from "./../assets/Images/image3.webp";
import image4 from "./../assets/Images/image4.webp";
import image5 from "./../assets/Images/image5.webp";
import image6 from "./../assets/Images/image6.webp";
import { FaRegHeart } from "react-icons/fa6";

function Content() {
  return (
    <>

      {/* div  */}
      <div className=" text-center">
        <p className=" text-4xl font-semibold  text-[#193254] pt-10 pb-8">
          AGITATOR D’ELEGANCE
        </p>
        <p className="text-xl p-0.5">
          Organic materials, respect for know-how, responsible fashion..
        </p>
        <p className="text-xl p-0.5">
          And if instead of talking about what the’on is already doing, we were
          talking about what’on is doing
        </p>
        <p className="text-xl p-0.5">more?</p>
      </div>

      {/* The Novalties */}
      <div>
        <p className="text-4xl text-[#193254] pl-20 pt-5">THE NOVELTIES</p>
      </div>
      <div className="flex pl-20 pt-1 gap-3">
        <div className="relative">
          <img className="h-150 w-110 mt-6" src={Men1} alt=" Men 1" />
          <div className="absolute top-9 right-6 text-xl cursor-pointer text-black">
            <FaRegHeart />
          </div>
          <p className="mt-3">
            Menorca navy blue linen and cotton overshirt{" "}
            <span className="ml-5">150 $</span>
          </p>
        </div>

        <div className="relative">
          <img className="h-150 w-110 mt-6" src={Men1} alt=" Men 1" />
          <div className="absolute top-9 right-6 text-xl cursor-pointer text-black">
            <FaRegHeart />
          </div>
          <p className="mt-3">
            Menorca navy blue linen and cotton overshirt{" "}
            <span className="ml-5">150 $</span>
          </p>
        </div>
        <div className="relative">
          <img className="h-150 w-110 mt-6" src={Men1} alt=" Men 1" />
          <div className="absolute top-9 right-6 text-xl cursor-pointer text-black">
            <FaRegHeart />
          </div>
          <p className="mt-3">
            Menorca navy blue linen and cotton overshirt{" "}
            <span className="ml-5">150 $</span>
          </p>
        </div>
      </div>

      <div className="flex mt-20">
        <div className="relative w-200 h-180 overflow-hidden">
          <img
            className="w-full h-full transition-transform duration-300 hover:scale-110 cursor-pointer"
            src={image1}
            alt=""
          />
          <p className="absolute bottom-30 right-15 font-bold  text-6xl text-white cursor-pointer">
            FATHER'S DAY
          </p>
        </div>
        <div className="relative w-200 h-180 overflow-hidden">
          <img
            className="w-full h-full transition-transform duration-300 hover:scale-110 cursor-pointer"
            src={image2}
            alt=""
          />
          <p className="absolute bottom-30 right-15 font-bold  text-6xl text-white cursor-pointer">
            THE ARCHIVES
          </p>
        </div>
      </div>

      <div className="mt-20 flex text-3xl gap-12 text-center justify-center cursor-pointer">
        <div className="hover:text-[#193254]">LOOK LOITERER</div>
        <div className="text-gray-500 hover:text-[#193254]">LOOK STROLL</div>
        <div className=" text-gray-500 hover:text-[#193254]">LOOK CEREMONY</div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-[#193254] w-61 h-1 mt-2"></div>
        <div className="bg-[#b0c7e8] w-61 h-1 mt-2"></div>
        <div className="bg-[#b0c7e8] w-61 h-1 mt-2"></div>
      </div>

      <div className="flex mt-20">
        {/* Main Visual Section */}
        <div className="relative overflow-hidden ml-20 w-[700px] h-[801px]">
          <img
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            src={image3}
            alt="Main visual"
          />

          <p className="absolute bottom-32 right-10 font-semibold text-6xl text-white cursor-pointer">
            ELEGANCE AND
          </p>
          <p className="absolute bottom-20 right-10 font-semibold text-6xl text-white cursor-pointer">
            GROUNDS
          </p>
          <p className="absolute bottom-10 right-10 text-2xl text-white cursor-pointer">
            Discover look
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col justify-between ml-10 gap-1">
          {/* Product 1 */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                className="h-[262px] w-[200px] object-cover"
                src={image4}
                alt="Product 1"
              />
              <div className="absolute top-3 right-3 text-xl cursor-pointer text-black">
                <FaRegHeart />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold cursor-pointer">
                Menorca Navy Blue Overshirt
              </h3>
              <p className="text-sm text-gray-600">Linen and cotton blend</p>
              <p className="mt-2 font-bold">$150</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex items-start gap-4">
            <div className="relative group">
              <img
                className="h-[262px] w-[200px] object-cover transition-transform duration-300 group-hover:scale-95"
                src={image5}
                alt="Product 2"
              />
              <div className="absolute top-3 right-3 text-xl cursor-pointer text-black">
                <FaRegHeart />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold cursor-pointer">
                Ibiza Sand Beige Shirt
              </h3>
              <p className="text-sm text-gray-600">Casual summer style</p>
              <p className="mt-2 font-bold">$135</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                className="h-[262px] w-[200px] object-cover"
                src={image6}
                alt="Product 3"
              />
              <div className="absolute top-3 right-3 text-xl cursor-pointer text-black">
                <FaRegHeart />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold cursor-pointer">
                Capri Classic White Shirt
              </h3>
              <p className="text-sm text-gray-600">Breathable and timeless</p>
              <p className="mt-2 font-bold">$145</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-around bg-gray-200 mt-20">
        <div className=" pt-10 flex flex-col gap-2">
          <p className="font-semibold text-2xl">THANKS TO YOU !</p>
          <p>The Nines, accompanies you in your choices and</p>
          <p>creates for you, clothes and accessories in the best</p>
          <p>European workshops, with attention to detail and</p>
          <p>elegance’.</p>
          <p className=" text-red-500 hover:text-[#193254] underline mt-3 mb-2">
            See more reviews
          </p>
        </div>

        <div className="mt-16 mr-45 flex flex-col gap-2">
          <p className="text-yellow-400">?? ?? ?? ?? ??</p>
          <p>
            PRODUCT EVALUATED:{" "}
            <span className="font-bold underline cursor-pointer">
              FRENCH COLLAR SHIRT_WITH
            </span>
          </p>
          <p className="font-bold underline cursor-pointer">PARMA STIPES</p>
          <p>The shirt is amazing</p>
          <p className=" font-bold">by arunaud B : the 03/06/2025</p>
        </div>
      </div>
    </>
  )
}

export default Content