import img1 from '../../../../assets/assets/icons/001-timetable.png'
import img2 from '../../../../assets/assets/icons/Group 34.png'
import img3 from '../../../../assets/assets/icons/Group 35.png'
const Contact = () => {
    return (
        <div className="bg-black max-w-[1500px] rounded-lg p-14 text-white w-11/12 md:w-4/5 mx-auto flex flex-col items-center justify-between my-10 gap-8 lg:flex-row">
            <div className='flex items-center gap-4'>
                <img src={img1} alt="" />
                <div className='space-y-2'>
                    <h4 className='font-medium'>We are open monday-friday</h4>
                    <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src={img2} alt="" />
                <div className='space-y-2'>
                    <h4 className='font-medium'>Have a question?</h4>
                    <h2 className='text-2xl font-bold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src={img3} alt="" />
                <div className='space-y-2'>
                    <h4 className='font-medium'>Need a repair? our address</h4>
                    <h2 className='text-2xl font-bold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;