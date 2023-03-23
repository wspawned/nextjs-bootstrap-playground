import { useState } from "react";
import axios from 'axios';

const UsersPage = () => {
  const usersJson = require('/data/users.json');

  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [editItem, setEditItem] = useState(null);

  const handleRegister = async () => {
    const createUserPayload = {
      company,
      contact,
      country,
    }
    await axios.post("/api/users/register", createUserPayload)
    .then((res) => {
      const {data} = res;
      console.log(data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  };

  const handleUpdate = async () => {
    const updateUserPayload = editItem;
    await axios.put("/api/users/register", updateUserPayload)
    .then((res) => {
      const {data} = res;
      console.log(data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  };

  const handleDelete = async (id) => {
    await axios.delete("/api/users/register",
      {
        params: {
          id: id,
        }
      }
    ).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err.response.data)
    })
  }

  return (
    <div className="flex flex-col w-screen h-screen items-center p-12 ">
      <h1 className="text-3xl">Users List</h1>

      <div>
        <label htmlFor="company">
          Company
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </label>

        <label htmlFor="contact">
          Contact
          <input
            id="contact"
            type="text"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </label>

        <label htmlFor="country">
          Country
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </label>

        <button
          className="bg-teal-100 rounded p-2 px-4"
          onClick={() => {
            handleRegister();
          }}
        >
          Post
        </button>
      </div>

      <div className="flex flex-col w-full mt-12 items-center ">
        <table className="shadow-lg bg-white ">
          <tbody>
            <tr>
              <th className="bg-teal-100 border text-center px-8 py-4">Company</th>
              <th className="bg-teal-100 border text-center px-8 py-4">Contact</th>
              <th className="bg-teal-100 border text-center px-8 py-4">Country</th>
              <th className="bg-teal-100 border text-center px-8 py-4">Delete</th>
              <th className="bg-teal-100 border text-center px-8 py-4">Edit</th>
            </tr>
            {usersJson.map((user) => {
              return (
                <tr key={user.id} >
                  <td className="text-center border px-8 py-4">{user.company}</td>
                  <td className="text-center border px-8 py-4">{user.contact}</td>
                  <td className="text-center border px-8 py-4">{user.country}</td>
                  <td
                    className="bg-red-100 text-center border px-8 py-4 hover:cursor-pointer "
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    X
                  </td>
                  <td
                    className="bg-orange-100 text-center border px-8 py-4 hover:cursor-pointer "
                    onClick={() => {setEditItem(user);}}
                  >
                    <span>&#x270D;</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {editItem !== null ? 
      (
        <div className="flex flex-row">
          <label htmlFor="edit-company">
            Company
            <input
              id="edit-company"
              type="text"
              value={editItem.company}
              onChange={(e) => {
                setEditItem({... editItem, company:e.target.value});
              }}
            />
          </label>

          <label htmlFor="edit-contact">
            Contact
            <input
              id="edit-contact"
              type="text"
              value={editItem.contact}
              onChange={(e) => {
                setEditItem({... editItem, contact:e.target.value});
              }}
            />
          </label>

          <label htmlFor="edit-country">
            Country
            <input
              id="edit-country"
              type="text"
              value={editItem.country}
              onChange={(e) => {
                setEditItem({... editItem, country:e.target.value});
              }}
            />
          </label>

          <button
            className="bg-teal-100 rounded p-2 px-4"
            onClick={() => {
              handleUpdate();
            }}
          >
            Edit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default UsersPage;
