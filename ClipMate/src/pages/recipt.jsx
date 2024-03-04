import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Input } from "../components/input";
import Button from "../components/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Recipt() {
  const [reciptData, setReciptData] = useState([]);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsLogin(true)
    }
  }, []);

  async function fetchData() {
    try {
      const result = await axios.get("https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/appointment");
      setReciptData(result.data);
    } catch (error) {
      Swal.fire("Error Message", `${error}`, "error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fullname = reciptData.length > 0 ? reciptData[reciptData.length - 1].name : "";

  return (
    <div>
      <Layout />
      {/* Hero Start */}
      <div className="bg-yellow-700 w-full flex justify-center">
        <div className="text-center pt-14 pb-14 text-5xl flex flex-col">
          <h1 className="font-bold font-serif">HERE IS YOUR RECIPT, {fullname}</h1>
        </div>
      </div>
      {/* Hero End */}

      {/* Recipt container Start */}

      <div className="flex justify-center">
        <div className="bg-gray-700 w-3/12 rounded-3xl ps-16 pe-16 pt-5 pb-5">
          <Input
            label="Order ID"
            className="text-white"
            readOnly="readonly"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].id : ""}
          />
          <Input
            label="Full Name"
            className="text-white"
            readOnly="readonly"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].name : ""}
          />
          <Input
            label="Gender"
            className="text-white"
            readOnly="readonly"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].gender : ""}
          />
          <Input
            label="Phone Number"
            className="text-white"
            readOnly="readonly"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].phone : ""}
          />
          <Input
            label="Date"
            className="text-white"
            readOnly="readonly"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].date : ""}
          />
          <Input
            label="Time"
            className="text-white"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].time : ""}
          />
          <Input
            label="Barberman"
            className="text-white"
            readOnly="readonly"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].barberman : ""}
          />
          <Input
            label="Service"
            className="text-white"
            readOnly="readonly"
            value={reciptData.length > 0 ? reciptData[reciptData.length - 1].service : ""}
          />
          <div className="flex flex-col">
            <span className="label-text-alt text-white">**Please save this recipt</span>
            <span className="label-text-alt text-white">
              Note: Please come 15 mnts before your appiontment. If your appointment is not available we will contact you through your number for cancelation and reschedule. Please keep in touch with us. Thankyou!!!
            </span>
          </div>
          <div className="flex justify-center mt-5">
            <Button
              label="Continiue"
              className="btn btn-primary"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      </div>

      {/* Recipt Container end */}
    </div>
  );
}
