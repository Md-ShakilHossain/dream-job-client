import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";


const HomePageTabs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    // const axiosSecure = useAxiosSecure();

    // const url = 'http://localhost:5000/alljobs';
    // const url = '/alljobs';

    useEffect(() => {
        axios.get('http://localhost:5000/alljobs')
            .then(res => setAllJobs(res.data))
    }, [])
    console.log(allJobs);

    const hybridJobs = allJobs.filter(job => job.category === 'Hybrid');
    const onSiteJObs = allJobs.filter(job => job.category === 'On Site');
    const remoteJObs = allJobs.filter(job => job.category === 'Remote');
    const partTimeJObs = allJobs.filter(job => job.category === 'Part Time');

    const handleTabSelect = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="mt-20">
            <h2 className="text-teal-600 text-3xl font-bold text-center mb-10">Job By Category</h2>
            <Tabs>
                <TabList className='flex gap-2 md:gap-6 lg:gap-8 bg-teal-600 md:bg-gradient-to-r from-teal-50 via-teal-600 to-teal-50 py-2 text-white font-bold lg:text-xl justify-center rounded-lg px-2'>
                    <Tab
                        className={activeTab === 0 ? 'border bg-teal-800' : ''}
                        onClick={() => handleTabSelect(0)}
                    >
                        All Jobs
                    </Tab>
                    <Tab
                        className={activeTab === 1 ? 'border bg-teal-800' : ''}
                        onClick={() => handleTabSelect(1)}
                    >
                        On Site Jobs
                    </Tab>
                    <Tab
                        className={activeTab === 2 ? 'border bg-teal-800' : ''}
                        onClick={() => handleTabSelect(2)}
                    >
                        Remote Jobs
                    </Tab>
                    <Tab
                        className={activeTab === 3 ? 'border bg-teal-800' : ''}
                        onClick={() => handleTabSelect(3)}
                    >
                        Hybrid
                    </Tab>
                    <Tab
                        className={activeTab === 4 ? 'border bg-teal-800' : ''}
                        onClick={() => handleTabSelect(4)}
                    >
                        Part Time
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            allJobs.map(job => <Card
                                className="w-72 md:w-80 lg:w-96 border-t-4 border-b-4 border-t-pink-500 border-b-pink-500 shadow-2xl"
                                key={job._id}>

                                <h4 className="text-teal-600 text-xl text-center font-bold">{job.jobTitle}</h4>
                                <p><span className="font-bold">Author:</span> {job.authorName}</p>
                                <p><span className="font-bold">Post Date:</span> {job.postingDate}</p>
                                <p><span className="font-bold">Deadline</span> : {job.deadline} </p>
                                <p><span className="font-bold">Salary:</span> {job.salaryRange}</p>
                                <p><span className="font-bold">Applied:</span> {job.appliedNumber}</p>
                                <Link to={`alljobs/${job._id}`}><Button className="w-full">Details</Button></Link>

                            </Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            onSiteJObs.map(job => <Card
                                className="w-72 md:w-80 lg:w-96"
                                key={job._id}>

                                <h4 className="text-teal-600 text-xl text-center font-bold">{job.jobTitle}</h4>
                                <p><span className="font-bold">Author:</span> {job.authorName}</p>
                                <p><span className="font-bold">Post Date:</span> {job.postingDate}</p>
                                <p><span className="font-bold">Deadline</span> : {job.deadline} </p>
                                <p><span className="font-bold">Salary:</span> {job.salaryRange}</p>
                                <p><span className="font-bold">Applied:</span> {job.appliedNumber}</p>
                                <Link to={`alljobs/${job._id}`}><Button className="w-full">Details</Button></Link>

                            </Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            remoteJObs.map(job => <Card
                                className="w-72 md:w-80 lg:w-96"
                                key={job._id}>

                                <h4 className="text-teal-600 text-xl text-center font-bold">{job.jobTitle}</h4>
                                <p><span className="font-bold">Author:</span> {job.authorName}</p>
                                <p><span className="font-bold">Post Date:</span> {job.postingDate}</p>
                                <p><span className="font-bold">Deadline</span> : {job.deadline} </p>
                                <p><span className="font-bold">Salary:</span> {job.salaryRange}</p>
                                <p><span className="font-bold">Applied:</span> {job.appliedNumber}</p>
                                <Link to={`alljobs/${job._id}`}><Button className="w-full">Details</Button></Link>

                            </Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            hybridJobs.map(job => <Card
                                className="w-72 md:w-80 lg:w-96"
                                key={job._id}>

                                <h4 className="text-teal-600 text-xl text-center font-bold">{job.jobTitle}</h4>
                                <p><span className="font-bold">Author:</span> {job.authorName}</p>
                                <p><span className="font-bold">Post Date:</span> {job.postingDate}</p>
                                <p><span className="font-bold">Deadline</span> : {job.deadline} </p>
                                <p><span className="font-bold">Salary:</span> {job.salaryRange}</p>
                                <p><span className="font-bold">Applied:</span> {job.appliedNumber}</p>
                                <Link to={`alljobs/${job._id}`}><Button className="w-full">Details</Button></Link>

                            </Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            partTimeJObs.map(job => <Card
                                className="w-72 md:w-80 lg:w-96"
                                key={job._id}>

                                <h4 className="text-teal-600 text-xl text-center font-bold">{job.jobTitle}</h4>
                                <p><span className="font-bold">Author:</span> {job.authorName}</p>
                                <p><span className="font-bold">Post Date:</span> {job.postingDate}</p>
                                <p><span className="font-bold">Deadline</span> : {job.deadline} </p>
                                <p><span className="font-bold">Salary:</span> {job.salaryRange}</p>
                                <p><span className="font-bold">Applied:</span> {job.appliedNumber}</p>
                                <Link to={`alljobs/${job._id}`}><Button className="w-full">Details</Button></Link>

                            </Card>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default HomePageTabs;