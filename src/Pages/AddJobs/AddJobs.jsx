import { Button, Label, Select, TextInput } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from "sweetalert2";


const AddJobs = () => {

    const { user } = useAuth();
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
    const [startDate, setStartDate] = useState(new Date());

    const handleAddJob = e => {
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
        const job = {jobBanner, jobTitle, authorName, authorEmail, category, shortDescription, salaryRange, postingDate, deadline, appliedNumber, addedBy};


        fetch('http://localhost:5000/alljobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'You Have Added Job Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                      })

                      form.reset();
                }

            })
    }

    return (
        <div>
            <h2 className="text-center text-4xl text-teal-600 font-bold mt-12 mb-10">Add Your Own Job</h2>
            <form onSubmit={handleAddJob}>
                <div>
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <div className="mb-2 ">
                                <Label value="Job Banner URL" />
                            </div>
                            <TextInput name="jobBanner" placeholder="Picture URL Here" required />
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 ">
                                <Label value="Job Title" />
                            </div>
                            <TextInput name="jobTitle" placeholder="Job Title Here" required />
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
                            <Select name="category" required>
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
                        <TextInput name="salary" placeholder="Salary Range" required />
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 ">
                            <Label value="Job Description" />
                        </div>
                        <TextInput name="shortDescription" placeholder="Description Here" required />
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <div className="mb-2 ">
                            <Label value="Posting Date" />
                        </div>
                        <TextInput name="postingDate" defaultValue={currentDate} readOnly />
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

                    <Button className="w-1/2 h-10 mt-7" type="submit">Submit</Button>
                </div>

            </form>
        </div>
    );
};

export default AddJobs;