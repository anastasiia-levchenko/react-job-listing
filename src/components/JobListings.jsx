import JobListing from "./JobListing.jsx";
import {useState, useEffect} from "react";
import Spinner from "./Spinner.jsx";

const JobListings = ({isHome = false}) => {

    const [jobsToDisplay, setJobsToDisplay] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const baseUrl = "/api/jobs";
            const apiUrl = !isHome ? baseUrl : baseUrl + "?_limit=3";

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobsToDisplay(data);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? 'Recent Jobs' : 'All Jobs'}
                    </h2>

                    {loading ? (<Spinner loading={loading}/>) :
                        (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jobsToDisplay.map((job) => (
                                    <JobListing key={job.id} job={job}/>
                                ))}
                            </div>
                        )}

                </div>
            </section>
        </>
    )
}

export default JobListings;