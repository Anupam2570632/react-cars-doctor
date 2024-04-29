import { FaGooglePlusSquare } from 'react-icons/fa';
import image from '../../../../assets/assets/icons/Wrench.svg'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className="w-full bg-[#131313]">
            <footer className="footer w-11/12 md:w-4/5 mx-auto py-20 text-white">
                <aside className='space-y-6'>
                    <img src={image} alt="" />
                    <p className='max-w-[250px] text-[#E8E8E8]'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className='text-xl flex items-center gap-6'>
                        <FaGooglePlusSquare/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;