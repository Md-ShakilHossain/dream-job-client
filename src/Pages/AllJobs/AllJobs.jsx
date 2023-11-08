import { Button, Table } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const AllJobs = () => {

    const allJobs = useLoaderData();
    const [jobs, setJobs] = useState(allJobs);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
        const searchValue = e.target.searchValue.value;
        console.log(searchValue);

        const filteredJobs = allJobs.filter(job=> job.jobTitle.includes(searchValue));
        if(filteredJobs.length === 0){
            setError('No match found, You should search carefully its case sensitive');
        }else{
            setError('');
        }
        console.log('Error',error);
        setJobs(filteredJobs);
        e.target.reset();
        
        
    }

    return (
        <div>
            <h1 className="text-center text-4xl text-teal-600 font-bold mt-20">ALL JOBS</h1>
            <Helmet>
                <title>DreamJob | AllJobs</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <div className="flex mt-10 justify-center">
                    <input type="text" name="searchValue" placeholder="Search By Title (Case Sensitive)" className="w-1/2 text-center rounded-bl-xl" id="" />
                    <input type="submit" value="Search" className="bg-teal-600 text-white px-4 rounded-tr-xl" />
                </div>
            </form>
            <div>
                {
                    error &&
                    <p className="text-red-500 text-xl font-bold text-center mt-5">{error}</p>
                }
            </div>

            <Table className="mt-16">
                <Table.Head>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Author</Table.HeadCell>
                    <Table.HeadCell>Posting Date</Table.HeadCell>
                    <Table.HeadCell>Deadline</Table.HeadCell>
                    <Table.HeadCell>Salary</Table.HeadCell>
                    <Table.HeadCell>Details</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        jobs.map(job => <Table.Row key={job._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {job.jobTitle}
                        </Table.Cell>
                        <Table.Cell>{job.authorName}</Table.Cell>
                        <Table.Cell>{job.postingDate}</Table.Cell>
                        <Table.Cell>{job.deadline}</Table.Cell>
                        <Table.Cell>{job.salaryRange}</Table.Cell>
                        <Table.Cell><Link to={`/job/${job._id}`}><Button>Details</Button></Link></Table.Cell>
                    </Table.Row>)
                    }
                </Table.Body>
            </Table>

        </div>
    );
};

export default AllJobs;