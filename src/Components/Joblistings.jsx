import React, { useLayoutEffect } from 'react'
import Joblisting from './Joblisting'
import { useState, useEffect } from 'react';
import { use } from 'react';
// import jobs from '../jobs.json'
import Spinner from './Spinner';


const Joblistings = ({isHome = false}) => {
    // const Recentjobs = isHome ? jobs.slice(0,3): jobs;
    const [Recentjobs, setRecentjobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJobs= async()=>{
            try {
            const apiURL =  isHome ? 'http://localhost:3000/jobs?_limit=3': 'http://localhost:3000/jobs'
            const res = await fetch(apiURL);
            const data = await res.json();
            console.log(data);
            setRecentjobs(data);  
            } catch (error) {
                console.log('Error fetching data', error); 
            }finally{
                setLoading(false); 
            }
        }; 
        fetchJobs();
    },[])

  return (
    <div>{/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        
          {/* <!-- Job Listing 1 --> */}
{
    loading ? <Spinner/> :
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {
            
            Recentjobs.map((job)=>(
                <Joblisting key={job.id} job={job}/>
            ))
          }
    
    </div>
}

          
          
        
      </div>
    </section></div>
  )
}

export default Joblistings