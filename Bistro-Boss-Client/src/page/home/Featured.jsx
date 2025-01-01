import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import imgfeatured from '../../assets/home/featured.jpg';

const Featured = () => {
    const featuredStyle = {
        backgroundImage: `url(${imgfeatured})`,
        backgroundAttachment: 'fixed',
        color: 'white',
    };

    return (
        <div style={featuredStyle} className='featured'>
            <SectionTitle subTitle={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className='flex justify-center items-center gap-10 p-24' style={{ backgroundColor: 'rgba(248, 250, 252, 0.4)' }}>
                <div>
                    <img src={imgfeatured} alt="Featured Image" />
                </div>
                <div>
                    <p>May 20, 2025</p>
                    <p>Where can i get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro quidem quia. Amet cupiditate voluptatibus voluptas rem qui asperiores saepe officiis veniam ducimus rerum itaque commodi aperiam dolore consequuntur quibusdam possimus, dolorum magni omnis sunt quas voluptatum vero corporis exercitationem modi! Blanditiis sed cumque dolore quisquam eum accusantium. Possimus, cum?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-5'>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
