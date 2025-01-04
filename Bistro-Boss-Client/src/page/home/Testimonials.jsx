import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../components/SectionTitle";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))

    } , [])
    
    
    
  return (
    <div className="my-24">
      <SectionTitle
        subTitle={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide key={review._id}>
                <div className="w-3/4 mx-auto">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
      className="mx-auto"
    />
                    <p className="text-center my-5">{review.details}</p>
                    <h3 className="text-3xl text-center text-yellow-900">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;
