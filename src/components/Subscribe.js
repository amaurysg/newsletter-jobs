import React, { useState } from 'react'
import useForm from "../hooks/useForm";

const Subscribe = () => {


  const [datos, setDatos] = useState({
    email: '',
  })

  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form subscribe!')
  }




  return (
    <div>
      <form className="m-4 flex" type="submit" onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type='text'
          name="email"

          onBlur={handleInputChange}
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"

        />


        <button className="px-8 rounded-r-lg bg-indigo-600  text-white font-bold p-4 uppercase  border-t border-b border-r">Subscribe</button>
      </form>
    </div>
  )
}

export default Subscribe
