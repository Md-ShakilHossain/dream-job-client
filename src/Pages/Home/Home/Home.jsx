import HomePageTabs from "../HomePageTabs/HomePageTabs";
import OurGoal from "../OurGoal/OurGoal";
import Slider from "../Slider/Slider";
import WeAreBest from "../WeAreBest/WeAreBest";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomePageTabs></HomePageTabs>
            <OurGoal></OurGoal>
            <WeAreBest></WeAreBest>
        </div>
    );
};

export default Home;