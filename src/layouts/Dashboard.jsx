import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import useStudent from "../hooks/useStudent";
import TransitionEffect from "../component/TransitionEffect";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent()
    return (
        <div>
        <Helmet><title>Fitness | Dashboard</title></Helmet>
        <TransitionEffect></TransitionEffect>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content px-40 py-20 ">
                        {/* Page content here */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side bg-black text-white">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <div className="">
                            <ul className="menu pt-10 w-80 h-full text-2xl space-y-10 text-white">
                                {/* Sidebar content here */}
                                {
                                    isInstructor &&
                                    <>
                                        <NavLink
                                            to="/dashboard/addClass"
                                            className={({ isActive }) => (isActive ? "text-lime-400" : "default")}
                                        >
                                            Add A Class
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/myclasses"
                                            className={({ isActive }) => (isActive ? "text-lime-400" : "default")}
                                        >
                                            My CLasses
                                        </NavLink>

                                        <div className="border-2 border-white mt-2"></div>
                                    </>

                                }

                                {isStudent &&
                                    <>
                                        <NavLink
                                            to="/dashboard/selectedclass"
                                            className={({ isActive }) => (isActive ? "text-lime-400" : "default")}
                                        >
                                            My selected Classes
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/enrolled"
                                            className={({ isActive }) => (isActive ? "text-lime-400" : "default")}
                                        >
                                            Enrolled Classes
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/payments"
                                            className={({ isActive }) => (isActive ? "text-lime-400" : "default")}
                                        >
                                            My payments
                                        </NavLink>
                                        <div className="border-2 border-white mt-2"></div>
                                    </>
                                }

                                {
                                    isAdmin &&
                                    <>
                                        <NavLink
                                            to="/dashboard/admin/manageClasses"
                                            className={({ isActive }) => (isActive ? "text-lime-400" : "default")}
                                        >Manage Classes</NavLink>
                                        <NavLink
                                            to="/dashboard/admin/allUsers"
                                            className={({ isActive }) => (isActive ? "text-lime-400" : "default")}
                                        >All user</NavLink>
                                        <div className="border-2 border-white mt-2"></div>
                                    </>
                                }

                                <NavLink to={'/'}>Go to Home </NavLink>
                                <NavLink to={'/classes'}>Go to Classes </NavLink>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;