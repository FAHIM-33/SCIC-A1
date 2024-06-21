import Importance from "../../Components/Importance";
import Banner from "./Banner";
import Categories from "./Categories";
import Member from "./Member";



const Home = () => {
    return (
        <div className="bg-background">
            <Banner></Banner>
            <Categories></Categories>
            <div className="h-12"></div>
            <Importance></Importance>
            <div className="h-12"></div>
            <Member></Member>
        </div>
    );
};

export default Home;