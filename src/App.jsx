
import Mainlayout from "./Layout/Mainlayout"
import Homepage from "./Pages/Homepage"
import Jobspage from "./Pages/Jobspage";

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import PageNotFound from "./Pages/PageNotFound";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="/jobs" element={<Jobspage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  )
  return (
    <div>
    <RouterProvider router={router}/> 
        
    </div>
  )
}

export default App
