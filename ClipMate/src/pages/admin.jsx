import { useEffect, useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Admin() {
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState([]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  async function fetchData() {
    try {
      const result = await axios.get("https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/appointment");
      setDataTable(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete(index) {
    async function Delete(index) {
      try {
        const id = dataTable[index].id;
        const url = `https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/appointment/${id}`;
        const response = await axios.delete(url);
        console.log("Response from server: ", response.data);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }

    Swal.fire({
      title: "Do you want to delete this data?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Delete(index);
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <div>
      {/* Navbar Start */}
      <div className="flex bg-zinc-800 p-6 justify-end">
        <div className="">
          <Button
            label="Logout"
            className="btn btn-error rounded-full"
            onClick={handleLogout}
          />
        </div>
      </div>
      {/* Navbar End */}
      {/* Tittle Start */}
      <div className="bg-yellow-700 w-full flex justify-center">
        <div className="text-center pt-14 pb-14 text-5xl flex flex-col">
          <h1 className="font-bold font-serif">Welcome, Admin!</h1>
        </div>
      </div>
      {/* Tittle end */}

      {/* Table Start */}

      <div className="overflow-x-auto ps-16 pe-16 mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Appointment Id</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Barberman</th>
              <th>Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.phone}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.barberman}</td>
                <td>{data.service}</td>
                <td>
                  <Button
                    label="Delete"
                    className="btn btn-error"
                    onClick={() => handleDelete(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table End */}
    </div>
  );
}
