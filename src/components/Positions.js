/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import Jobs from '../data/jobs'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}






export default function Positions() {
  return (
    <div className="lg:flex lg:items-center  lg:justify-between my-5 max-w-7xl mx-auto px-4">
      {
        Jobs.map((job, i) => {
          return (

            <div>

              <div className=" min-w-0 ">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{job.title}</h2>
                <div className="mt-1  sm:mt-0 sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    {job.time}
                  </div>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {job.location}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {job.pay1} &ndash; {job.pay2}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {job.close}
                </div>
                <div className="mt-5  lg:mt-0 lg:ml-0 ">
                  <span className="hidden sm:block ml-0 mt-3 ">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" /> View
                     </button>
                  </span>
                </div>
              </div>

            </div>

          )

        })



      }
    </div>
  )
}
