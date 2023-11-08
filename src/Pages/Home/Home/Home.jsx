import { Helmet } from "react-helmet-async";
import HomePageTabs from "../HomePageTabs/HomePageTabs";
import OurGoal from "../OurGoal/OurGoal";
import Slider from "../Slider/Slider";
import WeAreBest from "../WeAreBest/WeAreBest";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DreamJob | Home</title>
            </Helmet>

            <Slider></Slider>
            <HomePageTabs></HomePageTabs>
            <OurGoal></OurGoal>
            <WeAreBest></WeAreBest>
        </div>
    );
};

export default Home;