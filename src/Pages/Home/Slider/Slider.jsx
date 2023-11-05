import { Carousel } from "flowbite-react";


const Slider = () => {

    const handleSearch = e => {
        e.preventDefault();
    }

    return (
        <div className="h-64 md:h-80 lg:h-[500px]">
            <Carousel>
                <div className="flex h-full items-center
                 justify-center">
                    <img src="https://i.ibb.co/02sQ0DK/slider1.jpg" alt="" />

                </div>
                <div className="flex h-full items-center justify-center">
                    <img src="https://i.ibb.co/bdZVKBQ/slider2.jpg" alt="" />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://i.ibb.co/3CqR2tF/slider3.jpg" alt="" />
                </div>
            </Carousel>
            <div className="bg-gradient-to-r from-black to-[#80000000] absolute w-11/12 h-[500px] top-20 rounded-lg p-40">
                <div className="w-96">
                    <h3 className="text-4xl font-bold text-white">Your Path to Success</h3>
                    <p className="text-white font-semibold mt-4">Discover your dream job with seamless applications and expert guidance on our platform</p>
                    <form onSubmit={handleSearch}>
                        <input type="text" name="searchText" placeholder="Search By Job Title" id="" className="w-full rounded-2xl mt-8 text-center" />
                        <div className="w-1/2 mt-2 mx-auto">
                            <input className="bg-slate-300 py-1 rounded-2xl text-xl font-bold w-full" type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Slider;

