import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import image from "../../assets/loginImage.jpg";
import { Input } from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const navigate = useNavigate();

  useEffect(() => {
    Toast.fire({
      icon: "info",
      title: "Please LogIn First",
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const dummyUser = {
      username: "user",
      password: "password123",
    };

    localStorage.setItem("dummyUser", JSON.stringify(dummyUser));

    if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      navigate("/");
    } else {
      setError("Username atau Password salah");
    }
  };

  return (
    <div>
      <Layout />
      <form
        action=""
        onSubmit={handleLogin}
      >
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
                <Input
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={error}
                />
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={error}
                />
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
