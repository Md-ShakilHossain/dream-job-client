import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const JobDetails = () => {
    const { user } = useAuth();

    const job = useLoaderData();
    const [openModal, setOpenModal] = useState(false);
    const { jobBanner, jobTitle, shortDescription, salaryRange, appliedNumber, category, authorName,authorEmail, postingDate, deadline } = job;


    const deadlineDate = new Date(deadline);
    const currentDate = Date.now();

    const onCloseModal = () => {
        setOpenModal(false);
    }


    const handleApplyButton = () => {
        if(user.email === authorEmail){
            Swal.fire({
                title: 'Error',
                text: 'You cannot apply your own job',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return;
        }

        

        if(currentDate > deadlineDate){
            Swal.fire({
                title: 'Error',
                text: 'Deadline is Over',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return;
        }
        
        else{
            setOpenModal(true);
        }
    }

    const handleSubmitApplication = (e) => {
         e.preventDefault();
         const form = e.target;
         const applicantName = form.name.value;
         const applicantEmail = form.email.value;
         const resume = form.resume.value;
         
         const jobWithApplicant = {applicantName, applicantEmail, resume, jobBanner, jobTitle, shortDescription, salaryRange, appliedNumber, category, authorName,authorEmail, postingDate, deadline };

         fetch('http://localhost:5000/appliedJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobWithApplicant)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'You Have Applied Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                      })

                      onCloseModal();
                }

            })
         

    }

    return (
        <div className="mt-20">
            <h2 className="text-4xl text-center font-bold mb-8">Details of <span className="text-teal-600">{jobTitle}</span></h2>
            <Card>
                <div className="flex flex-col-reverse items-center justify-center lg:flex-row gap-6">
                    <div>
                        <h4 className="text-center text-teal-600 font-bold text-2xl mb-4">{jobTitle}</h4>
                        <h4 className="mb-4 text-justify text-xl">We need {jobTitle} for our renowned company. We offer you {category} job. From our company we select a salary range for this this which is {salaryRange}. We think this is best offer for you.As it is salary range, you will get your salary between from this range as per as your experience and skill. We will provide you lunch
                            and snacks full free. Here we also provide you a providence fund, two festival bonus that is equal of your salary.</h4>
                        <hr />
                        <p className="my-4 text-justify text-xl">{shortDescription}</p>
                        <hr />
                        <p className="text-center text-xl font-bold">At a glance</p>
                        <hr />
                        <p className="mt-4 font-bold">Title: {jobTitle}</p>
                        <p className=" font-bold">Salary: {salaryRange}</p>
                        <p className="mb-4 font-bold">Applied: {appliedNumber}</p>
                        <Button onClick={handleApplyButton} className="w-full">Apply</Button>
                        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                            <Modal.Header />
                            <Modal.Body>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium text-gray-900">Apply as {jobTitle}</h3>
                                    <form onSubmit={handleSubmitApplication}>
                                        <h4 className="text-xl">Your Name</h4>
                                        <input type="text" name="name" id="" defaultValue={user.displayName} readOnly className="rounded-lg mt-2 w-full"/>


                                        <h4 className="text-xl mt-2">Your Email</h4>
                                        <input type="email" name="email" id="" defaultValue={user.email} readOnly className="rounded-lg mt-2 w-full"/>


                                        <h4 className="text-xl mt-2">Your Resume Link</h4>
                                        <input type="text" name="resume" id="" required className="rounded-lg mt-2 w-full"/>

                                        <input type="submit" value="Submit" className="w-full bg-teal-600 rounded-lg text-white py-2 mt-2" />
                                        
                                    </form>

                                </div>
                            </Modal.Body>
                        </Modal>

                    </div>
                    <div>
                        <img className="rounded-3xl" src={jobBanner} alt="" />
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default JobDetails;