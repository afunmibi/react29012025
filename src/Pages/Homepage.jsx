import React from 'react'
import Hero from '../Components/Hero'
import Homecards from "../Components/Homecards"
import Joblistings from "../Components/Joblistings"
import ViewAllJobs from "../Components/ViewAllJobs"

const Homepage = () => {
  return (
    <div>
        <Hero />
        <Homecards/>
        <Joblistings isHome={true}/>
        <ViewAllJobs/>
    </div>
  )
}

export default Homepage