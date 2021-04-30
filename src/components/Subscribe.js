import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Subscribe = () => {
  return (
    <div>
      <div className="w-full -mt-6 pt-32 pb-24 px-12 text-center bg-gray text-black" style={{ backgroundColor: 'rgb(249 249 249)' }}>
        <h2 className="text-4xl mb-6">Subscribe to join us</h2>
        <p className="font-sans text-sm mx-auto max-w-xl leading-loose mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>


        {/* <form  >

          <div className="pt-10 mb-6  justify-center items-end text-left">


            <div className="p-4">
              <input type="email" name="" placeholder="Email address" className="font-sans text-sm px-2 h-10 bg-transparent border-b-2" />
              </div>
            <button className="mx-auto bg-white text-black px-6 py-3 flex items-center justify-center text-sm hover:bg-gray-400">Subscribe</button>

          </div>


        </form> */}
        <div >
          <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </div>


      </div>
    </div>

  )
}

export default Subscribe
