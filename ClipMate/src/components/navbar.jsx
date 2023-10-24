import React, { useState } from "react";
import Button from "./button";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex bg-zinc-800 p-6 justify-between">
      <div className="flex text-white gap-10">
        <Link to={"/"}>HOME</Link>
        <Link to={"/booking"}>BOOKING</Link>
        <Link to={"/profile"}>PROFILE</Link>
      </div>
      <div className="flex text-white gap-10">
        {isLogin ? (
          <div>
            <Button
              label="Log out"
              aria-label="btn-logout"
              className="bg-yellow-600 text-black rounded-full pe-4 ps-4 pt-1 pb-1"
            />
          </div>
        ) : (
          <div className="flex gap-5">
            <Button
              label="Log In"
              aria-label="btn-login"
              className="bg-white text-black rounded-full pe-4 ps-4 pt-1 pb-1"
              onClick={() => navigate("/login")}
            />
            <Button
              label="Sign Up"
              aria-label="btn-signup"
              className="bg-yellow-600 rounded-full pe-4 ps-4 pt-1 pb-1"
              onClick={() => navigate("/register")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
