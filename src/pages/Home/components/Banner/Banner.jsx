// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../../../assets/assets/images/banner/1.jpg'
import banner2 from '../../../../assets/assets/images/banner/2.jpg'
import banner3 from '../../../../assets/assets/images/banner/3.jpg'
import banner4 from '../../../../assets/assets/images/banner/4.jpg'
import banner5 from '../../../../assets/assets/images/banner/5.jpg'
import banner6 from '../../../../assets/assets/images/banner/6.jpg'
import BannerMessage from './BannerMessage';

export default function Banner() {
    return (
        <div className='w-[100vw] h-[650px] overflow-hidden'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[650px]"
                loop={true}
            >
                <SwiperSlide className='relative'>
                    <img className='object-cover h-full w-full object-center' src={banner1} alt="" />
                    <div className='absolute bg-black p-4 bg-opacity-50 flex items-center md:pl-40 inset-0'>
                        <BannerMessage />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover h-full w-full object-center' src={banner2} alt="" />
                    <div className='absolute bg-black p-4 bg-opacity-50 flex items-center md:pl-40 inset-0'>
                        <BannerMessage />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover h-full w-full object-center' src={banner3} alt="" />
                    <div className='absolute bg-black p-4 bg-opacity-50 flex items-center md:pl-40 inset-0'>
                        <BannerMessage />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover h-full w-full object-center' src={banner4} alt="" />
                    <div className='absolute bg-black p-4 bg-opacity-50 flex items-center md:pl-40 inset-0'>
                        <BannerMessage />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover h-full w-full object-center' src={banner5} alt="" />
                    <div className='absolute bg-black p-4 bg-opacity-50 flex items-center md:pl-40 inset-0'>
                        <BannerMessage />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover h-full w-full object-center' src={banner6} alt="" />
                    <div className='absolute bg-black p-4 bg-opacity-50 flex items-center md:pl-40 inset-0'>
                        <BannerMessage />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
