import { useState } from "react";
import axios from 'axios';

const UsersPage = () => {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const handleRegister = async () => {
    const createUserPayload = {
      id: Date.now(),
      company,
      contact,
      country,
    }
    const {data} = await axios.post("/api/users/register", createUserPayload);
    console.log(createUserPayload)
    console.log(data.done)
  };

  const handleDelete = async () => {
    const deletePayload = {id: deleteId}
    console.log(deletePayload)
    const {data} = await axios.delete("/api/users/register", deletePayload);
    console.log(data.done)
  }

  return (
    <div className="flex flex-col w-screen h-screen items-center p-12 ">
      <h1 className="text-3xl">Users List</h1>
      <div className="flex flex-col w-full mt-12 items-center ">
        <table class="shadow-lg bg-white ">
          <tbody>
            <tr>
              <th class="bg-teal-100 border text-center px-8 py-4">Company</th>
              <th class="bg-teal-100 border text-center px-8 py-4">Contact</th>
              <th class="bg-teal-100 border text-center px-8 py-4">Country</th>
            </tr>
            <tr>
              <td class="text-center border px-8 py-4">Alfreds Futterkiste</td>
              <td class="text-center border px-8 py-4">Dante Sparks</td>
              <td class="text-center border px-8 py-4">Italy</td>
            </tr>
            <tr>
              <td class="text-center border px-8 py-4">
                Centro comercial Moctezuma
              </td>
              <td class="text-center border px-8 py-4">Neal Garrison</td>
              <td class="text-center border px-8 py-4">Spain</td>
            </tr>
            <tr>
              <td class="text-center border px-8 py-4">Ernst Handel</td>
              <td class="text-center border px-8 py-4">Maggie O'Neill</td>
              <td class="text-center border px-8 py-4">Austria</td>
            </tr>
          </tbody>
        </table>
      </div>

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
        className="bg-teal-100"
        onClick={() => {handleRegister()}}
        >Post</button>
      </div>

      <input
      type="text"
      value={deleteId}
      onChange={(e) => {setDeleteId(e.target.value)} }
      />

      <button
        className="bg-red-100"
        onClick={() => {handleDelete()}}
        >Delete</button>



    </div>
  );
};

export default UsersPage;
