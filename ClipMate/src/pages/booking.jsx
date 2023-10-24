import React from "react";
import Layout from "../components/layout";
import { Input } from "../components/input";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../components/button";

export default function Booking() {
  return (
    <div>
      <Layout />
      {/* Hero Start */}
      <div className="bg-yellow-700 w-full flex justify-center">
        <div className="text-center pt-10 pb-10 text-5xl flex flex-col gap-5">
          <h1 className="font-bold font-serif">FILL THE FORM TO BOOK</h1>
          <h1 className="font-bold font-serif">YOUR APPOINTMENT.</h1>
        </div>
      </div>
      {/* Hero End */}

      {/* Form Start */}

      <form action="">
        <div className="flex justify-center mt-2">
          <div>
            <Input
              label="Full Name"
              className="text-white mt-5"
              placeholder="Type here"
            />
            <div className="flex flex-col">
              <label htmlFor="">
                <span className="font-normal text-white">Select Gender</span>
              </label>
              <select className="select select-bordered w-full">
                <option
                  disabled
                  selected
                >
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <Input
              label="Phone Number"
              placeholder="+62 "
              className="text-white mt-5"
            />
            <div className="flex flex-col">
              <label htmlFor="">
                <span className="font-normal text-white">Select Date and Time</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full text-white"
                min={new Date().toISOString().split("T")[0]}
              />
              <input
                type="time"
                className="input input-bordered w-full text-white mt-5"
                step="1800"
                min="09:00"
                max="21:00"
              />
              <label htmlFor="">
                <span className="label-text-alt">Note: please choose 30 min time interval. Working hour from 9AM to 9PM. Otherwise will be cancelled</span>
              </label>
              <div className="flex flex-col mt-5">
                <label htmlFor="">
                  <span className="font-normal text-white">Select Barberman</span>
                </label>
                <select className="select select-bordered w-full">
                  <option
                    disabled
                    selected
                  >
                    Barberman
                  </option>
                  <option>Joel</option>
                  <option>Fernando</option>
                  <option>Iman</option>
                </select>
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="">
                  <span className="font-normal text-white">Select Package</span>
                </label>
                <select className="select select-bordered w-full">
                  <option
                    disabled
                    selected
                  >
                    Package
                  </option>
                  <option>Adult Complete Cut</option>
                  <option>Junior Complete Cut</option>
                  <option>Styling</option>
                  <option>Shaving</option>
                </select>
              </div>
              <div className="flex justify-center mt-5 mb-5">
                <Button label="Make Appointment" />
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Form End */}
    </div>
  );
}
