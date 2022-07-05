import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoEarth } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const Home = () => {

  const [item, setItem] = useState([])

  const getItems = async () => {
    const res = await fetch('https://62c3d88eabea8c085a647351.mockapi.io/inter');
     
    setItem(await res.json())
  }

  useEffect(() => {

    getItems();

  }, [])

  return (
    <div className="bg-blue-900 p-20 mx-auto">
      <h1 className="w-auto  text-gray-100 sm:text-4xl  mx-3 text-xl">Available Times</h1>
      <h6 className="mx-4 text-lg text-gray-100 mt-2">Calcutta Time</h6>
      <div className="flex items-center mx-3 justify-between">

        <div className="flex items-center text-gray-100 ">
          <IoEarth />
          <h5 className="mx-2 text-lg">This teacher may live in a different time zone.</h5>
        </div>

        <div className="flex item-center mx-2">
          <div className="bg-white  p-3 rounded-3xl mx-2">
            <IoChevronBackOutline />
          </div>
          <div className="bg-white p-3 rounded-3xl">
            <IoChevronForward />
          </div>
        </div>
      </div>
      <div className="bg-indigo-900 text-center m-2 mt-9 border-2 border-yellow-400 rounded-lg">
        <h6 className="text-gray-100 p-4  text-2xl">🔥 This class is in high demand! 11 of 36 classes have sold out.</h6>
      </div>
      <div className="flex item-center gap-3 justify-between p-5 ">

        {
          item.map((elm, id) => {
            return (
              <div className="bg-white p-8 rounded-2xl border-4 hover:border-black" key={elm.id}>
                <h3 className="text-bold text-gray-900 text-4xl mt-2">{elm.text}</h3>
                <h6 className="text-gray-900 mt-6">Meets Once Per</h6>
                <h6 className="text-gray-900">Week</h6>
                <h6 className="text-gray-900 ">{elm.week}</h6>
                <h5 className="">{elm.time}</h5>

                <div className="flex items-center text-blue-700 mt-8">
                  <h5 className="text-xl ">Show Details</h5>
                  <IoIosArrowDown className="mt-1" />
                </div>

                <button className="bg-blue-900 p-4 rounded-3xl px-6 py-3 text-end text-white mt-20">
                  <NavLink exact activeClassName="active" to="/subscibe">
                    Subscribe
                  </NavLink>
                </button>
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default Home