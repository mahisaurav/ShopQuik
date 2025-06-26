import React from 'react'
import image7 from "./../assets/Images/image7.avif";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className="flex  ml-30 mt-10 gap-20 pb-20">
        <div className=" text-center">
          <img className="w-40 h-25 ml-10" src={image7} alt="" />
          <p className="col">FAST DELIVERY</p>
          <p>Free Delivery in metropolitican city</p>
          <p>from 150</p>
        </div>

        <div className=" text-center">
          <img className="w-40 h-25 ml-10" src={image7} alt="" />
          <p className="col">100% SATISFIED</p>
          <p>Free Delivery in metropolitican city</p>
          <p>from 150</p>
        </div>

        <div className=" text-center">
          <img className="w-40 h-25 ml-10 col" src={image7} alt="" />
          <p className="col">CONTACT-US</p>
          <p>Free Delivery in metropolitican city</p>
          <p>from 150</p>
        </div>

        <div className="text-center">
          <img className="w-40 h-25 ml-10" src={image7} alt="" />
          <p className="col">GUIDES & TUTORIAL</p>
          <p>Free Delivery in metropolitican city</p>
          <p>from 150</p>
        </div>
      </div>

      <footer className="flex justify-between p-10 bg-[#193254] text-white h-80">
        <div className="flex flex-col gap-3 text-2xl">
          <p className="mt-1 cursor-pointer hover:underline">CONTACT US</p>
          <p className=" cursor-pointer hover:underline">OUR SHOP IN INDIA</p>
          <p>FOLLOW US !</p>
          <div className="flex gap-4 mt-4 text-center">
            <div className="text-3xl">
              <FaFacebook />
            </div>
            <div className="text-3xl">
              <FaInstagram />
            </div>
            <div className="text-3xl">
              <FiYoutube />
            </div>
            <div className="text-3xl">
              <FaXTwitter />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xl">THE NINES UNIVERSE</p>
          <p className="mt-2 cursor-pointer hover:underline">About</p>
          <p className=" cursor-pointer hover:underline">Our Philosphy</p>
          <p className=" cursor-pointer hover:underline">Our Team</p>
          <p className=" cursor-pointer hover:underline">Customer Review</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xl">ORDER TRACKING</p>
          <p className="mt-2 cursor-pointer hover:underline">Delivery</p>
          <p className=" cursor-pointer hover:underline">Exchange and Return</p>
          <p className=" cursor-pointer hover:underline">Size guide</p>
          <p className=" cursor-pointer hover:underline">Customer Review</p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl">SIGN UP FOR THE NEWSLETTER!</p>
          <p className=" mt-2">
            You can unsubscribe at any time. You will find our{" "}
          </p>
          <p>contact information in the terms of use of the site.</p>
          <input
            className="mt-8 p-3 border-2"
            type="text"
            placeholder="Here my e-mail"
            name=""
            id=""
          />
        </div>
      </footer>
      <div className="text-gray-400 text-center">
        <p> Directed By Off Agency</p>
      </div>
    </>
  )
}

export default Footer