import { useState } from "react";
import axios from 'axios';

const UsersPage = () => {
  const usersJson = require('/data/users.json');

  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");

  const handleRegister = async () => {
    const createUserPayload = {
      id: Date.now(),
      company,
      contact,
      country,
    }
    const {data} = await axios.post("/api/users/register", createUserPayload);
    console.log(data.done)
  };

  const handleDelete = async (id) => {
    const { data } = await axios({
      method: "delete",
      url: "/api/users/register",
      data: {
        id: Number(id),
      },
    });
    console.log(data.done)
  }

  return (
    <div className="flex flex-col w-screen h-screen items-center p-12 ">
      <h1 className="text-3xl">Users List</h1>

      <div>
        <label htmlFor="company" >Company
          <input
          id="company"
          type="text"
          value={company}
          onChange={(e)=>{setCompany(e.target.value)}}
          />
        </label>

        <label htmlFor="contact" >Contact
          <input
          id="contact"
          type="text"
          value={contact}
          onChange={(e)=>{setContact(e.target.value)}}
          />
        </label>

        <label htmlFor="country" >Country
          <input
          id="country"
          type="text"
          value={country}
          onChange={(e)=>{setCountry(e.target.value)}}
          />
        </label>

        <button
        className="bg-teal-100 rounded p-2 px-4"
        onClick={() => {handleRegister()}}
        >Post</button>
      </div>


      <div className="flex flex-col w-full mt-12 items-center ">
        <table class="shadow-lg bg-white ">
          <tbody>
            <tr>
              <th class="bg-teal-100 border text-center px-8 py-4">Company</th>
              <th class="bg-teal-100 border text-center px-8 py-4">Contact</th>
              <th class="bg-teal-100 border text-center px-8 py-4">Country</th>
              <th class="bg-teal-100 border text-center px-8 py-4">Delete</th>
            </tr>
            {
              usersJson.map((user)=>{return (
                <tr>
                  <td class="text-center border px-8 py-4">
                    {user.company}
                  </td>
                  <td class="text-center border px-8 py-4">{user.contact}</td>
                  <td class="text-center border px-8 py-4">{user.country}</td>
                  <td class="bg-red-100 text-center border px-8 py-4 hover:cursor-pointer "
                  onClick={() => {handleDelete(user.id)}}
                  > X </td>
                </tr>
              );})
            }
          </tbody>
        </table>
      </div>

      

    </div>
  );
};

export default UsersPage;
