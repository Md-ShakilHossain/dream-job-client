import { Button, Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const job = useLoaderData();
    const { jobBanner, jobTitle, shortDescription, salaryRange, appliedNumber, category } = job;

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
                        <Button className="w-full">Apply</Button>

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