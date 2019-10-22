import React from 'react';
import Swiper from './Components/Swiper';

export default function App() {
  return (
    <>
      <Swiper swiperOptions={[{id: 1, text: 'Car 1'}, {id: 2, text: 'Car 2'}]}/>
      <Swiper swiperOptions={[{id: 1, text: 'Josh'}, {id: 2, text: 'Marc'}, {id: 3, text: 'Mark'}]}/>
    </>
  );
}

