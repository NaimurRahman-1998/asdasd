import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className=" footer items-center justify-around lg:mt-20 p-10 bg-neutral-700 text-lime-500 rounded">
            
            <div className="grid grid-flow-col gap-4">
                <Link to='/classes'>Classes</Link>
                <Link to='/Instructors'>Instructors</Link>
                <Link to='/classes'>Dashboard</Link>
                <Link to='/Login'>Login</Link>

            </div>
            <div>
                <img src={logo} className="rounded-xl " alt="" />
                <h1 className="text-white">Gulshan ,Niketon-1 , Dhaka ,Bangladesh</h1>
            </div>
            <div className="text-white">
                <p>Copyright © 2023 - All right reserved by Fitness Zone Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;