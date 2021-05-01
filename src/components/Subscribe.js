import React, { useEffect, useState } from 'react'
import useForm from "../hooks/useForm";

const Subscribe = () => {

  // const [email, setEmail] = useState('garay@gmail.com')
  // const [lastName, setLastName] = useState('garay')
  // const [firstName, setFirstName] = useState('soto')





  const handleSubmit = (event) => {
    event.preventDefault();

    //First fetch
    fetch('https://mastermailing.herokuapp.com/subscriber/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //here valid my values
      body: JSON.stringify(
        {
          "subscriber": {
            "firstName": "Amaury",
            "lastName": "Soto",
            "email": "amaurysotog@gmail.com"
          }
        }
      )
    })
      .then(function (response) {
        //responde convert to json
        console.log('---> response json to token')
        return response.json()
        //here return token
      })

      .then(token => {
        console.log('--->Token:', token)

        //with this token make second fetch
        fetch('https://mastermailing.herokuapp.com/subscriber/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          //now my body is token 
          body: JSON.stringify(token)
        })
          .then(result => console.log('--->send:', result.json())
            .then()

          )

          .catch(error => console.log(error))
      })

      .catch(error => console.log(error))
  };




  return (
    <div>
      <form className="m-4 flex" type="submit" onSubmit={handleSubmit} >
        <input
          autoComplete="off"
          type='text'
          name="email"
          // value={email}

          // onChange={handleInputChange}
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"

        />
        <input
          autoComplete="off"
          type='text'
          name="lastName"
          // value={lastName}
          // onChange={handleInputChange}
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Name"

        />
        <input
          autoComplete="off"
          type='text'
          name="firstName"
          // value={firstName}

          // onChange={handleInputChange}
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Lastname"

        />


        <button className="px-8 rounded-r-lg bg-indigo-600  text-white font-bold p-4 uppercase  border-t border-b border-r">Subscribe</button>
      </form>
    </div>
  )
}

export default Subscribe
