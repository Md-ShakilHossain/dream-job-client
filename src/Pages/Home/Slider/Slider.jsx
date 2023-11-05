import { Carousel } from "flowbite-react";


const Slider = () => {

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.searchText.value;
        console.log(searchText);
    }

    return (
        <div className="h-64 md:h-80 rounded-lg lg:h-[500px]">
            <Carousel>
                <div className="flex h-full items-center
                 justify-center">
                    <img src="https://i.ibb.co/8rhbXxs/slider1.jpg" className="h-64 md:h-80 w-full rounded-lg lg:h-[500px]" alt="" />

                </div>
                <div className="flex h-full items-center justify-center">
                    <img src="https://i.ibb.co/Hh6TV67/slider2.jpg" className="h-64 md:h-80 w-full rounded-lg lg:h-[500px]" alt="" />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://i.ibb.co/rxJQ6zT/slider3.jpg" className="h-64 md:h-80 w-full rounded-lg lg:h-[500px]" alt="" />
                </div>
            </Carousel>
            <div className="bg-gradient-to-r from-black to-[#80000000] absolute w-11/12 h-64 md:h-80 lg:h-[500px] top-[74px] md:top-20 rounded-lg p-2 md:p-10 lg:p-40">
                <div className="w-64 md:w-96">
                    <h3 className="text-2xl md:text-4xl font-bold text-white">Your Path to Success</h3>
                    <p className="text-white md:font-semibold mt-2 md:mt-4">Discover your dream job with seamless applications and expert guidance on our platform</p>
                    <form onSubmit={handleSearch}>
                        <input type="text" name="searchText" placeholder="Search By Job Title" id="" className="w-full rounded-2xl mt-4 md:mt-8 text-center" />
                        <div className="w-1/2 mt-2 mx-auto">
                            <input className="bg-slate-300 md:py-1 rounded-2xl text-xl font-bold hover:bg-slate-400 w-full" type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Slider;

