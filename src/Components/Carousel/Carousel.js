import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";

import'swiper/css';
import'swiper/css/navigation';
import'swiper/css/pagination';
import'swiper/css/effect-fade';

import './styles.css';
import {IMAGE_BASE, IMAGE_URL} from '../../Config/config'

function Carousel({movies}) {
    return (
        <div className={'herd'}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
            >
                {
                    movies.map(el=>
                            <SwiperSlide>
                                <img src={IMAGE_BASE + el.backdrop_path} />
                            </SwiperSlide>
                        )
                }
            </Swiper>
        </div>
    )
}

export default Carousel;