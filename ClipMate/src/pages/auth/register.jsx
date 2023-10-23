import React from "react";
import Layout from "../../components/layout";
import image from "../../assets/loginImage.jpg";
import { Input } from "../../components/input";
import Button from "../../components/button";

export default function Register() {
  return (
    <div>
      <Layout />
      <form action="">
        <div className="flex justify-center">
          <div className="w-6/12 bg-neutral-500 flex justify-center mt-24">
            <div className="columns-2">
              <div>
                <img
                  src={image}
                  alt=""
                />
              </div>
              <div className="flex flex-col text-black justify-center items-center">
                <p className="font-bold mt-36 text-3xl font-serif">SIGN UP</p>
                <Input label="Username" />
                <Input label="Password" type="password" />
                <div className="mt-8">
                  <Button label="Register" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
