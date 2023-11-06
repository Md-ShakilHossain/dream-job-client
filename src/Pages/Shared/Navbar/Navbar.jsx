import { Button, Dropdown, Tooltip } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";



const Navbar = () => {

    const { user, logOut } = useAuth();
    console.log(user);

    const links = <>
        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/'>Home</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/allJobs'>All Jobs</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/blogs'>Blogs</NavLink></li>
    </>

    const privateLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='appliedJobs'>Applied Jobs</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/addJobs'>Add a Jobs</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/myJobs'>My Jobs</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex items-center justify-between mx-auto p-4">
                    <div className="md:flex hidden">
                        <a href="/">
                            <img src="/logo.png" className="h-12 mr-3" alt="Logo" />
                        </a>
                        <p className="text-green-500 text-3xl font-bold dark:text-white">Dream<span className="text-4xl text-red-500 font-bold">J</span>obs </p>
                    </div>

                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="true">

                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        }
                    >

                        <Dropdown.Item className="flex flex-col">{links}</Dropdown.Item>
                        <Dropdown.Item className="flex flex-col">{privateLinks}</Dropdown.Item>
                    </Dropdown>

                    <div className="hidden w-full lg:block md:w-auto">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {links} 
                            
                           {
                            user ? <li className="flex gap-8">{privateLinks}</li> : ""
                           }
                        </ul>
                    </div>
                    <div>
                        {
                            user ?
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <Tooltip content={user.displayName}>
                                            <img data-tooltip-target="tooltip-default" className="rounded-full w-10 h-10" src={user.photoURL} alt="" />
                                        </Tooltip>
                                    }
                                >
                                    <Dropdown.Item>
                                        <Button
                                            onClick={handleLogOut}
                                        >Logout</Button>
                                    </Dropdown.Item>

                                </Dropdown>

                                :
                                <Link to={`/login`}><Button>Login</Button></Link>
                        }

                    </div>

                </div>
            </nav>


        </div>
    );
};

export default Navbar;