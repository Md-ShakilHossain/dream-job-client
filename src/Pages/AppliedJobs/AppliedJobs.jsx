import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Button, Select, Table } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
    const { user } = useAuth();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(appliedJobs);

    const url = `https://dream-jobs-server.vercel.app/appliedJobs?applicantEmail=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppliedJobs(data);
                setFilteredJobs(data);
            })

    }, [url])


    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        
        if(value === 'All'){
            const allJobs = appliedJobs.filter(job=> job.category === value);
            setFilteredJobs(appliedJobs);
           }
    
           if (value === 'On Site') {
            const onSiteJobs = appliedJobs.filter(job=> job.category === value);
            setFilteredJobs(onSiteJobs);
           }

           if (value === 'Remote') {
            const remoteJobs = appliedJobs.filter(job=> job.category === value);
            setFilteredJobs(remoteJobs);
           }

           if (value === 'Hybrid') {
            const hybridJobs = appliedJobs.filter(job=> job.category === value);
            setFilteredJobs(hybridJobs);
           }

           if (value === 'Part Time') {
            const partTimeJobs = appliedJobs.filter(job=> job.category === value);
            setFilteredJobs(partTimeJobs);
           }
       

    };

    return (
        <div>
            <Helmet><title>DreamJob | AppliedJobs</title></Helmet>
            <h2 className="text-3xl text-teal-600 text-center font-bold mt-10 mb-2">Your Applied Jobs</h2>
            <hr />
            <div className="flex justify-center gap-6 mt-8">
                <h3 className="text-2xl font-bold text-center">Category: </h3>
                <form>
                    <div className="w-[600px]">
                        <Select name="category" value={selectedValue} onChange={handleSelectChange} required>
                            <option>All</option>
                            <option>On Site</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                            <option>Part Time</option>
                        </Select>
                    </div>
                </form>
            </div>

            <Table className="mt-16">
                <Table.Head>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Author</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Posting Date</Table.HeadCell>
                    <Table.HeadCell>Deadline</Table.HeadCell>
                    <Table.HeadCell>Salary</Table.HeadCell>
                    <Table.HeadCell>Download</Table.HeadCell>
                    
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        filteredJobs.map(job => <Table.Row key={job._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {job.jobTitle}
                            </Table.Cell>
                            <Table.Cell>{job.authorName}</Table.Cell>
                            <Table.Cell>{job.category}</Table.Cell>
                            <Table.Cell>{job.postingDate}</Table.Cell>
                            <Table.Cell>{job.deadline}</Table.Cell>
                            <Table.Cell>{job.salaryRange}</Table.Cell>
                            <Table.Cell><Button>Download</Button></Table.Cell>
                            
                           
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default AppliedJobs;