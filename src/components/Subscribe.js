import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'



const Subscribe = () => {

  //Here values from hooks useForm
  const { register, errors, handleSubmit } = useForm()



  const onSubmit = (data) => {

    // console.log(data.firstName)
    // console.log(data.lastName)
    // console.log(data.email)

    //First fetch
    fetch('https://mastermailing.herokuapp.com/subscriber/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //here valid my values
      body: JSON.stringify(
        {
          "subscriber": {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email
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
        console.log('--->Token or error: ', token)
        //Here, if my response contains error, return swal whit error from endpoint
        if (token.error) {
          return swal("Something is wrong", `${token.error}`, "warning");
        }

        //with this token make second fetch
        fetch('https://mastermailing.herokuapp.com/subscriber/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          //now my body is token 
          body: JSON.stringify(token)
        })
          .catch(error => {
            swal("Something is wrong", `${error}`, "warning");

          })
          .then(result => {
            console.log('--->send:', result.json())
            swal("Registered User", "Check your notification email", "success");
          })

          .catch(error => {

            console.log(error)
          })
      })

      .catch(error => {
        console.log(error)

      })


  };




  return (

    <div className="max-w-7xl mx-auto px-8 my-8">
      <div className="max-w-6xl ">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">


            <form className="flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <label for="name" className="hidden">Full Name</label>
                <input
                  type="text"
                  name="firstName"
                  {...register("firstName")}
                  id="name"
                  placeholder="First Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div className="flex flex-col mt-2">
                <label for="email" className="hidden">Email</label>
                <input
                  type="text"
                  name="lastName"
                  {...register("lastName")}
                  id="email"
                  placeholder="Last Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div className="flex flex-col mt-2">
                <label for="tel" className="hidden">Number</label>
                <input
                  type="text"
                  name="email"
                  {...register("email")}
                  id="email"
                  placeholder="your@email.com"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                Subscribe
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Subscribe


