import React from 'react'

import Job from "./Jobs"
import Spinners from './Spinners'
import { useState, useEffect } from 'react'



const JobListing = ({isHome=false}) => {

  const [jobs,setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const URL = isHome?"api/jobs?_limit=3":"api/jobs"

  useEffect(()=>{
    (async () => {
      try {
        const res = await fetch(URL)
        const data = await res.json()
        setJobs(data)
      } catch (err) {
        console.log("ERROR -> ", err)
      } finally {
        setLoading(false)
      }
    })()    
  },[])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome? 'Recent Jobs':'All Jobs'}
        </h2>

        {loading?(<Spinners loading={loading} />) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {jobs.map((data) => (
              <Job key={data.id} jobData={data}></Job>
            ))}
            
          </div>)}
        
      </div>
    </section>
  )
}

export default JobListing