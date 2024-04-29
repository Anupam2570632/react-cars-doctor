import img1 from '../../../../assets/assets/images/about_us/person.jpg'
import img2 from '../../../../assets/assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='w-11/12 md:w-4/5 mx-auto gap-20 max-w-[1500px] flex flex-col lg:flex-row items-center py-20'>
            <div className='lg:w-1/2 relative'>
                <img className='w-3/4' src={img1} alt="" />
                <img className='absolute w-1/2 -bottom-20 border-8 border-white rounded-lg right-10' src={img2} alt="" />
            </div>
            <div className='space-y-6 lg:w-1/2'>
                <h1 className='text-2xl font-bold text-orange-500'>About Us</h1>
                <h1 className='text-[#151515] font-bold text-5xl'>We are qualified & of experience in this field</h1>
                <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='px-6 py-3 bg-orange-700 rounded-md text-white font-bold'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;