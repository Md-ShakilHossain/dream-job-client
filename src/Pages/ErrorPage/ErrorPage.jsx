import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-16">
            <img src="https://i.ibb.co/G5X8cTB/404.jpg" className="w-72 md:w-[400px] lg:w-[600px] mx-auto " alt="" />

            <div className="w-fit mx-auto">
                <Link to={`/`}>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <BiArrowBack className="mr-4"></BiArrowBack>
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;