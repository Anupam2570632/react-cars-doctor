import { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    if (services.length === 0) {
        return <div className="h-[50vh] w-[100vw] flex items-center justify-center"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }
    
    console.log(services)


    return (
        <div className="space-y-6 max-w-[1500px] w-11/12 md:w-4/5 mx-auto max-auto mb-20">
            <h1 className='text-xl font-bold text-[#FF3811] text-center'>Services</h1>
            <h2 className="text-[#151515] text-4xl font-bold text-center">Our Service Area</h2>
            <p className="text-[#737373] max-w-[700px] mx-auto text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    services.map(service => <div className="p-6 border flex flex-col border-[#E8E8E8] rounded-lg space-y-5 mx-auto" key={service._id}>
                        <img className="rounded-md w-full flex-grow" src={service.img} alt="" />
                        <div className="space-y-5">
                            <h1 className="text-[#444444] font-bold text-2xl">{service.title}</h1>
                            <div className="text-xl font-bold text-[#FF3811] flex items-center justify-between">
                                <h2 className="flex items-center ">Price:<BsCurrencyDollar />{service.price}</h2>
                                <div>
                                    <Link to={`service/${service._id}`}>
                                        <FaArrowRight className="hover:cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="text-center my-4">
                <button className="btn text-[#FF3811] border border-[#FF3811] hover:bg-orange-600 hover:text-white font-bold mx-auto">More Services</button>
            </div>
        </div>
    );
};

export default Services;