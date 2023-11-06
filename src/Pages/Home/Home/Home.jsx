import HomePageTabs from "../HomePageTabs/HomePageTabs";
import Slider from "../Slider/Slider";
import WeAreBest from "../WeAreBest/WeAreBest";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomePageTabs></HomePageTabs>
            <WeAreBest></WeAreBest>
        </div>
    );
};

export default Home;