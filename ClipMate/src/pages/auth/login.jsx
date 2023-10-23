import React from "react";
import Layout from "../../components/layout";
import image from "../../assets/loginImage.jpg";
import { Input } from "../../components/input";
import Button from "../../components/button";

export default function Login() {
  return (
    <div>
      <Layout />
      <form action="">
        <div className="flex justify-center">
          <div className="w-6/12 bg-stone-400 flex justify-center mt-24">
            <div className="columns-2">
              <div>
                <img
                  src={image}
                  alt=""
                />
              </div>
              <div className="flex flex-col text-black justify-center items-center">
                <p className="font-bold mt-36 text-3xl font-serif">LOGIN</p>
                <Input label="Username" />
                <Input label="Password" type="password" />
                <div className="mt-8">
                  <Button label="Log In" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
