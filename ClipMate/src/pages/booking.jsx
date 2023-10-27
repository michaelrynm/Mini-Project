import React, { useState } from "react";
import Layout from "../components/layout";
import { Input } from "../components/input";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../components/button";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(1),
  gender: z.string().min(1),
  phone: z.string().min(12, {message: "Phone Number Required Minimum 12"}),
  date: z.string(),
  time: z.string(),
  barberman: z.string().min(1),
  service: z.string().min(1),
});

export default function Booking() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      gender: "",
      barberman: "",
      service: "",
    }
  });

  const [dataTable, setDataTable] = useState([]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/appointment", data);
      setDataTable((dataTable) => [...dataTable, response.data]);
      console.log("Response from server", response.data);
      Toast.fire({
        icon: "success",
        title: "Form Submitted",
      });
      reset()
      setTimeout(()=>{
        navigate("/booking/recipt")
      }, 2000)
    } catch (error) {
      console.log("Error", error);
    }
  };

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

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center mt-2">
          <div>
            <Input
              label="Full Name"
              className="text-white mt-5"
              placeholder="Type here"
              type="text"
              name="name"
              register={register}
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
            <div className="flex flex-col">
              <label htmlFor="">
                <span className="font-normal text-white">Select Gender</span>
              </label>
              <select
                className="select select-bordered w-full"
                {...register("gender", { required: true })}
              >
                <option
                  disabled
                  selected
                  value=""
                >
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {errors.gender && <span className="text-red-500">This field is required</span>}

            <Input
              label="Phone Number"
              placeholder="08xx "
              className="text-white mt-5"
              type="number"
              name="phone"
              register={register}
            />
            {errors.phone && <span className="text-red-500">{errors.phone?.message}</span>}

            <div className="flex flex-col">
              <label htmlFor="">
                <span className="font-normal text-white">Select Date and Time</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full text-white"
                min={new Date().toISOString().split("T")[0]}
                {...register("date")}
              />
              {errors.date && <span className="text-red-500">This field is required</span>}

              <input
                type="time"
                className="input input-bordered w-full text-white mt-5"
                step="1800"
                min="09:00"
                max="21:00"
                {...register("time")}
              />
              {errors.time && <span className="text-red-500">This field is required</span>}

              <label htmlFor="">
                <span className="label-text-alt">Note: please choose 30 min time interval. Working hour from 9AM to 9PM. Otherwise will be cancelled</span>
              </label>
              <div className="flex flex-col mt-5">
                <label htmlFor="">
                  <span className="font-normal text-white">Select Barberman</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("barberman")}
                >
                  <option
                    disabled
                    selected
                    value=""
                  >
                    Barberman
                  </option>
                  <option value="Joel">Joel</option>
                  <option value="Fernando">Fernando</option>
                  <option value="Iman">Iman</option>
                </select>
              </div>
              {errors.barberman && <span className="text-red-500">This field is required</span>}

              <div className="flex flex-col mt-5">
                <label htmlFor="">
                  <span className="font-normal text-white">Select Service</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("service")}
                >
                  <option
                    disabled
                    selected
                    value=""
                  >
                    Package
                  </option>
                  <option value="Adult Complete Cut">Adult Complete Cut</option>
                  <option value="Junior Complete Cut">Junior Complete Cut</option>
                  <option value="Styling">Styling</option>
                  <option value="Shaving">Shaving</option>
                </select>
              </div>
              {errors.service && <span className="text-red-500">This field is required</span>}

              <div className="flex justify-center mt-5 mb-5">
                <Button
                  label="Make Appointment"
                  className="btn btn-primary "
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Form End */}
    </div>
  );
}
