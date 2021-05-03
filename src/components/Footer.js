import React from "react";


function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert pb-12">
        <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
          <div>
            <img src="https://i.postimg.cc/Dy3w7Zky/Logo-Hey-Jobs.jpg" width={350} height={150} />


          </div>
          <div className="text-black flex flex-col md:items-center f-f-l pt-3">
            <h1 className="text-2xl font-black">The best way to get a job.</h1>

            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Jobs</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Features</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Positions</li>

              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l">
              <p> © 2020 Prodify. All rights reserved</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
