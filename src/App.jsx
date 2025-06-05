import {Routes, createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs.jsx";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/jobs" element={<JobsPage/>}/>
        </Route>
    )
);

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default App;