import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Subscribe = () => {

    const [credential, setCredential] = useState({
        name: '',
        email: '',
        password: ''
    })

    let history = useHistory();

    let { name, email, password } = credential

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
         e.preventDefault();
        const data = {name, email, password };
          fetch('https://62c3d88eabea8c085a647351.mockapi.io/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }).then(() => {
            console.log('new')
            history.push('/')
          });
    }
    return (
        <section className="text-center pt-14 px-64">
            <button className="bg-blue-900 p-4 rounded-xl px-6 py-3 text-white mt-20">
                <NavLink exact activeClassName="active" to="/">
                    back
                </NavLink>
            </button>
            <form onSubmit={handleSubmit} className="border p-8 rounded shadow py-3">

                <h2 className="text-left text-xl">Sign Up</h2>
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
                    placeholder="Name"
                    value={name}
                />
                <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    className="block w-full border rounded-lg border-gray-300 px-2 py-3 mx-auto mt-4 h-10"
                    placeholder="Email Address"
                    value={email}
                />
                <input
                    onChange={handleChange}
                    type="text"
                    name="password"
                    className="block w-full border rounded-lg border-gray-300 px-2 py-3 mx-auto mt-4 h-10"
                    placeholder="Password"
                    value={password}
                />
                <div className="text-right pt-8">
                    <button className=" bg-blue-700 px-6 rounded text-white h-10 inline-block submit hover:bg-green-700 submit"
                        type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Subscribe;