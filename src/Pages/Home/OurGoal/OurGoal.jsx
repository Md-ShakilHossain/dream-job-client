import { Card } from "flowbite-react";


const OurGoal = () => {
    return (
        <div className="mt-20">
            <Card>
                <h2 className=" text-4xl font-bold text-teal-600 text-center mb-8">Our Goal</h2>
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="lg:w-1/2">
                    <img className="rounded-xl" src="https://i.ibb.co/JqmZ3nK/goal.jpg" alt="" />
                </div>
                <div className="lg:w-1/2 text-center">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                        Make you success
                    </h5>
                    <p className="mt-8 text-justify">
                        Our primary goal is to make you success you in your career. We are helping you by connecting to entire worlds organizations who offer jobs for you. You have to explore our site and match your skill with offering job and be success. You will also can make here offer a job. That means you can also be benefitted with this feature to offer a job for your own company. So stay with us. Best wishes for you.
                    </p>
                    <img src="https://i.ibb.co/d6JgNLn/6138442.jpg" className="w-40 mx-auto" alt="" />
                </div>
                </div>
            </Card>
        </div>
    );
};

export default OurGoal;