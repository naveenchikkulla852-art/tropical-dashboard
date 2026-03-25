import React from 'react';
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Destinations from '../components/Destinations/Destinations';
import Promo from '../components/Promo/Promo';
import Booking from '../components/Booking/Booking';

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Destinations />
      <Promo />
      <Booking />
    </>
  );
}

export default Home;
