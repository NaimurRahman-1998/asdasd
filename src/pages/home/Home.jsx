
import { Helmet } from "react-helmet-async";
import Banner from "../../component/Banner";
import TransitionEffect from "../../component/TransitionEffect";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Review from "./Review";

const Home = () => {


    return (
        <div >
        <Helmet><title>Fitness || Home</title></Helmet>
        <TransitionEffect></TransitionEffect>
            <Banner></Banner>
            <div className="mx-40">
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
            <Review></Review>
        </div >





        // <div className="grid grid-cols-3">
        //     {
        //         classes.map(cls =>
        //             <ClassesCard
        //                 key={cls._id}
        //                 cls={cls}
        //             >

        //             </ClassesCard>)
        //     }
        // </div>
    );
};

export default Home;