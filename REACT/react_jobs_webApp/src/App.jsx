import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AllJobsPage from './pages/AllJobsPage'
import PageNotFound from './pages/NotFoundPage'
import SinlgeJobPAge, {jobLoader} from './pages/SinlgeJobPAge'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

const App=()=> {

  //Add new job
  const addJob = async(newJob) =>{
    await fetch("/api/jobs",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newJob)
    })
    return
  }

  //Delete the job
  const deleteJob = async(id) =>{
    await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    })
  }

  //Edit Job
  const editJob = async(editJob) =>{
    await fetch(`/api/jobs/${editJob.id}`,{
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(editJob)
    })
    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
     <Route index element={<HomePage />} />
     <Route path='/jobs' element={<AllJobsPage />} />
     <Route path='/addJob' element={<AddJobPage addJobSubmit={addJob} />} />
     <Route path='/jobs/:id' element={<SinlgeJobPAge deleteJob={deleteJob}/>} loader={jobLoader} />
     <Route path='/jobs/edit/:id' element={<EditJobPage editJobSubmit={editJob}/>} loader={jobLoader} />
     <Route path='/*' element={<PageNotFound />} />
    </Route>)
  
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App 