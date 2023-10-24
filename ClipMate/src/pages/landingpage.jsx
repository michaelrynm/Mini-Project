import React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

import { BsScissors, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaPumpSoap, FaWineBottle, FaLocationArrow } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";

export default function Landingpage() {
  const navigate = useNavigate()

  const handleBooking = (e) => {
    e.preventDefault()
    navigate("/booking")
  }

  return (
    <>
      <Layout />
      {/* Hero Section Start*/}
      <div className="background">
        <div className="text-center p-9">
          <h1 className="font-medium text-white text-6xl font-serif">CLIP MATE</h1>
          <div className="text-white mt-44 text-lg font-medium">
            <p>When you feeling low. When you need someone to talk to.</p>
            <p>When you want to make a fresh start</p>
            <p>ClipMate at your service.</p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button
            label="Book Now"
            className="text-white bg-yellow-600 rounded-full w-32 h-16 font-serif font-bold"
            onClick={handleBooking}
          />
        </div>
      </div>
      {/* Hero Section End */}

      {/* Card Section Start */}
      <div>
        <div>
          <div className="bg-neutral-800 pt-20 pb-20">
            <div className="font-serif font-bold text-3xl text-center text-white">SERCIVCES</div>
            <div className="columns-4 text-white justify-center flex gap-12 mt-16">
              <div className="bg-black w-64 h-64 rounded-3xl flex justify-center items-center">
                <div>
                  <p className="text-9xl text-yellow-600">
                    <BsScissors />
                  </p>
                  <p className="mt-7 text-center font-bold font-serif text-xl">HAIRCUT</p>
                </div>
              </div>
              <div className="bg-black w-64 h-64 rounded-3xl flex justify-center items-center">
                <div>
                  <p className="text-9xl text-yellow-600">
                    <FaPumpSoap />
                  </p>
                  <p className="mt-7 text-center font-bold font-serif text-xl">HAIR WASH</p>
                </div>
              </div>
              <div className="bg-black w-64 h-64 rounded-3xl flex justify-center items-center">
                <div>
                  <p className="text-9xl text-yellow-600">
                    <FaWineBottle />
                  </p>
                  <p className="mt-7 text-center font-bold font-serif text-xl">GROOMING</p>
                </div>
              </div>
              <div className="bg-black w-64 h-64 rounded-3xl flex justify-center items-center">
                <div>
                  <p className="text-9xl text-yellow-600">
                    <GiRazor />
                  </p>
                  <p className="mt-7 text-center font-bold font-serif text-xl">SHAVING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Section End */}

      {/* About Section Start */}
      <div>
        <div className="bg-neutral-900">
          <div className="text-center text-white pt-16">
            <h2 className="font-serif font-bold text-3xl text-center text-white">ABOUT US</h2>
          </div>
          <div className="columns-2 text-white pb-20 pe-20 flex justify-center gap-40 text-center mt-10">
            <div className="bg-black w-4/12 h-96 p-8 flex justify-center items-center rounded-3xl">
              <div>
                <p className="font-medium">
                  ClipMate is a primary option for your hair and grooming needs. With us, you can consult your hair issues and we will give you some suggestions. Throughout the establishment of ClipMate, We have managed to help lots of
                  people
                </p>
                <p className="font-medium mt-5">In case you feel low or needs some socials. feel free to visit us and absorb our blastful and positive aural.</p>
              </div>
            </div>
            <div className="bg-black w-4/12 h-96 p-8 justify-center items-center flex flex-col gap-10 rounded-3xl">
              <div className="flex items-center gap-5 text-2xl">
                <p className="text-white">
                  <FaLocationArrow/>
                </p>
                <p>Semarang</p>
              </div>
              <div className="flex items-center gap-5 text-2xl">
                <p className="text-white">
                  <BsWhatsapp/>
                </p>
                <p>+62 12345678891</p>
              </div>
              <div className="flex items-center gap-5 text-2xl">
                <p className="text-white">
                  <BsInstagram/>
                </p>
                <p>ClipMate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}
    </>
  );
}
