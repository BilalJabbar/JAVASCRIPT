import React from 'react'
import { useState } from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Jobs = ({jobData}) => {

  const [jobDescpFull, setJobDescpFull] = useState(false);
  let description = jobData.description;

  if (!jobDescpFull){
    description = description.substring(0,100)+"...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{jobData.type}</div>
                <h3 className="text-xl font-bold">{jobData.title}</h3>
              </div>

              <div  className="mb-5">{description}</div>
              <button onClick={ () => setJobDescpFull((prevState)=>!prevState)} className="text-indigo-500 mb-5" hover:text-indigo-600="true">{jobDescpFull? 'Less':'More'}</button>

              <h3 className="text-indigo-500 mb-2">{jobData.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className='inline text-lg mr-1 mb-1' />
                  {jobData.location}
                </div>
                <Link
                  to={`/jobs/${jobData.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
  )
}

export default Jobs