import React, { useEffect, useState } from "react";
import Button from "./button";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Navbar() {
  const navigate = useNavigate();
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

  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    setIsLogin(false);
    Toast.fire({
      icon: "success",
      title: "Logout successfully",
    });
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="flex bg-zinc-800 p-6 justify-between">
      <div className="flex text-white gap-10">
        <Link to={"/"}>HOME</Link>
        {isLogin ? <Link to={"/booking"}>BOOKING</Link> : <Link to={"/login"}>BOOKING</Link>}
        <Link to={"/profile"}>PROFILE</Link>
      </div>
      <div className="flex text-white gap-10">
        {isLogin ? (
          <div>
            <Button
              label="Log out"
              aria-label="btn-logout"
              className="bg-yellow-600 text-black rounded-full pe-4 ps-4 pt-1 pb-1"
              onClick={handleLogout}
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
