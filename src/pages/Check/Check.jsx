import { useContext, useEffect, useState } from "react";
import Footer from "../Home/components/Footer/Footer";
import NavBar from "../Home/components/Navbar/NavBar";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios";

const Check = () => {
    const [services, setServices] = useState([])
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/checkout?email=${user.email}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setServices(res.data))
            .catch(error => console.error('Error fetching services:', error));
    }, [url])

    console.log(services)

    return (
        <>
            <NavBar />
            <div className="mt-[68px] w-11/12 md:w-4/5 max-w-[1500px] mx-auto ">
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Service Name</th>
                                    <th>Service Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <tr key={service._id}>
                                        <td className="btn btn-circle">x</td>
                                        <td><img className="h-14 w-14 rounded-sm" src={service.img} alt="" /></td>
                                        <td>{service.serviceName}</td>
                                        <td>{service.date}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Check;