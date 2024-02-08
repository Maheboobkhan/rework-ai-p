import React from 'react';

const normalData = [
    {
        title: 'COMPANY',
        items: ['How it works', 'Pricing', 'Demo', 'Testimonials'],
    },
    {
        title: 'RESOURCES',
        items: ['Blog post name goes here', 'Blog post name goes here', 'Blog post name goes here', 'See all resources'],
    },
    {
        title: 'ABOUT',
        items: ['Terms & Conditions', 'Privacy Policy'],
    },
    {
        title: 'Contacts',
        items: ['+91-0987654321', 'talentfinder@gmail.com'],
    },
];

const NormalFeature = () => {
    return (
        <div className="flex gap-5 lg:gap-12 max-md:flex-row">
            {normalData.map((section, index) => (
                <div key={index} className="flex flex-col text-white">
                    <div className="font-Inter text-lg font-bold">{section.title}</div>
                    {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="font-Inter font-[14px] mt-4 hover:underline text-sm">
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default NormalFeature;
