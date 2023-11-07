import { Card } from "flowbite-react";


const WeAreBest = () => {
    return (
        <div>
            <h2 className="text-4xl text-teal-600 font-bold text-center mt-20">We are Best</h2>
            <p className="text-lg font-bold mt-4">Here we are going to prove that why we are claimed this site is best if you compare with any other relevant website. See the key point of below. You will never be a loser from here rather than you will be a winner. Stay with us.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card className="w-72 md:w-80 lg:w-96">
                    <div>
                        {/* <img className="h-52 mx-auto" src="https://i.ibb.co/dj2DkqN/diverse-Job.jpg" alt="" /> */}
                        <h3 className="text-2xl text-teal-600 font-bold text-center">Divers Job Opportunities</h3>
                        <p className="mt-4 text-justify">
                            Explore our platforms extensive array of job openings across diverse industries, roles, and experience levels. With a broad spectrum of employment options, our platform caters to the unique needs and aspirations of job seekers, providing them with a comprehensive range of opportunities to find the perfect job that aligns with their skills and ambitions.
                        </p>
                    </div>
                </Card>
                <Card className="w-72 md:w-80 lg:w-96">
                    <div>
                        {/* <img className="h-52 mx-auto" src="https://i.ibb.co/TMYW0B0/customized-Job-Matching.jpg" alt="" /> */}
                        <h3 className="text-2xl text-teal-600 font-bold text-center">Customized Job Matching</h3>
                        <p className="text-justify mt-4">
                            Our platform employs advanced algorithms to deliver personalized job recommendations tailored to each users unique skills, preferences, and career objectives. By leveraging this customized job matching feature, users can discover relevant job opportunities that align with their expertise and aspirations, streamlining their job search process and maximizing their chances of finding their dream job
                        </p>
                    </div>
                </Card>
                <Card className="w-72 md:w-80 lg:w-96">
                    <div>
                        <h3 className="text-2xl text-teal-600 font-bold text-center">Career Guidance Resource</h3>
                        <p className="text-justify mt-4">
                            Access our comprehensive suite of career guidance resources, including expert resume-building tools, interview preparation tips, and one-on-one career counseling services. Empowering users with the necessary tools and insights, our platform is dedicated to equipping individuals with the knowledge and skills they need to navigate their career paths with confidence and success
                        </p>
                    </div>
                </Card>
                <Card className="w-72 md:w-80 lg:w-96">
                    <div>
                        <h3 className="text-2xl text-teal-600 font-bold text-center">Data Privacy and Security</h3>
                        <p className="text-justify mt-4">
                            We prioritize the protection of our users personal information through stringent data privacy measures and robust security protocols. Our platform is committed to ensuring the confidentiality and security of user data, providing a safe and trusted environment for job seekers to explore opportunities without compromising their privacy or security
                        </p>
                    </div>
                </Card>
                <Card className="w-72 md:w-80 lg:w-96">
                    <div>
                        <h3 className="text-2xl text-teal-600 font-bold text-center">User-Friendly Interface</h3>
                        <p className="text-justify mt-4">
                            Experience the convenience of our intuitive and user-friendly platform, designed to make the job search and application process seamless for users of all technical backgrounds. With a simple and easily navigable interface, our platform ensures a hassle-free and enjoyable user experience, allowing job seekers to focus on finding their dream job without any unnecessary complexities or difficulties
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default WeAreBest;