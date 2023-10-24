import React from "react";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";
import Service from "../components/service";

import cut1 from "../assets/cut1.jpg";
import cut2 from "../assets/cut2.jpg";
import cut3 from "../assets/cut3.jpg";
import cut4 from "../assets/cut4.jpg";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

export default function Profile() {
  const navigate = useNavigate();
  const handleBook = (e) => {
    e.preventDefault();
    navigate("/booking");
  };
  return (
    <div>
      <Layout />
      {/* Hero Start */}
      <div className="bg-yellow-700 w-full flex justify-center">
        <div className="text-center pt-14 pb-14 text-5xl flex flex-col">
          <h1 className="font-bold font-serif">SOME MATES YOU CAN CHILL WITH</h1>
        </div>
      </div>
      {/* Hero End */}

      {/* Card Profile Start */}
      <div className="columns-3 p-5 flex justify-center">
        <div className="card card-side bg-base-100 shadow-xl w-5/6">
          <figure>
            <img
              src={person1}
              alt="Movie"
            />
          </figure>
          <div className="card-body w-5/6">
            <h2 className="card-title">Joel</h2>
            <p>Sculpting Style, Shaping Lives - Your Trusted Barber</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={handleBook}
              >
                Make Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl w-5/6">
          <figure>
            <img
              src={person2}
              alt="Movie"
            />
          </figure>
          <div className="card-body w-5/6">
            <h2 className="card-title">Fernando</h2>
            <p>Where Tradition Meets Trend: Your Premier Barbershop Experience.</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={handleBook}
              >
                Make Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl w-5/6">
          <figure>
            <img
              src={person3}
              alt="Movie"
            />
          </figure>
          <div className="card-body w-5/6">
            <h2 className="card-title">Iman</h2>
            <p>Precision Cuts, Timeless Confidence - Your Barber, Your Identity</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={handleBook}
              >
                Make Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Profile End */}

      {/* Hero Start */}
      <div className="bg-yellow-700 w-full flex justify-center">
        <div className="text-center pt-14 pb-14 text-5xl flex flex-col">
          <h1 className="font-bold font-serif">SEE OUR SERVICES</h1>
        </div>
      </div>
      {/* Hero End */}

      {/* Price Card Start */}

      <div className="columns-4 mt-10 flex justify-center gap-16 mb-10 ">
        <Service
          title="Adult Complete Cut"
          desc="Haircut + Wash + Hair Tonic + Hair Products + Massage"
          image={cut1}
        />
        <Service
          title="Junior Complete Cut"
          desc="Haircut + Wash + Hair Tonic + Hair Products + Massage"
          image={cut4}
        />
        <Service
          title="Styling"
          desc="Style your hair for your best day"
          image={cut3}
        />
        <Service
          title="Shaving"
          desc="Precision Shaving"
          image={cut2}
        />
      </div>

      {/* Price Card End */}
    </div>
  );
}
