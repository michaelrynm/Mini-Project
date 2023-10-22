import React from "react";
import Button from "./button";

export default function Navbar() {
  return (
    <div className="flex bg-zinc-800 p-6 justify-between">
      <div className="flex text-white gap-10">
        <p className="">HOME</p>
        <p>BOOKING</p>
      </div>
      <div className="flex text-white gap-10">
        <Button
          label="Log In"
          aria-label="btn-login"
          className="bg-white text-black rounded-full pe-4 ps-4 pt-1 pb-1"
        />
        <Button
          label="Sign Up"
          aria-label="btn-signup"
          className="bg-yellow-600 rounded-full pe-4 ps-4 pt-1 pb-1"
        />
      </div>
    </div>
  );
}
