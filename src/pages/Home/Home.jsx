import Banner from "./Banner";
import Categories from "./Categories";


const Home = () => {
    return (
        <div className="bg-background">
            <Banner></Banner>
            <Categories></Categories>
            {/* <Importance></Importance>
            <Member></Member> */}
        </div>
    );
};

export default Home;