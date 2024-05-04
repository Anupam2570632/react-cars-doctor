import { useLoaderData } from "react-router-dom";
import NavBar from "../Home/components/Navbar/NavBar";
import bannerImg from '../../assets/assets/images/banner/4.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Footer from "../Home/components/Footer/Footer";

const Checkout = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)
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
                        Home | Checkout
                    </div>

                </div>
                <form className="flex gap-6 flex-col w-[50%] mx-auto py-10">
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="name">Your name:</label>
                            <input required className="px-4 py-2 rounded-md bg-[#CCCC] w-full" type="text" name="name" placeholder="Your Name" aria-label="Your name" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="email">Your Email:</label>
                            <input required className="px-4 py-2 rounded-md bg-[#CCCC] w-full" type="email" name="email" placeholder="Your Email" defaultValue={user.email} aria-label="Your name" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="date">Pick Date:</label>
                            <input required className="px-4 py-2 rounded-md bg-[#CCCC] w-full" type="date" name="date" placeholder="Your Name" aria-label="Your name" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="price">Service Fee:</label>
                            <input required className="px-4 py-2 rounded-md bg-[#CCCC] w-full" type="text" name="price" defaultValue={'$' + service.price} aria-label="Your name" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block">Checkout</button>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Checkout;