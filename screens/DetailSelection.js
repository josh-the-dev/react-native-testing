import React from 'react';
import Swiper from '../components/Swiper';

const DetailSelection = () => {
    return (
        <>
            <Swiper swiperOptions={[{id: 1, text: 'Car 1'}, {id: 2, text: 'Car 2'}]}/>
            <Swiper swiperOptions={[{id: 1, text: 'Josh'}, {id: 2, text: 'Marc'}, {id: 3, text: 'Mark'}]}/>
        </>
    );
}

export default DetailSelection;