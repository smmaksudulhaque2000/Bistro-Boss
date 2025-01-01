import React from 'react';

const SectionTitle = ({subTitle, heading}) => {
    return (
        <div className='w-1/4 mx-auto my-10'>
            <p className='text-yellow-300 text-center my-2'>{subTitle}</p>
            <h3 className='text-3xl text-center my-2 p-2 border-y-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;