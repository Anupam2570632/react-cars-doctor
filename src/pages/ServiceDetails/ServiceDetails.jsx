import bannerImg from '../../assets/assets/images/banner/4.jpg'
import NavBar from '../Home/components/Navbar/NavBar';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()

    console.log(service)

    return (
        <>
            <NavBar />
            <div className='mt-[68px] w-11/12 md:w-4/5 mx-auto max-w-[1500px]'>
                <div className='relative mt-30 w-full h-[300px] overflow-hidden object-center'>
                    <img className='w-full object-cover object-center h-full' src={bannerImg} alt="" />
                    <div className='absolute flex items-center p-20 inset-0 bg-black bg-opacity-50'>
                        <h1 className='text-4xl font-bold text-white'>Services Details</h1>
                    </div>
                    <div className='absolute bottom-0 p-4 right-[43%] transform bg-orange-600 text-white'>
                        Home | Service Details
                    </div>
                    
                </div>
                <div className='p-4 pt-20 space-y-5'>
                    <img src={service.img} className='rounded-lg ' alt="" />
                    <h2 className='text-xl font-bold text-[#131313]'>{service.title}</h2>
                    <h2 className='font-semibold text-blue-500'>Price : ${service.price}</h2>
                    <p className='leading-8 text-[#140f1490]'>{service.description}</p>
                    <div>
                        <Link to={`/checkout/${service._id}`}><button className='px-6 py-3 bg-orange-500 rounded-md hover:bg-orange-600 duration-200 text-white font-bold'>Proceed to Checkout</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;