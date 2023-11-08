import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Button, Label, Select, TextInput } from "flowbite-react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const UpdateAJob = () => {
    const { user } = useAuth();
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
    const [startDate, setStartDate] = useState(new Date());

    const loadedData = useLoaderData();

    const {_id, jobBanner, jobTitle, authorName, authorEmail, category, shortDescription, salaryRange, postingDate, deadline, appliedNumber, addedBy } = loadedData;
    console.log(loadedData);


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const jobBanner = form.jobBanner.value;
        const jobTitle = form.jobTitle.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const salaryRange = form.salary.value;
        const postingDate = form.postingDate.value;
        const deadline = form.deadline.value;
        const appliedNumber = form.appliedNumber.value;

        const authorEmail = user.email;
        const addedBy = user.email;
        const updatedJob = {jobBanner, jobTitle, authorName, authorEmail, category, shortDescription, salaryRange, postingDate, deadline, appliedNumber, addedBy};

        fetch(`https://dream-jobs-server.vercel.app/allJobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    

    return (
        <div>
            <Helmet><title>DreamJob | Update a Job</title></Helmet>
            <h2 className="text-3xl text-teal-600 text-center font-bold mt-10 mb-2">You Are Updating Your Job</h2>
            <hr />
            <h4 className="text-2xl text-center font-bold mt-2 mb-10 ">Title: {jobTitle}</h4>

            <form onSubmit={handleUpdate}>
                <div>
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <div className="mb-2 ">
                                <Label value="Job Banner URL" />
                            </div>
                            <TextInput name="jobBanner" defaultValue={jobBanner} required />
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 ">
                                <Label value="Job Title" />
                            </div>
                            <TextInput name="jobTitle" defaultValue={jobTitle} required />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <div className="mb-2 ">
                                <Label value="Name" />
                            </div>
                            <TextInput name="authorName" defaultValue={user.displayName} readOnly />
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                                <Label value="Job Category" />
                            </div>
                            <Select defaultValue={category} name="category" required>
                                <option>On Site</option>
                                <option>Remote</option>
                                <option>Hybrid</option>
                                <option>Part Time</option>
                            </Select>
                        </div>

                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <div className="mb-2 ">
                            <Label value="Salary" />
                        </div>
                        <TextInput name="salary" defaultValue={salaryRange} required />
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 ">
                            <Label value="Job Description" />
                        </div>
                        <TextInput name="shortDescription" defaultValue={shortDescription} required />
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <div className="mb-2 ">
                            <Label value="Posting Date" />
                        </div>
                        <TextInput name="postingDate" defaultValue={postingDate} required />
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 ">
                            <Label value="Deadline" />
                        </div>
                            <DatePicker
                                name="deadline"
                                className="w-[600px] rounded-lg"
                                selected={startDate}
                                
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy-MM-dd"
                            />
                    </div>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="w-1/2">
                        <div className="mb-2 ">
                            <Label value="Applied Number" />
                        </div>
                        <TextInput name="appliedNumber" defaultValue={0} readOnly />
                    </div>

                    <Button className="w-1/2 h-10 mt-7" type="submit">Update</Button>
                </div>

            </form>
        </div>
    );
};

export default UpdateAJob;